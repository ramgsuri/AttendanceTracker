// JavaScript Document

function UPLOAD()
{
	request=getRequestObject();
	var up=document.getElementById("dis").value;
	
	//alert('upload---->'+up);
	
	return false;
	
}
function UP()
{
	
	
	var up=document.getElementById("display").value;
	var up1=document.getElementById("file").value;
	//alert('up--->'+up+'-->'+up1);
	if(up=="" || up1=="")
	{
		//alert('ERROR');
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE FILL  THE ENTRIES. </b></blink></font> ";
	}
      
	  else
	  {
	 
	document.upload.action="up.jsp";
	document.upload.submit();
	//alert('SUBMIT HELLO');
	
	  }
	
	return false;
}

function sucess()
{
	//alert('RETURN OF change jSP-->request.status'+request.status);
	//alert('REQUEST-->'+request.responseText);
	return false;
}

function UPL()
{
	//alert('UPL');
	
	request=getRequestObject();
	var url="up.jsp";
	request.open("GET",url,true);
			request.onreadystatechange=sucess;
			request.send(null);
	return false;
}