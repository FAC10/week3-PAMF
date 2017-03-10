var attachForm = (function (){

  var addFormEvent = function (obj) {
    var form = document.getElementsByTagName('form')[0];
    form.style.display = 'inline';
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      answerValidation(e.target[0].value, obj.name);
    });
  };

  var giveUp = function (obj) {

    document.getElementById('give-up-button').addEventListener('click', function () {
      var modal = document.getElementById('myModal');
      var closeModal = document.getElementsByClassName('close')[0];
      var modalText = document.getElementById('modalText');

      modal.style.display = "block";
      modalText.innerText = 'The film was ' + obj.name;
      closeModal.onclick = function() {
        modal.style.display = "none";
        guessMovieApp.reset();
      };
    });

  };

  var answerValidation = function (user_answer, answer){
    user = user_answer.split(' ');
    ans = answer.split(' ');
    var modal = document.getElementById('myModal');
    var closeModal = document.getElementsByClassName('close')[0];
    var modalText = document.getElementById('modalText');
    var mContent = document.getElementsByClassName('modal-content')[0];
      if (answer.toLowerCase() === user_answer.toLowerCase() ) {
          modal.style.display = "block";
          mContent.style.backgroundColor = '#00ff90';
          modalText.innerText = 'Success! The movie title is ' + answer;
          mContent.style.color = '#000';
          closeModal.onclick = function() {
            modal.style.display = "none";
            reset();
          };
    }
    else {
      modal.style.display = "block";
      mContent.style.backgroundColor = '#ff0070';
      modalText.innerText = 'Try again'
      closeModal.onclick = function() {
        modal.style.display = "none";
      };
    }
  };

  return function (obj, cb) {
    addFormEvent(obj);
    giveUp(obj);
    cb(null, 'THE GAME IS NOW READY');
  };

})();
