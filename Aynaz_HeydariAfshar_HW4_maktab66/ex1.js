function checkstring(input){
    if(typeof input !== "string"){
        return "please enter string"
    }
    input = input.split("")
    let first = input[0]
    let res = []
    res.push(first)
    for (let i = 1; i < input.length - 1; i++) {
        if (input[i] !== first) {
            res.push(input[i])
        }
        if (input[i] !== " ") {
            first = input[i]
        }
    }
    res.push(input[input.length-1])
    return res.join("")
}
console.log(checkstring("progresssssssssssssss report template elementary school"))