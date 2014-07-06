// JavaScript Document


var z;
function bak(x)
{
	if(x=="back")
	{
	//alert('--bak--');
	document.getElementById("back").href="index.htm";
	}
}


function cl()
{
	window.location.reload();
}
function change(x)
{
	//this.facultyssn=x;
	//facultyssn=this.facultyssn;
	//alert('--->xx-->'+x);
	//alert('--->facultyssn-->'+facultyssn);
document.getElementById("img").innerHTML="<img src='images/34.JPG' width='350px' height='161'>";
	document.getElementById("wrt").innerHTML="<div align='center'><span class='style1'> <div align='center'><u>CHANGE PASSWORD</u></span>&nbsp;&nbsp;&nbsp;&nbsp;SSN NO. &nbsp;&nbsp;<font color='#464646'> "+x+"</font> </div><br> <font size='-1'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000'  width='370'><tr> <td><br/> <div align='center'>PREVIOUS PASSWORD: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='prepass' style='border:groove 2pt black ' onfocus='fld(this);' id='prepass' title='PLEASE FILL IN THE PREVIOUS PASSWORD'></div> <br/> <div align='center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW PASSWORD: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='newpass' style='border:groove 2pt black ' id='newpass' onfocus='fld(this);'  title='PLEASE FILL IN THE NEW PASSWORD'><br/><br/><div align='center'>RE-TYPE NEW PASSWORD:<input type='text' name='renewpass' style='border:groove 2pt black ' id='renewpass' onfocus='fld(this);'    title='PLEASE FILL IN THE NEW PASSWORD AGAIN'><br/>&nbsp;</div></td></tr></table></div></font></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CHANGE' id='faculty' onclick=' return changepass()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id=''  onclick='return cl();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";	
	//alert('WANT TO CHANGE PASSWORD');
	
	return false;
}


function changepass()
{
	
	var old=document.getElementById("prepass");
	var newp=document.getElementById("newpass");
	var repass=document.getElementById("renewpass");
	
		//alert('old length-->'+old.value.length);
	if(old.value=="")
	{
		document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE FILL THE OLD PASSWORD </b></blink></font> "
		old.style.border='solid 2pt #990000';
	}
	
	else if(newp.value=="")
	{
		document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE FILL THE NEW PASSWORD </b></blink></font> "
		newp.style.border='solid 2pt #990000';
	}
	
	else if(repass.value=="")
	{
		document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b>PLEASE CONFIRM THE NEW PASSWORD </b></blink></font> "
		repass.style.border='solid 2pt #990000';
	}
	

	else if((old.value.length) < 6)
	{
		document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b> OLD PASSWORD IS NOT VALID. MUST BE OF SIX CHARACTERS. </b></blink></font> "
		old.style.border='solid 2pt #990000';
		} 
		
		else if((newp.value.length)<6)
		{
			//alert('newp<6');
			document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b> NEW PASSWORD IS NOT VALID. MUST BE OF SIX CHARACTERS. </b></blink></font> "
		newp.style.border='solid 2pt #990000';
			
		}
		
			
		else if((repass.value).match(newp.value))
		{
			//alert('--MATCH--');
			
			request=getRequestObject();
			
			var f=old.value;
			 var r=newp.value;
			 var s=repass.value;
			
			 var url="change.jsp?old="+f+"&new="+r+"&renew="+s+"";
			request.open("GET",url,true);
			// alert('--URL-->'+url);
			request.onreadystatechange=changesucess;
			request.send(null);
			
					
		}
		
		else
		{
			//alert('newp<6');
			document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b> NEW PASSWORD & RE TYPE PASSWORD  DO NOT MATCH .</b></blink></font> "
		repass.style.border='solid 2pt #990000';
		newp.style.border='solid 2pt #990000';
			
		}
			
	
	
	
	//alert('chg rEQUIRED');
	return false;
}

function changesucess()
{
	//alert('RETURN OF change jSP-->request.status'+request.status);
	
	if(request.status==200)
	{
		
		var a=request.responseText;
		//alert('request.rsponse TEXT--->'+a);
		if(a.match("sucess"))
		{
		 document.getElementById("wrt").innerHTML="<font size='+1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><u> <strong><blink>CHANGED</blink></strong> </u></div> </font><br/<br/><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#990000'><strong>YOUR PASSWORD HAS BEEN CHANGED SUCESSFULLY.</font></strong><br/><br/><font color='#464646'><strong><div align='center'><u>THANK YOU</u></div></strong></font></td></tr></table><br/><br/><div align='center'><input type='button' value='CLOSE' id='close'  onclick='return cl();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div>";
		}
		
		else
		{
			document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b> OLD PASSWORD IS INCORRECT .</b></blink></font> "	
		}
	}
	
	return false;
	
	}




function ENTATT(x)
{
	  //ssn=facultyssn;
	 //alert('ENTATT--SSN-->'+x);
	 var ssn=x;
	//alert('ENTER ATTENDANCE');
	var opt="FACULTY";
	 request=getRequestObject();
	var url="GETSUBJ.jsp?ssn="+x+"&opt="+opt+"";
	//alert('HII');
	request.open("GET",url,true);
	//alert('HII---url--->'+url);
	//alert('-before readystaechang->'+request.readyState);
	request.onreadystatechange=facultysubjects;
	//alert('-AFTER READY STATE CHANGE->'+request.readyState);
	request.send(null);
	
	return false;
}

function facultysubjects()
{
	//alert('REQUEST STATUS--->'+request.status);
	//alert('RESPONSE-->'+request.responseText);
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
	
		//alert('IN-- IF');
		var z1=request.responseText.split(",");
	z=z1;
		var subid=z1[0].split(";");
		var sec=z1[1].split(";");
		var name=z1[2].split(";");
		var subcode=z1[3].split(";");
		
		var list="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center' id='tit'><u> <strong>CHOOSE THE FIELDS </strong></u></div></font><br/><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000'><tr><td><br/>";
		var list1="<div align='left'><font color='#990000'><strong>&nbsp;&nbsp;&nbsp;SUBJECT ID:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onchange='return FACHOOSE1();'  name='fasubid' style='border:groove 2pt black' id='fasub' /><option >--SELECT--</option>";
		var list2="<div align='left'><font color='#990000'><strong>&nbsp;* SECTION:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select name='fasection' style='border:groove 2pt black' id='fasection' /><option>--SELECT--</option>";
		var list3="<div align='left'><font color='#990000'><strong>&nbsp;&nbsp;&nbsp;NAME:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onchange='return FACHOOSE2();'  name='fasubname' style='border:groove 2pt black' id='fasubname' /><option selected='selected'>--SELECT--</option>";
		var list4="<div align='left'><font color='#990000'><strong>&nbsp;&nbsp;&nbsp;SUBJECT CODE:</strong></font>&nbsp;<select onchange='return FACHOOSE3();'  name='fasubcode' style='border:groove 2pt black' id='fasubcode' /><option >--SELECT--</option>";
		//alert('IN--IF--ALL SPLIT COMPLETED-');
		var flag;
		var flag1;
      for(y in subid)
	  {
		  flag="false";
		  for(i=0;i<y;i++)
		  {
			  //alert('in i--'+i+'--subid[i]-->'+subid[i]);
			 //alert('--in--y-->'+y+'---subid[y]-->'+subid[y]);
			if(subid[i].match(subid[y]))
			{
				flag="true";
			}
			else
			{
				//alert('ELSE');
			}
		  }
		  
		   flag1="false";
		  for(i=0;i<y;i++)
		  {
			  //alert('in i--'+i+'--subid[i]-->'+subid[i]);
			 //alert('--in--y-->'+y+'---subid[y]-->'+subid[y]);
			if(sec[i].match(sec[y]))
			{
				flag1="true";
			}
			else
			{
				//alert('ELSE');
			}
		  }
		  //alert('EXIT i FOR-->'+flag);
		  if(flag=="false")
		  {
		  // alert('--->name-->'+name[y]);
		  list1=list1+"<option id='"+subid[y]+"' >"+subid[y]+"</option>";
		  //list2=list2+"<option id='"+sec[y]+"' >"+sec[y]+"</option>";
		  list3=list3+"<option id='"+name[y]+"' >"+name[y]+"</option>";
		  list4=list4+"<option id='"+subcode[y]+"' >"+subcode[y]+"</option>";
		  
	       }
		   if(flag1=="false")
		   {
			   list2=list2+"<option id='"+sec[y]+"' >"+sec[y]+"</option>";
		   }
	  }
	      list1=list1+"</select></div><br/>";
	      list2=list2+"</select></div><br/>";
	      list3=list3+"</select></div><br/>";
		  list4=list4+"</select></div><br/>";
		  
		 list=list+list1+list2+list3+list4+"</td></tr></table><br/><br/><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='ENTER' id='enteratt' onclick=' return ENTATTEND()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id=''  onclick='return cl();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div";
	  
         document.getElementById("wrt").innerHTML=list;
		 document.getElementById('ch').innerHTML="<br/><font color='#990000' size='1px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><div align='left'> '*' FIELD IS NECESSARY TO BE FILLED</div></font>";	
		

	} 
	break;
	}
	
	return false;
}

function FACHOOSE1()
{
	//alert('---FACULTY CHOOSE1--');
	
	var count;
	document.getElementById('ch').innerHTML="";
	var n1=document.getElementById("fasub").value;
	
	
	
	    var subid=z[0].split(";");
		var sec=z[1].split(";");
		var name=z[2].split(";");
		var subcode=z[3].split(";");
		//alert('SUBID-->'+subid);
		
			for(y in subid)
			{
				if(subid[y]==(n1))
				{
					count=y;
					document.getElementById(name[count]).selected="selected";
	                 document.getElementById(subcode[count]).selected="selected";
					break;				
				}
			}
			        
	                  //document.getElementById(sec[count]).selected="selected";
	                  
		 //alert('COUNT--->'+count);    
	
	return false;
}



function FACHOOSE2()
{
	var count;
	//alert('---FACULTY CHOOSE2--');
	//alert('---z--'+z);
	document.getElementById('ch').innerHTML="";
	var n1=document.getElementById("fasubname").value;
	//alert('fasubname-->'+n1);
	    var subid=z[0].split(";");
		var sec=z[1].split(";");
		var name=z[2].split(";");
		var subcode=z[3].split(";");
		//alert('SECC-->'+sec);
		
			for(y in name)
			{
				if(name[y]==(n1))
				{
					 count=y;
					 document.getElementById(subid[count]).selected="selected";
					  document.getElementById(subcode[count]).selected="selected";
					break;
					
				}
			}
		              
	                  
	                 
		   // alert('COUNT--->'+count);              
	
	return false;
}

function FACHOOSE3()
{
	var count;
	//alert('---FACULTY CHOOSE4--');
	//alert('---z--'+z);
	var n1=document.getElementById("fasubcode").value;
	document.getElementById('ch').innerHTML="";
	    var subid=z[0].split(";");
		var sec=z[1].split(";");
		var name=z[2].split(";");
		var subcode=z[3].split(";");
		//alert('SUBID-->'+subid);
		
			for(y in subcode)
			{
				if(subcode[y]==(n1))
				{
					
					// count=y;
					 document.getElementById(subid[y]).selected="selected";
	                 document.getElementById(name[y]).selected="selected";
	                  break;
					
				}
			}
			
			         
	                  
			// alert('COUNT--->'+count);      
		
	
	return false;
} 

function ENTATTEND()
{
	var n1=document.getElementById("fasub").value;
	var n2=document.getElementById("fasection").value;
	var n3=document.getElementById("fasubname").value;
	var n4=document.getElementById("fasubcode").value;
	//alert('---ENTATTEND-->n1-->'+n1);
	//alert('---ENTATTEND-->n2-->'+n2);
	//alert('---ENTATTEND-->n3-->'+n3);
	//alert('---ENTATTEND-->n4-->'+n4);
	document.getElementById("ch").innerHTML="";
	if((n1=="--SELECT--") || (n2=="--SELECT--") || (n3=="--SELECT--") || (n4=="--SELECT--"))
	{
		if(n2=="--SELECT--")
		{
	document.getElementById('ch').innerHTML="<br/><font color='#990000' size='1px' font-family: 'Verdana, Arial, Helvetica, sans-serif'>'*' FIELD IS NECESSARY TO BE FILLED<br/><blink><b> PLEASE FILL IN ALL THE ENTRIES.</b><blink></font>";	
		}
		else
		{
			document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><div align='center'><blink><b> PLEASE FILL IN ALL THE ENTRIES.</b></blink></div></font>";	
		}
	}
	else
	{
		 
		 request=getRequestObject();
	   var url="FCHKSUBJ.jsp?subid="+n1+"&sect="+n2+"&subname="+n3+"&subcode="+n4+"";
	//alert('----url-->'+url);
	request.open("GET",url,true);
	//alert('chk');
	request.onreadystatechange=VERIFIEDATT;
	request.send(null);
	  	
	}
	//alert('---VERIFYIED--ENTATTTEND--');
	return false;
}

function VERIFIEDATT()
{
	//alert('--VERIFIED ATT---reqst--status-->'+request.status);
	//alert('--response--->'+request.responseText);
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
	
	  		   var a=request.responseText;
		
		       if(a.match("CORRECT"))
		      {
			     //alert('RIGHT');
				 var id=document.getElementById("fasub").value;
	             var s=document.getElementById("fasection").value;
				 var u="STUDLIST.jsp?id="+id+"&sec="+s+"";
				//alert('SUBID-->'+id);
				//alert('SECTION--->'+s);
				//alert('URL--->'+u);
				document.facultyop.action=u;
				document.facultyop.submit();
		        }
		        else
		        {
			        document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><div align='center'><blink><b> PLEASE FILL IN THE CORRECT ENTRIES.</b></blink></div></font>";	
		           }
			}
			break;
	}
	return false;
}

function month(x)
{
	document.facultyop.action="faatt.jsp";
	document.facultyop.submit();
	
	return false;
}


function VIEWATT(x)
{
	//alert('VIEW ATTENDANCE');
	
	//alert('HELLP');
	 //alert('ENTATT--SSN-->'+x);
	 //var ssn=x;
	//alert('ENTER ATTENDANCE');
	var opt="FACULTY";
	 request=getRequestObject();
	var url="GETSUBJ.jsp?ssn="+x+"&opt="+opt+"";
	//alert('HII');
	request.open("GET",url,true);
	//alert('HII---url--->'+url);
	//alert('-before readystaechang->'+request.readyState);
	request.onreadystatechange=facultysubjects1;
	//alert('-AFTER READY STATE CHANGE->'+request.readyState);
	request.send(null);
	
	return false;
}

function facultysubjects1()
{
	//alert('REQUEST STATUS--->'+request.status);
	//alert('RESPONSE-->'+request.responseText);
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
	
		//alert('IN-- IF');
		var z1=request.responseText.split(",");
	z=z1;
		var subid=z1[0].split(";");
		var sec=z1[1].split(";");
		var name=z1[2].split(";");
		var subcode=z1[3].split(";");
		
		var list="<font size='-1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center' id='tit'><u> <strong>CHOOSE THE FIELDS </strong></u></div></font><br/><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000'><tr><td><br/>";
		var list1="<div align='left'><font color='#990000'><strong>&nbsp;&nbsp;&nbsp;SUBJECT ID:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onchange='return FACHOOSE1();'  name='fasubid' style='border:groove 2pt black' id='fasub' /><option >--SELECT--</option>";
		var list2="<div align='left'><font color='#990000'><strong>&nbsp;* SECTION:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select name='fasection' style='border:groove 2pt black' id='fasection' /><option>--SELECT--</option>";
		var list3="<div align='left'><font color='#990000'><strong>&nbsp;&nbsp;&nbsp;NAME:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select onchange='return FACHOOSE2();'  name='fasubname' style='border:groove 2pt black' id='fasubname' /><option selected='selected'>--SELECT--</option>";
		var list4="<div align='left'><font color='#990000'><strong>&nbsp;&nbsp;&nbsp;SUBJECT CODE:</strong></font>&nbsp;<select onchange='return FACHOOSE3();'  name='fasubcode' style='border:groove 2pt black' id='fasubcode' /><option >--SELECT--</option>";
		var list5="<div align='left'><font color='#990000'><strong>&nbsp;&nbsp; * &nbsp;MONTH:</strong></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		//alert('IN--IF--ALL SPLIT COMPLETED-');
		var flag;
		var flag1;
      for(y in subid)
	  {
		  flag="false";
		  for(i=0;i<y;i++)
		  {
			  //alert('in i--'+i+'--subid[i]-->'+subid[i]);
			 //alert('--in--y-->'+y+'---subid[y]-->'+subid[y]);
			if(subid[i].match(subid[y]))
			{
				flag="true";
			}
			else
			{
				//alert('ELSE');
			}
		  }
		  
		   flag1="false";
		  for(i=0;i<y;i++)
		  {
			  //alert('in i--'+i+'--subid[i]-->'+subid[i]);
			 //alert('--in--y-->'+y+'---subid[y]-->'+subid[y]);
			if(sec[i].match(sec[y]))
			{
				flag1="true";
			}
			else
			{
				//alert('ELSE');
			}
		  }
		  //alert('EXIT i FOR-->'+flag);
		  if(flag=="false")
		  {
		  // alert('--->name-->'+name[y]);
		  list1=list1+"<option id='"+subid[y]+"' >"+subid[y]+"</option>";
		  //list2=list2+"<option id='"+sec[y]+"' >"+sec[y]+"</option>";
		  list3=list3+"<option id='"+name[y]+"' >"+name[y]+"</option>";
		  list4=list4+"<option id='"+subcode[y]+"' >"+subcode[y]+"</option>";
		  
	       }
		   if(flag1=="false")
		   {
			   list2=list2+"<option id='"+sec[y]+"' >"+sec[y]+"</option>";
		   }
	  }
	      list1=list1+"</select></div><br/>";
	      list2=list2+"</select></div><br/>";
	      list3=list3+"</select></div><br/>";
		  list4=list4+"</select></div><br/>";
		  list5=list5+"<select name='month' id='month' style='border:groove 2pt black' onfocus='return fld(this.id);'><option>--SELECT--</option><option>JANUARY</option><option>FEBURARY</option><option>MARCH</option><option>APRIL</option><option>MAY</option></select></div><br/>";
		 list=list+list1+list2+list3+list4+list5+"</td></tr></table><br/><br/><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='SHOW' id='enteratt' onclick=' return VIEWATTD()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id=''  onclick='return cl();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div";
	  
         document.getElementById("wrt").innerHTML=list;
		 document.getElementById('ch').innerHTML="<br/><font color='#990000' size='1px' font-family: 'Verdana, Arial, Helvetica, sans-serif'><div align='left'> '*' FIELD IS NECESSARY TO BE FILLED</div></font>";	
		

	} 
	break;
	}
	
	return false;
}

function VIEWATTD()
{
	//alert('VIEWING');
	var a=document.getElementById("month").value;
	var b=document.getElementById("fasection").value;
	//alert(''+a+'');
	if(a=="--SELECT--" || b=="--SELECT--" )
		{
	document.getElementById('ch').innerHTML="<br/><font color='#990000' size='1px' font-family: 'Verdana, Arial, Helvetica, sans-serif'>'*' FIELD IS NECESSARY TO BE FILLED<br/><blink><b> PLEASE FILL IN ALL THE ENTRIES.</b><blink></font>";
		}
		else
		{
	   document.facultyop.action="facultyshwatt.jsp";
	document.facultyop.submit();
		}
	return false;
}

function fld(f)
{
	
	f.style.border='groove 2pt black';
	document.getElementById("ch").innerHTML='';
}


	
	
	