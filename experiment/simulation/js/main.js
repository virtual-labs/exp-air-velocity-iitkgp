/* Lab:exp_6_Establishment of the Relationship between Kata Cooling Power and Air Velocity
	 File name: main.js
   Author:Prakriti Dhang
*/
var obcount;
var count = 0;

var countanbtnclk; /* count stopwatch button click */

var countw = 0;
var countstemp=1;
var countsask=1;
var countanbtnclkw; /* calculate wkcp */

var imgobj1=null;
var imgobj2=null;
var imgobj3=null;
var imgobj4=null;
var imgod=null;

/*function pgload(){
    
}*/

function showpanel(){
    document.getElementById('btninst').disabled=false;
    
    document.getElementById('yesbtn').disabled=true;
   document.getElementById('stopwatchd').style.display="block";
   document.getElementById('button-start').disabled=false;
   document.getElementById('button-stop').disabled=true;
    
   
    
    //$("#btninst").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
   
   
}

var image2, image1;
var canvas,ctx, c,ctxr, cre, ctxre;
let cancelanim;
let cancelani;
let cancelanimre;
var number = 0;
function startwatch(){
 /* if(int!==null){
    clearInterval(int);
}
int = setInterval(displayTimer,10);*/
  image1 = document.getElementById("readw1");
  image1.style.webkitAnimationPlayState = "running";
  
  image2 = document.getElementById("readw2");
  image2.style.webkitAnimationPlayState = "running";

  document.getElementById('button-stop').disabled=false;
  //for(){
    canvas = document.getElementById("myCanvas2");
    ctx = canvas.getContext("2d");
    var posY = 135 ;
    var speed=1;

    function drawLine(){
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
}

function moveLine () {
	posY += speed;
  
  if (posY < 0 || posY > canvas.height) {
	  speed = speed * -1;
  }
}

function loop() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine();
  drawLine();
cancelani=  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);




 

/* duct set measure */
 c = document.getElementById("myCanvas");
 ctxr = c.getContext("2d");
var  centerY = 130;
var speedr=1;

function drawLiner(){
ctxr.strokeStyle = 'red';
ctxr.lineWidth = 5;
ctxr.beginPath();
ctxr.moveTo(0, centerY);   
ctxr.lineTo(0, 180);
ctxr.stroke();


}

function moveLiner () {
  centerY += speedr;

if (centerY < 0 || centerY > c.height) {
  speedr = speedr * -1;
}

}
/*function cancelan(){
if(centerY ==120){
  cancelAnimationFrame(cancelanim);
}
else{
  requestAnimationFrame(loopr);
}
}*/

function loopr() {
// clear old frame;
//ctxr.clearRect(0,0,c.width, c.height);
moveLiner();
drawLiner();
//cancelan();
//clearInterval(loopr);
    cancelanim= requestAnimationFrame(loopr);
    
    
}
   
requestAnimationFrame(loopr);


setTimeout(function() {
 


document.getElementById("myCanvas").style.display="none";

 
document.getElementById("myCanvas1").style.display="block";

  
  
   
/* reverse duct canvas moveTo */
  cre = document.getElementById("myCanvas1");
   ctxre = cre.getContext("2d");
  var  centerYre = 0;
  var speedre=0.05;
  
  function drawLinere(){
  ctxre.strokeStyle = 'red';
  ctxre.lineWidth = 5;
  ctxre.beginPath();
  ctxre.moveTo(0, centerYre);   
  ctxre.lineTo(0, 180);
  ctxre.stroke();
  //requestAnimationFrame(loopre);
 
  }
  
  function moveLinere () {
    centerYre += speedre;
  
  if (centerYre < 0 || centerYre > cre.height) {
    speedre = speedre * -1;
  }
   
  }
  
  function loopre() {
  // clear old frame;
  ctxre.clearRect(0,0,cre.width, cre.height);
  moveLinere();
  drawLinere();
  cancelanimre=requestAnimationFrame(loopre);
      
  }
     requestAnimationFrame(loopre);
    

    }, 2000);

 // }
  //countstemp+=2;
  //countsask+=2;
  
  
  document.getElementById('button-start').disabled=true;
}






function moveplate1(){  /* move 1st  throtling plate to the required position*/

  var iplate1 = document.getElementById("contldevice1");   
  var orgtop = 100; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 10); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop == 3) { /* moves to 100 top positon*/
      clearInterval(imgobj1); /* stops to 100 postion*/
      document.getElementById('button-start').disabled=false;
      document.getElementById("myCanvas").style.display="block";
      document.getElementById("myCanvas1").style.display="none";

    } else {
      orgtop--; 
      iplate1.style.top = orgtop + '%'; 
       
    }
  }

  
  
  
}


function moveplate2(){  /* move 1st  throtling plate to the required position*/

  var iplate2 = document.getElementById("contldevice2");   
  var orgtop2 = 100; /* initial position */
  clearInterval(imgobj2);
  imgobj2 = setInterval(frame, 10); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop2 == 3) { /* moves to 100 top positon*/
      clearInterval(imgobj2); /* stops to 100 postion*/
      document.getElementById('button-start').disabled=false;
      document.getElementById("myCanvas").style.display="block";
      document.getElementById("myCanvas1").style.display="none";
    } else {
      orgtop2--; 
      iplate2.style.top = orgtop2 + '%'; 
       
    }
  }

  
  
  
}

function moveplate3(){  /* move 1st  throtling plate to the required position*/

var iplate3 = document.getElementById("contldevice3");   
var orgtop3 = 100; /* initial position */
clearInterval(imgobj3);
imgobj3 = setInterval(frame, 10); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop3 == 3) { /* moves to 100 top positon*/
    clearInterval(imgobj3); /* stops to 100 postion*/
    document.getElementById('button-start').disabled=false;
    document.getElementById("myCanvas").style.display="block";
      document.getElementById("myCanvas1").style.display="none";
  } else {
    orgtop3--; 
    iplate3.style.top = orgtop3 + '%'; 
     
  }
}




}


     var airvelv, twv, wkcpv;
function stopwatch() {
 // clearInterval(int);
  image2.style.webkitAnimationPlayState = "paused";
  image1.style.webkitAnimationPlayState = "paused";
  document.getElementById("measure").style.display="block";
  cancelAnimationFrame(cancelanim);
  cancelAnimationFrame(cancelani);
  //cancelAnimationFrame(cancelanimre);
    document.getElementById('obbtn').disabled=false; /* add observation btn */
    count++;
    countanbtnclk =count;
    document.getElementById('calwkcp').disabled=false;
    document.getElementById('button-start').disabled=true;
    document.getElementById('button-stop').disabled=true;
    if(countanbtnclk ==1){
    
      document.getElementById('timev').value;
      airvelv=3.24;
      document.getElementById('airvel').value=airvelv;
      twv=32;
      document.getElementById('temptw').value=twv;
      document.getElementById('obbtn').disabled=true; 
    
   }

   if(countanbtnclk ==2){
    document.getElementById('timev').value;
    airvelv=5.46;
      document.getElementById('airvel').value=airvelv;
      
      twv=33;
      document.getElementById('temptw').value=twv;
      document.getElementById('obbtn').disabled=true; 
   }

   if(countanbtnclk ==3){
    document.getElementById('timev').value;
    airvelv=2.15;
    document.getElementById('airvel').value=airvelv;
    
    twv=32;
    document.getElementById('temptw').value=twv;
    document.getElementById('obbtn').disabled=true; 
   
   }
   if(countanbtnclk ==4){
    document.getElementById('timev').value;
    airvelv=4.49;
    document.getElementById('airvel').value=airvelv;
    
    twv=34;
    document.getElementById('temptw').value=twv;
    document.getElementById('obbtn').disabled=true; 
   
   }

  }

 function calculatewkcp(){
  countw++;
  countanbtnclkw =countw;
  document.getElementById('obbtn').disabled=false; 
  if(countanbtnclkw ==1){
    wkcpv=310.83;
    document.getElementById('wkcp').value=wkcpv;
    document.getElementById('calwkcp').disabled=true;
   
 }
 if(countanbtnclkw ==2){
  wkcpv=288.00;
      document.getElementById('wkcp').value=wkcpv;
      document.getElementById('calwkcp').disabled=true;

}
if(countanbtnclkw ==3){
  wkcpv=271.65;
    document.getElementById('wkcp').value=wkcpv;
    document.getElementById('calwkcp').disabled=true;
}
if(countanbtnclkw ==4){
  wkcpv=194.12;
  document.getElementById('wkcp').value=wkcpv;
  document.getElementById('calwkcp').disabled=true;
}
}

  
