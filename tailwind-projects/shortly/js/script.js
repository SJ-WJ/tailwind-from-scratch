const input = document.getElementById('link-input');
const linkform = document.getElementById('link-form');
const errmsg = document.getElementById('err-msg');

linkform.addEventListener('submit', formSubmit);

//Validate a URL
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault()

  if (input.value === '') {
    errmsg.innerHTML = `Can't shorten an empty url`;
    input.classList.add('border-red');
  } else if (!validURL(input.value)) {
    errmsg.innerHTML = `Please enter a valid url`;
    input.classList.add('border-red');
  } else {
    errmsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success');
  }
}