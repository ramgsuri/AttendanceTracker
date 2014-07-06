// JavaScript Document

var request;
var branchcord;
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
	//alert('HELLO');
	return false;
}

function CLS1()
{
	//alert('CLOSE');
	document.upload.action="cordinator.jsp";
	document.upload.submit();
	return false;
}
function CLS2()
{
	//alert('CLOSE');
	document.cordi2.action="cordinator.jsp";
	document.cordi2.submit();
	return false;
}
function UPLOAD()
{
	
	
document.getElementById("img").innerHTML="<img src='images/34.JPG' width='350px' height='161'>";
//document.offop.action ="cordiup.jsp";
//document.offop.submit();

//var list="<FORM ENCTYPE='multipart/form-data' method='POST' name='upload' id='up' action='up.jsp'>";
 
//list=list+"<input type='text' name='dis' value='dis' onBlur='return SETNAME();' id='dis'>";
//list=list+"<INPUT TYPE='file' NAME='RootPath' id='file' ><br/><br/>DISPLAY NAME <INPUT TYPE='submit' VALUE='upload' ></FORM>";
	//document.getElementById("wrt").innerHTML="<br/><div align='center'><span class='style1'> <div align='center'><u>UPLOAD NOTICES</u></span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<font color='#464646'> </font> </div><br> <font size='-1'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000'  width='370'><tr> <td><br/> <div align='left'>&nbsp;&nbsp;&nbsp;DISPLAY NAME: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='display' style='border:groove 2pt black ' onfocus='fld(this);' onblur='return SETNAME();' id='display' title='PLEASE FILL IN THE DISPLAY NAME'></div> <br/><div align='left'>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;FILE: &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FORM ENCTYPE='multipart/form-data'method='POST' name='upload' id='up'><INPUT TYPE='file' NAME='RootPath' id='file' style='border:groove 2pt black ' id='file' onfocus='fld(this);'  title='PLEASE BROWSE THE FILE PATH'> <input type='button' value='UPLOAD' id='UPLAOD' onclick=' return UPL()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></FORM>&nbsp;&nbsp;</div><br/><br/></td></tr></table></div></font></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id=''  onclick='return cl();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";	
	//alert('WANT TO CHANGE PASSWORD');
	//document.getElementById("wrt").innerHTML=list;
	return false;
}


function UPL()
{
	//alert('UPL');
	
	document.upload.action="up.jsp";
	document.upload.submit();
	return false;
}
function changepass()
{
	
	var old=document.getElementById("prepass");
	var newp=document.getElementById("newpass");
	var repass=document.getElementById("renewpass");
	
}

function SETNAME()
{
	//alert('NAME SET');
	var dis=document.getElementById("display").value;
	//alert('dis-->'+dis);
request=getRequestObject();


	var url="dispnameset.jsp?opt="+dis+"";
	
	request.open("GET",url,true);
	request.onreadystatechange=NAMESUCESS;
	request.send(null);
	return false;
}
function NAMESUCESS()
{
	
	//alert('------unalotssn---');
 //alert('--top--'+request.status);
 //alert('--top--'+request.responseText);
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
			
			}
			break;
	}
	return false;
	
}

function BRANCH()
{
	document.getElementById("option").innerHTML="<p align='center'><strong><a href='' class='one style6'  id='CS' onclick='return ATTCORD(this.id);'> <center>COMPUTER SCIENCE</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='EC' onclick='return ATTCORD(this.id);'><center> ELECTRONICS & COMMUNICATION</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='EE'  onclick='return ATTCORD(this.id);'> <center>ELECTRICAL SCIENCE </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='EI' onclick=' return ATTCORD(this.id);'><center>ELECTRONICS & INSTRUMENTATION</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='ME' onclick=' return ATTCORD(this.id);'><center>MECHANICAL ENGINEERING</center></a></strong></p>"; 
	
	return false;
}




function ATTCORD(x)
{
	
	//alert(''+x);
	branchcord=x;
	document.getElementById("option").innerHTML="<p></p><p align='center'><strong><a href='' class='one style6'  id='1' onclick='return SHWATT(this.id);'> <center>FIRST YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='2' onclick='return SHWATT(this.id);'><center>SECOND YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='3'  onclick='return SHWATT(this.id);'> <center>THIRD YEARS </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='4'  onclick='return SHWATT(this.id);'> <center>FINAL YEARS </center></a></strong></p>";
	return false;
}

function SHWATT(x)
{
	
	//document.offop.action="showatthod.jsp?opt="+x+"";
	//document.offop.submit();
//document.getElementById("option").innerHTML="";	
	//alert('branch--->'+branchcord);
	//alert('SHWATT-->'+x+'');
	var url="shwattyrs.jsp?opt="+x+"&branch="+branchcord+"";
	request=getRequestObject();
	request.open("GET",url,true);
	//alert('CNTR--1-->'+url);
	request.onreadystatechange=SHWATT1;
	request.send(null);
	return false;
}

function SHWATT1()
{
	
	//alert('REQUEST RESPONSE-->'+request.responseText);
	//alert('STATUS-->'+request.status);
	
	document.offop.action="showattcord.jsp";
	document.offop.submit();
	return false;
	
}

function shdcord()
{
	document.offop.action="showattcord1.jsp";
	document.offop.submit();
	return false;
}


function Exempt1()
{
	//alert('exempt');
	
	
	
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='btech' onclick='return bak(this.id);' >Back</a>";
	document.getElementById("img").innerHTML="<img src='images/offi.JPG' width='350px' height='161'>";
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> BTECH SECTION </u></b></font></p><p>You can <font color='#990000'>View Fine imoposed on student  by clicking in options given aside.</font> This would facilitate you to monitor judicial collection of fine.</p><p>You have the facility to exempt fine  if valid reason is given , or fine is paid .<font color='#990000'>Please Select The Branch in which You want To View Attendance. </font> </p>";
	
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The Branch</u></font>";
	document.getElementById("option").innerHTML="<p align='center'><strong><a href='' class='one style6'  id='COMPUTER SCIENCE' onclick='return Exempt2(this.id);'> <center>COMPUTER SCIENCE</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='ELECTRONICS AND COMMUNICATION' onclick='return Exempt2(this.id);'><center> ELECTRONICS & COMMUNICATION</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='ELECTRICAL SCIENCE'  onclick='return Exempt2(this.id);'> <center>ELECTRICAL SCIENCE </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='ELECTRONICS AND INSTRUMENTATION' onclick=' return Exempt2(this.id);'><center>ELECTRONICS & INSTRUMENTATION</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='MECHANICAL ENGINEERING' onclick=' return Exempt2(this.id);'><center>MECHANICAL ENGINEERING</center></a></strong></p>"; 
	
	return false;
}
function Exempt2(x)
{
	//alert(''+x);
	v3(x);


	document.getElementById("kl").innerHTML="<a  href='' class='two' id='"+branch+"' onclick='return tech(this.id);' >Back</a>";
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The YEAR.</u></font>";
	document.getElementById("option").innerHTML="<p></p><p align='center'><strong><a href='' class='one style6'  id='1' onclick='return Exempt3(this.id);'> <center>FIRST YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='2' onclick='return Exempt3(this.id);'><center>SECOND YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='3'  onclick='return Exempt3(this.id);'> <center>THIRD YEARS </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='4'  onclick='return Exempt3(this.id);'> <center>FINAL YEARS </center></a></strong></p>";
	
	
	return false;
}

function Exempt3(x)
{
	//alert(''+x);
	request=getRequestObject();
	var url="cordyearexemptset.jsp?YEARS="+x+"";
	request.open("GET",url,true);
	request.onreadystatechange=Exempt4;
	request.send (null);
	return false;
}


function Exempt4()
{
	if(request.status==200)
	{
	document.offop.action="-brijco1viewstu.jsp";
	document.offop.submit();	
	}
	return false;
}

function v3(x)
{
	
	request=getRequestObject();
	
	branch=x;
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

