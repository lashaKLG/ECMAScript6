//Rewrite this 'if' using the ternary operator '?':
//for reade need uncomment string from 3-13)

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}  */

//solution
let message = (login == 'Employee') ? 'Hello': (login == 'Director') ? 'Greetings': (login == '') ?'No login' :'';

