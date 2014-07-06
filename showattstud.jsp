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
		 <%@ page language="java" session="true" import="java.sql.*,java.util.*" %>
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
System.out.println("------>SHOW STUDENT ATTENDANCE----showattstud.jsp-");
 Statement stmt=con.getcon();
// out.println("--------");
  
   String b=session.getAttribute("username").toString(); 
   System.out.println("--branch--->"+b);
   String roll=session.getAttribute("id").toString();
    System.out.println("--roll-->"+roll);
   int rn=Integer.parseInt(roll);
    System.out.println("--ssn--->"+rn);
    String name=session.getAttribute("name").toString(); 
   System.out.println("--branch--->"+name);
   String yrs=session.getAttribute("y").toString();
    System.out.println("--years-->"+yrs);
  
 
String yr=null;
 if(yrs.equals("1"))
yr="FIRST YEAR";

if(yrs.equals("2"))
yr="SECOND YEAR";

if(yrs.equals("3"))
yr="THIRD YEAR";

if(yrs.equals("4"))
yr="FINAL YEAR";

System.out.println("------yr-->"+yr);




/* GETTING DATE------- RETRIVEING DATES */
	 

Calendar cal= Calendar.getInstance();
int yers   =(cal.get(Calendar.YEAR));
int months =(cal.get(Calendar.MONTH))+1;
int date  =(cal.get(Calendar.DATE));
int day=(cal.get(Calendar.DAY_OF_WEEK));
String date1=Integer.toString(date);
String year1=Integer.toString(yers);
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


String []month=new String[12];


		month[0]="JANUARY";
	
    	month[1]="FEBURARY";
	
		month[2]="MARCH";
	
		month[3]="APRIL";
	
		month[4]="MAY";
	
		month[5]="JUNE";
	
		month[6]="JULY";
	
		month[7]="AUGUST";
	
		month[8]="SEPTEMBER";
	
		month[9]="OCTOBER";
	
		month[10]="NOVEMBER";
	
		month[11]="DECEMBER";
	
	

   String currt=month[(months-1)];
System.out.println("--CURRENT MONTH-->"+currt);




int p;
for(p=0;p<=11;p++)
{
System.out.println("--->"+month[p]);
} 


String q1="SELECT * FROM "+b+"HELP WHERE YEARS='"+yrs+"'"; 
System.out.println("--q1-->"+q1);
ResultSet rs=stmt.executeQuery(q1);
System.out.println("--q1--EXECUTED--");
int i=2;
String sub=null;
String flag="true";

 int j=0;
Statement stmt2=con.getcon();
Statement stmt3=con.getcon();
Statement stmt4=con.getcon();
if(rs.next())
{
do
{
 sub=rs.getString(i);
   if(sub.equals("0"))
  {
  flag="false";
  break;
  }
  else
  {
  flag="true";
  }
  System.out.println("--sub-->"+sub);
  String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub+"'";
  ResultSet rs2=stmt2.executeQuery(q2);
  if(rs2.next())
  {
  String subname=rs2.getString(1);
  String subcode=rs2.getString(2);
  System.out.println("---subname-->"+subname);
  System.out.println("---subcode-->"+subcode);
  
    String q3="SELECT * FROM "+b+"HELP WHERE YEARS='"+yrs+"'";
	System.out.println("--q3-->"+q3);
   ResultSet rs3 = stmt3.executeQuery(q1);
   System.out.println("--q3--executed-->");
   ResultSetMetaData rsmd3 = rs3.getMetaData();
   
   
	
	if(rs3.next())
	{    
         for(j=2;j<=16;j++)
	   {
	 
	  String sb=rs3.getString(j);
	  if(sb.equals(sub))
	  break;
		
	   }
	}
   System.out.println("--jj  PRIORITY IS->"+j);
    
	
	 for(i=0;i<=11;i++)
	 {
	 try
	 {
	// String q4="SELECT * FROM  FROM "+b+month[i]+yrs" WHERE ROLLNO="+rn+"";
	// ResultSet rs4=stmt4.executeQuery(q4);
	 
	   }
	
	catch(Exception e4)
	{
	System.out.println("-->e4--->"+e4);
	}
	
	}//for closed
	
    
 
 
 
 
  }

   
   
   
   
  
  
  
  
  
  i=i+1;
  }while(flag.equals("true"));
  
  System.out.println("IN IF");
  
}
System.out.println("OUT IF");

}

	catch(Exception e)
	{
	//st="EXCEPTION";
	//System.out.println("--->"+st);
	//out.write(st);
	System.out.println("--->"+e);
	}
%>

  <div class="clear">
          </div>
				  <div align="center"></div>
          <div align="center">
		   
			<table  height="35" border='1' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding="5" >
		  <tr ><td width="100"><div align="center"><font color="#990000" size="2px"><b><u>STUDENT NAME</u></b></font></div></td><td width="100"><div align="center"><font color="#990000" size="2px"><b><u>STUDENT ROLL NUMBER</u></b></font></div></td><td width="100"><div align="center"><font color="#990000" size="2px" ><b><u>ATTENDANCE STATUS</u></b></font></div></td></tr> </table></div>
		  </br>
		  <br/>
			
		  <table border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'  cellpadding="5">
			  
		    
					 
					 
				   <tr><td width="100"><font  size="2px"><b><div align='center'><%  %></div></b></font></td>
		  <td width="100"><font  size="2px"><b><div align='center'><% %></b></div></font></td>
		  <td width="100"><font  size="2px"><b><div align='center'><%  %></b></div></font></td></tr>
					
				
				  
		  </table>
		  
		 
		  <br/>
		  <br/>
		  
		  <br/>
		  <br/>
		  
	    </div>
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
