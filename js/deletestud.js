// JavaScript Documentvar request;
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

function DELETE(x)
{
	//alert('---'+x+'--');
	 
	 document.getElementById('del').innerHTML="<input type='button' value='DELETE' name='DELETE' id='"+x+"' onclick='return DELSTUD(this.id);' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' name='close' id='close' value='NO' onclick='return DSTUD();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>";
	 return false;
}
function DELSTUD(x)
{
	 //alert('---DELSTUD-->'+x);
	 //document.delsub.action="deletesubject.jsp";
	 //alert('---action--');
	 //document.delsub.submit();
	 request=getRequestObject();
	//alert('---viewfacul--');
	//var url="1.html";
	//document.offop.action='1.html';
	//document.offop.action="viewfaculty.jsp?branch="+branch+"";
	//document.offop.submit();
	var url="deletestudent.jsp?roll="+x+"";
	//alert('--->'+url);
		request.open("GET",url,true);
	//alert('--open-');
	request.onreadystatechange=callback;
	request.send (null);
	
	return false;
	
	
}
function callback()
{
	
	//alert('--top--'+request.status);
	switch(request.readyState)
	{
		case 1:
		break;
		case 2:
		break;
		case 3:
		break;
		case 4:
		
					     if(request.status==200)
			{
				
						
				 var r=request.responseText;
				 //alert('-rr-'+r+'--');
				  if(r.match("DELETED"))
				 {
					 
					// alert('---DELETED---');
					 
					 return reloadwindow();
				 }
				 else
				 {
					// alert('--EXCEPTION--');
				 }

			}
			
			break;
	}


}

function reloadwindow()
{
	//alert('-window.reloading--');
	window.location.reload();
	//alert('--after reload--');
	//return loadwindow();
	return hellu();
}

function DSTUD()
{
	
	 document.getElementById('del').innerHTML="";
	 
}
function hellu()
{
	//alert('---hellu---');
	
}
