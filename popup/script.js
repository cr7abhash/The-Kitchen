//get modal element

var modal = document.querySelector('.bg-modal');

//get open modal button
var modalBtn = document.getElementById('button');

//get close modal button

var closeBtn = document.querySelector('.close');


//Listen for open click

modalBtn.addEventListener('click', openModal);

//Listen for close click

closeBtn.addEventListener('click', closeModal);

//Listen to outside click

window.addEventListener('click',outsideClick);



//Function to open modal

function openModal() {
	
modal.style.display = 'flex';

};

//Function to open modal

function closeModal() {
	
modal.style.display = 'none';

};


//Dunction to close modal if outside click

function outsideClick (e){

	if (e.target == modal) {

		modal.style.display = 'none';

	}

}


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
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;


if (user == "") {
document.getElementById('users').innerHTML = " ** username cannot be empty";
		return false;
}

if (!isNaN(user)){
	document.getElementById('users').innerHTML = " ** only characters are allowed";
		return false;
}

if (pass == "") { 
	
		document.getElementById('passwords').innerHTML = " ** Password cannot be empty";
		return false;
	}	
	

else {

         for(i=0; i < objPeople.length ;i++){

	if (user == objPeople[i].username && pass == objPeople[i].password) {

			window.alert("You are logged in as" + " "+ user);
			window.open("file:///C:/Users/CPCR%20Dept/Desktop/js/basic/Myown/responsivesite/index.html")
			return
	}
	
	}	
			window.alert("incorrect username or password!");
		

	}

}





// METHOD 2
// //for close modal

// document.querySelector('.close').addEventListener('click',function() {

// document.querySelector('.bg-modal').style.display = 'none';

// } );

// //to close if outside click

// window.addEventListener('click',function (e) {
	
// 	if (e.target == document.querySelector('.bg-modal')) {

// 		document.querySelector('.bg-modal').style.display = 'none';
// 	}

// });