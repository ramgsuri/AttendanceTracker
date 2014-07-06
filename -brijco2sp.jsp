
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
	
	<%@ page language="java" session="true" import="java.sql.*" %>
<--jsp:useBean class="connection.Conn" id="con" scope="session"/-->
<%
String branch="cs";
// Statement stmt=con.getcon();
// out.println("--------");
             String b=null;
//out.println("----viewfaculty.jsp->"+branch);
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


//String query="select name,roll from csjan where sec='a1' and sem='6'";
//System.out.println("--->query-->"+query);
//ResultSet rs=stmt.executeQuery(query); %>
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                        <li><a href="help.html" class="two">Help</a></li>
                       <li><layer name="kl" width="87" height="19" id="kl"><a  href="" class="two" id="<% out.println(""+branch+""); %>" onClick=" return bak(this.id);" >Back</a></layer></li>
                        <li><a href="contact.html" class="two">Contact us</a></li>      
                    </ul>
              </div>
               
          </div>
            <div id="main-inner">
			
	
			
			          <div class="clear"></div>
					  <div align="center"><% out.println("<p><font color='#990000' size='3px'><b><u>THIRD YEAR&nbsp;&nbsp;COORDINATOR</u></b></font></p>"); %></div>
           <div align="center">
		   
			<table border=2 bordercolor="#990000" bgcolor='#D8D8DA'>
                             <tr><td><font color="#990000" size="3px"><b>SUBJECT</b></font>&nbsp;&nbsp;</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td><font color="#990000" size="3px"><b>ABSENT DATE</b></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font color="#990000" size="3px"><b>FINE</b></font>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font color="#990000" size="3px"><b>STATUS</b></font>&nbsp;&nbsp;&nbsp;</td></tr>
                        
<form action="-brijco5.jsp">
<%
java.util.Date now = new java.util.Date();
  String date="1";          
int f=31,u[];
u=new int[41];
           HttpSession ses=request.getSession(true);
            String day=""+now.getDay()+"";
            String sem=(String)ses.getAttribute("sem");
           // String sem="6";
            String sec=(String)ses.getAttribute("sec");
            //String sec="A1";
            //String branch=(String)ses.getAttribute("branch");
            //String branch="CS";
            String roll=request.getParameter("stu");
            //String roll="19";
            ses.setAttribute("roll",roll);   
            ses.setAttribute("sem",sem);   
            ses.setAttribute("branch",branch);   
            ses.setAttribute("sec",sec);   
           Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
Connection con = DriverManager.getConnection("jdbc:odbc:attendance");
PreparedStatement pstmt,pstmtq,pstmt1,pstmt2,pstmtw;
String que = "select * from cs6a2";
pstmt1 = con.prepareStatement(que);
ResultSet rs1 = pstmt1.executeQuery();
String pr="";
int ft=0;
%></table>
<br/><br/><table border=2 bordercolor="#990000" bgcolor='#D8D8DA'>

<%while (rs1.next()) {
pr = rs1.getString("pri");
String sub=rs1.getString("subject");
int fal=0,fi=0,fo=0;
%>
<tr><td>  <%

out.println(sub);
%>
</td>
<td>
<%int p=Integer.parseInt(pr);
String motab="csjan";
if(branch.equals("CS"))
{  
motab="csjan";
}
else if(branch.equals("ME"))
{  
 motab="mejan";
}
if(branch.equals("EC"))
 {  
 motab="ecjan";
}
if(branch.equals("EI"))
 {  
 motab="eijan";
}
if(branch.equals("EE"))
 {  
 motab="eejan";
}


String qu ="select * from "+ motab +" where sem=? and sec=? and roll=?";
pstmt=con.prepareStatement(qu);
sem="6";
sec="a1";
pstmt.setString(1,sem);
pstmt.setString(2,sec);
pstmt.setString(3,roll);
ResultSet rs=pstmt.executeQuery();  
int q=0;
String s="";
String upd="" ;
String updee="";
StringBuffer sb=new StringBuffer("");
int d= 42,i=0,k,n=0,e=0,z=0,a=0;
int fine=0;
double per,y;
String op []=new String[d];
while(rs.next())
{    
  fine=0;
  for(i=0;i<f;i++)
{

op[i]=rs.getString(date);
k=Integer.parseInt(date);
k++;
char r=op[i].charAt(p-1);
z=k-1;
if((r=='0')||(r=='e'))
{
    
 if(r=='0')  
{
u[z]=u[z]+1;

n++;
fine= n*50;

if(u[z]<=3)
{
a++;
fo= a*50;
} 
}
if(fal==1)
{ %>
 <br>
 <%}  out.println("<b>absent date is"+z );
 if(r=='0')
{%><input type="checkbox" name=<%out.println(pr + "w" + z);%> value="checkbox">
 <%
 

 }
 fal=1;

}else if(r=='1')
{
e++;    
}
date=""+k+"";   
}
%>
</td><td> 
<% 
  fi=fi+fine;
ft=ft+fo;
  out.println("Fine is"+fine);
%>
</td>

    <%   date = "1";
//out.println("Roll number-->>"+roll);
%>

<td>
<%
if(e==0)
{   
out.println(" HAS NOT ATTENDED ANY CLASS");
}

else if(e!=0)
{
int g =e+n;
per =(e*100)/g;
out.println("HIS ATTENDANCE IS=="+per+"%");
}
%>
</td></tr>

<%

e=0;
n=0;
}
}
%></table>
<br><br><br><br><br><br>
<%out.println("TOTAL FINE IS=<font color=#990000 size=3px><b>"+ft+"/-Rs.</font>");
%><input type= submit value=submit style='border:groove 2pt black;background:darkred;color:wheat;font-weight:bold'>
</form>
</html>
<div>
            <div id="footer"> &copy;2009 Attendance Tracker <br />
                <!-- This template is provided free of charge as long as you keep the link to http://www.finerdesign.com -->
                <a href="index.hot.htm" style="text-decoration:none;">Home</a> |
                <a href="legal.htm" style="text-decoration:none;"> Legal </a>| 
                <a href="Privecy_p.htm" style="text-decoration:none;">Privacy Policy </a>| 
            <a href="terms.htm" style="text-decoration:none;">Terms Of Services </a></div>
        </div>
		
		
			
    </body>
</html>


 
 

