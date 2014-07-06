// JavaScript Document

var request;
function getRequestObject()
{
	
	if(window.ActiveXObject)
	{
		request=new ActiveXObject("Microsoft.XMLHTTP");
		
	}
	else if(window.XMLHttpRequest)
	{
		request=new XMLHttpRequest();
		
	}
	
	return request;
}
