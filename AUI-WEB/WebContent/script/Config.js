DOMAIN = 'http://localhost:8080/AUI';

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
	updatePassword: 	DOMAIN+'/password/update',
	updateSecurityQuestions: DOMAIN+'/account/updateSecurityQuestions',
	userLevel	:	   DOMAIN+'/userLevel',
	bookFlight	:	   DOMAIN+'/flight/bookFlight' ,
	getCities	:	   DOMAIN+'/flight/getCities',
	getFrequentCities: DOMAIN+'/flight/getFrequentCities',
	hasEverTravelled: DOMAIN+'/flight/hasEverTravelled',
	getBooking: DOMAIN+'/ticket/getBooking',
	logUserRating: DOMAIN+'/userExperienceRating'
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
		
	//Profile_Low.html	
	firstName 	: 'Please Enter your First Name having all characters',
	lastName 	: 'Please Enter your Last Name having all characters',
	dob			: 'Please Enter your Date Of Birth in dd/mm/yyyy format',
	phone	  	: 'Please Enter your 10 digit Phone Number',
	country		: 'Please Enter your Country Name',
	state		: 'Please Enter your State Name',
	city		: 'Please Enter your City',
	
	//Account_Low.html
	oldPassword : 'Please Enter Old Password',
	newPassword	: 'Please Enter New Password',
	confirmPassword : 'Please confirm New Password',
	questions1 : 'Please Select Security Question',
	questions2 : 'Please Select Security Question',
	questions3 : 'Please Select Security Question',
	securityAns1 : 'Please Enter Security Answer',
	securityAns2 : 'Please Enter Security Answer',
	securityAns3 : 'Please Enter Security Answer',
	
	
	resetPassword: 'Click here to Reset Password',
	updateButton: 'Click here to update all values',
	reset		: 'Click here to reset all values',
	xyz 		: 'Please Enter'
		
};
