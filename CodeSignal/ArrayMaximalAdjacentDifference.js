function solution(inputArray) {
    let tmp = Math.abs(inputArray[0] - inputArray[1]);
    
    for(let i = 0; i < inputArray.length - 1; i++) {
        if(tmp < Math.abs(inputArray[i+1] - inputArray[i])) {
            tmp = Math.abs(inputArray[i+1] - inputArray[i]);
        }       
    }
    
    return tmp;
}
