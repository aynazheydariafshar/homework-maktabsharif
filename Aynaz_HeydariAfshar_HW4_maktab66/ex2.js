function chunkify(input , num){   
if(typeof num !== "number" || typeof input !== "object"){
    return "please enter array and number"
}
let res = []
let counter = 0
let data = []
for(let i=0 ; i<input.length; i++){
    if (counter !== num){
        data.push(input[i])
        counter++
    }else{
        res.push(data)
        data = []
        counter = 1
        data.push(input[i])
    }
}
res.push(data)
return res
}
console.log(chunkify([2, 3, 4, 5, 6,2,5,6,8,9], 4))