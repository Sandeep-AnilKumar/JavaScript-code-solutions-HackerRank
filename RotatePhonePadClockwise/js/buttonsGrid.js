  function rotateClockwise() {
      var temp1 = parseInt(document.getElementById('btn2').innerHTML);
      document.getElementById('btn2').innerHTML= parseInt(document.getElementById('btn1').innerHTML);
      
      var temp2 = parseInt(document.getElementById('btn3').innerHTML);
      document.getElementById('btn3').innerHTML= temp1;
      
      temp1 = parseInt(document.getElementById('btn6').innerHTML);
      document.getElementById('btn6').innerHTML= temp2;
      
      temp2 = parseInt(document.getElementById('btn9').innerHTML);
      document.getElementById('btn9').innerHTML= temp1;
      
      temp1 = parseInt(document.getElementById('btn8').innerHTML);
      document.getElementById('btn8').innerHTML= temp2;
      
      temp2 = parseInt(document.getElementById('btn7').innerHTML);
      document.getElementById('btn7').innerHTML= temp1;
      
      temp1 = parseInt(document.getElementById('btn4').innerHTML);
      document.getElementById('btn4').innerHTML= temp2;
      
      document.getElementById('btn1').innerHTML= temp1;
  }