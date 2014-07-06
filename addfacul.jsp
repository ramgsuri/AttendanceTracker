
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
	<script language="javascript" src="js/office.js" >
	
	</script>
    <body  >
	
	
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                        <li><a href="help.html" class="two">Help</a></li>
                       <li><a  href="office.jsp" class="two" id="back" >Back</a></li>
                        <li><a href="contact.html" class="two">Contact us</a></li>      
                    </ul>
              </div>
               
          </div>
            <div id="main-inner">
			<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
 Statement stmt=con.getcon();
// out.println("--------");
  
  
 String branch=session.getAttribute("branch").toString();
 String na=request.getParameter("faname");
 //String na=session.getAttribute("faname").toString();
 System.out.println("-------name-->"+na);
String b=null;
//out.println("----viewfaculty.jsp->"+branch);
if(branch.equals("COMPUTER SCIENCE"))
b="cs";
String query="SELECT NAMES,SSNNO FROM FACULTY WHERE BRANCH='"+b+"'";
ResultSet rs=stmt.executeQuery(query); %>
	
			
			          <div class="clear"></div>
					  <div align="center"><% out.println("<p><font color='#990000' size='3px'><b><u>"+branch+"&nbsp;&nbsp;FACULTY</u></b></font></p>"); %></div>
           <div align="center">
		   
			<table width='297' height="35" border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'>
			<tr ><td><div align="center"><font color="#990000" size="3px"><b><u>NAME</u></b></font></div></td><td><div align="center"><font color="#990000" size="3px" ><b><u>SSN NO</u></b></font></div></td></tr> </table>
			</br>
			</br>
			</br>
			<table width='297' height="35" border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'>
			  
			  <% while(rs.next())
{
String name=rs.getString(1);
out.println("<tr><td><font color='#464646' size='2px'><div align='center'>"+name+"</div></font></td>");
int ssn=rs.getInt(2);
out.println("<td><font color='#464646' size='2px'><div align='center'>"+ssn+"</div></font></td></tr>");
}
 %>
		
			
			</table></div>
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


 