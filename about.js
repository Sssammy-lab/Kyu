
function display(imgId,pId){
    const image=document.getElementById(imgId);
    const p=document.getElementById(pId);
    document.addEventListener('DOMContentLoaded', function (){
    image.addEventListener('mouseover', function(){
        p.style.opacity=1;
        p.style.color='wheat';
        image.style.color='wheat';
        p.style.transform='scale(1.2)';
        image.style.transform='scale(1.2)';

    });

    image.addEventListener('mouseout', function(){
        p.style.opacity=0;
        image.style.color='white';
        p.style.transform='scale(1.0)';
        image.style.transform='scale(1.0)';
    });


});
}
 display('email','e_text');
 display('call','p_text');
 display('global','g_text');
 display('location','l_text');

 const div=document.getElementById('nav_bar');
function dispaly(pId,imgId){
    const p=document.getElementById(pId);
    const img=document.getElementById(imgId);
    div.addEventListener('mouseover', function(){
        div.style.width='150px';
        p.style.opacity='1';
    });
    /*div.addEventListener('mouseout', function(){
        div.style.width='100px';
        p.style.opacity='0';
    });
    div.addEventListener('click', function(){
        div.style.width='230px';
        p.style.opacity='1';
        img.style.transform='scale(1.2)';
    })*/
    div.addEventListener('dblclick',function(){
        div.style.width='100px';
        p.style.opacity='0';
        img.style.transform='scale(1.0)';
    });
}

dispaly('checkout','img_1');
dispaly('ordering','img_2');
dispaly('contact','img_3');
dispaly('blog','img_4');
dispaly('faq','img_5');

/*const button=document.getElementById('img_1');
button.addEventListener('dblclick', function(){
    window.location.href="";
});
const button1=document.getElementById('img_2');
button1.addEventListener('dblclick', function(){
    window.location.href="";
});
const button2=document.getElementById('img_3');
button2.addEventListener('dblclick', function(){
    window.location.href="support.html";
});*/
