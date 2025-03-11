const l_name=document.getElementById('l_name');
const l_mail=document.getElementById('l_mail');
const l_password=document.getElementById('l_password');
const namee=document.getElementById('name');
const mail=document.getElementById('mail');
const password=document.getElementById('password');
const submit=document.getElementById('login');

submit.addEventListener('click', function(){
    if (namee.value.trim()===""||password.value.trim()===""||password.value.length<10||mail.value.trim()===""|| !mail.value.includes ("@students.kyu.ac.ke")) {
        submit.innerHTML='Incorrect or incomplete Details';
        submit.style.fontSize='small';
        submit.style.fontWeight='bold';
        submit.style.paddingTop='10px';
        submit.style.paddingBottom='10px';
    }
    /*if (mail.value.trim()===""|| !mail.value.includes ("@kyu.ac.ke")) {
        l_mail.innerHTML='Please Enter A school Given Email:';
    }
    if(password.value.trim()===""||password.value.length<10){
        l_password.innerHTML='Password must be 10+ characters:';
    }*/
    else{
            window.location.href='homePage.html';
    }

})
