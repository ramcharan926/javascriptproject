const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const Email_error = document.getElementById('Email_error');
const Password_error = document.getElementById('Password_error');
const ConfirmPassword_error = document.getElementById('ConfirmPassword_error');
const Phonenumber_error = document.getElementById('Phonenumber_error');
form.addEventListener('submit',(e) =>{
    let messages =[]
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if (Name.value =='' || Name.value == null || Name.value.length < 5)
        {
            e.preventDefault();
            name_error.innerHTML = "Name is required";
        }
        

if (!Email.value.match(email_check)){
    e.preventDefault();
            Email_error.innerHTML = "valid email is required";
if(Password.value >= 8)
                {
                    e.preventDefault();
                    Password_error.innerHTML = "Password should be less than 8 characters";
                }
                if (Password.value.length === Password)
                    {
                        e.preventDefault();
                        Password_error.innerHTML = "Password should not be password";
                    }
 if(!ConfirmPassword.value.length == 'Password.value.length')
                        {
                            e.preventDefault();
                            ConfirmPassword_error.innerHTML = "Confirmpassword should be Password";
                        }

if(Phonenumber.value ==''){
                            e.preventDefault();
                            Phonenumber_error.innerHTML = "Phonenumber  is required";
 } 
 if(Phonenumber.value =='123456789'){
    e.preventDefault();
    Phonenumber_error.innerHTML = "phonenumber  is required";
} 

 if(!Phonenumber.value.length == 10) {
    e.preventDefault();
    Phonenumber_error.innerHTML = "phone number should be 10 digit number";
}     


}
})