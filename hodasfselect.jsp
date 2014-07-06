<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
try
{
  System.out.println("------>SELECTING FACULTY NAME  --hodasfselect.jsp--");
  Statement stmt1=con.getcon();
  String name="";
 String ssn=request.getParameter("ssn"); 
   System.out.println("--->"+ssn);
  String b=session.getAttribute("brh").toString(); 
  System.out.println("--->"+b);
  int ssn1=Integer.parseInt(ssn);
  System.out.println("--->INT--->"+ssn1);
  String q1="SELECT NAMES FROM "+b+"FACULTY WHERE SSNNO="+ssn1+"";
  ResultSet rs1=stmt1.executeQuery(q1);
  while (rs1.next())
  {
   name=rs1.getString(1);
  }
  out.write(name);
  }
  catch(Exception e)
  {
  System.out.println("------>"+e);
  }
  
  %>