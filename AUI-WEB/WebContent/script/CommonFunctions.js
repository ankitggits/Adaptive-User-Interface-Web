$.fn.serializeObject = function(){
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
};

function serverRequest(url,method,jsonObject, callBackFn, withCookie){
	var requestData = null;
	if(method=='POST')	{
		requestData = JSON.stringify(jsonObject);
	}
	if(withCookie==true){
		$.ajax({
	        url: url,
	        type: method,
	        data: requestData,
	        contentType: "application/json",
	        dataType: 'json',
	        xhrFields:{
	        	withCredentials:true
	        },
	        success: callBackFn,
	        error: function (jqXHR, textStatus, errorThrown) {
	        	alert("error occured during request");
	        }
	    });
	}
	else{
		$.ajax({
	        url: url,
	        type: method,
	        data: requestData,
	        contentType: "application/json",
	        dataType: 'json',
	        success: callBackFn,
	        error: function (jqXHR, textStatus, errorThrown) {
	        	alert("error occured during request");
	        }
	    });
	}
}


$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
});


function modifyFieldsCSS(fields,action){
	var index;
	for	(index = 0; index < fields.length; index++) {
	    var text = fields[index];
	    modifyFieldCSS(text,action);
	}
}

function modifyFieldCSS(fieldId, action){	
	var selector = "#"+fieldId;
    if(action==true) {
    	$(selector).css({
    	"background": "#fff url(images/invalid.png) no-repeat 98% center",
    	"box-shadow": "0 0 5px #d45252",
    	"border-color": "#b03535"
    		});
    }
    else{
    	$(selector).css({"background": "","box-shadow":"","border-color":""});
    	$(selector+"Msg").html("");
    }
}

function modifyFieldCSSForValid(fieldId){	
	var selector = "#"+fieldId;
    	$(selector).css({
    	"background": "#fff url(images/valid.png) no-repeat 98% center",
    	"box-shadow": "0 0 5px #5cd053",
    	"border-color": "#28921f"
    		});
}

function clearAll(){
	$(".validate").html("");
	$('input').css({"background": "","box-shadow":"","border-color":""});
}

function restrictDate(elementId,isMin){
	var today = new Date().toISOString().split('T')[0];
	if(isMin==true) document.getElementById(elementId).min = today;  
	else document.getElementById(elementId).max = today;
}

function GetParam(name)
{
  var start=location.search.indexOf("?"+name+"=");
  if (start<0) start=location.search.indexOf("&"+name+"=");
  if (start<0) return '';
  start += name.length+2;
  var end=location.search.indexOf("&",start)-1;
  if (end<0) end=location.search.length;
  var result='';
  for(var i=start;i<=end;i++) {
    var c=location.search.charAt(i);
    result=result+(c=='+'?' ':c);
  }
  return unescape(result);
}

function lastPageName(){
	var oldURL = document.referrer;
	var page = oldURL.split("/").pop();
	return page;
}

function applyTooltip(fieldId){	
	var selector = "#"+fieldId;
	var tooltipId="";
	
	switch(fieldId){
		
		//Profile_Low.html
		case "firstName"	:tooltipId= TOOLTIP.firstName;break;
		case "lastName"		:tooltipId= TOOLTIP.lastName;break;
		case "dob"			:tooltipId= TOOLTIP.dob;break;
		case "phone"		:tooltipId= TOOLTIP.phone;break;
		case "country"		:tooltipId= TOOLTIP.country;break;
		case "state"		:tooltipId= TOOLTIP.state;break;
		case "city"			:tooltipId= TOOLTIP.city;break;
		case "updateButton"	:tooltipId= TOOLTIP.updateButton;break;
		
		//Account_Low.html
		case "oldPassword"	:tooltipId= TOOLTIP.oldPassword;break;
		case "newPassword"	:tooltipId= TOOLTIP.newPassword;break;
		case "confirmPassword"	:tooltipId= TOOLTIP.confirmPassword;break;
		case "questions1"	:tooltipId= TOOLTIP.questions1;break;
		case "questions2"	:tooltipId= TOOLTIP.questions2;break;
		case "questions3"	:tooltipId= TOOLTIP.questions3;break;
		case "securityAns1"	:tooltipId= TOOLTIP.securityAns1;break;
		case "securityAns2"	:tooltipId= TOOLTIP.securityAns2;break;
		case "securityAns3"	:tooltipId= TOOLTIP.securityAns3;break;
		case "resetPassword":tooltipId= TOOLTIP.resetPassword;break;
		
		
		case "reset"		:tooltipId= TOOLTIP.reset;break;
		default				:tooltipId= TOOLTIP.xyz;break;
	}

	$(selector).tooltipsy({
 	    content: tooltipId,
 	    alignTo: 'cursor',
        offset: [10, 10]
    });
}

function redirectWithUserLevel(redirectPage){
	serverRequest(URL.userLevel,METHOD.get, null, function(responseData){
		var status = responseData.status;
    	if(status==STATUS.success) {
    		window.location.href = redirectPage+'_'+responseData.userLevelIndicator+'.html';
    	}
	}, true);
}




function statusAlert(responseData)
{
	if(responseData!=null && responseData.status!=""){
	var status=responseData.status;
	
	if(status==STATUS.success)
		{
		swal("Success!!", responseData.message , "success");
		}
	else if(status==STATUS.failure)
		{
		swal("OOPS!!", responseData.message , "error");
		}
	else
		{
		swal("Error!!", responseData.errorMessage , "error");
		}
}
}

function statusLocalAlert(status, message)
{
	if(status==STATUS.success)
		{
		swal("Success!!", message , "success");
		}
	else if(status==STATUS.failure)
		{
		swal("OOPS!!", message , "error");
		}
	else
		{
		swal("Error!!", message , "error");
		}
}


function confirmBookingAlert()
{
	swal({  
		title: "Are you sure?",   
		type: "warning",   
		showCancelButton: true,   
		confirmButtonColor: "#DD6B55",   
		confirmButtonText: "Yes, Book it!",   
		closeOnConfirm: false }, 
		function(){   
			swal("Flight Booked!", "Have a Happy Journey!!", "success"); });
}
