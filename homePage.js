
function display(imgId,pId,navId,divId){
    const image=document.getElementById(imgId);
    const p=document.getElementById(pId);
    const nav=document.getElementById(navId);
    const div=document.getElementById(divId);
    image.style.backgroundColor='white';
    
    document.addEventListener('DOMContentLoaded', function (){
    image.addEventListener('mouseover', function(){
        p.style.opacity=1;
        p.style.color='wheat';
        p.style.transform='scale(1.2)';
        image.style.transform='scale(1.2)';
        image.style.backgroundColor='wheat';
    });
    

});
    document.addEventListener('DOMContentLoaded', function (){
    image.addEventListener('mouseout', function(){
        p.style.opacity=0;
        p.style.color='white';
        p.style.transform='scale(1.0)';
        image.style.transform='scale(1.0)';
        image.style.backgroundColor='white';
    });
    

});
}

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
    });
}
 display('email','e_text','icon2');
 display('call','p_text','icon1');
 display('global','g_text','icon4');
 display('location','l_text','icon3');
 adapt('img_1','checkout');
 adapt('img_2','ordering');
 adapt('img_3','contact');
 adapt('img_4','blog');
 adapt('img_5','faq');

 //fetching url for the icons
 const contact=document.getElementById('contact');
 contact.addEventListener('click', function(){
    window.location.href='support.html'
 });
/* const checkout=document.getElementById('checkout');
 const ordering=document.getElementById('ordering');
 const blog=document.getElementById('blog');
 const faq=document.getElementById('faq');

 checkout.addEventListener('click', function(){
    window.location.href=''
 });
 ordering.addEventListener('click', function(){
    window.location.href=''
 });

 blog.addEventListener('click', function(){
    window.location.href=''
 });
 faq.addEventListener('click', function(){
    window.location.href=''
 });*/
