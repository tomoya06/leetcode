/**
 * 俄罗斯套娃问题
 * 给一组[width, height]的数组，套娃要求w1<w2 && h1<h2
 * 想法：先根据w排序，其中w相等的按h倒序
 * 然后根据h找最长上升子序列
 */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 0) return 0
    let envByHeight = envelopes.sort((x, y) => {
        if (x[0] === y[0]) {
            return y[1] - x[1] 
        } else {
            return x[0] - y[0]
        }
    })
    return lengthOfLIS(envByHeight.map(x => x[1]))
};

function binSearch(arr, item) {
    let l=0, r=arr.length-1
    while (l < r) {
        let mid = (l + r) >> 1
        if (arr[mid] < item) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return l
}

function lengthOfLIS(arr) {
    let memo = [arr[0]]
    for (let i=1; i<arr.length; i++) {
        let last = memo[memo.length - 1]
        if (arr[i] > last) {
            memo.push(arr[i])
        } else {
            let idx = binSearch(memo, arr[i])
            memo[idx] = arr[i]
        }
    }
    return memo.length
}