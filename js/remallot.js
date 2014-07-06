// JavaScript Document
var rt;
function R1(x)
{
	//alert('R1-->'+x);
	rt=x;
	document.getElementById('allot').innerHTML='<br/><div align="center"><input type="button" value="REMOVE " id="mark"  style="border:groove 2pt black;background:darkred;color:wheat;font-weight:bold" onclick="return R2();">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="CLOSE" id="close"  onclick="return ALSUB();" style="border:groove 2pt black;background:darkred;color:wheat;font-weight:bold"></div>';
	document.getElementById("ch").innerHTML="";
	return false;
}

function R2()
{
	
	var name=document.getElementById("asgname").value;
	var ssn=document.getElementById("asgssn").value;
	
	var url="remall.jsp?name="+name+"&ssn="+ssn+"&id="+rt+"";
	
	request.open("GET",url,true);
	//alert('open--1-->'+url);
	request.onreadystatechange=R3;
	request.send(null);
	return false;
	
}

function R3()
{
	
	//alert(''+request.status);
	if(request.status==200)
	{
	//alert('reesponse-->'+request.responseText);
	REMOVEALLOT();
	}
	return false;
}
