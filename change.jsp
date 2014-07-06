
<%@ page language="java" import="java.sql.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
try
{
Statement stmt=con.getcon();
System.out.println("---------CHANGE PASSWORD----change.jsp-------");
System.out.println("HELLO");

String st="sucess";
String b="";
  String old=request.getParameter("old");
 String newp=request.getParameter("new");
 String repass=request.getParameter("renew");


    String id=session.getAttribute("id").toString();
	String name=session.getAttribute("name").toString();
	String user=session.getAttribute("username").toString();
	
 System.out.println("------------->id-->"+id);
 System.out.println("------------->name-->"+name);
 System.out.println("------------->user-->"+user);
 
 System.out.println("------------->old-->"+old);
 System.out.println("------------->new pass-->"+newp);
 System.out.println("------------->re new pass-->"+repass);
 int ssn=Integer.parseInt(user);
  System.out.println("-------------SSN INT-->"+ssn);
 String q1="SELECT BRANCH FROM FACULTY WHERE USERNAME="+ssn+" AND PASSWORD='"+old+"'";
 System.out.println("-->q1-->"+q1);
 ResultSet rs=stmt.executeQuery(q1);
 System.out.println("--->EXECUTED");
 if(rs.next())
 {
  b=rs.getString(1);
 System.out.println("-->branch-->"+b);
 }
 
 else
 {
 st="fail";
 }
 
 if(st.equals("sucess"))
 {
 String q2="UPDATE FACULTY SET PASSWORD='"+newp+"' WHERE USERNAME="+ssn+" AND PASSWORD='"+old+"'";
 System.out.println("-->q2-->"+q2);
 int a=stmt.executeUpdate(q2);
 System.out.println("--->EXECUTED---a->"+a);
 
  String q3="UPDATE "+b+"FACULTY SET PASSWORD='"+newp+"' WHERE SSNNO="+ssn+" AND PASSWORD='"+old+"'";
 System.out.println("-->q2-->"+q3);
 int c=stmt.executeUpdate(q3);
 System.out.println("--->EXECUTED---c->"+c);
 }
 else
 {
 st="fail";
 }
 
 out.write(st);
 }
 catch(Exception e)
 {
 System.out.println("--->"+e);
 }
 
  %>