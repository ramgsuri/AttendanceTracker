// JavaScript Document
var at;
function B()
{
	document.mark.action="hod.jsp";
	document.mark.submit();
	return false;
}

function V0()
{
	window.location.reload();
	
	return false;
}

function V1(x)
{
	//alert(''+x);
	document.getElementById('allot').innerHTML='<input type="button" value="ALLOT" id="mark"  style="border:groove 2pt black;background:darkred;color:wheat;font-weight:bold" onclick="return V2();">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="CLOSE" id="close"  onclick="return B();" style="border:groove 2pt black;background:darkred;color:wheat;font-weight:bold">';
	document.getElementById("ch").innerHTML="";
	at=x;
	//alert(''+at);
	return false;
}

function V2()
{
	//alert('V2');
	var class=document.getElementById("class").value;
	//alert(''+class);
	if(class.match('SELECT'))
	{
	document.getElementById("ch").innerHTML="<br/><br/><div align='center'><strong><font color='#990000' size='2'><blink>PLEASE SELECT THE CLASS.</blink></font></strong></div>";	
	}
	else
	{
		var c1=document.getElementById("class").value;
		var c2=document.getElementById(at).value;
		//alert(''+c1+''+c2);
		request=getRequestObject();
		var url="SETALLOT.jsp?c1="+c1+"&sub="+c2+"";
		//alert(''+url);
		request.open("GET",url,true);
		//alert('open');
		request.onreadystatechange=V3;
	     request.send(null);
				
		
	}
	return false;
}

function V3()
{
	
	
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
	
	
		var z=request.responseText;
		
		if(z.match("ALLOT"))
		{
			alert(' SUBJECT HAS BEEN SUCESSFULLY  ALLOTED ----THANKYOU ');
			
			window.location.reload();
			
			
			
			
		}
		else
		{
			var z1=z.split(";");
			//alert('z10-->'+z1[0]);
			//alert('z11-->'+z1[1]);
			document.getElementById("ch").innerHTML="<br/><br/><div align='center'><strong><font color='#990000' size='2'><blink>THIS ALLOTMENT IS GIVEN TO<br/>SSNNO&nbsp;&nbsp;"+z1[0]+"<br/>NAME&nbsp;&nbsp;"+z1[1]+".<br/>PLEASE CHOOSE OTHER COMBINATION OR FIRST REMOVE ALLOMENT.</blink></font></strong></div>";
			
	     }
	}
	break;
	}
	return false;
}