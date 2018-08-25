// $('.fd').click(() => {

// 	$('.features').features('show');
// });

var marginY = 0;
var destination = 0;
var speed = 20;
var scroller = null;

function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
	
	scroller = setTimeout(function(){
		initScroll(elementId);
	}, 1);

	marginY = marginY + speed;
  
    speed = 25;
  
	if(marginY >= destination){
		clearTimeout(scroller);
	}	

	window.scroll(0, marginY);
 
	//console.log(destination);
}

window.onscroll = function(){
	marginY = this.pageYOffset;	
};




//Login validation

var objPeople = [
	{
		username:"abhash",
		password:"abhash1",
	},{
		username:"aagya",
		password:"aagya1",
	},{

		username:"shubha",
		password:"shubha1",
	}
]

function clicked() {
	var user = document.getElementById('username1').value;
	var pass = document.getElementById('password1').value;


if (user == "") {
document.getElementById('users').innerHTML = " ** username cannot be empty";
		return false;
}

if (!isNaN(user)){
	document.getElementById('users').innerHTML = " ** only characters are allowed";
		return false;
}

if (pass == "") { 
	
		document.getElementById('passwords1').innerHTML = " ** Password cannot be empty";
		return false;
	}	
	

else {

         for(i=0; i < objPeople.length ;i++){

	if (user == objPeople[i].username1 && pass == objPeople[i].password1) {

			window.alert("You are logged in as" + " "+ user);
			window.open("file:///C:/Users/CPCR%20Dept/Desktop/js/basic/Myown/responsivesite/index.html")
			return
	}
	
	}	
			window.alert("incorrect username or password!");
		

	}

}


