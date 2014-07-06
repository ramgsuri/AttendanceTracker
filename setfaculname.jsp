

			<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
 Statement stmt=con.getcon();
System.out.println("-setfaculname.jsp-------");
  
 String m=null; 
 String branch=session.getAttribute("branch").toString();
 String na=request.getParameter("faname");
 
 System.out.println("-------name-->"+na);
 System.out.println("-------branch-->"+branch);
String b=null;
String pa="123456";
int s=000000;
try
{

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


String q1="select max (SSNNO) FROM "+b+"FACULTY";
ResultSet rn=stmt.executeQuery(q1); 
System.out.println("-->"+q1+"--executed--");
while(rn.next())
{
s=rn.getInt(1);
System.out.println("--->"+s);
}

s=s+1;
Statement stmt2=con.getcon();
Statement stmt1=con.getcon();
String q2="INSERT INTO "+b+"FACULTY VALUES('"+na+ "','"+na+"','"+pa+"','"+b+"',"+s+")";
System.out.println("----->"+q2);
stmt2.execute(q2);
m=Integer.toString(s);
System.out.println("---->query2 executed");

String q3="INSERT INTO FACULTY VALUES ('"+na+"','"+b+"',"+s+",'"+pa+"')";
System.out.println("----->"+q3);
stmt1.execute(q3);
System.out.println("---->query3 executed");
out.write(m);



}
catch(Exception e)
{
System.out.println("-->"+e);
}
 %>
		
			
			

 