'''
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
'''
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        lefts = ['(', '[', '{']
        rigts = [')', ']', '}']
        for d in s:
            if d in lefts:
                stack.append(d)
            else:
                if len(stack) > 0 and lefts.index(stack[-1]) == rigts.index(d):
                    stack.pop()
                else:
                    return False
        
        return len(stack) == 0