<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
try
{
String faculssn="";
String faculname="";
String notfaculssn="";
String notfaculname="";
   System.out.println("------>CREATING LIST ASSIGNED SUBJECT --hodasfaculty.jsp--");
  Statement stmt1=con.getcon();
  Statement stmt2=con.getcon();
   String opt=request.getParameter("opt"); 
   System.out.println("--->"+opt);
  String b=session.getAttribute("brh").toString(); 
  System.out.println("--branch--->"+b);
  String q1="SELECT SSNNO,NAMES FROM "+b+"FACULTY";
  System.out.println("-->"+q1);
 ResultSet rs1=stmt1.executeQuery(q1);
 
 while(rs1.next())
  {
  int ssn=rs1.getInt(1);
  String name=rs1.getString(2);
  System.out.println("-->"+name);
  String q2="SELECT * FROM "+b+"AGFACULTY WHERE SSNNO="+ssn+"";
   System.out.println("-->"+q2);
  ResultSet rs2=stmt2.executeQuery(q2);
  if(rs2.next())
  {
  System.out.println("RS2 IF");
   String sn=Integer.toString(ssn);
   faculssn=faculssn+sn+";";
   faculname=faculname+name+";";
     }
  else
  {
  String sn=Integer.toString(ssn);
  notfaculssn=notfaculssn+sn+";";
  notfaculname=notfaculname+name+";";
  System.out.println("NO SUCH");
  }
  
  System.out.println("-->"+ssn);
  }
  if(opt.equals("ASSIGN"))
  {
  System.out.println("--->ASSIGN");
  String st=faculssn+","+faculname;
 System.out.println("---asgsubssn-->finalstring-->"+st);
 out.write(st);
  }
  else if(opt.equals("NOTASSIGN"))
  {
  String st=notfaculssn+","+notfaculname;
  System.out.println("--->ERR NOT ASSIGN-->"+st);
  out.write(st);
  }
  else
  {
  System.out.println("--->ERR FOR OPT");
  }
  
  }
  catch(Exception e)
  {
  System.out.println("--->"+e);
  }
  
  %>