var date = new Date();
var end=false;
var pause=false;
var dt;
var d;
var countDownDate;
var debut=sessionStorage.getItem("howStart");

setcount();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  var t=new Date();  
  var h=t.getHours();
  var m=t.getMinutes();
  var s=t.getSeconds();
  // Fdebutd the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result debut an element with id="demo"
  if (pause){
	document.getElementById("demo").innerHTML = "<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	"<span class='color-green'>"+(1>hours ? "" : hours + ":")+(10>minutes ? "0" : "") + minutes + ":" + (10>seconds ? "0" : "") + seconds+"</span>";}
  else{
	document.getElementById("demo").innerHTML = "<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	(1>hours ? "" : hours + ":")+(10>minutes ? "0" : "") + minutes + ":" + (10>seconds ? "0" : "") + seconds;}
    
  // affiche congés ou chômage
  if (sessionStorage.getItem("howStart")==7){
	document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	"<span class='color-green'>"+sessionStorage.getItem("txt").substring(0,sessionStorage.getItem("txt").indexOf("reprise")+5)
	+sessionStorage.getItem("txt").substring(sessionStorage.getItem("txt").indexOf("reprise")+5)+"</span>";}
	
  else if ((dt.getDay()>5 && sessionStorage.getItem("howStart")!=7) || (dt.getDay()==0 && sessionStorage.getItem("howStart")!=7)){
  	document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
	"<span class='color-green'>Week-end</span>";
	}
  
  else{
	if (distance < 0 && end==false) {
		document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
		"Reload";
		setcount();
	}
	else if (distance < 0 && end==true && sessionStorage.getItem("howStart")!=7) {
		dt.getDay()>4 ? document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
		"<span class='color-green'>Week-end</span>" : 
		document.getElementById("demo").innerHTML ="<span class='color-blue'>"+(h<10 ? "0":"")+h+":"+(m<10 ? "0":"")+m+":"+(s<10 ? "0":"")+s+"</span><br>"+
		"<span class='color-green'>Fin de journée</span>";
	}
	}
  
}, 1000);

function setcount(){

d=parseInt(new Date().getHours()+""+(10>new Date().getMinutes() ? "0" : "")+new Date().getMinutes());
if (d<debut){
	pause=true;
    dt = new Date();
	dt.setHours(07);
	if (debut==750){
		dt.setMinutes(50);}
	else{
		dt.setMinutes(20);}
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if (d>=debut && d<1010){
	pause=false;
    dt = new Date();
	dt.setHours(10);
	dt.setMinutes(10);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1010 && d<1025){
	pause=true;
	dt = new Date();
	dt.setHours(10);
	dt.setMinutes(25);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1025 && d<1240){
	pause=false;
	dt = new Date();
	dt.setHours(12);
	dt.setMinutes(40);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1240 && d<1310){
	pause=true;
	dt = new Date();
	dt.setHours(13);
	dt.setMinutes(10);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1310 && d<1510){
	pause=false;
	dt = new Date();
	dt.setHours(15);
	dt.setMinutes(10);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1510 && d<1525){
	pause=true;
	dt = new Date();
	dt.setHours(15);
	dt.setMinutes(25);
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else if(d>=1525){
	pause=false;
	dt = new Date();
	if(debut==750){
		dt.getDay()==5 ? dt.setHours(15) : dt.setHours(16);
		dt.setMinutes(50);}
	else if (debut==720){
		dt.getDay()==5 ? dt.setHours(16) : dt.setHours(17);
		dt.setMinutes(20);}
	end=true;
	dt.setSeconds(00);
	countDownDate=dt.getTime();}
else{countDownDate=0;
}
}

function set(opt){
	var favdialog=document.getElementById('favdialog');
	favdialog.show();
	document.getElementById("datePiker").addEventListener("change", function() {
    var dateEntered = new Date(this.value);
	var jour=dateEntered.getDate();
	var mois=dateEntered.getMonth();
	var months = ["Janv.", "Fév.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];
	favdialog.close();
	let dec=encodeURIComponent(escape(opt));
	settings(opt+"<br>reprise le "+jour+" "+months[mois]);
	});
}
	
function settings(setup){
	sessionStorage.setItem("txt",setup);
	let dat=new Date();;
	let form= { day: 'numeric', month: 'short', year: 'numeric'};
	let xmlhttp = new XMLHttpRequest();
	let jwtoken = "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";
	let sha = sessionStorage.getItem("sha");
	let content = btoa(setup);

	xmlhttp.onreadystatechange = function () {
	  if (this.readyState == 4 && this.status == 200){
		var r=alert(setup+" configur\351es");
			if (!r){
				location.reload();
			}
			else{
				alert('Echec de la configuration');
			}
		}
	  else{
		  alert(this.status);
	  }
	};

	xmlhttp.open(
	  "PUT",
	  "https://api.github.com/repos/nathanael-bonamie/countdown/contents/how.txt",
	  false);
	xmlhttp.setRequestHeader('Authorization', 'Bearer ' + jwtoken);
	xmlhttp.send(JSON.stringify({"message":"update time :"+dat.toLocaleDateString(undefined, form),"content":content,"sha":sha}));
	}

let xmlhttp = new XMLHttpRequest();				//interroge le contenu de find-setup.txt dès l'ouverture
xmlhttp.onreadystatechange = function () {			//récupère le SHA et le stocke en session
  if (this.readyState == 4 && this.status == 200) {		//récupère le contenu et décode la base64
  
    var sha=JSON.parse(this.responseText).sha;
	sessionStorage.setItem("sha",sha);
	
	var content=atob(JSON.parse(this.responseText).content);
	content=decodeURIComponent(escape(content));
	
	switch(true) {
		case content.startsWith("39 heures"):
		sessionStorage.setItem("howStart",750);
		sessionStorage.setItem("txt","39 heures");
		break;
		case content.startsWith("44 heures"):
		sessionStorage.setItem("howStart",720);
		sessionStorage.setItem("txt","44 heures");
		break;
		case content.startsWith("En"):
		sessionStorage.setItem("howStart",7);
		sessionStorage.setItem("txt",content);
		break;
		case content.startsWith("Ch"):
		sessionStorage.setItem("howStart",7);
		sessionStorage.setItem("txt",content);
		break;
	}
  }
};

xmlhttp.open(
  "GET",
  "https://api.github.com/repos/nathanael-bonamie/countdown/contents/how.txt",
  false);
xmlhttp.send();
