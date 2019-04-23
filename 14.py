class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ''
        elif len(strs) == 1:
            return strs[0]
        minlen = min([len(x) for x in strs])
        lcPre = ''
        idx = 0
        while idx < minlen and self.checkIfCommon(strs, idx):
            lcPre += strs[0][idx]
            idx += 1
        return lcPre
        
    def checkIfCommon(self, strs: List[str], idx: int) -> bool:
        return len(set([x[idx] for x in strs])) == 1