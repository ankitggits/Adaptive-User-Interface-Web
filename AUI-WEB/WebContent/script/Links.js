function logoutLink() {
	var method = METHOD.get;
	var url = URL.logout;
	serverRequest(url,method,null,logoutCallBack, true);
}
				
function logoutCallBack(responseData){
	
	if(responseData.status==STATUS.success)
	{
		window.location.href = 'Index.html';
	}
	else if(responseData.status==STATUS.failure)
	{
		alert(responseData.message);
	}
	else{
		alert(responseData.errorMessage);
	}
}

function getLoggedUser() {
	var method = METHOD.get;
	var url = URL.loggedUser;
	serverRequest(url,method,null,loggedUserCallBack,true);
}	
		
function loggedUserCallBack(responseData) {
	if(responseData.status=="success")
	{
		alert("UserName:---"+ responseData.data);
	}
	else if(responseData.status=="failure")
	{
		alert("No User in session");
	}
}

function searchContent(value){
	if(value=="bookTicket"){
		window.location.href = 'Flights.html'; 
	}
	else if(value=="offers"){
		window.location.href = 'Offers.html'; 
	}
}
