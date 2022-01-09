
function fname(){// check username
    let email = document.getElementById('email'),
        color = document.getElementById('status1'),
        a = email.value.length,
        b = isNaN(email.value);
    if(a==0){ //Check empty input
        color.style.color = 'red';
        color.innerHTML = "Email or Phone Number Required!";  
    }
     else if(a!=0){ // check entered data whether email or number
         if(b==true){ //check entered email id 
             let format = /\S+@\S+\.\S+/,
                 result = format.test(email.value);
                    if(result==true){
                        color.style.color = 'green';
                        color.innerHTML = " Email Sucessfully Entered!";
                        
                    }else{
                        color.style.color = 'red';
                        color.innerHTML = " Please Check Entered Email Address!";


                    }

            
         }
         else if(b==false){ //phone number validation
             if(a==10){
                color.style.color = 'green';
                color.innerHTML = " Phone Number Sucessfully Entered!";
             }else{
                color.style.color = 'red';
                color.innerHTML = " Please Check Entered Phone Number!";
             }
             

         }
    }
}

function pw(){ //check password
    let pasw = document.getElementById('password'),
        colorpw = document.getElementById('status2');
    if(pasw.value.length==0){
        colorpw.style.color = 'red';
        colorpw.innerHTML = 'Password Required to Login!';
        
        }
        else if(pasw.value.length!=0){
            if(pasw.value.length<8||pasw.value.length>8){
                colorpw.style.color = 'red';
                colorpw.innerHTML = 'Sorry Password should be 8 characters!'; 
            }else{
                colorpw.style.color = 'green';
                colorpw.innerHTML = 'Sucessfully entered Password!'; 
                
            }
        }

}

// for(let i=1950;i<2021;i++){
//     console.log(i);
//     document.querySelector('date').innerHTML = i;

// }


