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
	<script language="javascript" src="js/aj.js" ></script>
	<script language="javascript" src="js/hodallot.js" ></script>
	
    <body  >
	
	
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                        <li><a href="help.html" class="two">Help</a></li>
                       <li><layer name="kl" width="87" height="19" id="kl"><a  href="" class="two" id="FACULTY" onclick=" return B();" >Back</a></layer></li>
                        <li><a href="contact.html" class="two">Contact us</a></li>      
                    </ul>
              </div>
               
          </div>
            <div id="main-inner">
			<%@ page language="java" import="java.sql.*,java.util.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
try
{
Statement stmt=con.getcon();
System.out.println("---------hodallotsub.JSP-------");
String branch="";
String year="";
 //String d=session.getAttribute("ssn").toString(); 
//System.out.println("---ss-->"+d);
 String b=session.getAttribute("brh").toString(); 
 System.out.println("--branch--->"+b);
 //String sn=session.getAttribute("username").toString(); 
 //int ssn=Integer.parseInt(sn);
 //System.out.println("--ssn--->"+ssn);
 //String subid=request.getParameter("fasubid");
 //String sec=request.getParameter("fasection");
 String name=request.getParameter("unasgname");
 String ssn=request.getParameter("unasgssn");
 session.setAttribute("sn",ssn);
 //System.out.println("---->subid-->"+subid);
 //System.out.println("---->section-->"+sec);
 System.out.println("---->name-->"+name);
 System.out.println("---->ssn-->"+ssn);
  
 if(b.equals("CS"))
  branch="COMPUTER SCIENCE";
  
if(b.equals("EC"))
 branch="ELECTRONICS AND COMMUNICATION";


if(b.equals("ME"))
branch="MECHANICAL ENGINEERING";

if(b.equals("EE"))
 branch="ELECTRICAL SCIENCE";


if(b.equals("EI"))
 branch="ELECTRONICS AND INSTRUMENTATION";


System.out.println("--BRANCH--->"+branch);

//char y=sec.charAt(0);
//String y=sec.substring(0,1);
//System.out.println("--YEAR--STRING->"+y);
//int y1=Integer.parseInt(y);
//System.out.println("--YEAR--int--->"+y1);

/*
if(y1==1)
year="FIRST YEAR";

if(y1==2)
year="SECOND YEAR";

if(y1==3)
year="THIRD YEAR";

if(y1==4)
year="FINAL YEAR";


System.out.println("----YEAR--year->"+year);
String sect=sec.substring(2);
System.out.println("----SECTION--sect->"+sect); */

/* GETTING DATE */

Calendar cal= Calendar.getInstance();
int yrs   =(cal.get(Calendar.YEAR));
int months =(cal.get(Calendar.MONTH))+1;
int date  =(cal.get(Calendar.DATE));
int day=(cal.get(Calendar.DAY_OF_WEEK));
String date1=Integer.toString(date);
String year1=Integer.toString(yrs);
String day1="";

if(day==1)
day1="SUNDAY";

if(day==2)
day1="MONDAY";

if(day==3)
day1="TUESDAY";

if(day==4)
day1="WEDNESDAY";

if(day==5)
day1="THURSDAY";

if(day==6)
day1="FRIDAY";

if(day==7)
day1="SATURDAY";


String month="";

if(months==1)
	{
		month="JANUARY";
	}

if(months==2)
	{
		month="FEBURARY";
	}

if(months==3)
	{
		month="MARCH";
	}

if(months==4)
	{
		month="APRIL";
	}
if(months==5)
	{
		month="MAY";
	}
if(months==6)
	{
		month="JUNE";
	}

if(months==7)
	{
		month="JULY";
	}

if(months==8)
	{
		month="AUGUST";
	}

if(months==9)
	{
		month="SEPTEMBER";
	}

	if(months==10)
	{
		month="OCTOBER";
	}

if(months==11)
	{
		month="NOVEMBER";
	}

if(months==12)
	{
		month="DECEMBER";
	}
	
	

String dat=date1+"&nbsp;"+month+"&nbsp;"+day1+"&nbsp;"+year1;

//System.out.println("---date-->"+date+"---MONTH-->"+month+"---YEAR-->"+yrs+"---day-->"+day);
//System.out.println("--dat-->"+dat);

//String p=subid+";"+subcode+";"+subname+";"+sect+";"+year+";"+date1+";"+month+";"+day1+";"+year1+";"+branch+"";
//session.setAttribute("opt",p);
              %>
	
			
			         <div class="clear"></div>
					  <div align="center"><%// out.println("<p><font color='#990000' size='2px'><div align='center'><b><u>"+branch+"&nbsp;&nbsp;"+year+"&nbsp;&nbsp;STUDENT</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>SECTION</u>&nbsp;:&nbsp;"+sect+"&nbsp;&nbsp;</b></div></strong></font></p>");
  
out.println("<font color='#990000' size='2px'><strong><div align='left'><u>FACULTY NAME</u>&nbsp;:&nbsp;"+name+"</div><div align='left'><u>FACULTY SSN</u>&nbsp;:&nbsp;"+ssn+"</div><br/>");
out.println("<div align='center'><strong><u>ALLOTMENT OF SUBJECTS </u></strong></div><br/>");
out.println("<div align='right'><strong><u>DATE:</u>&nbsp;:&nbsp;&nbsp;&nbsp;"+dat+"</strong></div></font><br/>");
out.println("<font color='#990000' size='2px'><strong><div align='left'><strong><u>CLASS:</u>&nbsp;:&nbsp;&nbsp;&nbsp;</strong></font>");
   
 %>
 <form name="mark">
 <select name="class" id='class' style='border:groove 2pt black' >
 <option>SELECT</option>
 <option>1-A1</option>
 <option>1-A2</option>
 <option>2-A1</option>
 <option>2-A2</option>
 <option>3-A1</option>
 <option>3-A2</option>
 <option>4-A1</option>
 <option>4-A2</option> 
 
 </select>
 <%
out.println("</strong></div></font><br/>");
//out.println("<font color='#990000' size='2px'><div align='left'><strong><blink> * MARK THE ABSENTEES ONLY</strong></blink></div></font><br/>");					 

 %> </div>
           <div align="center">
		   
			<table  height="35" border='1' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding="5" >
			<tr ><td width="100"><div align="center"><font color="#990000" size="2px"><b><u>SUBJECT NAME</u></b></font></div></td><td width="100"><div align="center"><font color="#990000" size="2px"><b><u>SUBJECT CODE</u></b></font></div></td><td width="100"><div align="center"><font color="#990000" size="2px" ><b><u>SUBJECT ID</u></b></font></div></td><td width="100"><div align="center"><font color="#990000" size="2px" ><b><u>SELECT</u></b></font></div></td></tr> </table></div>
			<br/>
			</br>
			</br>
			
			<div align="center"><table border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding="5"><tr><td width="100"></td><td width="100"></td><td width="100"></td></tr>
			  
			  
		<%
		
		  String q1="SELECT * FROM "+b+"SUBJECT  ORDER BY SUBJECTNAME";
		  System.out.println("--QUERY1-->"+q1);
		  ResultSet rs=stmt.executeQuery(q1);
		  
		  System.out.println("---QUERY1 EXECUTED-"); 
		  while(rs.next())
		  {
		  String subname=rs.getString(1);
		  String subcode=rs.getString(2); 
		  String subid=rs.getString(3);
		    %>
		  <tr><td width="100"><font  size="2px"><b><div align='center'><% out.println(""+subname); %></div></b></font></td>
		  <td width="100"><font  size="2px"><b><div align='center'><% out.println(""+subcode); %></div></b></font></td>
		   <td width="100"><font  size="2px"><b><div align='center'><% out.println(""+subid); %></div></b></font></td>
		  <td width="100"><font  size="2px"><b><div align='center'><% out.println("<input type='radio' name='atsub' value='"+subid+"' id='"+subid+"' onFocus='return V1(this.id);' >"); %></div></b></font></td>
		  </tr>
		  
		<%  }
		%>
			
			</table></div>
			<br/>
			<div align="center" id="allot"></div><div id="ch"></div>
		   </div></form>
            <div id="footer"> &copy;2009 Attendance Tracker <br />
                <!-- This template is provided free of charge as long as you keep the link to http://www.finerdesign.com -->
                <a href="index.hot.htm" style="text-decoration:none;">Home</a> |
                <a href="legal.htm" style="text-decoration:none;"> Legal </a>| 
                <a href="Privecy_p.htm" style="text-decoration:none;">Privacy Policy </a>| 
            <a href="terms.htm" style="text-decoration:none;">Terms Of Services </a></div>
        </div>
		
	<%  }
 catch(Exception e)
 {
 System.out.println("--->"+e);
 }
%>%>	
			
    </body>
</html>



