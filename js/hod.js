// JavaScript Document

var request;
var listname;
var listssn;
var unalotssn;
var unalotname;
var agsubid;
var agsubname;
var agsubcode;
var unagsubid;
var unagsubname;
var unagsubcode;
var agssn;
var agsec;
var agsid;
var agfaname;
var un1;
var un2;
var un3;

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
	//alert('----->HELLLLOOOO<----');
	return false;
}
function bak(x)
{
	//alert ('back');
	if(x=="back")
	{
		document.offop.action="index.htm";
		document.offop.submit();
	}
	if(x=="suballot")
	{
		suballot();
	}
	return false;
}
function VSUB()
{
	//alert ('VIEW SUBJECTS');
	document.offop.action="hodvsub.jsp";
	document.offop.submit();
	return false;
}
function RELOAD()
{
	//alert('YOU ARE GOING BACK');
	window.location.reload();
	return false;
}

function suballot()
{
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='btech' onclick='return RELOAD();' >Back</a>";
	document.getElementById("img").innerHTML="<img src='images/S34.JPG' width='350px' height='161'>";
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> SUBJECT ALLOTMENT SECTION </u></b></font></p><p>You can <font color='#990000'>view the allotment status for subjects by clicking the options given aside.</font> This would facilitate the faculty members  student also.</p><p>You have the facility to view notices<font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
	
	document.getElementById("title").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>Please Select The Field.</u></font>";
	document.getElementById("option").innerHTML="<br/><p align='center'><strong><a href=''  class='one style6' id='facultywise' onclick='return facultywise();'><center> FACULTY WISE</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='subjectwise'  onclick='return SUBJECTWISE();'> <center>SUBJECT WISE </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='FACULTY LEFT' onclick=' return UNALLOTEDFACULTY();'><center>FACULTY LEFT UNALLOTED </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='SUBJECT LEFT' onclick=' return SUBJUNALL();'><center>SUBJECT LEFT UNALLOTED </center></a></strong></p><br/>"; 
	document.getElementById("optbelow").innerHTML="<center><img src='images/2.jpg' width='175' /></center><br /><p><img src='images/latestnews.gif' height='18' />MID SEM SCHEDULE </p><p><blink>HOLIDAY NOTICES</blink></p><p>TEACHERS DUTY CHART<p align='left'><strong>Office Ph: 05212-2778456</strong><br /></p>";               
	
	return false;
}

function facultywise()
{
	document.getElementById("kl").innerHTML="<a  href='' class='two' id='suballot' onclick='return bak(this.id);' >Back</a>";
	document.getElementById("img").innerHTML="<img src='images/S33.JPG' width='350px' height='161'>";
	
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> SUBJECT ALLOTMENT FACULTY WISE SECTION </u></b></font></p><p>You can <font color='#990000'>view the allotment status for subjects by clicking the options given aside. <strong>This would facilitate You to view only those faculty which have been in assigned atleast one subject.</p></strong></font><p>You have the facility to view notices<font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
	
	document.getElementById("option").innerHTML="<p align='center'><br/><strong><font size='2px'><div align='center'>Please select the</div> <div align='center'>faculty from the combo</div><div align='center'> box given below to view</div> <div align='center'>the assignment of </div><div align='center'>subjects to the faculty.</div></font></strong></p>";
	
	
	
	request=getRequestObject();
	var opt="ASSIGN";
	var url="hodasfaculty.jsp?opt="+opt+"";
	
	request.open("GET",url,true);
	//alert('CNTR--1');
	request.onreadystatechange=popssn;
	request.send(null);
	
	return false;
}

function popssn()
{
	//alert('------popssn---');
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
				
				//alert('CREATING LIST SETT IN SSNNN');
				var list="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><u>Please Select The Faculty.<br/></u></div></font><br/><div id='one'></div><br/><div id='SSN'><div align='center'><strong>SSN</strong>&nbsp;&nbsp;&nbsp;<select   onchange='return A2();'  name='unasgssn' style='border:groove 2pt black' id='asgssn' /><option selected='selected'>--SELECT--</option>";
				
				
				var z=request.responseText.split(",");
				//alert(''+z+'');
				listname=z[1];
				listssn=z[0];
				//var len=z[0].length;
				
				var r=z[0].split(";");
				//alert('-----lennnn->'+r.length);
				for(y in r)
				{
					if(r[y]=="")
					{
					}
					else
					{
					
				      list=list+"<option>"+r[y]+"</option>";
					}
				}
				
				
				
				list=list+"</select></div></div><br/><br/><div id='NAME'></div>";
			document.getElementById("optbelow").innerHTML=list;
				popname();
			}
			break;
	}
				
	return false;
}


function popname()
{
	
	//alert('------popname---');
 
 document.getElementById("one").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><strong> * Select any one field</strong></div></font>";
				//alert('CREATING LIST FOR NAME');
				 var list="<div align='center'><strong>NAME</strong>&nbsp;&nbsp;&nbsp;<select onchange='return A1();'  name='unasgname' style='border:groove 2pt black' id='asgname' /><option selected='selected'>--SELECT--</option>";
				
				
				var z=listname.split(";");
				for(y in z)
				{
					if(z[y]=="")
					{
					}
					else
					{
					list=list+"<option>"+z[y]+"</option>";
					}
				}
				
				list=list+"</select></div><br/><div id='mesg'></div>"; 
				
				document.getElementById("NAME").innerHTML=list;
				
			
	return false;
}
function A2()
{
	//POPULATING NAME ON ITS OWN
	var a=document.getElementById("asgssn").value;
	//alert('----->Q2--'+a);
	
	 document.getElementById("one").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><strong> * Select any one field</strong></div></font>";
	
		//alert('in Q2 LISYname--->'+listname);
		//alert('in Q2 LISSSN--->'+listssn);
		var r=listname.split(";");
		var z=listssn.split(";");
		 var list="<div align='center'><strong>NAME</strong>&nbsp;&nbsp;&nbsp;<select onchange='return A1();'  name='unasgname' style='border:groove 2pt black' id='asgname' />";
				
				
				if(a.match('--SELECT--'))
					{
						//alert('---iiff-->MATCHING SELECT');
						list=list+"<option selected='selected'>--SELECT--</option>";
						document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> SUBJECT ALLOTMENT FACULTY WISE SECTION </u></b></font></p><p>You can <font color='#990000'>view the allotment status for subjects by clicking the options given aside. <strong>This would facilitate You to view only those faculty which have been in assigned atleast one subject.</p></strong></font><p>You have the facility to view notices<font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
					}
					
					else
					{
						list=list+"<option>--SELECT--</option>";
					}
				 for(y in z)
				{
					
					//alert('---'+z[y]);
					if(z[y].match(a))
					{
						//alert('---iiff-->z[y]--'+z[y]);
						list=list+"<option selected='selected'>"+r[y]+"</option>";
					}
					if(r[y]=="")
					{
					}
					else
					{
						list=list+"<option>"+r[y]+"</option>";
					} 
					
				}  
				
				list=list+"</select></div><br/><div id='mesg'></div>"; 
				
				document.getElementById("NAME").innerHTML=list;
		         ALSUB();
	
	return false;
}

function A1()
{
	//POPULATING SSN NUMBER ON ITS OWN
	
	
	
	var a=document.getElementById("asgname").value;
	
  //alert("----A1--asgname-->"+a);
		var count=0;
		var z=listname.split(";");
		var r=listssn.split(";");
		var list="";
		 if(a.match('--SELECT--') )
					{
						//alert('---iiff-->MATCHING SELECT');
						list=list+"<option selected='selected' id='select'>--SELECT--</option>";
						document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> SUBJECT ALLOTMENT FACULTY WISE SECTION </u></b></font></p><p>You can <font color='#990000'>view the allotment status for subjects by clicking the options given aside. <strong>This would facilitate You to view only those faculty which have been in assigned atleast one subject.</p></strong></font><p>You have the facility to view notices<font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
						
					}
		else
		{
		
		list="<option id='select'>--SELECT--</option>";
		}
				 for(y in z)
				{
					//alert('---'+z[y]);
					if(z[y].match(a))
					{
						count=count+1;
						//alert('---iiff-->z[y]--'+z[y]);
						list=list+"<option selected='selected'>"+r[y]+"</option>";
					}
					
					if(z[y]=="")
					{
					}
					
					
					else
					{
						//alert('Q11-else--->'+r[y]);
						list=list+"<option>"+r[y]+"</option>";
					} 
					
				}  
				
								
				if(count>1)
				{
					
					document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> SUBJECT ALLOTMENT FACULTY WISE SECTION </u></b></font></p><p>You can <font color='#990000'>view the allotment status for subjects by clicking the options given aside. <strong>This would facilitate You to view only those faculty which have been in assigned atleast one subject.</p></strong></font><p>You have the facility to view notices<font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
					
					document.getElementById("one").innerHTML="";
					document.getElementById("mesg").innerHTML="<div align='center'><font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><strong>TWO WITH SAME NAME HENCE PLZ DISTINGISH BY SSN</strong></font></div>";
					document.getElementById("select").selected="selected";
					
				}
				else
				{
					list=list+"<br/><br/>"; 
					document.getElementById("one").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><strong> * Select any one field</strong></div></font>";
				document.getElementById("mesg").innerHTML="";
				document.getElementById("asgssn").innerHTML=list;
				ALSUB();
				}
		
	 
	return false;
	
}

function UNALLOTEDFACULTY()
{
	//alert('UNALLOTED');
	
	request=getRequestObject();
	var opt="NOTASSIGN";
	var url="hodasfaculty.jsp?opt="+opt+"";
	
	request.open("GET",url,true);
	request.onreadystatechange=unalotssn;
	request.send(null);
	return false;
}
function unalotssn()
{
	
	//alert('------unalotssn---');
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
				
				//alert('CREATING UNALOT LIST SETT IN SSNNN');
				var list;
				
				
				var z=request.responseText.split(",");
				//alert(''+z+'');
				//alert('--->z[1]-->name->'+z[1]);
				//alert('--->z[0]-->ssn->'+z[0]);
				unalotname=z[1];
				unalotssn=z[0];
				var r=z[0].split(";");
				for(y in r)
				{
					
				list=list+"<option>"+r[y]+"</option>";
				}
				list="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><u>Please Select The Faculty.<br/></u></div></font><br/><div id='one'></div><br/><div id='SSN'><div align='center'><strong>SSN</strong>&nbsp;&nbsp;&nbsp;<select onchange='return U2();'  name='unasgssn' style='border:groove 2pt black' id='unasgssn' /><option selected='selected'>--SELECT--</option>"+list+"</select></div></div><br/><br/><div id='NAME'></div>";
				document.getElementById("optbelow").innerHTML=list;
		      	 unalotname();   
			 
			}
			 break;	
	}
				
	return false;
	
}

function unalotname()
{
	
	//alert('------unalotname---');
 
 
				//alert('CREATING LIST FOR NAME');
				 var list="<div align='center'><strong>NAME</strong>&nbsp;&nbsp;&nbsp;<select onchange='return U1();'  name='unasgname' style='border:groove 2pt black' id='unasgname' /><option selected='selected'>--SELECT--</option>";
				
				
				var z=unalotname.split(";");
				for(y in z)
				{
					list=list+"<option>"+z[y]+"</option>";
				}
				
				list=list+"</select></div><br/><div id='mesg'></div>"; 
				
				document.getElementById("NAME").innerHTML=list;
				document.getElementById("one").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><strong> * Select any one field</strong></div></font>";
				//document.getElementById("optbelow").innerHTML=list;
			
	return false;
	
}

function U1()
{
	
	//POPULATING SSN NUMBER ON ITS OWN
	
	
	
	    var a=document.getElementById("unasgname").value;
	    var count=0;
		var z=unalotname.split(";");
		var r=unalotssn.split(";");
		var list="";
		 if(a.match('--SELECT--'))
					{
						//alert('---iiff-->MATCHING SELECT');
						list=list+"<option selected='selected' id='select'>--SELECT--</option>";
						//facultywise();
						
					}
		else
		{
		
		list="<option id='select'>--SELECT--</option>";
		}
				 for(y in z)
				{
					//alert('---'+z[y]);
					if(z[y].match(a))
					{
						count=count+1;
						//alert('---iiff-->z[y]--'+z[y]);
						list=list+"<option selected='selected'>"+r[y]+"</option>";
					}
					
					
					else
					{
						//alert('Q11-else--->'+r[y]);
						list=list+"<option>"+r[y]+"</option>";
					} 
					
				}  
				
								
				if(count>1)
				{
					document.getElementById("one").innerHTML="";
					document.getElementById("mesg").innerHTML="<div align='center'><font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><strong>TWO WITH SAME NAME HENCE PLZ DISTINGISH BY SSN</strong></font></div>";
					
					
					 document.getElementById("wrt").innerHTML="<font size='+1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><u> <strong><blink>ERROR</blink></strong> </u></div> </font><br/<br/><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#464646'><strong>TWO FACULTY WITH SAME NAME EXIST<br/><br/></strong></font><font color='#990000'><strong>HENCE,</strong></font><font color='#464646'><strong>TRY TO DISTINGUISH WITH SSN NO.</strong></font></div></td></tr></table>";
					 
					 
					document.getElementById("select").selected='selected';
					
				}
				else
				{
					list=list+"<br/><br/>"; 
					document.getElementById("one").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><strong> * Select any one field</strong></div></font>";
				document.getElementById("mesg").innerHTML="";
				document.getElementById("unasgssn").innerHTML=list;
				
				var h=document.getElementById("unasgname").value;
				var h1=document.getElementById("unasgssn").value;
				
				if(h.match("--SELECT") || h1.match("--SELECT--"))
				{
					document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> FACULTY LEFT UNALLOTED  SECTION </u></b></font></p><p>You can <font color='#990000'>view the unalloted subjects status and sections  by clicking the options given aside. <strong>This would facilitate You to view only those section  and subjects which have been not assigned .</p></strong></font><p>You have the facility to view notices<font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
					
					document.getElementById("option").innerHTML="<p align='center'><br/><strong><font size='2px'><div align='center'>Please select the</div> <div align='center'>faculty from the combo</div><div align='center'> box given below to view</div> <div align='center'>the unassigned faculty and for assigning them subjects. </div></font></strong></p>";
					 					
				}
				else
				{
                document.getElementById("wrt").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>SUBJECTS <strong>NOT ALLOTED TO FACULTY</strong></u> <br/<br/><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#990000' ><b>FACULTY NAME:&nbsp;&nbsp;"+h+"<br/><br/>SSN NUMBER:&nbsp;&nbsp;"+h1+"<br/><br/></font></div></td></tr></table>";
				
				 document.getElementById("option").innerHTML="<p></p><p></p><p align='center'><strong><a href='' class='one style6'  id='UNFALLOTSUB' onclick='return UNFALLOTSUB();'> <center>ALLOT  SUBJECTS</center></a></strong></p><br/><br/><p align='center'><strong><a href='' class='one style6'  id='close' onclick='return suballot();'> <center>CLOSE THIS SECTION</center></a></strong></p>";  
				}
			}
		
	 
	return false;
	
}

function U2()
{
	//POPULATING NAME ON ITS OWN
	var a=document.getElementById("unasgssn").value;
	//alert('----->Q2--'+a);
	
	 document.getElementById("one").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><strong> * Select any one field</strong></div></font>";
	
		//alert('in Q2 LISYname--->'+listname);
		//alert('in Q2 LISSSN--->'+listssn);
		var r=unalotname.split(";");
		var z=unalotssn.split(";");
		 var list="<div align='center'><strong>NAME</strong>&nbsp;&nbsp;&nbsp;<select onchange='return U1();'  name='unasgname' style='border:groove 2pt black' id='unasgname' />";
				
				
				if(a.match('--SELECT--'))
					{
						//alert('---iiff-->MATCHING SELECT');
						list=list+"<option selected='selected'>--SELECT--</option>";
					}
					
					else
					{
						list=list+"<option>--SELECT--</option>";
					}
				 for(y in z)
				{
					//alert('---'+z[y]);
					if(z[y].match(a))
					{
						//alert('---iiff-->z[y]--'+z[y]);
						list=list+"<option selected='selected'>"+r[y]+"</option>";
					}
					else
					{
						list=list+"<option>"+r[y]+"</option>";
					} 
					
				}  
				
				list=list+"</select></div><br/><div id='mesg'></div>"; 
				
			
               
				document.getElementById("NAME").innerHTML=list;
				
					var h=document.getElementById("unasgname").value;
				var h1=document.getElementById("unasgssn").value;
				
					
				if(h.match("--SELECT") || h1.match("--SELECT--"))
				{
					document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> FACULTY LEFT UNALLOTED  SECTION </u></b></font></p><p>You can <font color='#990000'>view the unalloted subjects status and sections  by clicking the options given aside. <strong>This would facilitate You to view only those section  and subjects which have been not assigned .</p></strong></font><p>You have the facility to view notices<font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
					document.getElementById("option").innerHTML="<p align='center'><br/><strong><font size='2px'><div align='center'>Please select the</div> <div align='center'>faculty from the combo</div><div align='center'> box given below to view</div> <div align='center'>the unassigned faculty and for assigning them subjects. </div></font></strong></p>";
					//suballot();
					
				}
				else
				{
				 document.getElementById("option").innerHTML="<p></p><p></p><p align='center'><strong><a href='' class='one style6'  id='UNFALLOTSUB' onclick='return UNFALLOTSUB();'> <center>ALLOT  SUBJECTS</center></a></strong></p><br/><br/><p align='center'><strong><a href='' class='one style6'  id='close' onclick='return suballot();'> <center>CLOSE THIS SECTION</center></a></strong></p>";   
				 document.getElementById("wrt").innerHTML="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>SUBJECTS&nbsp;&nbsp;&nbsp;<font color='#464646'> <strong>NOT ALLOTED TO</strong></font>&nbsp;&nbsp;&nbsp;FACULTY</u> <br/<br/><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#990000' ><b>FACULTY NAME:&nbsp;&nbsp;<font color='#464646'><strong>"+h+"</strong></font><br/><br/>SSN NUMBER:&nbsp;&nbsp;<font color='#464646'><strong>"+h1+"</strong></font><br/><br/></font></div></td></tr></table>";
				
				}
	
	return false;
}


function UNFALLOTSUB()

{
	//alert('UNFALLOTSUB----ALLOT SUBJECTS');
	
	var h=document.getElementById("unasgname").value;
	var h1=document.getElementById("unasgssn").value;
				
	//alert(''+h+'<-->'+h1+'');
	document.offop.action="hodallotsub.jsp";
	document.offop.submit();
	
	
	
	return false;
}

	
		
	
	


function ALSUB()
{
	//alert('ALLOTMENT BY SSN');
	var name=document.getElementById("asgname").value;
	var ssn=document.getElementById("asgssn").value;
	//alert('ALLOT NAME- SSSNN-->'+name);
	//alert('ALLOT SSN--SSSSnn->'+ssn);
	
	//request1=getRequestObject();
	var opt="HOD";
	 request=getRequestObject();
	var url="GETSUBJ.jsp?ssn="+ssn+"&opt="+opt+"";
	//alert('HII');
	request.open("GET",url,true);
	//alert('HII---url--->'+url);
	//alert('-before readystaechang->'+request.readyState);
	request.onreadystatechange=allotedsubjects;
	//alert('-AFTER READY STATE CHANGE->'+request.readyState);
	request.send(null);
	
	return false;
}

function allotedsubjects()
{
	var name=document.getElementById("asgname").value;
	var ssn=document.getElementById("asgssn").value;
	//alert('--top--'+request.status);
	//alert('-->'+request.responseText);
	
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
				
				
				var list="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><u>SUBJECTS ALLOTED TO</u> <div align='center'><table><tr><td><div align='center'><font color='#990000'><strong>FACULTY NAME:</strong></font>&nbsp;&nbsp;<strong>"+name+"</strong></div></td></tr><tr><td><div align='center'><font color='#990000'><strong>SSNNO:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;<strong>"+ssn+"</strong></div></td></tr></table></div><br/><table bgcolor='#D8D8DA' align='center' border='0' bordercolor='#990000' cellspacing='4'><tr><td width='100'><font color='#990000'><div align='center'><u>SUBJECT ID</u></div></font></td><td width='50'><font color='#990000'><div align='center'><u>YEAR</u></div></font></td><td width='50'><font color='#990000'><div align='center'><u>SECTION</u></div></font></td><td width='300'><font color='#990000'><div align ='center'><u>SUBJECT NAME</u></div></font></td></tr>";
							
				var z=request.responseText.split(",");
				var x=z[0].split(";");
				var x1=z[1].split(";");
				var x2=z[2].split(";");
				for(y in x)
				{
					
					 list=list+"<tr><td width='100'><font color='#464646'><div align='center'><strong>"+x[y]+"</strong></div></font></td>";
				var q=x1[y].charAt(0);
				//alert('qqq-->'+q);
				var t=x1[y].substring(2);
				//alert('-tt->'+t);
				list=list+"<td width='100'><font color='#464646'><div align='center'><strong>"+q+"</strong></div></font></td><td width='50'><font color='#464646'><div align='center'><strong>"+t+"</strong></font></div></td><td width='300'><font color='#464646'><div align='center'><strong>"+x2[y]+"</strong></font></div></td></tr>";
				}
				list=list+"</table>";
				document.getElementById("wrt").innerHTML=list;
		       	 document.getElementById("option").innerHTML="<p></p><p align='center'><strong><a href='' class='one style6'  id='ALLOTMORE' onclick='return ALLOTMORE();'> <center>ALLOT MORE SUBJECTS</center></a></strong></p><br/><br/><p align='center'><strong><a href=''  class='one style6' id='REMOVEALLOT' onclick='return REMOVEALLOT();'><center>REMOVE THE ALLOTED SUBJECTS</center></a></strong></p>";   
			 
			}
			 break;	
			
			 
	}
				
	
	return false;
	
}

function ALLOTMORE()
{
	//alert('ALLOT MORE');
	document.offop.action="hodallotsub.jsp";
	document.offop.submit();
	return false;
}
function REMOVEALLOT()
{
	//alert('REMOVE ALLOT');
	var name=document.getElementById("asgname").value;
	var ssn=document.getElementById("asgssn").value;
	var url="removeallot.jsp?name="+name+"&ssn="+ssn+"";
	
	request.open("GET",url,true);
	//alert('open--1');
	request.onreadystatechange=REMV;
	request.send(null);
	return false;
}

function REMV()
{
	//alert(''+request.status);
	alert(''+request.responseText);
	//if(request.status==200)
	//{
	//alert(' SUCESSFULLY DEALLOCATED');
	//}
	var name=document.getElementById("asgname").value;
	var ssn=document.getElementById("asgssn").value;
	if(request.status==200)
	{
		document.getElementById("img").innerHTML="";
		
		var z=request.responseText.split(":");
		var q1=z[0].split(";");
		var q2=z[1].split(";");
		var q3=z[2].split(";");
		var q4=z[3].split(";"); 
		
		
		var list="<font color='#990000' size='2px'><strong><div align='left'><u>FACULTY NAME</u>&nbsp;:&nbsp;"+name+"</div><div align='left'><u>FACULTY SSN</u>&nbsp;:&nbsp;"+ssn+"</div><br/><div align='center'><strong><u>ALLOTMENT OF SUBJECTS </u></strong></div></font><br/>";
		
list=list+"<div align='center'><table  height='35' border='1' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding='5'><tr ><td width='100'><div align='center'><font color='#990000' size='2px'><b><u>SUBJECT NAME</u></b></font></div></td><td width='100'><div align='center'><font color='#990000' size='2px'><b><u>SUBJECT CODE</u></b></font></div></td><td width='100'><div align='center'><font color='#990000' size='2px' ><b><u>SUBJECT ID</u></b></font></div></td><td width='100'><div align='center'><font color='#990000' size='2px' ><b><u>SECTION</u></b></font></div></td><td width='100'><div align='center'><font color='#990000' size='2px' ><b><u>SELECT</u></b></font></div></td></tr> </table></div><br/></br></br><div align='center'>'<table border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding='5'>"+"<tr><td width='100'></td><td width='100'></td><td width='100'></td></tr>";
		
		
		for(y in q1)
		{
			
			if(q1[y]=="")
			{
				
			//alert('mat');
			}
			else
			{
			list=list+"<tr><td width='100'><font  size='2px'><b><div align='center'>"+q1[y]+"</div></b></font></td><td width='100'><font  size='2px'><b><div align='center'>"+q2[y]+"</div></b></font></td><td width='100'><font  size='2px'><b><div align='center'>"+q3[y]+"</div></b></font></td><td width='100'><font  size='2px'><b><div align='center'>"+q4[y]+"</div></b></font></td><td width='100'><font  size='2px'><b><div align='center'><input type='radio' name='atsub' value='"+q3[y]+"' id='"+q3[y]+":"+q4[y]+"'onFocus='return R1(this.id);' ></div></b></font></td></tr>";
			}
			
			
			
		
	}
	document.getElementById("wrt").innerHTML=list+"</table></div><div id='allot'></div><div id='ch'></div>";
	
	}
	return false;
	
}








function SUBJECTWISE()
{
	//alert('SUBJECT  WISE');
	
	//document.getElementById("kl").innerHTML="<a  href='' class='two' id='suballot' onclick='return bak(this.id);' >Back</a>";
	document.getElementById("img").innerHTML="<img src='images/54.jpg' width='350px' height='161'>";
	
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> SUBJECT WISE ALLOTMENT OF FACULTY  SECTION </u></b></font></p><p>You can <font color='#990000'>view the allotment status of faculty by clicking the options given aside. This would facilitate You to view <strong><u>only</u></strong> those subjects which have been  assigned atleast one one faculty.</p></font><p><font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
	
		request=getRequestObject();
	
	var opt="ASSIGN";
	var url="HASSUB.jsp?opt="+opt+"";
	
	request.open("GET",url,true);
	//alert('CNTR--1-->'+url);
	request.onreadystatechange=POPSUB;
	request.send(null);
	
	
	return false;
}

function POPSUB()
{
	//POPULATE THE ASSIGNED SUBID
	//alert('POPPING SUBJECTS');
	//alert('STATUS-->'+request.status);
	
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
				
				//alert('CREATING LIST SETT IN SSNNN');
										
				 z=request.responseText.split(",");
				 agsubid=z[0];
                 agsubname=z[1];
                 agsubcode=z[2];
                 unagsubid=z[3];
                 unagsubname=z[4];
                 unagsubcode=z[5];
                 agssn=z[6];
                 agsec=z[7];
                 agsid=z[8];
				 agfaname=z[9];
				// alert('---UNSUBID-->'+z[3]);
				 // alert('---UNSUBNAME-->'+z[4]);
				 // alert('---UNSUBCODE-->'+z[5]);
				 
				 /*------------->SUB ID SETTING<------*/ 
				 
				 var list="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><u>Please Select The Subject.<br/></u></div></font><br/><div id='one'></div><div id='SUBID'><div align='center'><strong>SUBJECT ID:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onchange='return S2ID();'  name='subid' style='border:groove 2pt black' id='subid' /><option selected='selected' id='selectedid'>--SELECT--</option>";
				
				var r=z[0].split(";");
				for(y in r)
				{
					
				list=list+"<option id='"+r[y]+"'>"+r[y]+"</option>";
				}
				list=list+"</select></div></div><br/>";
				
				/*------------->SUB NAME SETTING<------*/
				
				list=list+"<div id='SUBNAME'><div align='center'><strong>SUBJECT NAME:</strong>&nbsp;&nbsp;&nbsp;<select onchange='return S2NAME();'  name='subname' style='border:groove 2pt black' id='subname' /><option selected='selected' id='selectedname'>--SELECT--</option>";
				
				var u=z[1].split(";");
				for(y in u)
				{
					
				list=list+"<option id='"+u[y]+"'>"+u[y]+"</option>";
				}
				list=list+"</select></div></div><br/>";
				
				
				/*------------->SUB CODE SETTING<------*/
				
				list=list+"<div id='SUBID'><div align='center'><strong>SUBJECT CODE:</strong>&nbsp;&nbsp;&nbsp;<select onchange='return S2CODE();'  name='subcode' style='border:groove 2pt black' id='subcode' /><option selected='selected' id='selectedcode'>--SELECT--</option>";
				
				var v=z[2].split(";");
				for(y in v)
				{
					
				list=list+"<option id='"+v[y]+"'>"+v[y]+"</option>";
				}
				list=list+"</select></div></div><br/>";
				
				
				
			document.getElementById("optbelow").innerHTML=list;
				//popname(); 
			}
			break;
	}

	return false;
}



function S2ID()
{
	var subid=document.getElementById("subid").value;
	//alert('S2ID-->'+subid);
	if((subid=='--SELECT--'))
	{
		//alert('WE ALL ARE SELECT');
		document.getElementById("selectedname").selected='selected';
		document.getElementById("selectedcode").selected='selected';
	}
	else
	{
		var sid=agsubid.split(";");
		var sname=agsubname.split(";");
		var scode=agsubcode.split(";");
		for(y in sid)
		{
			//alert('SID[y]-->'+sid[y]);
			if(sid[y].match(subid))
			
			{
				//alert('SID[y]-if->'+sid[y]);
				//alert('sname--'+sname[y]+'');
				//alert('scode--'+scode[y]+'');
				document.getElementById(sname[y]).selected='selected';
				document.getElementById(scode[y]).selected='selected';
		       	}
			else
			{
				//alert('IN FOR ELSE')
			} 
		}
				 
		
		
	}
	ALLF();
	return false;
}

function S2NAME()
{
	var subname=document.getElementById("subname").value;
	
	if((subname=='--SELECT--'))
	{
		//alert('WE ALL ARE SELECT');
		document.getElementById("selectedid").selected='selected';
		document.getElementById("selectedcode").selected='selected';
	}
	else
	{
		var z;
		var sid=agsubid.split(";");
		var sname=agsubname.split(";");
		var scode=agsubcode.split(";");
		//alert('sid length-->'+sid.length);
		for(y in sname)
		{
			//alert('sname[y]-->'+sname[y]);
			if(sname[y].match(subname))
			
			{
				 //alert('SID[y]-MATCH SNAME---yy->'+y+'->'+sname[y]);
				//alert('SID[y]-if->'+sid[y]);
				//alert('sid--'+sid[y]+'');
				//alert('scode--'+scode[y]+'');
				 document.getElementById(scode[y]).selected='selected';
				document.getElementById(sid[y]).selected='selected';
		       
			}
			else
			{
				//alert('IN FOR ELSE')
			} 
		}
		
			
		
	}
	//alert('SSSS2222');
	ALLF();
	return false;
}

function S2CODE()
{
	var subcode=document.getElementById("subcode").value;
	//alert('S2 CODE');
	if((subcode=='--SELECT--'))
	{
		//alert('WE ALL ARE SELECT');
		document.getElementById("selectedname").selected='selected';
		document.getElementById("selectedid").selected='selected';
	}
	else
	{
		var sid=agsubid.split(";");
		var sname=agsubname.split(";");
		var scode=agsubcode.split(";");
		for(y in scode)
		{
			//alert('SID[y]-->'+scode[y]);
			if(scode[y].match(subcode))
			
			{
				//alert('MATCH SCODE');
				//alert('SID[y]-if->'+sid[y]);
				//alert('sname--'+sname[y]+'');
				//alert('scode--'+scode[y]+'');
				document.getElementById(sname[y]).selected='selected';
		        document.getElementById(sid[y]).selected='selected';
			}
			else
			{
				//alert('IN FOR ELSE')
			} 
		}
	
	}
	
	//alert('SSSS2222');
	ALLF();
	return false;
} 

function ALLF()
{
	var subid=document.getElementById("subid").value;
	var subname=document.getElementById("subname").value;
	var subcode=document.getElementById("subcode").value;
	
	if(subid.match("--SELECT--"))
	{
		//alert('SELECT');
		SUBJECTWISE();
	}
	else
	{
		
	
	var list="<font-weight: bold;font-family: Verdana, Arial, Helvetica, sans-serif;><div align='center'><strong><font color='#990000'>SUBJECT ID:</font>&nbsp;&nbsp;&nbsp;"+subid+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000'>SUBJECT CODE:</font>&nbsp;&nbsp;&nbsp;"+subcode+"</div></strong><div align='center'><strong><font color='#990000'>SUBJECT NAME:</font>&nbsp;&nbsp;&nbsp;"+subname+"</strong></div><br/><div align='center'><strong><u>ALLOTED TO FACULTY</u></strong></div></font><br/>";
	
	var z=agsid.split(";");
	var u=agssn.split(";");
	var v=agsec.split(";");
	var n=agfaname.split(";"); 
	
	list=list+"<table bgcolor='#D8D8DA' align='center' border='0' bordercolor='#990000' width='297'><tr><div align='center'><td><strong><font color='#990000'>SSN NO.</font></strong></td><td><strong><font color='#990000'>NAME</font></strong></div></td><td><strong><font color='#990000'>YEAR</font></strong></td><td><strong><font color='#990000'>SECTION</font></strong></td></div></tr>";
	for(y in z)
	{
		if(z[y].match(subid))
					  {
						  //alert('MATCH MATCH');
						  //var g=v[y].charAt(0);
						  var g=v[y].split("-");
						 // alert('--->section');
						 // alert('cahr--->'+g);
						list=list+"<tr><div align='center'><td><strong>"+u[y]+"</strong></td><td><strong>"+n[y]+"</strong></td><td><strong>"+g[0]+"</strong></td><td><strong>"+g[1]+"</strong></td></div></tr> "; 
						 
					  }
		
	}
	list=list+"</table>"; 
	
//P(list);
   
	document.getElementById("wrt").innerHTML=list;
	}
	return false;
}




function ATTHOD()
{
	
	
	document.getElementById("option").innerHTML="<p></p><p align='center'><strong><a href='' class='one style6'  id='1' onclick='return SHWATT(this.id);'> <center>FIRST YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='2' onclick='return SHWATT(this.id);'><center>SECOND YEARS</center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='3'  onclick='return SHWATT(this.id);'> <center>THIRD YEARS </center></a></strong></p><p align='center'><strong><a href=''  class='one style6' id='4'  onclick='return SHWATT(this.id);'> <center>FINAL YEARS </center></a></strong></p>";
	return false;
}

function SHWATT(x)
{
	
	//document.offop.action="showatthod.jsp?opt="+x+"";
	//document.offop.submit();
//document.getElementById("option").innerHTML="";	
	
	//alert('SHWATT-->'+x+'');
	var url="shwattyrshod.jsp?opt="+x+"";
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
	
	document.offop.action="showatthod.jsp";
	document.offop.submit();
	return false;
	
}

function shd()
{
	document.offop.action="shwatthod1.jsp";
	document.offop.submit();
	return false;
}


function SUBJUNALL()
{
	//alert('SUBJECT UNALLOTED');
	
	document.getElementById("img").innerHTML="<img src='images/54.jpg' width='350px' height='161'>";
	
	document.getElementById("wrt").innerHTML="<p>You are in the&nbsp;&nbsp;&nbsp;&nbsp;<font color='#990000' size='3px'><b><u> SUBJECT UNALLOTED SECTION </u></b></font></p><p>You can <font color='#990000'>view the UNALLOTED subjects by clicking the options given aside. This would facilitate You to view <strong><u>only</u></strong> those subjects which have not yet been assigned at least one of faculty.</p></font><p><font color='#990000'>Please click <u>LOG OUT</u> to sign out given aside. </font> </p>";
	
		request=getRequestObject();
	
	var opt="UNASSIGNSUB";
	var url="SUBUN.jsp?opt="+opt+"";
	
	request.open("GET",url,true);
	//alert('CNTR--1-->'+url);
	request.onreadystatechange=SUBJALL2;
	request.send(null);
	
	return false;
}

function SUBJALL2()
{
	 //alert('SUBJALL2');
	//alert(''+request.responseText);
	if(request.status==200)
	{
		//alert('STATUS');
		var z=request.responseText.split("-");
		//alert('z-->'+z);
		
		var p;
		
		 var list;
				
				
				
				
				
				
				
				var r=z[0].split(";");
				un1=r;
				for(y in r)
				{
					
				list=list+"<option id='"+r[y]+"'>"+r[y]+"</option>";
				}
				list=list+"</select></div></div><br/>";
				
				p=p+"<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><u>Please Select The Subject.<br/></u></div></font><br/><div id='one'></div><div id='SUBID'><div align='center'><strong>SUBJECT ID:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onchange='return UNID(this.value);'  name='subid' style='border:groove 2pt black' id='subid' /><option selected='selected' id='selectedid'>--SELECT--</option>"+list; 																																																													
				
				/*------------->SUB NAME SETTING<------*/
				
				list=null;
				
				var u=z[1].split(";");
				un2=u;
				for(y in u)
				{
					
				list=list+"<option id='"+u[y]+"'>"+u[y]+"</option>";
				}
				list=list+"</select></div></div><br/>";
				
				
				
				p=p+"<div id='SUBNAME'><div align='center'><strong>SUBJECT NAME:</strong>&nbsp;&nbsp;&nbsp;<select onchange='return UNNAME(this.value);'  name='subname' style='border:groove 2pt black' id='subname' /><option selected='selected' id='selectedname'>--SELECT--</option>"+list;
				/*------------->SUB CODE SETTING<------*/
				
				list=null;
				
				var v=z[2].split(";");
				un3=v;
				
				for(y in v)
				{
					
				list=list+"<option id='"+v[y]+"'>"+v[y]+"</option>";
				}
				list=list+"</select></div></div><br/>";
				
				p=p+"<div id='SUBID'><div align='center'><strong>SUBJECT CODE:</strong>&nbsp;&nbsp;&nbsp;<select onchange='return UNCODE(this.value);'  name='subcode' style='border:groove 2pt black' id='subcode' /><option selected='selected' id='selectedcode'>--SELECT--</option>"+list;
				
			document.getElementById("optbelow").innerHTML=p;
				//popname(); 
		
	}

	return false;
}
		
		
function UNID(x)
{
	//alert(''+x);
	for(y in un1)
	
	{
	   
	
		if(un1[y].match(x))
		{
		//alert('match'+un1[y]);
		document.getElementById(un2[y]).selected='selected';
		 document.getElementById(un3[y]).selected='selected';
		
	
	          
	              
		
	
	             var list="<br/><table bgcolor='#D8D8DA' align='center' border='1' bordercolor='#990000' width='297'><tr><td><br/><font-weight: bold;font-family: Verdana, Arial, Helvetica, sans-serif;><div align='center'><strong><font color='#990000'>SUBJECT ID:</font>&nbsp;&nbsp;&nbsp;<font color='#464646'>"+un1[y]+"</font></strong></div></font><br/><div align='center'><strong><font color='#990000'>SUBJECT CODE:</font>&nbsp;&nbsp;&nbsp;<font color='#464646'>"+un3[y]+"</font></strong></div><br/><div align='center'><strong><font color='#990000'>SUBJECT NAME:</font>&nbsp;&nbsp;&nbsp;<font color='464646'>"+un2[y]+"</font></strong></div><br/></td></tr></table>";
				 
						 
	 
				 
	document.getElementById("wrt").innerHTML=list;
		            
		        
	        }
	}
		
	return false;
}

function UNNAME(x)
{
	//alert(''+x);
	
	for(y in un2)
	{
		if(un2[y].match(x))
		{
		//alert('match'+un2[y]);
		document.getElementById(un1[y]).selected='selected';
		 document.getElementById(un3[y]).selected='selected';
		 
		  var list="<br/><table bgcolor='#D8D8DA' align='center' border='1' bordercolor='#990000' width='297'><tr><td><br/><font-weight: bold;font-family: Verdana, Arial, Helvetica, sans-serif;><div align='center'><strong><font color='#990000'>SUBJECT ID:</font>&nbsp;&nbsp;&nbsp;<font color='#464646'>"+un1[y]+"</font></strong></div></font><br/><div align='center'><strong><font color='#990000'>SUBJECT CODE:</font>&nbsp;&nbsp;&nbsp;<font color='#464646'>"+un3[y]+"</font></strong></div><br/><div align='center'><strong><font color='#990000'>SUBJECT NAME:</font>&nbsp;&nbsp;&nbsp;<font color='464646'>"+un2[y]+"</font></strong></div><br/></td></tr></table>";
	
				 
	document.getElementById("wrt").innerHTML=list;
		break;
		}
	}
		
	return false;
}

function UNCODE(x)
{
	//alert(''+x);
	for(y in un3)
	{
		if(un3[y].match(x))
		{
		//alert('match'+un2[y]);
		document.getElementById(un1[y]).selected='selected';
		 document.getElementById(un2[y]).selected='selected';
		  var list="<br/><table bgcolor='#D8D8DA' align='center' border='1' bordercolor='#990000' width='297'><tr><td><br/><font-weight: bold;font-family: Verdana, Arial, Helvetica, sans-serif;><div align='center'><strong><font color='#990000'>SUBJECT ID:</font>&nbsp;&nbsp;&nbsp;<font color='#464646'>"+un1[y]+"</font></strong></div></font><br/><div align='center'><strong><font color='#990000'>SUBJECT CODE:</font>&nbsp;&nbsp;&nbsp;<font color='#464646'>"+un3[y]+"</font></strong></div><br/><div align='center'><strong><font color='#990000'>SUBJECT NAME:</font>&nbsp;&nbsp;&nbsp;<font color='464646'>"+un2[y]+"</font></strong></div><br/></td></tr></table>";
				 
						 
	 
				 
	document.getElementById("wrt").innerHTML=list;
		break;
		}
	}
		
	return false;
}
		
		
		
		
		
		
		
	