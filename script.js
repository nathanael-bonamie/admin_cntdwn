function what(){
	let xmlhttp = new XMLHttpRequest();						//interroge le contenu de find-setup.txt dès l'ouverture
	xmlhttp.onreadystatechange = function () {					//récupère le SHA et le stocke en session
	if (this.readyState == 4 && this.status == 200) {				//récupère le contenu et décode la base64
  
		var sha=JSON.parse(this.responseText).sha;
		sessionStorage.setItem("sha",sha);
	
		var content=atob(JSON.parse(this.responseText).content);
		content=decodeURIComponent(escape(content));
		document.getElementById('demo').innerHTML=content;
		}
	};

	xmlhttp.open(
		"GET",
		"https://api.github.com/repos/nathanael-bonamie/countdown/contents/how.txt",
		false);
	xmlhttp.send();
}

function setDate(opt){
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
