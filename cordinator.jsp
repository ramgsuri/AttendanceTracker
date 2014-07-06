<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>Home</title>
        <meta name="keywords" content="keyword1, keyword2, keyword3, etc..." />
        <meta name="description" content="Description of website here..." />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
<!--[if IE ]>
<link href="css/ie.css" rel="stylesheet" type="text/css" />
        <![endif]-->
<style type="text/css">

a.two:hover {font-size: 150%}
a.two:visited{color:#6F6F6F}
a.one:hover {font-size:150%}
a.one:visited{color:#464646}


            <!--
.style3 {
	color: #99bb00;
	font-size: 16px;
	font-weight: bold;
}
a:link {
	text-decoration: none;
}
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
a:active {
	text-decoration: none;
}
.style6 {color: #464646}

.style1 {
	color: #990000;
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-weight: bold;
	font-size:14px;
}
.style2 {
	color: #464646;
	font-weight: bold;
	font-family: Verdana, Arial, Helvetica, sans-serif;
}
            -->
        </style>
    </head>
	<script language="javascript" src="js/cordinator.js" ></script>
	<script language="javascript" src="js/chgpass.js" >
	</script>
    <body id="reload"  >
	
	<%@ page language="java" import="java.sql.*" session="true" %>
<% 
System.out.println("-------->CORDINATOR.JSP---");
   
   
    String ssn=session.getAttribute("ssn").toString();
	String name=session.getAttribute("name").toString();
	 System.out.println("HELLO");
	String status=session.getAttribute("status").toString();
	System.out.println("----ssn-->"+ssn);
	System.out.println("-----name--->"+name);
	System.out.println("------status->"+status);
	
	String st="";
	
	int len=status.length();
	System.out.println("--->length-->"+len);
	if(len==1)
	{
	st=status+"&nbsp;&nbsp;YEAR";
	}
	else
	{
	String h=status.substring(len-1);
	String h1=status.substring(0,len-1);
	String h2="";
	
	if(h1.equals("CS"))
h2="COMPUTER SCIENCE";
if(h1.equals("EC"))
h2="ELECTRONICS AND COMMUNICATION";
if(h1.equals("EE"))
h2="ELECTRICAL SCIENCE";
if(h1.equals("EI"))
h2="ELECTRONICS AND INSTRUMENTATION";
if(h1.equals("ME"))
h2="MECHANICAL ENGINEERING";

System.out.println("--->hh->"+h+"-->h1-->"+h1+"-->h2-->"+h2);

st=h+"&nbsp;YEAR &nbsp;"+h2;
	}
	
	
	  %>
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
			   
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                       <li><a href="help.html" class="two">Help</a></li>
                      <li><layer name="kl" width="87" height="19" id="kl"><a  href="" class="two" id="back" onclick=" bak(this.id);" >Back</a></layer>
                      </li>
                       <li><a href="contact.html" class="two">Contact us</a></li>
					   </ul>      
                    
              </div>
			 
                <div class="clear"></div>
				 <div id="msg"></div>
          </div>
		 
            <div id="main-inner">
                <div id="main-inner-left"> <div id="img"><img src="images/p2.jpg"  width="350px" height="161" /></div>
                <form name="offop" method="get">   
				 <div id="aa" >
			   <p><span class="style3">Welcome</span> <strong>To ATTENDANCE TRACKER </strong>
			    <font size="-1" face="Georgia, Times New Roman, Times, serif" color="#990000"><b>
<% out.println("&nbsp;&nbsp;"+name); %></b></font>&nbsp;<div align="left"><u><strong>CORDINATOR OF:</strong></u> <font size="-1" face="Georgia, Times New Roman, Times, serif" color="#990000"><b>
<% out.println("&nbsp;&nbsp;"+st); %></b></font></div>
			   
			    </p><div id="tit"></div>
				<div id="wrt">
                    <p>This Site have been developed as a software which would help, </p>
                    <p>You <font color="#990000">to manage the records of student ATTENDANCE and also FINE STATUS.</font></p>
                    <p>You have the facility to EXEMPT FINE . <font color="#990000">You also have facility to up load the new notices regarding the college cirricullam.</font> </p>
				   </div>
                    <p>&nbsp;</p></div> 
				
              </form> </div>
                <div id="main-inner-right">
                   
					<div id="box-small" >
					<div id="box-top-small" style=" position:relative; left:0px; top:0px;">
                        <img src="images/bg-box-top-small.gif" width="191" height="19" /></div> 
                        <font size="-1" face="Georgia, Times New Roman, Times, serif" color="#990000">
<center>
   <div id="title"> <u> Select the Field</u></div>
   
</center></font><br />
<div id="option">

                      <p ></p>
					   <p align="center"><strong><a href=""  class="one style6" onclick="return BRANCH();"> <center> VIEW ATTENDANCE</center></a></strong></p> 
					   <p align="center"><strong><a href="cordi.jsp"  class="one style6" > <center>UPLOAD NOTICES </center></a></strong></p>
					   <p align="center"><strong><a href=""  class="one style6" onclick=" return Exempt1();"><center>EXEMPT FINE</center></a></strong></p> 
					    <p align="center"><strong><a href=""  class="one style6" id="cordinator" onclick=" return CHGPASS(this.id);"><center>CHANGE PASSWORD</center></a></strong></p>
					   <p ></p> 
					   
	</div>				   
					   <img src="images/bg-box-bottom-small.gif" width="191px" /> 
			      </div>
                   
                     <div id="box-small">
                        <div id="box-top-small" style=" position:relative; left:0px; top:0px;">
						</div>
						<img src="images/bg-box-top-small.gif" width="191" height="19" />
                        <center><img src="images/2.jpg" width="175" /></center>
						<br />
                        <p><img src="images/latestnews.gif" height="18" />MID SEM SCHEDULE </p>
                        <p><blink>HOLIDAY NOTICES</blink></p>
						<p>TEACHERS DUTY CHART
                        <p align="left"><strong>Office Ph: 05212-2778456</strong><br /></p>
                        <img src="images/bg-box-bottom-small.gif" width="191px" />
                    </div>
                </div>
                <div class="clear"></div>
            </div> 
			
			 
            <div id="footer"> &copy;2009 Attendance Tracker <br />
                <!-- This template is provided free of charge as long as you keep the link to http://www.finerdesign.com -->
                <a href="index.hot.htm" style="text-decoration:none;">Home</a> |
                <a href="legal.htm" style="text-decoration:none;"> Legal </a>| 
                <a href="Privecy_p.htm" style="text-decoration:none;">Privacy Policy </a>| 
            <a href="terms.htm" style="text-decoration:none;">Terms Of Services </a></div>
        </div>
    </body>
</html>