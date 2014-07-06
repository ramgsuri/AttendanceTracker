var branch;
var request;
var y;
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

function hello()
{
	//alert('---OFFICE HELLO--');
	facul();
	
	
}
function bak(x)
{
	if(x=="back")
	{
	//alert('--bak--');
	document.getElementById("back").href="index.htm";
	}
	
	if(x=="btech")
	{
	//alert('---bak btech--');
	document.getElementById("x").href="office.jsp";
	}
	if(x=="tech")
	{
	//alert('---bak --tech--');
	btech();
	}
	if(x=="facul")
	{
	//alert('---bak --facul--');
	tech(branch);
	}
	
	if(x=="COMPUTER SCIENCE" || x=="ELECTRONICS AND COMMUNICATION" || x=="ELECTRICAL SCIENCE" || x=="ELECTRONICS AND INSTRUMENTATION" || x=="MECHANICAL ENGINEERING")
	{
	
	//alert('JKL');
	//alert('--xxx--->'+x);
	//document.getElementById(x).href="office.jsp";
	//alert('---branch--xx --'+x);
	branch=x;
	document.viewfaculty.action="office.jsp";
	document.viewfaculty.submit();
	//alert('--->after action-->'+branch);
     return reloadwindow();
	
	}
	if(x=="FIRST YEARS")
	{
		
		//alert('1 years--->'+y);
		y=x;
		document.getElementById('main-inner').innerHTML="";
		STUDENT(y);
	}
	
	else
	{
		//alert('--else-xx-->'+x);
	}
	return false;
	
}

 function reloadwindow()
{
	 //alert('--->after reloading-->'+branch);
	
	//window.confirm("ARE U SURE U WANT TO GO BACK");
	//alert('YOU ARE GOING BACK');
	window.location.reload();
	//alert('---branch-after reload-'+branch);
	//alert('HI');
	
	//facul();
	//document.getElementById(x).href="office.jsp";
	return false;
	
} 

function btech()
{
	
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='btech' onclick='return bak(this.id);' >Back</a>";
	document.getElementById("img").innerHTML="<img src='images/offi.JPG' width='350px' height='161'>";
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> BTECH SECTION </u></b></font></p><p>You can <font color='#990000'>to manage the records of student and faculty by clicking in options given aside.</font> This would facilitate the faculty members , hod's, student also.</p><p>You have the facility to view, update Faculty , students and Subjects records in various branches.<font color='#990000'>Please Select The Branch in which You want To update Records. </font> </p>";
	
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The Branch</u></font>";
	document.getElementById("option").innerHTML="<p align='center'><strong><a href='' class='one style6'  id='COMPUTER SCIENCE' onclick='return tech(this.id);'> <center>COMPUTER SCIENCE</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='ELECTRONICS AND COMMUNICATION' onclick='return tech(this.id);'><center> ELECTRONICS & COMMUNICATION</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='ELECTRICAL SCIENCE'  onclick='return tech(this.id);'> <center>ELECTRICAL SCIENCE </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='ELECTRONICS AND INSTRUMENTATION' onclick=' return tech(this.id);'><center>ELECTRONICS & INSTRUMENTATION</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='MECHANICAL ENGINEERING' onclick=' return tech(this.id);'><center>MECHANICAL ENGINEERING</center></a></strong></p>"; 
	return false;
}
function tech(x)
{
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='tech' onclick='return bak(this.id);' >Back</a>";
	//alert('---tech -branch-x-'+x+'---');
	branch=x;
	//alert('--tech-branch-'+branch+'--');
	v();
	document.getElementById("img").innerHTML="<img src='images/52.jpg' width='350px' height='161'>";
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The Field.</u></font>";
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b> &nbsp;&nbsp;<u>"+branch+" SECTION </u></b></font></p><p>You can <font color='#990000'>to manage the records of student and faculty by clicking in options given aside.</font> </p><p>You have the facility to view, update Faculty , students and Subjects records in various branches.<font color='#990000'>Please Select The Field in which You want To update Records. </font> </p>"
	document.getElementById("option").innerHTML="<br/><p align='center'><strong><a href='' class='one style6'  id='FACULTY' onclick='return facul();'> <center>FACULTY</center></a></strong></p><br/><p align='center'><strong><a href=''  class='one style6' id='SUB' onclick='return SUB();'><center> SUBJECTS</center></a></strong></p><br/><p align='center'><strong><a href=''  class='one style6' id='STUD' onclick=' return YRS();'><center>STUDENTS</center></a></strong></p><br/>"; 
	return false;
}



function facul()
{
	v();
document.getElementById("kl").innerHTML="<a  href='' class='two' id='facul' onclick='return bak(this.id);' >Back</a>";
	document.getElementById("img").innerHTML="<img src='images/51.jpg' width='350px' height='161'>";
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The Option.</u></font>";
	document.getElementById("option").innerHTML="<p></p><p align='center'><strong><a href='' class='one style6'  id='VF' onclick='return viewfacul();'> <center>VIEW ALL FACULTY</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='AF' onclick='return addfacul();'><center>ADD FACULTY</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='DF'  onclick='return delfacul();'> <center>DELETE FACULTY </center></a></strong></p><p align='center'><strong></p>";
	
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<font color='#990000'><u>"+branch+"</u></font>&nbsp;<font color='#990000' size='3px'><b><u>FACULTY SECTION </u></b></font></p><p>You can <font color='#990000'>to manage the records of the faculty by clicking in options given aside.</font> </p><p>You have the facility to view, update Faculty  records in various branches.<font color='#990000'>Please Select The Field in which You want To update Records. </font> </p>"
	
	//alert('---facul-branch-->'+branch+'----');
	//alert('---opt--i--->'+i+'---');
		
	return false;
}





function v()
{
	
	request=getRequestObject();
	//alert('---viewfacul--');
	//var url="1.html";
	//document.offop.action='1.html';
	//document.offop.action="viewfaculty.jsp?branch="+branch+"";
	//document.offop.submit();
	var url="branchset.jsp?branch="+branch+"";
	//alert('--->'+url);
	request.open("GET",url,true);
	//alert('--open-');
	//request.onreadystatechange="";
	request.send (null);
	
}
function viewfacul()
{
	//v();
	document.offop.action="viewfaculty.jsp";
	document.offop.submit();
	return false;
	
}

function addfacul()
{
	//alert('---addfacul-->'+branch);
document.getElementById("wrt").innerHTML="<br><div align='center'><span class='style1'> <div align='center'><u>ADD &nbsp;"+branch+"&nbsp;FACULTY SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='user' style='border:groove 2pt black ' onfocus='fld(this);' id='afname' title='PLEASE FILL IN THE NAME'> <br/>&nbsp;</div></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='ADD' id='faculty' onclick=' return chk()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='Close' id='Faculty'  onclick='facul();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";	
return false;
}
function delfacul()
{
document.getElementById("wrt").innerHTML="<br><div align='center'><span class='style1'> <div align='center'><u>DELETE &nbsp;"+branch+"&nbsp;FACULTY SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>SSN NO. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='user' style='border:groove 2pt black ' onfocus='fld(this);' id='dfname' title='PLEASE FILL IN THE SSN NO.'> <br/>&nbsp;</div></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='DELETE' id='faculty' onclick=' return delchk()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id='Faculty'  onclick='facul();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";	
return false;	
}
function delchk()
{
var a=document.getElementById("dfname").value.length;
	//alert('---a--'+a+'--');
	var b=document.getElementById("dfname").value;
	//alert('--bb--'+b+'--');
		
	if(a<1)
	{
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE SSN NO. </b></blink></font> ";
	  n1.style.border='solid 2pt #990000';
	}
	else if(a<6)
	{
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE FILL  THE CORRECT SSN NO. </b></blink></font> ";
	  n1.style.border='solid 2pt #990000';
	}
	else
	{
		// v();
		//alert('----else--');
		var url="delfaculname.jsp?dfname="+b+"";
		request.open("GET",url,true);
		request.onreadystatechange=delfaculty;
		request.send(null);
		//document.offop.action="viewfaculty.jsp";
		//document.offop.submit();
	}
	return false;	
}


function delfaculty()
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
				
				var ssn=document.getElementById("dfname").value;
				
				 var r=request.responseText;
				 //alert('-rr-'+r+'--');
				  if(r.match("NOT"))
				 {
					 //alert('---NO SUCH FACULTY EXIST--');
					 document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>NO SUCH FACULTY EXIST </b></blink></font> ";
	  document.getElementById("dfname").style.border='solid 2pt #990000';
				 }
				 else
				 {
					 document.getElementById("wrt").innerHTML="<table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#990000' ><b>FACULTY NAME:&nbsp;&nbsp;"+r+"<br/><br/>SSN NUMBER:&nbsp;&nbsp;"+ssn+"<br/><br/>DELETED FROM&nbsp;&nbsp;<u>"+branch+"&nbsp;FACULTY</u><br/>&nbsp;</b></font></div></td></tr></table><br/><br/><div align='center'><input type='button' value='DELETE MORE' name='am' id='addmore' onclick='return delfacul();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' name='close' id='FACULTY' value='CLOSE' onclick='return facul(this.id);' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' ></div>";
				 }
				
			}
			else
			{
				//alert('---else-'+request.status);
			}
		break;	
	}
}
function fld(f)
{
	f.style.border='groove 2pt black';
	document.getElementById("ch").innerHTML='';
}
function chk()
{
	var a=document.getElementById("afname").value.length;
	//alert('---a--'+a+'--');
	var b=document.getElementById("afname").value;
	//alert('--bb--'+b+'--');
		
	if(a<1)
	{
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE NAME </b></blink></font> ";
	  document.getElementById("afname").style.border='solid 2pt #990000';
	}
	
	else
	{
		 //v();
		//alert('----else--');
		var url="setfaculname.jsp?faname="+b+"";
		request.open("GET",url,true);
		request.onreadystatechange=addfaculty;
		request.send(null);
		//document.offop.action="viewfaculty.jsp";
		//document.offop.submit();
	}
	return false;
}

function addfaculty()
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
				
				var name=document.getElementById("afname").value;
				
				 var r=request.responseText;
				 document.getElementById("wrt").innerHTML="<table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#990000' ><b>FACULTY NAME:&nbsp;&nbsp;"+name+"<br/><br/>SSN NUMBER:&nbsp;&nbsp;"+r+"<br/><br/>ADDED TO&nbsp;&nbsp;<u>"+branch+"&nbsp;FACULTY</u><br/>&nbsp;</b></font></div></td></tr></table><br/><br/><div align='center'><input type='button' value='ADD MORE' name='am' id='addmore' onclick='return addfacul();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' name='close' id='FACULTY' value='CLOSE' onclick='return facul(this.id);' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' ></div>";
				 
				
			}
			else
			{
				//alert('---else-'+request.status);
			}
		break;	
	}
}

function SUB()
{
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='"+branch+"' onclick='return tech(this.id);' >Back</a>";
	
document.getElementById("img").innerHTML="<img src='images/36.jpg' width='350px' height='161'>";
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The Field.</u></font>";
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b> &nbsp;&nbsp;<u>"+branch+" SUBJECTS RECORDS SECTION </u></b></font></p><p>You can <font color='#990000'> manage the records of Subject by clicking in options given aside.</font> </p><p>You have the facility to view, update  Subjects records in this branches.<font color='#990000'>Please Select The Field in which You want To update Subject Records. </font> </p>"
	document.getElementById("option").innerHTML="<br/>&nbsp;<p align='center'><strong><a href='' class='one style6'  id='vsub' onclick='return VSUB();'> <center>VIEW SUBJECTS</center></a></strong><br/></p><p align='center'><strong><a href=''  class='one style6' id='ESUB' onclick='return ESUB();'><center> ADD SUBJECTS</center></a></strong></p><br/><p align='center'><strong><a href=''  class='one style6' id='DELSUB' onclick=' return DSUB();'><center>REMOVE SUBJECTS</center></a></strong><br/></p>"; 
	return false;
}



function ESUB()
{
	document.getElementById("wrt").innerHTML="<br><div align='center'><span class='style1'> <div align='center'><u>ADD &nbsp;"+branch+"&nbsp;ENTER SUBJECT SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>SUBJECT NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='subname' style='border:groove 2pt black ' onfocus='fld(this);' id='subname' title='PLEASE FILL IN THE SUBJECT NAME'> <br/><br/> <div align='center'>SUBJECT CODE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='subcode' style='border:groove 2pt black ' onfocus='fld(this);' id='subcode' title='PLEASE FILL IN THE SUBJECT CODE'><br/><br/><div align='center'>SUBJECT ID&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='subid' style='border:groove 2pt black ' onfocus='fld(this);' id='subid' title='PLEASE FILL IN THE SUBJECT ID'><br/>&nbsp;</div></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='ADD' id='faculty' onclick=' return subchk()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id='"+branch+"'  onclick='tech(this.id);' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";	
return false;
}
function subchk()
{

	var a1=document.getElementById("subname").value.length;
	//alert('---a--'+a1+'--');
	var a2=document.getElementById("subcode").value.length;
	//alert('---a--'+a2+'--');
	var a3=document.getElementById("subid").value.length;
	//alert('---a--'+a3+'--');
	var b1=document.getElementById("subname").value;
	//alert('--bb--'+b1+'--');
	var b2=document.getElementById("subcode").value;
	//alert('--bb--'+b2+'--');
	var b3=document.getElementById("subid").value;
	//alert('--bb--'+b3+'--');
		
	if(a1<1)
	{
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE FILL THE SUBJECT NAME </b></blink></font> ";
	  document.getElementById("subname").style.border='solid 2pt #990000';
	   
	}
	else
	{   
	    if(a2<1)
	  {
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE FILL THE SUBJECT CODE </b></blink></font> ";
	  document.getElementById("subcode").style.border='solid 2pt #990000';
	   
	   }
	   else
	   {
	     if(a3<1)
	    {
		  document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE FILL THE SUBJECT ID </b></blink></font> ";
	   document.getElementById("subid").style.border='solid 2pt #990000';
	   
	      }
	  	
	   else
	   {
		 //v();
		//alert('----else--');
		var url="addsub.jsp?subname="+b1+"&subcode="+b2+"&subid="+b3;
		//alert('--url--'+url);
		request=getRequestObject();
		request.open("GET",url,true);
		//alert('----open--');
		request.onreadystatechange=viewsubject;
		request.send(null);
		//document.offop.action="viewfaculty.jsp";
		//document.offop.submit();
	    }
	   }
	}
	return false;	
	
}

function viewsubject()
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
				
				var subid=document.getElementById("subid").value;
				var subname=document.getElementById("subname").value;
				var subcode=document.getElementById("subcode").value;
				 var r=request.responseText;
				// alert('---rr-'+r);
				 if(r.match("added"))
				 {
					 // alert('---rr-'+r);
	document.getElementById("wrt").innerHTML="<table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#990000' ><b>SUBJECT NAME:&nbsp;&nbsp;"+subname+"<br/><br/>SUBJECT CODE:&nbsp;&nbsp;"+subcode+"<br/><br/>SUBJECT ID:&nbsp;&nbsp;"+subid+"<br/><br/>ADDED TO&nbsp;&nbsp;<u>"+branch+"&nbsp;SUBJECTS</u><br/>&nbsp;</b></font></div></td></tr></table><br/><br/><div align='center'><input type='button' value='ADD MORE' name='am' id='addmore' onclick='return ESUB();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' name='close' id='"+branch+"' value='CLOSE' onclick='return SUB();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' ></div>";
			 
				
			}
			else
			{
			 document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE CHECK THE SUBJECT DETAILS. </b></blink></font> ";
	   document.getElementById("subid").style.border='solid 2pt #990000';	
			}
			}
			else
			{
				//alert('---else-'+request.status);
			}
		break;	
	}
	return false;
	
}
function VSUB()
{
	//alert('---view sub--');
	document.offop.action="viewsub.jsp";
	//alert('--action--')
	document.offop.submit();
	return false;
	
}

function DSUB()
{
	//document.getElementById("tit").innerHTML="";
	//alert('--------del sub');
	//alert('---opt--branch-->'+branch+'----');
	//alert('---opt--i--->'+i+'---');
	document.offop.action="delsub.jsp";
	//alert('--action--')
	document.offop.submit();
		
	return false;
}


function YRS()
{
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='"+branch+"' onclick='return tech(this.id);' >Back</a>";
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The YEAR.</u></font>";
	document.getElementById("option").innerHTML="<p></p><p align='center'><strong><a href='' class='one style6'  id='FIRST YEARS' onclick='return STUDENT(this.id);'> <center>FIRST YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='SECOND YEARS' onclick='return STUDENT(this.id);'><center>SECOND YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='THIRD YEARS'  onclick='return STUDENT(this.id);'> <center>THIRD YEARS </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='FINAL YEARS'  onclick='return STUDENT(this.id);'> <center>FINAL YEARS </center></a></strong></p>";
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<font color='#990000'><u>"+branch+"</u></font>&nbsp;<font color='#990000' size='3px'><b><u>STUDENT SECTION </u></b></font></p><p>You can <font color='#990000'>to manage the records of the students by clicking in options given aside.</font> </p><p>You have the facility to view, update students  records in various branches.<font color='#990000'>Please Select The Field in which You want To update Records. </font> </p>";
	
	return false;
}

function STUDENT(x)
{
	 y=x;
	//alert('-====years---->'+y+'--');
	//alert('---student section---');
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='"+branch+"' onclick='return YRS();' >Back</a>";
	document.getElementById("img").innerHTML="<img src='images/33.JPG' width='350px' height='161'>";
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The Option.</u></font>";
	document.getElementById("option").innerHTML="<p></p><p align='center'><strong><a href='' class='one style6'  id='VS' onclick='return viewstudent();'> <center>VIEW ALL STUDENTS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='AS' onclick='return addstudent();'><center>ADD STUDENT</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='DF'  onclick='return delstudent();'> <center>DELETE STUDENT </center></a></strong></p><p align='center'><strong></p>";
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<font color='#990000'><u>"+branch+"</u></font>&nbsp;<font color='#990000' size='3px'><b><u>"+y+"&nbsp;&nbsp;STUDENT SECTION </u></b></font></p><p>You can <font color='#990000'>to manage the records of the students by clicking in options given aside.</font> </p><p>You have the facility to view, update students  records in various branches.<font color='#990000'>Please Select The Field in which You want To update Records. </font> </p>";
	return false;
}
function addstudent()
{
	//alert('--addstudent-->'+y+'<---');
	//alert('---addSTUDENT-->'+branch);
document.getElementById("wrt").innerHTML="<div align='center'><span class='style1'> <div align='center'><u>ADD &nbsp;"+branch+"&nbsp;"+y+"&nbsp;&nbsp;STUDENT SECTION</u></div></span> <br> <span class='style2'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr height='40'> <td><br/> <div align='center'>NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='stud' style='border:groove 2pt black ' onfocus='fld(this);' id='asname' title='PLEASE FILL IN THE NAME'> <br/>&nbsp;</div> <div align='center'>FATHER'S NAME &nbsp;&nbsp;<input type='text' name='father' style='border:groove 2pt black ' onfocus='fld(this);' id='fathername' title='PLEASE FILL IN THE FATHER NAME'> <br/>&nbsp;</div><div align='center'>ROLL NUMBER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='roll' style='border:groove 2pt black ' onfocus='fld(this);' id='adroll' title='PLEASE FILL IN THE ROLL NUMBER'> <br/>&nbsp;</div></td></tr></table></div></span></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <input type='button' value='ADD' id='student' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' onclick='return chkstud();'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='button' value='CLOSE' style= 'border:groove 2pt black;background:darkred;color:wheat;font-weight:bold' id='CLOSEASTUD'  onclick=' return STUDENT(y);' ></div><div id='ch'></div>";

return false;
}

function chkstud()
{
	
	
	var a=document.getElementById("asname").value.length;
	//alert('---a--'+a+'--');
	var b=document.getElementById("asname").value;
	//alert('--bb--'+b+'--');
		var c=document.getElementById("fathername").value.length;
	//alert('---a--'+c+'--');
	var d=document.getElementById("fathername").value;
	//alert('--bb--'+d+'--');
	var e=document.getElementById("adroll").value.length;
	//alert('---a--'+e+'--');
	var f=document.getElementById("adroll").value;
	//alert('--bb--'+f+'--');
	//var g=document.getElementById("section").value;
	//alert('--bb--'+g+'--');
	if(a<1)
	{
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE NAME </b></blink></font> ";
	  document.getElementById("asname").style.border='solid 2pt #990000';
	}
	
	else if(c<1)
	{
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE FATHER NAME </b></blink></font> ";
	  document.getElementById("fathername").style.border='solid 2pt #990000';
	}
	
	else if(e<1)
	{
		document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE ENTER THE ROLL NUMBER </b></blink></font> ";
	  document.getElementById("adroll").style.border='solid 2pt #990000';
	}
	/*else if(g.match('--SELECT--'))
				{
					alert('--------PLZ SELECT THE SECTION--');
					document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE SELECT THE SECTION </b></blink></font> ";
	  document.getElementById("section").style.border='solid 2pt #990000';
				} */
	
	else 
	{
		//v();
		//alert('----else- year--->'+y+'--');
		
		//request=getRequestObject();
		request=getRequestObject();
		var url="setstudentname.jsp?studname="+b+"&fathername="+d+"&roll="+f+"&year="+y+"";
		//alert('--------->>'+url);
	    request.open("GET",url,true);
		request.onreadystatechange=addstud;
		request.send(null);
		//document.offop.action="viewfaculty.jsp";
		//document.offop.submit();
	}
	return false;
}

function addstud()
{
	var f=document.getElementById("adroll").value;
	//alert('--roll num--'+f+'--');
//alert('------ADD STUD---');
// alert('--top--'+request.status);
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
				
					
				var tab="<table width='297' height='35' border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA' cellspacing='5' cellpadding='5' id=''tab1'><tr><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>STUDENT NAME</strong></font></td><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>FATHER NAME</strong></font></td><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>ROLL NUM</strong></font></td><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>SECTION</strong></font></td></tr>";
				 document.getElementById('msg').innerHTML="<div align='center'><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><b>&nbsp;<u>"+y+"&nbsp;"+branch+"&nbsp;STUDENT</u>  </b></font></div><br/>";
				
					//alert('---------->'+request.responseText);	
					if(request.responseText.match("EXCEPTION"))
					{
						 document.getElementById('ch').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE CHECK THE ROLL NUMBER IT ALREADY EXIST IN DATABASE. </b></blink></font> ";
	   document.getElementById("adroll").style.border='solid 2pt #990000';	
					}
					else
					{
					document.getElementById("kl").innerHTML="<a  href='' class='two' id='"+y+"' onclick='bak(this.id);' >Back</a>";	
				 var r=request.responseText.split(';');
				// alert('--------->HELLO<---------addstud---');
				 //document.getElementById('main-inner').innerHTML="----HELLO=="+r+"<br/>HI";
				 for(x in r)
				 {
					  //alert('----in x loop--');
					 
					 var z=r[x].split(',');
					  if(z[2]==f)
						{
							//alert('ZF IF ');
							tab=tab+"<tr bgcolor='#FFFFFF'>";
						}
						else
						{
							 tab=tab+"<tr>";
						}
					
					 for(y in z)
					 {
						
						if(z[2]==f)
						{
						tab=tab+"<td><font color='#990000' size='2px'>"+z[y]+"</font></td>"; 	
						}
						else
						{
						
						tab=tab+"<td><strong>"+z[y]+"</strong></td>"; 
						}
						
					 }
					 tab=tab+"</tr>";
										 
				 }
				 tab=tab+"</table><br/><div align ='center'></div>"; 																																																																																																											
				 document.getElementById('main-inner').innerHTML=tab;
								
				 
			}
		}
			break;
	}
	return false;

}



function viewstudent()
{
	  //alert('----view student--->'+y);
	   request=getRequestObject();
		var url="viewstudentname.jsp?year="+y+"";
		//alert('--------->>'+url);
	    request.open("GET",url,true);
		request.onreadystatechange=viewstud;
		request.send(null);
	return false;
}
function viewstud()
{
	//alert(' IN VIEW STUD');
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
				//document.getElementById("'"+b+"'").innerHTML="<a  href='' class='two' id='"+y+"' onclick='return STUDENT(this.id);' > Back</a>";
				//document.getElementById("'"+b+"'").onclick="STUDENT('"+y+"')";
				 document.getElementById('msg').innerHTML="<div align='center'><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><b>&nbsp;<u>"+y+"&nbsp;"+branch+"&nbsp;STUDENT</u>  </b></font></div><br/>";
				var tab="<table width='297' height='35' border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA' cellspacing='5' cellpadding='5' id=''tab1'><tr><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>STUDENT NAME</strong></font></td><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>FATHER NAME</strong></font></td><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>ROLL NUM</strong></font></td><td><font color='#990000' size='2px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><strong>SECTION</strong></font></td></tr>";
				
					//alert('---------->'+request.responseText);	
					if(request.responseText.match("EXCEPTION"))
					{
						 document.getElementById('msg').innerHTML="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><blink><b>EXCEPTION. </b></blink></font> ";
	   //document.getElementById("adroll").style.border='solid 2pt #990000';	
					}
					else
					{
				 var r=request.responseText.split(';');
				 //alert('--------->HELLO<---------viewstud---');
				 //document.getElementById('main-inner').innerHTML="----HELLO=="+r+"<br/>HI";
				 for(x in r)
				 {
					  //alert('----in x loop--');
					 var z=r[x].split(',');
					 tab=tab+"<tr>";
					 for(y in z)
					 {
						
						tab=tab+"<td><strong>"+z[y]+"</strong></td>"; 
					 }
					 tab=tab+"</tr>";
										 
				 }
				 tab=tab+"</table>";
				  document.getElementById('main-inner').innerHTML=tab;
								
				 
			}
		}
			break;
	}
	return false;

}
function delstudent()
{
	//document.getElementById("tit").innerHTML="";
	//alert('--------del sub');
	//alert('---opt--branch-->'+branch+'----');
	//alert('---opt--i--->'+i+'---');
	//alert('YEARS---->'+y);
	
	//alert('----view student--->'+y);
	  request=getRequestObject();
		var url="setyrs.jsp?years="+y+"";
		//alert('--------->>'+url);
	    request.open("GET",url,true);
		request.onreadystatechange=delstud;
		request.send(null); 
      /*request=getRequestObject();
	  request.setAttribute("years",y);
    document.offop.action="delstud.jsp";
	alert('--action--')
	document.offop.submit();*/
		
	return false; 
}

function delstud()
{
document.offop.action="delstud.jsp";
	//alert('--action--')
	document.offop.submit();	
}
