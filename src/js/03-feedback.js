"use strict";

let info = {
    email : "",
    message : ""
}

const inputEmail = document.getElementsByName("email")[0];
const textareaMessage = document.getElementsByName("message")[0];
const form = document.getElementsByClassName("feedback-form")[0];

function toLocal(obj){
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}
function fromLocal(){
    const obj = JSON.parse(localStorage.getItem("feedback-form-state"));
    return obj;
}
function existsLocal(){
    const obj = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(obj);
    return (obj===null) ? false : true;
}

inputEmail.addEventListener("input", (event) =>{
    info.email = inputEmail.value;
    info.message = textareaMessage.value;
    toLocal(info);
})
textareaMessage.addEventListener("input", (event) => {
    info.message = textareaMessage.value;
    info.email = inputEmail.value;
    toLocal(info);
    // console.log(info);
})
form.addEventListener("submit", (event)=>{
    localStorage.removeItem("feedback-form-state");
    inputEmail.value = "";
    textareaMessage.value = "";
    info.email = "";
    info.message = "";
    //console.log(`${info.email} ${info.message}`);
});

if(existsLocal()){
    info = fromLocal();
}
else{
    info.email = "";
    info.message = "";
}

console.log(info);
inputEmail.value = info.email;
textareaMessage.value = info.message;