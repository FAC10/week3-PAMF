// Attaches the Form
var attachForm = (function (){
// Displays the form and attaches eventListener to submit button
  var addFormEvent = function (obj) {
    var form = document.getElementsByTagName('form')[0];
    form.style.display = 'inline';
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      answerValidation(e.target[0].value, obj.name);
    });
  };
  // Validates user answer
  var answerValidation = function (user_answer, answer){
    user = user_answer.split(' ');
    ans = answer.split(' ');
    if (answer.toLowerCase() === user_answer.toLowerCase() ) {
      document.getElementById('id').innerText = 'Correct! The film was ' + answer;
    }
    else {
      document.getElementById('id').innerText = 'Correct! The film was ' + answer;
    }
  };

  return function (obj, cb) {
    console.log(obj.name);
    addFormEvent(obj);
    cb(null, 'THE GAME IS NOW READY');
  };

})();
