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
	<script language="javascript" src="js/deletestud.js" >
	
	
	</script>
    <body  >
	
	
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                        <li><a href="help.html" class="two">Help</a></li>
                       <li><layer name="kl" width="87" height="19" id="kl"><a  href="office.jsp" class="two" id="FACULTY" onclick=" return SUB();" >Back</a></layer></li>
                        <li><a href="contact.html" class="two">Contact us</a></li>      
                    </ul>
              </div>
               
          </div>
            <div id="main-inner">
			<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
 //String p="viewsub.jsp";
//session.setAttribute("prev",p);
//System.out.println("------>VIEW SUBJECT--");
 Statement stmt=con.getcon();
// out.println("--------");
  
  
 String branch=session.getAttribute("branch").toString();
 String yrs=session.getAttribute("years").toString();
// String yrs=request.s("years");
String b=null;
System.out.println("----delstud.jsp->"+branch);
System.out.println("-----YRS--->"+yrs);
if(branch.equals("COMPUTER SCIENCE"))
b="CS";
if(branch.equals("ELECTRONICS AND COMMUNICATION"))
b="EC";
if(branch.equals("ELECTRICAL SCIENCE"))
b="EE";
if(branch.equals("ELECTRONICS AND INSTRUMENTATION"))
b="EI";
if(branch.equals("MECHANICAL ENGINEERING"))
b="ME";

int year=0;
 if(yrs.equals("FIRST YEARS"))
 {
 year=1;
 }

 if(yrs.equals("SECOND YEARS"))
 {
 year=2;
 }
 
  if(yrs.equals("THIRD YEARS"))
  {
   year=3;
   }
   
   if(yrs.equals("FINAL YEARS"))
   {
     year=4;
    }
System.out.println("------->"+b);
String query="SELECT * FROM "+b+"STUDENT WHERE YEARS="+year+"" ;
System.out.println("--->query-->"+query);
ResultSet rs=stmt.executeQuery(query); %>
	
			
			          <div class="clear"></div>
					  <div align="center"><% out.println("<p><font color='#990000' size='3px'><b><u>REMOVE&nbsp;&nbsp;"+yrs+"&nbsp;"+branch+"&nbsp;&nbsp;STUDENTS</u></b></font></p>"); %></div>
           <div align="center">
		  <form name="delsub" action="deletestudent.jsp" method="post">
			<table width='340' height="35" border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA' cellpadding="3" cellspacing="5">
			<tr ><td><div align="center"><font color="#990000" size="3px"><b><u>STUDENT NAME</u></b></font></div></td>&nbsp;&nbsp;<td><div align="center"><font color="#990000" size="3px"><b><u>FATHERS NAME</u></b></font></div></td>&nbsp;&nbsp;<td><div align="center"><font color="#990000" size="3px" ><b><u>ROLL NUMBER</u></b></font></div></td>&nbsp;&nbsp;<td><div align="center"><font color="#990000" size="3px"><b><u>SECTION</u></b></font></div></td>&nbsp;&nbsp;<td><div align="center"><font color="#990000" size="3px"><b><u>SELECT</u></b></font></div></td></tr> 
			</br>
			</br>
			</br>
			
			  
			  <% while(rs.next())
{


String studname=rs.getString(1);
out.println("<tr id='select'><td><font color='#464646' size='2px'><div align='center'>"+studname+"</div></font></td>");
String fathername=rs.getString(2);
out.println("<td><font color='#464646' size='2px'><div align='center'>"+fathername+"</div></font></td>");
int rollnumber=rs.getInt(3);
out.println("<td><font color='#464646' size='2px'><div align='center'>"+rollnumber+"</div></font></td>");
String section=rs.getString(5);
out.println("<td><font color='#464646' size='2px'><div align='center'>"+section+"</div></font></td>");
out.println("<td><font color='#464646' size='2px'><div align='center'><input type='radio' name='dsub' value='"+rollnumber+"' id='"+rollnumber+"' onFocus='return DELETE(this.id);' ></div></font></td><tr/>");
}
 %>
		
			
			</table>
			
			<br/><br/>
			
			<div id='del'></div>
			</form>
			
			<br/>
			
			</div>
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
