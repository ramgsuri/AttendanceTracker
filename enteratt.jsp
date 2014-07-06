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
	<script language="javascript" src="js/retrive.js" >
	
	</script>
    <body>
	
	
	  
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
			<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
try
{
System.out.println("------>ENTER ATTENDANCE----enteratt.jsp-");
 Statement stmt=con.getcon();
// out.println("--------");
  
   String b=session.getAttribute("brh").toString(); 
   System.out.println("--branch--->"+b);
   String sn=session.getAttribute("username").toString(); 
 int ssn=Integer.parseInt(sn);
 System.out.println("--ssn--->"+ssn);
 String opt=session.getAttribute("opt").toString(); 
 System.out.println("opt---->"+opt);
 String a[]=opt.split(";");
 int y=a.length;
 System.out.println("-->length-->"+y);
 for(y=0;y<10;y++)
 {
 System.out.println("--->"+a[y]);
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
String q1="SELECT * FROM "+b+"HELP WHERE YEARS='"+yrs+"' ";
 ResultSet rs1 = stmt.executeQuery(q1);
  ResultSetMetaData rsmd1 = rs1.getMetaData();
   r1=rsmd1.getColumnCount();
 if(rs1.next())
 {  
     for(i=2;i<=16;i++)
	 {    
       String g=rs1.getString(i);
	   System.out.println("---->g-->"+g);
	    if(g.equals("0"))
		 {
		 System.out.println("---"+i+"--->"+g);
		 }
		 else
		 {
		 k=k+1;
		 }
	     if(g.equals(a[0]))
		 {
		  r2=rsmd1.getColumnLabel(i);
		 }
      }
	 }
	 
	 rs1.close();
	
	System.out.println("--> HELP--EXECUTED");
	 System.out.println("----->k--->"+k);
 System.out.println("---COLUMN TITLE-->"+r2);
 
 cln="DATE"+a[5];
 tab=Integer.toString(yrs)+b+a[6];
 System.out.println("----tab---->"+tab);
  boolean f;
  String flag=null;
 System.out.println("--->rsmd1--->no. of column-->"+r1);
 String q2="SELECT ROLLNO FROM "+tab+"";
 System.out.println("-------------->q2--->"+q2);
 
 try{
   ResultSet rs2=stmt.executeQuery(q2);
  f=rs2.first();
   System.out.println("---flag--->"+flag);
   flag="true";
   rs2.close();
  
 }
catch(Exception e1)
{
flag="false";
System.out.println("------->"+e1);
}
 
 
 System.out.println("--------->EXCEPTION e1--raised----flag-->"+flag);
 
 if(flag.equals("false"))
 {
 try
 {
 String q3="CREATE TABLE "+tab+"( ROLLNO NUMBER PRIMARY KEY)";
 System.out.println("---->q3-->"+q3);
 stmt.execute(q3);
 //stmt.close();
 }
 catch (Exception e3)
 {
 System.out.println("------->"+e3);
 }
 
                                           /*--------TABLE CREATED WHEN FLAG FALSE-----*/
										   
										   /*--INSERTING ROLLNO-----*/
 try{
 String q4="SELECT ROLLNO FROM "+b+"STUDENT WHERE YEARS="+yrs+" ORDER BY STUDENTNAME";
  System.out.println("---->q4--->"+q4);
 ResultSet rs4=stmt.executeQuery(q4);
 Statement stmt1=con.getcon();
 while(rs4.next())
 {
 
 int rn=rs4.getInt(1);
 String q5="INSERT INTO "+tab+" VALUES("+rn+")";
 System.out.println("-->q5-->"+q5);
 stmt1.execute(q5);
 System.out.println("--q5--executed-");
  
 } 
 rs4.close();
 }
 catch(Exception e4)
 {
 System.out.println("--->e4-->"+e4);
 }
 }//IF CLOSED
 //stmt1.close();
 
 //stmt.close();
 System.out.println("------->INSERTED SUCESSFULLY SUCESSFULLY<-----");
 
                    /*--CHECKING WHETHER COLUMN EXIST---*/
					
					//try
					//{
					try
					{
					flag="FALSE";
		String q5="SELECT ROLLNO,"+cln+" FROM "+tab+"";
		System.out.println("--->"+q5);
		ResultSet rs5=stmt.executeQuery(q5);
		while(rs5.next())
		{
		int rn=rs5.getInt(1);
		String nm=rs5.getString(2);
		flag="TRUE";
		}
		}
		catch(Exception e5)
		{
		flag="FALSE";
		System.out.println("--->e5-->"+e5);
		}
					
        
 System.out.println("--->FLAG BEFORE ALTERING TABLE-->"+flag);
 
 
 if(flag.equals("FALSE"))
 {
 /* --------->ALTERING TABLE<---------*/
 try
 {
 
 
 
String q6="ALTER TABLE "+tab+" ADD "+cln+" VARCHAR (25) ";
  System.out.println("------->q6-->"+q6);
   stmt.executeUpdate(q6);
   System.out.println("--->q6----executed--");
   
    /*-----------------INSERTIN '-----'    --AS SENTINALS----*/
   
 
 }
 catch(Exception e6)
 {
 System.out.println("--e6--->"+e6);
 }
 

                     /*----UPDATING COLOUMN--*/
try{
 System.out.println("---updating--k-->"+k);
 Statement stmt7=con.getcon();
 String mark="";
 for(i=1;i<=k;i++)
 {
 mark=mark+"-";
 }
 System.out.println("------>marrk--initial-->"+mark);
 System.out.println("---->count-->"+count);
String q7="SELECT ROLLNO FROM "+tab+"";
System.out.println("-->q7-->"+q7);
ResultSet rs7=stmt7.executeQuery(q7);
System.out.println("--->q7-executed---");
Statement stmt8=con.getcon();
while(rs7.next())
{
String q8="UPDATE "+tab+" SET "+cln+"='"+mark+"' WHERE ROLLNO="+rs7.getInt(1)+"";
System.out.println("--->q8--->"+q8);
int  rs8=stmt8.executeUpdate(q8);
System.out.println("--->"+rs8+"<--");
   //stmt.close();
 
 }  

}
catch(Exception e8)
{
System.out.println("--e8--->"+e8);
}
 
 
 }//IF CLOSED
 /*-----------------CAPTURING ABSENTEES----*/
 
 try
 {
 System.out.println("---for subject-->"+r2);
 String pb=r2.substring(7,8);
 System.out.println("---for subject----NUMBER---STRING->"+pb);
 int pb1=Integer.parseInt(pb);
  System.out.println("---for subject--int NUM--->"+pb1);
  Statement stmt9=con.getcon();
 String q9="SELECT ROLLNO , "+cln+" FROM "+tab+"";
System.out.println("-->q9-->"+q9);
ResultSet rs9=stmt9.executeQuery(q9);
Statement stmt10=con.getcon();

while(rs9.next())
{
int rn=rs9.getInt(1);
String init=rs9.getString(2);
String h=Integer.toString(rn);
String h1=request.getParameter(h);
System.out.println("--->"+rn+"<-----h--->"+h+"=====h1---->"+h1+"----initial string-->"+init);

int len=init.length();
   System.out.println("--len-->"+len);
  String v1=r2.substring(7);
   
  int v2=Integer.parseInt(v1);
   System.out.println("--v2-->"+v2);
 session.setAttribute("subnum",v2);
    String m1=init.substring(0,v2-1);
	System.out.println("---m1-->"+m1);
	String m2="";
	
	
	if(v2 <= len-2)
	{
	 m2=init.substring(v2,len);
	 }
	 
	 if(v2==len-1)
	 {
	  m2=init.substring(v2+1,len);
	  }
	  
	 
	
	System.out.println("---m2-->"+m2);
	
	String m=null;  



if(h1==null)
{
System.out.println("--NOT ABSENT-->ROLL NUMBER------->"+rn);
m=m1+"P"+m2;
 
 
  System.out.println("--->ATTENDANCE-->"+m);
}
else
{
System.out.println("--->ABSENT--");
m=m1+"A"+m2;
 
 
  System.out.println("--->ATTENDANCE-->"+m);
}
String q10="UPDATE "+tab+" SET "+cln+"='"+m+"' WHERE ROLLNO="+rn+"";
System.out.println("--->query--->"+q10);
int  rs10=stmt10.executeUpdate(q10);
System.out.println("--->"+rs10+"<--");

}
 }
 
 catch(Exception e9)
 {
 System.out.println("-->e9-->"+e9);
 }
 


 %>
 
	
			
			          <div class="clear"><% out.println("<p><font color='#990000' size='2px'><div align='center'><b><u>"+a[9]+"&nbsp;&nbsp;"+a[4]+"&nbsp;&nbsp;STUDENT</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>SECTION</u>&nbsp;:&nbsp;"+a[3]+"&nbsp;&nbsp;</b></div></strong></font></p>");
out.println("<br/><font color='#990000' size='2px'><div align='left'><strong><u>DATE</u>&nbsp;:&nbsp;&nbsp;&nbsp;"+a[5]+"&nbsp;"+a[6]+"&nbsp;"+a[7]+"&nbsp;"+a[8]+"</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>SUBJECT ID</u>&nbsp;:&nbsp;"+a[0]+"&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>SUBJECT CODE</u>&nbsp;:&nbsp;"+a[1]+"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>SUBJECTNAME</u>&nbsp;:&nbsp;"+a[2]+"</strong></div></font><br/>"); %> 

           </div>
					  <div align="center"><% out.println("<p><font color='#990000' size='2px'><b><u>"+a[9]+"&nbsp;"+a[4]+"&nbsp;"+a[3]+"&nbsp;&nbsp;ATTENDANCE MARKED</u></b></font></p>"); %></div>
           <div align="center">
		   
			<table width='297' height="35" border='1' align='center' bordercolor='#990000' bgcolor='#D8D8DA'>
			<tr ><td><div align="center"><font color="#990000" size="2px"><b><u>STUDENT NAME</u></b></font></div></td><td><div align="center"><font color="#990000" size="2px"><b><u>STUDENT ROLL NUMBER</u></b></font></div></td><td><div align="center"><font color="#990000" size="2px" ><b><u>ATTENDANCE</u></b></font></div></td></tr> </table>
			</br>
			
			<table width='297' height="35" border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'>
			  
			  <% 
                     }
                            
							catch(Exception e)
							{
							System.out.println("exception--->"+e);
							}%>
		
			
			</table></div>
		   </div>
            <div id="footer"> &copy;2009 Attendance Tracker <br />
                <!-- This template is provided free of charge as long as you keep the link to http://www.finerdesign.com -->
                <a href="index.hot.htm" style="text-decoration:none;">Home</a> |
                <a href="legal.htm" style="text-decoration:none;"> Legal </a>| 
                <a href="Privecy_p.htm" style="text-decoration:none;">Privacy Policy </a>| 
            <a href="terms.htm" style="text-decoration:none;">Terms Of Services </a></div>
        </div>
		
		<jsp:forward page="RETRIVE.jsp" />
    </body>
</html>

