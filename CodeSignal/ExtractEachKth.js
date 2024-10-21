function solution(inputArray, k) {
    return inputArray.filter((value, index) => (index + 1) % k !== 0);;
}
