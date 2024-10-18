function solution(cell1, cell2) {
    let res1 = 0;
    let res2 = 0;
    
    const arr1 = ['A', 'C', 'E', 'G'];
    
    const cell1Arr = cell1.split('');
    const cell2Arr = cell2.split('');
    
    if(arr1.includes(cell1Arr[0])) {
        if(Number(cell1Arr[1]) % 2 !== 0) {
            res1++;
        } 
    } else {
        if(Number(cell1Arr[1]) % 2 === 0) 
            res1++;
        }    
    }
    
    if(arr1.includes(cell2Arr[0])) {
        if(Number(cell2Arr[1]) % 2 !== 0) {
            res2++;
        } 
    } else {
        if(Number(cell2Arr[1]) % 2 === 0) {
            res2++;
        }    
    }
    
    if(res1 === res2) return true;
    else return false;
}
