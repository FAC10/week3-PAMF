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
    var modal = document.getElementById('myModal');
    var closeModal = document.getElementsByClassName('close')[0];
    var modalText = document.getElementById('modalText');
    var mContent = document.getElementsByClassName('modal-content')[0];
      if (answer.toLowerCase() === user_answer.toLowerCase() ) {
          modal.style.display = "block";
          modalText.innerText = 'Success!'
          closeModal.onclick = function() {
            modal.style.display = "none";
            window.location.reload();
          }
    // document.getElementById('output').innerText = 'Correct! The film was ' + answer;
    }
    else {
      modal.style.display = "block";
      modalText.innerText = 'Try again'
      closeModal.onclick = function() {
        modal.style.display = "none";
      }
    document.getElementById('output').innerText = 'Incorrect! The correct answer is ' + answer;
    }
  };

  return function (obj, cb) {
    addFormEvent(obj);
    cb(null, 'THE GAME IS NOW READY');
  };

})();
