function validation() {
	
var user = document.getElementById('user').value;
var pass = document.getElementById('pass').value;
var cpass = document.getElementById('conpass').value;
var mnumber = document.getElementById('mobilenumber').value;
var email = document.getElementById('email').value;
var dob = document.getElementById('dob').value;
var address = document.getElementById('address').value;
var doc = document.getElementById('doc').value;
//FOR USERNAME

if (user == "") { 
	
		document.getElementById('username').innerHTML = " ** Please fill the username field.";
		return false;
	}	

if (user.length <= 2 || user.length > 20 ) {
	document.getElementById('username').innerHTML = " ** user length must be between 2 and 20";
		return false;
}

if (!isNaN(user)){
	document.getElementById('username').innerHTML = " ** only characters are allowed";
		return false;
}


//FOR PASSWORD

if (pass == "") { 
	
		document.getElementById('passwords').innerHTML = " ** Please fill the password field.";
		return false;
	}	


if (pass.length <= 5 || pass.length > 20 ) {
	document.getElementById('passwords').innerHTML = " ** user length must be between 5 and 20";
		return false;
}



if (pass != cpass){
	document.getElementById('confirmpass').innerHTML = " ** passwords are not matching";
		return false;
}


//FOR CONFORM PASSWORD
if (cpass == "") { 
	
		document.getElementById('confirmpass').innerHTML = " ** Please fill the password field.";
		return false;
	}	


//FOR DOB

if (dob == "") { 
	
		document.getElementById('dobs').innerHTML = " ** Please fill the DOB field.";
		return false;
	}


//FOR NUMBER
if (mnumber == "") { 
	
		document.getElementById('mobileno').innerHTML = " ** Please fill the mobile field.";
		return false;
	}	


if (isNaN(mnumber)) {

	document.getElementById('mobileno').innerHTML = " ** only digits not characters";
		return false;
}

if (mnumber.length != 10){
	document.getElementById('mobileno').innerHTML = " **mobile number must be 10 digit only";
		return false;
}



//FOR EMAIL
if (email == "") { 
	
		document.getElementById('emailids').innerHTML = " ** Please fill the email field.";
		return false;
	}	

if (email.indexOf('@')<= 0) {

	document.getElementById('emailids').innerHTML = " ** Position of @ is invalid.";
		return false;
	}


if ((email.charAt(email.length - 4)!='.') && (email.charAt(email.length - 3)!='.'))
	{

	document.getElementById('emailids').innerHTML = " ** Position of . is invalid.";
		return false;
	}


//FOR ADDRESS

if (address == "") { 
	
		document.getElementById('addresss').innerHTML = " ** Please fill the address field.";
		return false;
	}

//FOR DOCUMENT


if (doc == "") { 
	
		document.getElementById('docs').innerHTML = " ** Please upload any of the acedamic document.";
		return false;
	}

}

