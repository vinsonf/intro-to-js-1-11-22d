// console.log(document.forms['signup']);

// document.forms.signup.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(this.username, this.username.value);
// })

console.log(document.forms[0]);

document.forms['signup'].addEventListener('submit', function(e) {
    e.preventDefault();
   
    const forms = document.forms;
    const signup = forms.signup;



    const username = document.forms.signup.username.value;
    const email = signup.email.value;
    const password = signup.password.value;
    const date = signup.date.value;
  
    console.log(username, email, password, date);

   const user = {
        username,
        email,
        password,
        date,
   };

   console.log(user);

   fetch('https://jsonplaceholder.typicode.com/users', {
         method: 'POST',
         body: JSON.stringify(user),
         headers: {
             "Content-Type": "application/json"
         }
   })
   .then( res => res.json() ).then( data => {
       console.log(data);
   })

});


console.log(document.forms[1]);
document.forms[1].addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(this.username, this[0].value);

});