
var userName = "";
function capture () {
    userName = document.getElementById('name').value;
    document.getElementById('typedName').innerHTML = "Bem vinda: " + userName;
}




function fSubmit1() {

    var correctanswer = document.getElementById("green1");
    var form1 = document.getElementById('form1');
  
    form1.addEventListener('submit', function(event) {
      if (correctanswer.checked) {
        document.getElementById("div-right").style.display = 'block';
        document.getElementById("div-wrong").style.display = 'none';
  
      } else {
        document.getElementById("div-right").style.display = 'none';
        document.getElementById("div-wrong").style.display = 'block';
      }
      event.preventDefault();
    });
  
  }
  
  function fSubmit2() {

    var correctanswer = document.getElementById("green2");
    var form2 = document.getElementById('form2');
  
    form2.addEventListener('submit', function(event) {
      if (correctanswer.checked) {
        document.getElementById("div-right2").style.display = 'block';
        document.getElementById("div-wrong2").style.display = 'none';
  
      } else {
        document.getElementById("div-right2").style.display = 'none';
        document.getElementById("div-wrong2").style.display = 'block';
      }
      event.preventDefault();
    });
  
  }

  function fSubmit3() {

    var correctanswer = document.getElementById("green3");
    var form3 = document.getElementById('form3');
  
    form3.addEventListener('submit', function(event) {
      if (correctanswer.checked) {
        document.getElementById("div-right3").style.display = 'block';
        document.getElementById("div-wrong3").style.display = 'none';
  
      } else {
        document.getElementById("div-right3").style.display = 'none';
        document.getElementById("div-wrong3").style.display = 'block';
      }
      event.preventDefault();
    });
  
  }

