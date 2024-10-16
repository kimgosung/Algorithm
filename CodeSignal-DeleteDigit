function solution(n) {
    let num = [];
    let res = [];
    let arr = n.toString().split('');
        
    for(let j = 0; j < arr.length; j++) {
        num = [...arr.filter((_, i) => i !== j)];
        res.push(Number(num.join('')));
    }
    
    return Math.max(...res);
}
