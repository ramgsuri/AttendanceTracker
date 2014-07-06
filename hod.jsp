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
	<script language="javascript" src="js/hod.js" >
	</script>
	<script language="javascript" src="js/remallot.js" >
	</script>
	<script language="javascript" src="js/chgpass.js" >
	
	</script>
    <body id="reload"  >
	
	<%@ page language="java" import="java.sql.*" session="true" %>
<% 
System.out.println("-------->HOD.JSP---");
   
   
    String id=session.getAttribute("id").toString();
	String name=session.getAttribute("name").toString();
	String user=session.getAttribute("username").toString();
	String branch=session.getAttribute("brh").toString();
	System.out.println("----id-->"+id);
	System.out.println("-----name--->"+name);
	System.out.println("------user->"+user);
	System.out.println("------branch->"+branch);
	/* String p=session.getAttribute("prev").toString();
	System.out.println("---->"+p);
	if(p.equals("viewsub.jsp"))
	{ 
	System.out.println("--------->"+p);
	} */
	 System.out.println("HELLO");
	
	  %>
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                       <li><a href="help.html" class="two">Help</a></li>
                      <li><layer name="kl" width="87" height="19" id="kl"><a  href="" class="two" id="back" onclick=" return bak(this.id);" >Back</a></layer>
                      </li>
                       <li><a href="logout.jsp" class="two">log out</a></li>
			    </ul>      
                    
              </div>
			 
                <div class="clear"></div>
				 <div id="msg"></div>
          </div>
		 
            <div id="main-inner">
                <div id="main-inner-left"> <div id="img"><img src="images/53.jpg"  width="350px" height="161" /></div>
                   
				 <div id="aa" >
			   <p><span class="style3">Welcome</span> <strong>To ATTENDANCE TRACKER </strong>
			    <font size="-1" face="Georgia, Times New Roman, Times, serif" color="#990000"><b>
<% out.println("&nbsp;&nbsp;"+name); %></b></font>
			   
			    </p><div id="tit"></div>
				<div id="wrt">
                    <p>This Site have been developed as a software which would help, </p>
                    <p>You <font color="#990000">to manage the records of faculty student and subjects assignment by clicking in options given aside.</font></p>
                    <p>You have the facility to view subjects, faculty subject allotments , and attendance records . <font color="#990000"> You can view the notices also</font> </p>
				   </div>
                    <p>&nbsp;</p></div> 
				
             </div>
                <div id="main-inner-right">
                   
					<div id="box-small" >
					<div id="box-top-small" style=" position:relative; left:0px; top:0px;">
                        <img src="images/bg-box-top-small.gif" width="191" height="19" /></div> 
                        <font size="-1" face="Georgia, Times New Roman, Times, serif" color="#990000">
<center>
   <div id="title"> <u> Select the Field</u></div>
   
</center></font><br />
<div id="option">

                      <p align="center"><strong><a href="" class="one style6"  onclick=" return VSUB();"> <center>
                        VIEW SUBJECTS 
                      </center></a></strong></p>
					   <p align="center"><strong><a href=""  class="one style6" onclick="return suballot();"> <center> VIEW SUBJECT ALLOTMENT STATUS  </center></a></strong></p> 
					   
					   <p align="center"><strong><a href=""  class="one style6" onclick=" return ATTHOD();"><center>VIEW ATTENDANCE</center></a></strong></p> 
					    <p align="center"><strong><a href=""  class="one style6" id="hod" onclick=" return CHGPASS(this.id);"><center>CHANGE PASSWORD</center></a></strong></p> 
					   
					   
	</div>				   
					   <img src="images/bg-box-bottom-small.gif" width="191px" /> 
			      </div>
                   
                     <div id="box-small">
                        <div id="box-top-small" style=" position:relative; left:0px; top:0px;">
						</div>
						<img src="images/bg-box-top-small.gif" width="191" height="19" />
						<form name="offop" method="get">
						<div id="optbelow">
                        <center><img src="images/2.jpg" width="175" /></center>
						<br />
                        
						
						<p>
						<img src="images/latestnews.gif" height="18" />MID SEM SCHEDULE </p>
                        <p><blink>HOLIDAY NOTICES</blink></p>
						<p>TEACHERS DUTY CHART
                        <p align="left"><strong>Office Ph: 05212-2778456</strong><br /></p>
						</div>
						</form>
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

	