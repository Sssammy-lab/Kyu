const l_name=document.getElementById('l_name');
const l_mail=document.getElementById('l_mail');
const l_password=document.getElementById('l_password');
const namee=document.getElementById('name');
const mail=document.getElementById('mail');
const password=document.getElementById('password');
const submit=document.getElementById('login');
const header=document.getElementById('header');

header.dataset.originalStyle=header.style;
header.dataset.originalText=header.textContent;
submit.addEventListener('click', function(){
    let errorMessage='';
    if (namee.value.trim()==="") {
        errorMessage+=' Username required.';
    }
    if (mail.value.trim()===""|| !mail.value.endsWith("@students.kyu.ac.ke")) {
        errorMessage+=' Invalid mail.';
    }
    if(password.value.trim()===""||password.value.length<10){
        errorMessage+=' Password defects detected.';
    }
    if (errorMessage) {
        header.innerHTML=errorMessage;
        header.style.fontSize='normal';
        header.style.fontWeight='lighter';
        header.style.color='red';
    }
    else{
            window.location.href='homePage.html';
            header.style=header.dataset.originalStyle;
            header.textContent=header.dataset.originalText;
    }

})