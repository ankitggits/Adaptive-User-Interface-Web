DOMAIN = 'http://10.0.0.9:8080/AUI';

URL = {
	registration :  DOMAIN+'/register',
	login		 :  DOMAIN+'/security/login',
	logout		 :  DOMAIN+'/security/logout',
	springLogin	 :  DOMAIN+'/j_spring_security_check',
	springLogout :  DOMAIN+'/j_spring_security_logout',
	checkUsername:  DOMAIN+'/profile/usernameAvailability',
	loggedUser	 :  DOMAIN+'/security/loggedUser',
	allSecurityQuestions:     DOMAIN+'/securityQuestions',
	searchFlight :     DOMAIN+'/flight/search',
	existingUserQuestions:    DOMAIN+'/password/forgot',
	validateSecurityQuesAns:  DOMAIN+'/password/validateSecurityQuesAns',
	resetPassword:     DOMAIN+'/password/reset',
	getProfileDetails: DOMAIN+'/profile/details',
	updateProfile:     DOMAIN+'/profile/update',
	existingAccountUserQuestions: DOMAIN+'/account/userQuestions',
	validatePassword: DOMAIN+'/account/validateAuthentication',
	updateSecurityQuestions: DOMAIN+'/account/updateSecurityQuestions',
	userLevel	:	   DOMAIN+'/userLevel'
};

METHOD = {
	get		: 'GET',
	post	: 'POST'
};

USERLEVEL = {
		expert : "high",
		moderate : "medium",
		initial : "low"
};

STATUS = {
	success	: 'success',
	failure	: 'failure',
	error	: 'error'
};

TOOLTIP = {
	firstName 	: 'Please Enter your First Name having all characters',
	lastName 	: 'Please Enter your Last Name having all characters',
	dob			: 'Please Enter your Date Of Birth in dd/mm/yyyy format',
	phone	  	: 'Please Enter your 10 digit Phone Number',
	country		: 'Please Enter your Country Name',
	state		: 'Please Enter your State Name',
	city		: 'Please Enter your City',
	updateButton: 'Click here to update all values',
	reset		: 'Click here to reset all values',
	xyz 		:"Please Enter"
		
};
