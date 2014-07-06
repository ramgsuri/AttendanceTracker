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
.style7 {color: #CC3300}
.style8 {color: #3300FF}
            -->
        </style>
</head>
	<script language="javascript" src="js/retrive.js" ></script>
		 <%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
		
<body id= "bod">
	
	
	  
<div id="main">
        <div id="logo">
          <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
          <div id="navbar">
                <ul>
                    <li><a href="index.htm" class="two">Home</a></li>
                    <li><a href="help.html" class="two">Help</a></li>
                   <li><layer name="kl" width="87" height="19" id="kl"><a  href="faculty.jsp" class="two" id="FACULTY" onclick=" " >Back</a></layer></li>
                    <li><a href="contact.html" class="two">Contact us</a></li>      
                </ul>
          </div>
      </div>
        <div id="main-inner">
		 
<%
try
{
System.out.println("------>ENTER ATTENDANCE----RETRIVE.jsp-");
 Statement stmtr=con.getcon();
// out.println("--------");
  
   String b=session.getAttribute("brh").toString(); 
   System.out.println("--branch--->"+b);
   String sn=session.getAttribute("username").toString(); 
 int ssn=Integer.parseInt(sn);
 System.out.println("--ssn--->"+ssn);
 String opt=session.getAttribute("opt").toString(); 
 int subnum=Integer.parseInt(session.getAttribute("subnum").toString()); 
 System.out.println("opt---->"+opt);
 String a[]=opt.split(";");
 int y=a.length;
 System.out.println("-->length-->"+y);
 for(y=0;y<10;y++)
 {
 System.out.println("-"+y+"-->"+a[y]);
 }
 
 int yrs=0;
 if(a[4].equals("FIRST YEAR"))
yrs=1;

if(a[4].equals("SECOND YEAR"))
yrs=2;

if(a[4].equals("THIRD YEAR"))
yrs=3;

if(a[4].equals("FINAL YEAR"))
yrs=4;

System.out.println("------yrs-->"+yrs);
String cln,tab;
 int count=0;
int r1,i,k=0;
String r2=null; 

cln="DATE"+a[5];
 tab=Integer.toString(yrs)+b+a[6];
 System.out.println("----tab---->"+tab);
 
 System.out.println("----subnum---->"+subnum);

%>

  <div class="clear"><% out.println("<p><font color='#990000' size='2px'><div align='center'><b><u>"+a[9]+"&nbsp;&nbsp;"+a[4]+"&nbsp;&nbsp;STUDENT</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>SECTION</u>&nbsp;:&nbsp;"+a[3]+"&nbsp;&nbsp;</b></div></strong></font></p>");
  
out.println("<font color='#990000' size='2px'><strong><div align='left'><u>SUBJECT ID</u>&nbsp;:&nbsp;"+a[0]+"</div><div align='left'><u>SUBJECT CODE</u>&nbsp;:&nbsp;"+a[1]+"</div><div align='left'><u>SUBJECTNAME</u>&nbsp;:&nbsp;"+a[2]+"</strong></div>");

out.println("<div align='right'><strong><u>DATE:</u>&nbsp;:&nbsp;&nbsp;&nbsp;"+a[5]+"&nbsp;"+a[6]+"&nbsp;"+a[7]+"&nbsp;"+a[8]+"</strong></div></font><br/>");

 %> 
          </div>
				  <div align="center"><% out.println("<p><font color='#990000' size='2px'><b><u>"+a[9]+"&nbsp;"+a[4]+"&nbsp;"+a[3]+"&nbsp;&nbsp;ATTENDANCE MARKED</u></b></font></p>"); %></div>
          <div align="center">
		   
			<table  height="35" border='1' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding="5" >
		  <tr ><td width="100"><div align="center"><font color="#990000" size="2px"><b><u>STUDENT NAME</u></b></font></div></td><td width="100"><div align="center"><font color="#990000" size="2px"><b><u>STUDENT ROLL NUMBER</u></b></font></div></td><td width="100"><div align="center"><font color="#990000" size="2px" ><b><u>ATTENDANCE STATUS</u></b></font></div></td></tr> </table></div>
		  </br>
		  <br/>
			
		  <table border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding="5">
			  
		    <% 
			         String status="";
					 String name="";
                     String q1="SELECT ROLLNO,"+cln+" FROM "+tab+" ORDER BY ROLLNO";
					 System.out.println("---->q1-->"+q1);
					 ResultSet rs1=stmtr.executeQuery(q1);
					 System.out.println("---EXECUTED--");
					 Statement stmt2=con.getcon();
					 while(rs1.next())
					 {
					 int rn=rs1.getInt(1);
					 String att=rs1.getString(2);
					 System.out.println("---rn-->"+rn+"---att->"+att+"");
					 String q2="SELECT STUDENTNAME FROM "+b+"STUDENT WHERE YEARS="+yrs+" AND ROLLNO="+rn+" ";
					 System.out.println("--->q2-->"+q2);
					 ResultSet rs2=stmt2.executeQuery(q2);
					 System.out.println("---->q2EXECUTED<---");
					 
					 if(rs2.next())
					 {
				      name=rs2.getString(1);
					 System.out.println("--->name-->"+name);
					 }
					 
					 char c=att.charAt(subnum-1);
					 System.out.println("--->char-->"+c);
					 
					 if(c=='P')
					 {
					 status="<font color='#464646'>PRESENT</font>";
					 System.out.println("--->PRESENT<--");
					 
					 }
					 
					 if(c=='A')
					 {
					  status="<font color='#990000'><strong>ABSENT</strong></font>";
					 System.out.println("--->ABSENT<---"); 
					 } 
					 
					 %>
					 
					 
				   <tr><td width="100"><font  size="2px"><b><div align='center'><% out.println(""+name); %></div></b></font></td>
		  <td width="100"><font  size="2px"><b><div align='center'><% out.println(""+rn); %></b></div></font></td>
		  <td width="100"><font  size="2px"><b><div align='center'><% out.println(""+status); %></b></div></font></td></tr>
					
			<% }
			           %>		
				  
		  </table>
		  
		 
		  <br/>
		  <br/>
		  <div align='left'><font color="#FF0000" size="2px"><strong> *</strong><strong> PLEASE CONFIRM THIS LIST. TO EDIT AFTER CONFIRM CONTACT HOD. </strong></font></div>
		  <br/>
		  <br/>
		  <form name="conf" >
		  <div align="center"><input type="button" value="CONFIRM" id="confirm"  style="border:groove 2pt black;background:darkred;color:wheat;font-weight:bold" onclick="return CONFIRM()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="BACK" id="<%=ssn%>"  onclick="return BACK(this.id);" style="border:groove 2pt black;background:darkred;color:wheat;font-weight:bold"></div></form>
	    </div>
		</div>
		
		 <%        
					 
					 }
                            
							catch(Exception e)
							{
							System.out.println("exception--->"+e);
							}
							
							
		
	
							%>
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
