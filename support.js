
/*const namee=document.getElementById('name');
const mail=document.getElementById('email1');
const subject=document.getElementById('subject');
const l_name=document.getElementById('l_name');
const l_mail=document.getElementById('l_email1');
const l_subject=document.getElementById('l_subject');*/
const messo=document.getElementById('message');
const l_messo=document.getElementById('l_message');
const send=document.getElementById('button');
send.dataset.originalText=send.textContent;
send.addEventListener('click',function(){
    /*if (namee.value.trim()==='') {
        l_name.innerHTML="Enter A Name:";
        l_name.style.fontSize='large';
    }
    if (mail.value.trim()===''|| !mail.value.includes("@kyu.ac.ke")) {
        l_mail.innerHTML="Use Kyu mail:";
    }
    if (subject.value.trim()==='') {
        l_subject.innerHTML="Subject Required ";
    }*/
    if (messo.value.trim()==='') {
        l_messo.innerHTML="No Message Detected:";
        send.textContent=send.dataset.originalText;
    }

    else{
        /*namee.value="";
        mail.value="";
        subject.value="";
        
        l_name.innerHTML="F ULLNAME:";
        l_mail.innerHTML="EMAIL:";
        l_subject.innerHTML="SUBJECT:";*/
        l_messo.innerHTML="MESSAGE:";
        messo.value="";
        send.innerHTML="Message Sent";
    }
});

const div=document.getElementById('nav_bar');
function dispaly(pId){
    const p=document.getElementById(pId);
    div.addEventListener('mouseover', function(){
        div.style.width='230px';
        p.style.opacity='1';
    });
    /*div.addEventListener('mouseout', function(){
        div.style.width='100px';
        p.style.opacity='0';
    });
    div.addEventListener('click', function(){
        div.style.width='230px';
        p.style.opacity='1';
    });*/
    div.addEventListener('dblclick',function(){
        div.style.width='100px';
        p.style.opacity='0';
    })
}

dispaly('checkout');
dispaly('ordering');
dispaly('contact');
dispaly('blog');
dispaly('faq');

function adapt(iconId,pId){
    const image=document.getElementById(iconId);
    const p=document.getElementById(pId)
    image.addEventListener('mouseover', function(){
        p.style.transform='scale(1.2)';
        image.style.transform='scale(1.2)';
    });
    image.addEventListener('mouseout', function(){
        p.style.transform='scale(1.0)';
        image.style.transform='scale(1.0)';
    });}

    adapt('img_1','checkout');
    adapt('img_2','ordering');
    adapt('img_3','contact');
    adapt('img_4','blog');
    adapt('img_5','faq');

    
