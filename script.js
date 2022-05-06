var email = '';
var pass = '';

function getValue() {
  email = document.getElementById('floatingInput').value ;
  pass = document.getElementById('floatingPassword').value ;
  if (email == 'vfrc@ya' && pass == 1234) {
    alert('success!');
  } else {
    alert('fail!');
  }
}
