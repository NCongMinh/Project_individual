//ANIMATION SCROLL DOWN FULLPAGE
new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  slidesNavigation: true,
  navigationTooltips: ['TeyVat', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontain',]

});

// PERFORM LOGIN FORM
function openForm() {
  // console.log(document.getElementById("myLogin"));
  document.getElementById("myLogin").style.display = "grid";
  document.getElementById("myLogin").style.animation = "2s ease-out";
}

function closeForm() {
  document.getElementById("myLogin").style.display = "none";
}

function toggleFormMode() {
  var button = document.getElementById('submitButton');
  var registerLink = document.getElementById('formMode');
  var confirmPasswordContainer = document.getElementById('confirmPasswordContainer');

  if (button.innerText === 'Login') {
    button.innerText = 'Register';
    registerLink.innerText = 'Login';
    confirmPasswordContainer.style.display = 'block';
  } else {
    button.innerText = 'Login';
    registerLink.innerText = 'Register';
    confirmPasswordContainer.style.display = 'none';
  }
}

function showProblems() {
  alert("Contact this email address: minh.nguyencong.cit21@eiu.edu.vn");
}
function submitForm() {
  alert("Welcome!");
}

function topFunction() {
  window.scrollTo(0, 0);
}

