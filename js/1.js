


function chk()
{
	document.getElementById("img").innerHTML="<img src='images/photo-main1.jpg'  width='350px' height='161' />"
	document.getElementById("aa").innerHTML=" <p> <span class='style3'>Welcome</span> <strong>To ATTENDANCE TRACER </strong> </p><p>This Site have been developed as a software which would keep </p>  <p>the record of student attendance . This would facilitate the faculty members , hod's ,office employees to manage the students record.</p>  <p>The student has the facility to view his attendance subject wise through  roll number. Office members also have facility to up load the new notices regarding the college cirricullam. </p>"	;
	
}


function office()
{
document.getElementById("img").innerHTML="<img src='images/off.JPG'  width='350px' height='161' />";
document.getElementById('aa').innerHTML="<br><div align='center'><span class='style1'> <div align='center'><u>OFFICE SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>USERNAME </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='user' style='border:groove 2pt black ' id='user' onfocus='fld(this);' > </div></div><br/><div align='center'>PASSWORD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='pass' style='border:groove 2pt black ' id='pass' onfocus='fld(this);' ></div><br/></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='LOGIN' id='office' onclick='return fa(this.id);' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id='close'  onclick='chk();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div> ";


return false ;
}


function hod()
{
document.getElementById("img").innerHTML="<img src='images/hod.JPG'  width='350px' height='161' />";
document.getElementById('aa').innerHTML=" <br><div align='center'><span class='style1'> <div align='center'><u>HOD SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>USERNAME </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='user' id='user' onfocus='fld(this)'; style='border:groove 2pt black ' > </div></div><br/><div align='center'>PASSWORD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='pass' id='pass' style='border:groove 2pt black ' onfocus='fld(this)'; ></div><br/></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='LOGIN' id='hod' onclick='return fa(this.id);' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id='close'  onclick='chk();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";
return false ;
}


function faculty()
{
document.getElementById("img").innerHTML="<img src='images/f.jpg'  width='350px' height='161' />";
document.getElementById('aa').innerHTML=" <br><div align='center'><span class='style1'> <div align='center'><u>FACULTY SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>USERNAME </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='user' style='border:groove 2pt black ' onfocus='fld(this);' id='user' title='PLEASE FILL IN THE USERNAME'> </div></div><br/><div align='center'>PASSWORD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='pass' onfocus='fld(this);' id='pass' style='border:groove 2pt black '  title='PLEASE FILL IN THE PASSWORD'></div><br/></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='LOGIN' id='faculty' onclick=' return fa(this.id)' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id='close'  onclick='chk();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";
return false ;
}


function student()
{

document.getElementById("img").innerHTML="<img src='images/s.JPG'  width='350px' height='161' />";
document.getElementById('aa').innerHTML=" <br><div align='center'><span class='style1'> <div align='center'><u>STUDENT SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>FIELD </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select name='field' style='border:groove 2pt black' title='PLEASE SELECT THE FIELD' id='field' onfocus='fld(this)'><option selected='selcted' >--SELECT--</option><option>BTECH</option><option>BPHARMA</option><option>DENTAL</option><option>MBA</option><option>MCA</option></select> </div></div><br/><div align='center'>ROll NUMBER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='roll' style='border:groove 2pt black ' id='roll' title='PLEASE ENTER THE ROLL NUMBER' onfocus='fld(this)' ></div><br/></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='LOGIN' id='login' onclick='return stud()'  style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='Close' id='close'  onclick=' chk();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";
return false ;
}


function cordinator()
{
document.getElementById("img").innerHTML="<img src='images/30.jpg'  width='400px' height='180' />";
document.getElementById('aa').innerHTML=" <br><div align='center'><span class='style1'> <div align='center'><u>CO-ORDINATOR SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>USERNAME </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='user' style='border:groove 2pt black ' onfocus='fld(this);' id='user' title='PLEASE FILL IN THE USERNAME'> </div></div><br/><div align='center'>PASSWORD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='pass' onfocus='fld(this);' id='pass' style='border:groove 2pt black '  title='PLEASE FILL IN THE PASSWORD'></div><br/></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='LOGIN' id='cordinator' onclick=' return fa(this.id)' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id='close'  onclick='chk();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";
return false ;
}


function fld(f)
{
	
	f.style.border='groove 2pt black';
	document.getElementById("ch").innerHTML='';
}
function stud()
{
 
 var h=document.getElementById('field').value;
 var h1=document.getElementById('field');
 
 if(h=='--SELECT--')
 {
	document.getElementById('ch').innerHTML=" <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE SELECT THE FIELD</b></blink></font>"; 
	h1.style.border='solid 2pt #990000';
	return false;
 }
      var x=document.getElementById('roll').value;
      var len=x.length;
	   var n=document.getElementById('roll');
  if(len<10)
  {
       if(len<1)
	   {
       document.getElementById('ch').innerHTML=" <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE ROLL NUMBER</b></blink></font>"; 
	n.style.border='solid 2pt #990000';
	
        }
        else
        {
	      
	          document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>ROLL NUMBER IS NOT VALID </b></blink></font> ";
	  n.style.border='solid 2pt #990000';
           
	
         }
  
          return false;
 
        }
		if(len>=10&& h!='--SELECT--')
		{
			 
			request=getRequestObject();
			
			var f=document.getElementById('field').value;
			 var r=document.getElementById('roll').value;
			 var s="student";
			 var url="check.jsp?field="+f+"&roll="+r+"&id="+s+"";
			
			 request.open("GET",url,true);
				
			 request.onreadystatechange=callback;
			 
			 request.send(null);
		}
		
		
}

function callback()
{
	
	
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
			//alert('---ooo---');
			var resp=request.responseText;
			//alert('----resp-->'+resp);
						var mat=resp.match("student");
			//alert('----->'+mat+'<-----');
		
		           if(mat)
		         {
			         //document.studlogin.action='1.html';
			         //document.studlogin.submit();
		         	S();
	         	}
		      else
		     {
			 document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER CORRECT ENTRIES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOR LOGIN..   </b></blink></font>";
			document.getElementById('field').value='--SELECT--';
			document.getElementById('roll').value='';
			document.getElementById('field').style.border='solid 2pt #990000';
			document.getElementById('roll').style.border='solid 2pt #990000';
		    }
	    }
	break;
	}
}


function fa(x)
{
	var n=document.getElementById('user').value.length;
	var n1=document.getElementById('user');
	this.d=x
	//alert('---dd--->'+d);
	if(n<1)
	{
	   
	 	document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE USERNAME </b></blink></font> ";
	  n1.style.border='solid 2pt #990000';
		
 
	}
	
	
	
	else
	{
		 if(n>=1&&n<6)
	{
	   
	 	document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b> USERNAME IS NOT VALID </b></blink></font> ";
	  n1.style.border='solid 2pt #990000';
	return false;	
 
	}
	else
	{
		var p=document.getElementById('pass').value.length;
	var p1=document.getElementById('pass');
	      if(p<1)
	    {
	         
	 	document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE PASSWORD </b></blink></font> ";
	  p1.style.border='solid 2pt #990000';
		 
	    }
		  else
		  {
			  if(p<6)
			  {
				   document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b> PASSWORD IS NOT VALID </b></blink></font> ";
	  p1.style.border='solid 2pt #990000';
			     }
				 
				 else
				 {
					//alert('----fa1()-->dd--->'+d); 
				 fa1(d);
				 }

	      }
	}
	}
	return false;	


}


 function fa1(x)
{
	
	// alert('-----fa1----'+x+'');
	var a=document.getElementById("user").value;
	var b=document.getElementById("pass").value;
	//alert('----faculty--fa1---username---'+a+'---pass--'+b+'----xx---->'+x);
	 request=getRequestObject();
	
	 var url="check.jsp?field="+a+"&roll="+b+"&id="+x;
	 
	 request.open("GET",url,true);
	  //alert('--url-->'+url);
	 request.onreadystatechange=callback1;
	 
	 request.send(null);
	
	
} 

function callback1()
{
	
	//alert('--rq.status-cllback1-->'+request.status);
	//alert('--response-->'+request.responseText);
	switch (request.readyState)
	{
		
		case 1:
		document.getElementById('ch').innerHTML="";
		break;
		case 2:
		break;
		case 3:
		break;
		case 4://alert('--rq.status--->'+request.status);
		if(request.status==200)
		{
			//alert('----');
			var resp=request.responseText;
			//alert('------>'+resp);
			
			var mat=(resp.match("hod") || resp.match("faculty") || resp.match("office") || resp.match("cordinator"));
			//alert('----->'+mat+'<-----');
		
		if(mat=="hod" || mat=="faculty" || mat=="office" || mat=="cordinator")
		{
			//document.studlogin.action='1.html';
			//document.studlogin.submit();
			if(mat=="hod")
			h();
			
			if(mat=="faculty")
		   			facul();
					
			if(mat=="office")
			off();
			
			if(mat=="cordinator")
			cord();
			
			
			
	    	
		}
		
		
		   
		else
		{
			document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER CORRECT ENTRIES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOR LOGIN..   </b></blink></font>";
			document.getElementById('user').value='';
			document.getElementById('pass').value='';
			document.getElementById('user').style.border='solid 2pt #990000';
			document.getElementById('pass').style.border='solid 2pt #990000';
		}
	}
	break;
	}
}


function h()
{
	document.getElementById("img").innerHTML="<img src='images/g.JPG'  width='350px' height='161' />";
	//alert('--office------');
	document.login.action='hod.jsp';
	document.login.submit();
	
}

function facul()
{
	document.getElementById("img").innerHTML="<img src='images/place.jpg'  width='350px' height='161' />";
	document.login.action='faculty.jsp';
	document.login.submit();
	
}

function off()
{
	document.getElementById("img").innerHTML="<img src='images/place.jpg'  width='350px' height='161' />";
	//alert('--office------');
	document.login.action='office.jsp';
	document.login.submit();
	
	
	
}

function S()
{
	document.getElementById("img").innerHTML="<img src='images/place.jpg'  width='350px' height='161' />";
	document.login.action='showatt.jsp';
	document.login.submit();
	
}

function cord()
{
	document.getElementById("img").innerHTML="<img src='images/place.jpg'  width='350px' height='161' />";
	//alert('--office------');
	document.login.action='cordinator.jsp';
	document.login.submit();
	
	
	
}