// JavaScript Document


var r;
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




function show()
{
	var a=document.getElementById("mon").value;
	//alert(''+a+'');
	
	
	
	         var url="att.jsp?mon="+a+"";
			//alert(''+url+'');
			
			request=getRequestObject();
			 request.open("GET",url,true);
				
			 request.onreadystatechange=call;
			 
			 request.send(null);
	
	return false;
	
	
}

function call()
{
	//alert('---rqstatus-->'+request.status);
	 var r1=request.responseText;
				 //alert(''+r1+'');
	switch (request.readyState)
	{
		
		case 1:
		document.getElementById('ch').innerHTML="";
		break;
		case 2:
		break;
		case 3:
		break;
		case 4://alert('---rqstatus-->'+request.status);
		
				if(request.status==200)
		     {
				 r=request.responseText;
				 //alert('alert-->'+r+'-->');
				
				  var a=document.getElementById("mon").value;
				  
				  
				 if(r.match("ERROR"))
				 {
				  //alert('ERROR');
				  document.getElementById("wrt").innerHTML="<br/><div align='center'><span class='style1'> <div align='center'><u>ATTENDANCE OF &nbsp;"+a+"&nbsp; MONTH</u></div></span><br/><br/><font color='#990000' size='2px'><strong><div align ='center'><blink>NO RESULTS IN DATABSE.</blink></div></strong></font><br/><br/>";
				   document.getElementById("show").innerHTML="";
				   // document.getElementById("fine").innerHTML="";
				   
				 }
				 else
				 {
				
					  var list="<br><div align='center'><span class='style1'> <div align='center'><u>ATTENDANCE OF &nbsp;"+a+"&nbsp; MONTH</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='' bordercolor='#990000'><tr> <td> <font color='#990000'><div align='center'>SUBJECT NAME</div></font></td><td><font color='#990000'><div align='center'>SUBJECT CODE</div></font></td><td><font color='#990000'><div align='center'>SUBJECT ID</div></font></td><td><font color='#990000'><div align='center'>ATTENDANCE</div></font></td></tr><br/>";
				 
				 
				  var q=r.split(":");
				// alert('-->len-->q-->'+q.length);
				 
				 for( p in q)
				 {
					 //alert('pp-'+p+'->'+q[p]+'');
					
					if(p!=0)
					{
					 var z=q[p].split(";");
					 //list=list+"";
					 
					
						 at=z[3]-z[4];
					 
					 
					 
					 list=list+"<tr><td><div align='center'><strong>"+z[1]+"</strong></div></td><td><div align='center'><strong>"+z[2]+"</strong></div></td><td><div align='center'><strong>"+z[0]+"</strong></div></td><td>&nbsp;&nbsp;<div align='center'><strong>"+at+"&nbsp;&nbsp;/&nbsp;&nbsp;<font color='#990000'>"+z[3]+"</font></strong></div>&nbsp;&nbsp;</td></tr>"
					 
					}
					
					 
				 }
					 
					 
					 
					 
					 
					 
					 
					 document.getElementById("wrt").innerHTML=list+"</table></div></span></div><div id='ch'></div>";
					 document.getElementById("show").innerHTML="<br/><br/><font color='#990000' size='2px'><strong><div align='right'><blink><a  href='' id='shw' onClick='return DETAILS();'>SHOW DETAILS</a></blink></strong></div></font>";
					 
					  //document.getElementById("fine").innerHTML="<br/><br/><font color='#464646' size='2px'><strong><div align='center'><a href=''  onClick='return FINE();'>VIEW FINE</a></strong></div></font>";
					 
					 
					 
				 }
				
	
			 }
			 break;
	}
	return false;
}


function DETAILS()
{
	
	var a=document.getElementById("mon").value;
	
	 var list="<br><div align='center'><span class='style1'> <div align='center'><u>ATTENDANCE OF &nbsp;"+a+"&nbsp; MONTH</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='' bordercolor='#990000'><tr> <td> <font color='#990000'><div align='center'>SUBJECT NAME</div></font></td><td><font color='#990000'><div align='center'>SUBJECT CODE</div></font></td><td><font color='#990000'><div align='center'>DATES OF CLASS CONDUCTED</div></font></td><td><font color='#990000'><div align='center'>ABSENT DATES</div></font></td></tr><br/>";
				 
				 
				  var q=r.split(":");
				 //alert('-->len-->q-->'+q.length);
				 
				 for( p in q)
				 {
					 //alert('pp-'+p+'->'+q[p]+'');
					
					if(p!=0)
					{
					 var z=q[p].split(";");
					 //list=list+"";
					 
					
						 at=z[3]-z[4];
					 
					 
					 
					 list=list+"<tr><td><div align='center'><strong>"+z[1]+"</strong></div></td><td><div align='center'><strong>"+z[2]+"</strong></div></td><td><div align='center'><strong>"+z[6]+"</strong></div></td><td>&nbsp;&nbsp;<div align='center'><strong><font color='#990000'>"+z[5]+"</font></strong></div>&nbsp;&nbsp;</strong></td></tr>"
					 
					}
					
					 
				 }
				
				 
				  document.getElementById("wrt").innerHTML=list+"</table></div></span></div><div id='ch'></div>";
					 document.getElementById("show").innerHTML="<font color='#990000' size='2px'><strong><div align='center'><blink><a  href='' id='shw' onClick='return show();'>SHOW CONSISE VIEW</a></blink></strong></div></font>";
				 
				 
				 
	return false;
}

function FINE()
{
	// alert('WANT FINE');
	 return false;
}