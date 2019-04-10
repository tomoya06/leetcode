class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        if beginWord not in wordList or endWord not in wordList:
            return []
        
        ladders = []
        
        def changable(word: str, ref: str): 
            dif = 0
            for idx in range(len(word)):
                dif += word[idx] != ref[idx]
            return dif == 1
        
        def addSolution(solution):
            if len(ladders) == 0:
                ladders.append(solution)
                return
            minLadderLen = min([len(solu) for solu in ladders])
            if len(solution) == minLadderLen:
                ladders.append(solution)
            elif len(solution) < minLadderLen:
                ladders = [solution]
        
        def tryLadder(cur: str, curList: List[str], curSolution: List[str]):
            if len(curList) == 0:
                return
            for i in range(len(curList)):
                if changable(cur, curList[i]):
                    if curList[i] == endWord:
                        addSolution(curSolution+[curList[i]])
                    else:
                        tryLadder(curList[i], curList[:i]+curList[i+1:], curSolution+[curList[i]])
        
        tryLadder(beginWord, [x for x in wordList if x != beginWord], [beginWord])
        return ladders
            