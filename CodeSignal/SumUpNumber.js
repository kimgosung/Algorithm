function solution(inputString) {
    return Number(inputString.match(/\d*/g).reduce((pv, cv) => Number(pv) + Number(cv)));
}
