function validateRegistration(){
	
	var ans = 0;
	var fn = document.getElementById("firstName").value;
	if (fn == null || fn == "") {
		document.getElementById('firstNameMsg').innerHTML = 'Please enter firstname';
		modifyFieldCSS("firstName",true);
		ans = 1;
	} else
		document.getElementById('firstNameMsg').innerHTML = '';

	var ln = document.getElementById('lastName').value;
	if (ln == null || ln == "") {
		document.getElementById('lastNameMsg').innerHTML = 'Please enter lastname';
		modifyFieldCSS("lastName",true);
		ans = 1;
	} else
		document.getElementById('lastNameMsg').innerHTML = '';

	var ad = document.getElementById('email').value;
	if (ad == null || ad == "") {
		document.getElementById('emailMsg').innerHTML = 'Please enter email';
		modifyFieldCSS("email",true);
		ans = 1;
	} else
		document.getElementById('emailMsg').innerHTML = '';

	var ph = document.getElementById('phone').value;
	if (ph == null || ph == "") {
		document.getElementById('phoneMsg').innerHTML = 'Please enter phone ';
		modifyFieldCSS("phone",true);
		ans = 1;
	}
	else if (isNaN(ph)) {
		document.getElementById('phoneMsg').innerHTML = 'Phone no. should be in digits';
		modifyFieldCSS("phone",true);
		ans = 1;
	} else
		document.getElementById('phoneMsg').innerHTML = '';

	var dob = document.getElementById('dob').value;
	if (dob == null || dob == "") {
		document.getElementById('dobMsg').innerHTML = 'Please enter date of birth ';
		modifyFieldCSS("dob",true);
		ans = 1;
	} else
		document.getElementById('dobMsg').innerHTML = '';

	var ln = document.getElementById('country').value;
	if (ln == null || ln == "") {
		document.getElementById('countryMsg').innerHTML = 'Please enter country name';
		modifyFieldCSS("country",true);
		ans = 1;
	} else
		document.getElementById('countryMsg').innerHTML = '';
	
	var ln = document.getElementById('state').value;
	if (ln == null || ln == "") {
		document.getElementById('stateMsg').innerHTML = 'Please enter state';
		modifyFieldCSS("state",true);
		ans = 1;
	} else
		document.getElementById('stateMsg').innerHTML = '';
	
	var ln = document.getElementById('city').value;
	if (ln == null || ln == "") {
		document.getElementById('cityMsg').innerHTML = 'Please enter city';
		modifyFieldCSS("city",true);
		ans = 1;
	} else
		document.getElementById('cityMsg').innerHTML = '';
	
	var pwd = document.getElementById('password').value;
	if (pwd == null || pwd == "") {
		document.getElementById('passwordMsg').innerHTML = 'Please enter password ';
		modifyFieldCSS("password",true);
		ans = 1;
	} else
		document.getElementById('passwordMsg').innerHTML = '';

	var cnp = document.getElementById('confirmPassword').value;
	if (cnp == null || cnp == "") {
		document.getElementById('confirmPasswordMsg').innerHTML = 'Please enter confirmPassword';
		modifyFieldCSS("confirmPassword",true);
		ans = 1;
	} else
		document.getElementById('confirmPasswordMsg').innerHTML = '';

	if (pwd != cnp) {
		document.getElementById('confirmPasswordMsg').innerHTML = 'Password and confirmPassword mismatch';
		modifyFieldCSS("confirmPassword",true);
		ans = 1;
	}

	if (ans == 1) {
		return false;
	}
	if (ans == 0) {
		return true;
	}
}

function validateLogin(){
	return true;
}

function genericValidation(id){
	var errorMessage = id+"Msg";
	
	var fn = document.getElementById(id).value;
	if (fn == null || fn == "") {
		document.getElementById(errorMessage).innerHTML = 'Please enter firstname';
		modifyFieldCSS(id,true);
	} else
		document.getElementById(errorMessage).innerHTML = '';
}

function validateForgotPassword(){
	return true;
}

function validateProfile(){
	var ans = 0;
	var fn = document.getElementById("firstName").value;
	if (fn == null || fn == "") {
		document.getElementById('firstNameMsg').innerHTML = 'Please enter firstname';
		modifyFieldCSS("firstName",true);
		ans = 1;
	} else
		document.getElementById('firstNameMsg').innerHTML = '';

	var ln = document.getElementById('lastName').value;
	if (ln == null || ln == "") {
		document.getElementById('lastNameMsg').innerHTML = 'Please enter lastname';
		modifyFieldCSS("lastName",true);
		ans = 1;
	} else
		document.getElementById('lastNameMsg').innerHTML = '';

	var ph = document.getElementById('phone').value;
	if (ph == null || ph == "") {
		document.getElementById('phoneMsg').innerHTML = 'Please enter phone ';
		modifyFieldCSS("phone",true);
		ans = 1;
	}
	else if (isNaN(ph)) {
		document.getElementById('phoneMsg').innerHTML = 'Phone no. should be in digits';
		modifyFieldCSS("phone",true);
		ans = 1;
	} else
		document.getElementById('phoneMsg').innerHTML = '';

	var dob = document.getElementById('dob').value;
	if (dob == null || dob == "") {
		document.getElementById('dobMsg').innerHTML = 'Please enter date of birth ';
		modifyFieldCSS("dob",true);
		ans = 1;
	} else
		document.getElementById('dobMsg').innerHTML = '';

	var ln = document.getElementById('country').value;
	if (ln == null || ln == "") {
		document.getElementById('countryMsg').innerHTML = 'Please enter country name';
		modifyFieldCSS("country",true);
		ans = 1;
	} else
		document.getElementById('countryMsg').innerHTML = '';
	
	var ln = document.getElementById('state').value;
	if (ln == null || ln == "") {
		document.getElementById('stateMsg').innerHTML = 'Please enter state';
		modifyFieldCSS("state",true);
		ans = 1;
	} else
		document.getElementById('stateMsg').innerHTML = '';
	
	var ln = document.getElementById('city').value;
	if (ln == null || ln == "") {
		document.getElementById('cityMsg').innerHTML = 'Please enter city';
		modifyFieldCSS("city",true);
		ans = 1;
	} else
		document.getElementById('cityMsg').innerHTML = '';
	
	if (ans == 1) {
		return false;
	}
	if (ans == 0) {
		return true;
	}
}
