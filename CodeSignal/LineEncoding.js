function solution(s) {
    const arr = s.split('')
    let num = [];
    let cnt = 0;
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                cnt++;
            } else {
                break;
            }
        }
        
        if(arr[i] !== arr[i-1]) {
            if(cnt === 0) num.push(arr[i]);
            else num.push((cnt+1).toString() + arr[i]);
        }
        
        cnt = 0;
    }
    
    return num.join('');
}
