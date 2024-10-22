function solution(name) {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/g;
    
    if(!isNaN(Number(name[0])) && typeof Number(name[0]) === "number") return false;
    if(reg.test(name)) return false;
    if(name.search(/\s/) != -1) return false;
    
    return true;
}
