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
    if (answer.toLowerCase() === user_answer.toLowerCase() ) {
      console.log("success");
    }
    else {
      console.log("try again");
    }
  };

  return function (obj, cb) {
    console.log(obj.name);
    addFormEvent(obj);
    cb(null, 'THE GAME IS NOW READY');
  };

})();
