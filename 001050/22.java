/**
2ms。。。有点刺激
 */
class Solution {
    
    private int n;
    private List<String> ans;
    
    private void backtrack(String str, int left, int right) {
        if (str.length() == 2 * this.n) {
            this.ans.add(str);
            return ;
        }
        if (left < this.n) {
            backtrack(str+"(", left+1, right);
        }
        if (left > right) {
            backtrack(str+")", left, right+1);
        }
    }
    
    public List<String> generateParenthesis(int n) {
        this.ans = new ArrayList<String>();
        this.n = n;
        
        backtrack("", 0, 0);
        
        return this.ans;
    }
    
}