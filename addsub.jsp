
<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
int sem=0;
int allo=0;
 Statement stmt=con.getcon();
System.out.println("-add subject.jsp-------");
  
 String s=null,m=null,b=null,c=null;
 String branch=session.getAttribute("branch").toString();
 System.out.println("-ALERT------"+branch);
 String subname=request.getParameter("subname");
 String subcode=request.getParameter("subcode");
 String subid=request.getParameter("subid");
 System.out.println("-ALERT------");
 System.out.println("-------branch-->"+branch);
 System.out.println("-------subname-->"+subname);
 System.out.println("-------subcode-->"+subcode);
 System.out.println("-----subid----->"+subid);

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

System.out.println("---------bb->"+b);
String q1="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT where SUBJECTID='"+subid+"'";
System.out.println("----->"+q1);
ResultSet rn=stmt.executeQuery(q1); 
System.out.println("-->query--executed--");
while(rn.next())
{
s=rn.getString(1);
System.out.println("-already---exist->"+s);
c=rn.getString(2);
System.out.println("-already---exist->"+c);
}
String q3="SELECT SUBJECTNAME,SUBJECTID FROM "+b+"SUBJECT where SUBJECTCODE='"+subcode+"'";
System.out.println("----->"+q1);
ResultSet rc=stmt.executeQuery(q3); 

while(rc.next())
{
s=rc.getString(1);
System.out.println("-already---exist->"+s);
c=rc.getString(2);
System.out.println("-already---exist->"+c);
}


 if(s!=null)
{
System.out.println("----->ALREDY EXIST--");
m="exist";
}

 else
{
System.out.println("---->else");
String q2="INSERT INTO "+b+"SUBJECT VALUES('"+subname+ "','"+subcode+"','"+subid+"')";
System.out.println("----->"+q2);
stmt.execute(q2);
//m=Integer.toString(s);
System.out.println("---->query executed");
m="added";
}

out.write(m);



}
catch(Exception e)
{
System.out.println("-->"+e);
} 
 %>
