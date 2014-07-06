<%@ page language="java" import="java.sql.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
String st="sucess";
try
{
Statement stmt=con.getcon();
System.out.println("---------CHANGE PASSWORD ----changepass.jsp-------");
System.out.println("HELLO");

String q="";
String b="";
String id=request.getParameter("id");
  String old=request.getParameter("old");
 String newp=request.getParameter("new");
 String repass=request.getParameter("renew");
 System.out.println("------------->id-->"+id);
 System.out.println("------------->old-->"+old);
 System.out.println("------------->new pass-->"+newp);
 System.out.println("------------->re new pass-->"+repass);

if(id.equals("cordinator"))
{
    String ssn1=session.getAttribute("ssn").toString();

 int ssn=Integer.parseInt(ssn1);
  System.out.println("-------------SSN INT-->"+ssn);
 q="UPDATE CORDINATOR SET PASSWORD='"+newp+"' WHERE SSNNO="+ssn+" AND PASSWORD='"+old+"'";
 
 }
 
 if(id.equals("office"))
 {
 String username=session.getAttribute("username").toString();
 System.out.println("username--->"+username);
 q="UPDATE OFFICE SET PASSWORD='"+newp+"' WHERE USERNAME='"+username+"' AND PASSWORD='"+old+"'";
 }
 
 if(id.equals("hod"))
 {
 String username=session.getAttribute("username").toString();
 System.out.println("username--->"+username);
 q="UPDATE HOD SET PASSWORD='"+newp+"' WHERE USERNAME='"+username+"' AND PASSWORD='"+old+"'";
 }
 
 
 System.out.println("-->query-->"+q);
 int a=stmt.executeUpdate(q);
 System.out.println("--->EXECUTED---a->"+a);
 
 

 
 out.write(st);
 }
 catch(Exception e)
 {
 st="fail";
 out.write(st);
 System.out.println("--->"+e);
 }
 
  %>