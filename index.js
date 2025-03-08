function display(imgId,pId){
    const image=document.getElementById(imgId);
    const p=document.getElementById(pId);
    document.addEventListener('DOMContentLoaded', function (){
    image.addEventListener('mouseover', function(){
        p.style.opacity=1;
        p.style.color='white';
    });

    image.addEventListener('mouseout', function(){
        p.style.opacity=0;
    });


});
}
 display('email','p2');
 display('call','p1');
 display('global','p4');
 display('location','p3');

function explore(){
    window.location.href="login.html";
}

