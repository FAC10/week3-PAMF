var attachForm = (function (){

  var addFormEvent = function (obj) {
    var form = document.getElementsByTagName('form')[0];
    form.style.display = 'inline';
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      answerValidation(e.target[0].value, obj.name);
    });
  };
  var answerValidation = function (user_answer, answer){
    user = user_answer.split(' ');
    ans = answer.split(' ');
    if (answer.toLowerCase() === user_answer.toLowerCase() ) {
      document.getElementById('output').innerText = 'Correct! The film was ' + answer;
    }
    else {
      document.getElementById('output').innerText = 'Incorrect! The correct answer is ' + answer;
    }
  };

  return function (obj, cb) {
    addFormEvent(obj);
    cb(null, 'THE GAME IS NOW READY');
  };

})();
