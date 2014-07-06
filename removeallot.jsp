<%@ page language="java" import="java.sql.*,java.util.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
try
{
Statement stmt=con.getcon();

System.out.println("--removeallot.jsp---");
 String name=request.getParameter("name");
 String ssn=request.getParameter("ssn");
 int i=0;
 String b=session.getAttribute("brh").toString(); 
 System.out.println("--branch--->"+b);
  System.out.println("--name-->"+name);
   System.out.println("--ssn--->"+ssn);
   String subid="",subcode="",subname="";
   String sec="";
   String q1="SELECT * FROM "+b+"AGFACULTY WHERE SSNNO="+ssn+"";
   ResultSet rs1=stmt.executeQuery(q1);
   while(rs1.next())
   {
     for(i=2;i<=13;i=i+2)
	 {
	 
	 String s1=rs1.getString(i);
	 String s2=rs1.getString(i+1);
	 Statement stmt1=con.getcon();
	 if(s1.equals("0"))
	 {
	 break;
	 }
	 else
	 {
	 String q2="SELECT * FROM "+b+"SUBJECT WHERE SUBJECTID='"+s1+"'";
	 ResultSet rs2=stmt1.executeQuery(q2);
	   while(rs2.next())
	   {
	   String s3=rs2.getString(1);
	   String s4=rs2.getString(2);
	   subname=subname+s3+";";
	   subcode=subcode+s4+";";
	   }
	   subid=subid+s1+";";
	   sec=sec+s2+";";
	 rs2.close();
	 stmt1.close();
	 
	 }
	 
	 }
   }
   System.out.println("---i-->"+i);
   

System.out.println("subj name-->"+subname);
System.out.println("subj code-->"+subcode);
System.out.println("subj id-->"+subid);
System.out.println("section-->"+sec);
String msg=subname+":"+subcode+":"+subid+":"+sec;
out.write(msg);

}




catch(Exception e)
{
System.out.println(""+e);

}
%>

