function arr(num,a){
    let result = 0

for (let i = 0; i < num.length; i++) {
    if(num[i] == a){
        result++;
    }
}   

return result
}
console.log(arr([1,2,4,4,6,4],4));