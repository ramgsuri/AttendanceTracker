<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
System.out.println("------>deletesubject.jsp--");
 //String p="viewsub.jsp";
//session.setAttribute("prev",p);
//System.out.println("------>VIEW SUBJECT--");
 Statement stmt=con.getcon();
// out.println("--------");
  String m=null;
  try{
 String branch=session.getAttribute("branch").toString();
 String subid=request.getParameter("dsub");
 System.out.println("--delete----->subid--->"+subid);
String b=null;
System.out.println("----deletesubject.jsp->"+branch);
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

System.out.println("------->"+b);
String query="DELETE FROM "+b+"SUBJECT WHERE SUBJECTID='"+subid+"'" ;
System.out.println("--->query-->"+query);
stmt.execute(query); 
System.out.println("--->subject deleted--<");
m="DELETED";
out.write(m);
//out.println("-----HEY --");
 %>


<% }
catch(Exception e)
{
m="NOT";
out.write(m);
System.out.println("---->"+e);
}   

%>