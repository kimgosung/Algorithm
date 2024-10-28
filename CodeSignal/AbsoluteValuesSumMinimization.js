function solution(a) {
    let res = [];
    let sum = 0;
    
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            sum += Math.abs(a[j] - a[i]);
        }
        res.push(sum);
        sum = 0;   
    }
    
    const idx = res.indexOf(Math.min(...res));
    
    return a[idx];
}
