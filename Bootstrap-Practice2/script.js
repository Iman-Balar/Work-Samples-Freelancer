const freeDl = document.getElementById('freeDl');
const fullName = document.getElementById('fullName');
const mail = document.getElementById('mail');
const phoneNum = document.getElementById('phoneNum');
const send = document.getElementById('send');

const nameRegex = /^[a-z ,.'-]+$/;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const phoneRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

freeDl.addEventListener("click" ,() => {
    alert("it's just an example")
})


function clickHandle(){

    const resultOfName = nameRegex.test(fullName.value);
    const resultOfMail = emailRegex.test(mail.value);
    const resultOfNumber = phoneRegex.test(phoneNum.value);
    
    if(resultOfName && resultOfMail && resultOfNumber == true){
        alert("it's ok")
    }else{
        alert("Please complete the form")
    }
}