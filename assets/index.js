let oprands = (number)=>{
    document.querySelector("#inp").value +=number
}
let operator = (op)=>{
    document.querySelector("#inp").value +=op

}
let calculator = ()=>{
    let result = eval(document.querySelector("#inp").value);
document.querySelector("#inp").value = result;
}
let clearall=()=>{
    document.querySelector("#inp").value ="";
}
let deleted =()=>{

}