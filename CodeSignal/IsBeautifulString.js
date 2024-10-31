function solution(inputString) {
    s = "abcdefghijklmnopqrstuvwxyz"
    for (i = 1; i < s.length; i++) {
        if (inputString.split(s[i]).length-1 > inputString.split(s[i-1]).length-1) {
            return false}}
    return true}
