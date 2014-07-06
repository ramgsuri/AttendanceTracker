// JavaScript Document
var id;
function CHGPASS(x)
{
	//alert(''+x+'');
	id=x;
document.getElementById("img").innerHTML="<img src='images/34.JPG' width='350px' height='161'>";
	document.getElementById("wrt").innerHTML="<br/><div align='center'><span class='style1'> <div align='center'><u>CHANGE PASSWORD</u></span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<font color='#464646'> </font> </div><br> <font size='-1'><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000'  width='370'><tr> <td><br/> <div align='center'>PREVIOUS PASSWORD: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='prepass' style='border:groove 2pt black ' onfocus='fld(this);' id='prepass' title='PLEASE FILL IN THE PREVIOUS PASSWORD'></div> <br/> <div align='center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW PASSWORD: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='newpass' style='border:groove 2pt black ' id='newpass' onfocus='fld(this);'  title='PLEASE FILL IN THE NEW PASSWORD'><br/><br/><div align='center'>RE-TYPE NEW PASSWORD:<input type='password' name='renewpass' style='border:groove 2pt black ' id='renewpass' onfocus='fld(this);'    title='PLEASE FILL IN THE NEW PASSWORD AGAIN'><br/>&nbsp;</div></td></tr></table></div></font></div><br><div align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CHANGE' id='faculty' onclick=' return changepass()' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='CLOSE' id=''  onclick='return cl();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div><div id='ch'></div>";	
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
			//alert('id-->'+id);
			var f=old.value;
			 var r=newp.value;
			 var s=repass.value;
			//alert(''+f+r+s+'');
			 var url="changepass.jsp?old="+f+"&new="+r+"&renew="+s+"&id="+id+"";
			request.open("GET",url,true);
			//alert('--URL-->'+url);
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
	//alert('REQUEST-->'+request.responseText);
	if(request.status==200)
	{
		
		var a=request.responseText;
		//alert('request.rsponse TEXT--->'+a);
		if(a.match("sucess"))
		{
		 document.getElementById("wrt").innerHTML="<br/><font size='+1' face='Georgia, Times New Roman, Times, serif' color='#990000'><div align='center'><u> <strong><blink>CHANGED</blink></strong> </u></div> </font><br/<br/><table bgcolor='#D8D8DA' align='center' border='2' bordercolor='#990000' width='297'><tr><td><br/><div align='center'><font color='#990000'><strong>YOUR PASSWORD HAS BEEN CHANGED SUCESSFULLY.</font></strong><br/><br/><font color='#464646'><strong><div align='center'><u>THANK YOU</u></div></strong></font></td></tr></table><br/><br/><div align='center'><input type='button' value='CLOSE' id='close'  onclick='return cl();' style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'></div>";
		}
		
		else
		{
			document.getElementById('ch').innerHTML="<br/><font color='#990000' size='3px' font-family: 'Verdana, Arial, Helvetica, sans-serif'<blink><b> OLD PASSWORD IS INCORRECT .</b></blink></font> "	
		}
	}
	
	return false;
	
	}
	
	function cl()
{
	window.location.reload();
}

function fld(f)
{
	
	f.style.border='groove 2pt black';
	document.getElementById("ch").innerHTML='';
}

