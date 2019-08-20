class Solution:
    def intToRoman(self, num: int) -> str:
        romans = [['V', 'I'], ['L', 'X'], ['D', 'C'], ['', 'M'], ['', '']]
        pos = 0
        roman = ''
        while num > 0:
            digit = num % 10
            num = num // 10
            roman = self.romanDigit(digit, *romans[pos], romans[pos+1][1]) + roman
            pos += 1
        return roman        
    
    def romanDigit(self, digit: int, r5: str, r1: str, r10: str) -> str:
        if digit == 4:
            return r1+r5
        elif digit == 9:
            return r1+r10
        elif digit < 4:
            return r1*digit
        else:
            return r5+r1*(digit-5)