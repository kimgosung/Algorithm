function solution(inputString) {
    console.log(inputString.match(/\d*/g));
    return Number(inputString.match(/\d*/g).reduce((pv, cv) => Number(pv) + Number(cv)));
}
