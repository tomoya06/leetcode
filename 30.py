'''
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

运行时间有点久，做了一天了就这样了
'''
'''
from itertools import permutations;

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if len(s) == 0 or len(words) == 0:
            return []
        alliter = map(lambda x: ''.join(x), permutations(words, len(words)))
        res = []
        for item in alliter:
            res += self.findAllIndex(s, item)
        return list(set(res))
    
    def findAllIndex(self, mother: str, son: str) -> List[int]:
        curIdx = self.safeIndexOf(mother, son)
        res = []
        while curIdx > -1:
            res.append(curIdx)
            curIdx = self.safeIndexOf(mother, son, curIdx+1)
        return res
            
    def safeIndexOf(self, mother: str, son: str, start: int = 0) -> int:
        try:
            idx = mother.index(son, start)
        except:
            return -1
        else:
            return idx
'''

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if len(s) == 0 or len(words) == 0:
            return []
        self.awordLen = len(words[0])
        self.wordsLen = len(words) * self.awordLen
        searchIdx = 0
        res = []
        words.sort()
        while searchIdx <= len(s) - self.wordsLen:
            if self.checkSubstring(s[searchIdx:], words):
                res.append(searchIdx)
            searchIdx += 1
        return res
    
    def checkSubstring(self, mother: str, words: List[str]) -> int:
        motherSlice = [mother[x*self.awordLen:(x+1)*self.awordLen] for x in range(len(words))]
        motherSlice.sort()
        return motherSlice == words