function solution(time) {
    return time.split(":").some((_,i, arr) => Number(arr[0]) >= 0 && Number(arr[0]) <= 23 && Number(arr[1]) >= 0 && Number(arr[1]) <= 59)
}
