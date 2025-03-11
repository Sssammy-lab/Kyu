
document.addEventListener('DOMContentLoaded', function(){
    
    const mpesa=document.getElementById('mpesa');
    const a_money=document.getElementById('a_money');
    const t_kash= document.getElementById('t_kash');
    const div= document.getElementById('payment');
    const form=document.createElement('form');
    const a=document.createElement("input");

    t_kash.dataset.originalStyle=t_kash.style;
    a_money.dataset.originalStyle=a_money.style;
    mpesa.dataset.originalStyle=mpesa.style;
    
    t_kash.addEventListener('click', function(){
        //removing any existing form
       if(form) form.remove();
       mpesa.style=mpesa.dataset.originalStyle;
       a_money.style=a_money.dataset.originalStyle;
        t_kash.style.backgroundColor='turquoise';
        t_kash.style.color='white';
        form.style.backgroundColor='transparent';
        div.style.backgroundColor='transparent';

            //creating inputs
            const username=document.createElement("input");
            const number=document.createElement("input");
            const amount=document.createElement("input");
            //creating labels
            const username_l=document.createElement('label');
            const number_l=document.createElement('label');
            const amountl=document.createElement('label');
            
            //creating a button
            const submit=document.createElement('button');
                //appending children
                div.appendChild(form);
               form.appendChild(username_l);
                form.appendChild(username);
                form.appendChild(number_l);
                form.appendChild(number);
                form.appendChild(amountl);
                form.appendChild(amount);
                form.appendChild(submit);

                submit.style.backgroundColor='turquoise'

        //assigning ids for styling
        form.id='form_p';
        username.id='username_i';
        number.id='number_i';
        amount.id='amount_i';
        username_l.id='username_l';
        number_l.id='number_l';
        amountl.id='amount_l';
        submit.id='submit_b';
        

        //defining types for inputs and btn
        username.type='text';
        amount.type='number';
        number.type='number';
        submit.type='button'

        //Defining created attribute
        username_l.textContent='USERNAME:';
        number_l.textContent='PHONE NUMBER:';
        amountl.textContent='AMOUNT:';
        submit.textContent='PAY NOW:';
        submit.dataset.originalText=submit.textContent;

        //conditions for inputs
        submit.addEventListener('click', function(){
            if (number.value.trim()===''|| number.value.trim().length!=10|| !number.value.startsWith('02')) {
                alert('Invalid Phone number. Please enter a Telkom Phone number');
                submit.textContent=submit.dataset.originalText;
            }
            /*if (username.value.trim()==='') {
                window.alert='Please input a valid kenyan phone number';
            }
            if (number.value.trim()===''|| number.value.trim().length!=10|| !number.value.startsWith('02')) {
                window.alert='Please input a valid kenyan phone number';
            }*/
           else{
            number.value="";
            username.value='';
            amount.value='';
            submit.innerHTML='PAYMENT SUCCESFUL';
           }


        });

    });

    mpesa.addEventListener('click', function(){

        //removing any existing form
       if(form) form.remove();
       
       t_kash.style=t_kash.dataset.originalStyle;
       a_money.style=a_money.dataset.originalStyle;
        mpesa.style.backgroundColor='green';
        mpesa.style.color='white';
        form.style.backgroundColor='transparent';
        div.style.backgroundColor='transparent';

            //creating inputs
            const username=document.createElement("input");
            const number=document.createElement("input");
            const amount=document.createElement("input");
            //creating labels
            const username_l=document.createElement('label');
            const number_l=document.createElement('label');
            const amountl=document.createElement('label');
            
            //creating a button
            const submit=document.createElement('button');
                //appending children
                div.appendChild(form);
               form.appendChild(username_l);
                form.appendChild(username);
                form.appendChild(number_l);
                form.appendChild(number);
                form.appendChild(amountl);
                form.appendChild(amount);
                form.appendChild(submit);

                submit.style.backgroundColor='green'

        //assigning ids for styling
        form.id='form_p';
        username.id='username_i';
        number.id='number_i';
        amount.id='amount_i';
        username_l.id='username_l';
        number_l.id='number_l';
        amountl.id='amount_l';
        submit.id='submit_b';
        

        //defining types for inputs and btn
        username.type='text';
        amount.type='number';
        number.type='number';
        submit.type='button'

        //Defining created attribute
        username_l.textContent='USERNAME:';
        number_l.textContent='PHONE NUMBER:';
        amountl.textContent='AMOUNT:';
        submit.textContent='PAY NOW:';
        submit.dataset.originalText=submit.textContent;

        //conditions for inputs
        submit.addEventListener('click', function(){
            if (number.value.trim()===''|| number.value.trim().length!=10|| !number.value.startsWith('07')) {
                alert('Invalid Phone number. Please enter a Safaricom Phone number');
                submit.textContent=submit.dataset.originalText;
            }
           /* if (username.value.trim()==='') {
                window.alert='Please input a valid kenyan phone number';
            }
            if (number.value.trim()===''|| number.value.trim().length!=10|| !number.value.startsWith('02')) {
                window.alert='Please input a valid kenyan phone number';
            }*/
           else{
            number.value="";
            username.value='';
            amount.value='';
            submit.innerHTML='PAYMENT SUCCESFUL';
           }

        });

    });

    a_money.addEventListener('click', function(){

        //removing any existing form
       if(form) form.remove();
       mpesa.style=mpesa.dataset.originalStyle;
       t_kash.style=t_kash.dataset.originalStyle;
        a_money.style.backgroundColor='red';
        a_money.style.color='white';
        form.style.backgroundColor='transparent';
        div.style.backgroundColor='transparent';

            //creating inputs
            const username=document.createElement("input");
            const number=document.createElement("input");
            const amount=document.createElement("input");
            //creating labels
            const username_l=document.createElement('label');
            const number_l=document.createElement('label');
            const amountl=document.createElement('label');
    
            //creating a button
            const submit=document.createElement('button');
                //appending children
                div.appendChild(form);
               form.appendChild(username_l);
                form.appendChild(username);
                form.appendChild(number_l);
                form.appendChild(number);
                form.appendChild(amountl);
                form.appendChild(amount);
                form.appendChild(submit);

                submit.style.backgroundColor='red'

        //assigning ids for styling
        form.id='form_p';
        username.id='username_i';
        number.id='number_i';
        amount.id='amount_i';
        username_l.id='username_l';
        number_l.id='number_l';
        amountl.id='amount_l';
        submit.id='submit_b';
        
        

        //defining types for inputs and btn
        username.type='text';
        amount.type='number';
        number.type='number';
        submit.type='button'

        //Defining created attribute
        username_l.textContent='USERNAME:';
        number_l.textContent='PHONE NUMBER:';
        amountl.textContent='AMOUNT:';
        submit.textContent='PAY NOW:';
        submit.dataset.originalText=submit.textContent;
                
        //conditions for inputs
        submit.addEventListener('click', function(){
            if (number.value.trim()===''|| number.value.trim().length!=10|| !number.value.startsWith('01')) {
                alert('Invalid Phone number. Please enter an Airtel Phone number');
                submit.textContent=submit.dataset.originalText;
            }
           /*  if (username.value.trim()==='') {
                window.alert='Please input a valid kenyan phone number';
            }
           if (number.value.trim()===''|| number.value.trim().length!=10|| !number.value.startsWith('02')) {
                window.alert='Please input a valid kenyan phone number';
            }*/
           else{
            number.value="";
            username.value='';
            amount.value='';
            number_l.textContent=number_l.dataset.originalText;
            submit.innerHTML='PAYMENT SUCCESFUL';
           }

        });

    });

});

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
        img.style.transform='scale(1.2)';
    });*/
    div.addEventListener('dblclick',function(){
        div.style.width='100px';
        p.style.opacity='0';
        img.style.transform='scale(1.0)';
    })
}

dispaly('checkout','img_1');
dispaly('ordering','img_2');
dispaly('contact','img_3');
dispaly('blog','img_4');
dispaly('faq','img_5');