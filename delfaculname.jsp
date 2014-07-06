<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
 Statement stmt=con.getcon();
System.out.println("-delfaculname.jsp-------");
  
 String m=null; 
 String branch=session.getAttribute("branch").toString();
 String na=request.getParameter("dfname");
 int ssn=Integer.parseInt(na);
 //String na=session.getAttribute("faname").toString();
 System.out.println("-------ssn-->"+ssn);
String b=null;
String bt=null;
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
try
{
String q1="SELECT NAMES FROM "+b+"FACULTY WHERE SSNNO="+ssn+"";
System.out.println("------q1-->"+q1);
ResultSet rsname=stmt.executeQuery(q1);
System.out.println("------quer executed--");
int d=0;

while(rsname.next())
{
d=d+1;
bt=rsname.getString(1); 
}
System.out.println("---dd--->"+d);
System.out.println("---dd>"+d);
System.out.println("---rsname--->"+bt);
if(d==0)
{
bt="NOT";
}
else
{
String q2="DELETE FROM "+b+"FACULTY WHERE SSNNO="+ssn+"";
System.out.println("---q2-->"+q2);
stmt.executeUpdate(q2); 
System.out.println("-->"+q2+"--executed-deleted-");
}

out.write(bt);



}
catch(Exception e)
{
System.out.println("-->"+e);
} 
 %>
		