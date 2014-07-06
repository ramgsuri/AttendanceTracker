<%@ page language="java" import="java.sql.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
Statement stmt=con.getcon();
System.out.println("---------CHECK.JSP-------");
System.out.println("HELLO");

String name ,q1=null,m=null;
String brh="";
String q2=null;
 String id=request.getParameter("id");
 String b=request.getParameter("field").trim();
 String r=request.getParameter("roll").trim();
 
m="exist";
 System.out.println("------------->id-->"+id);
 System.out.println("------------->fld-->"+b);
 System.out.println("------------->roll-->"+r);
 System.out.println("--------------");
 
 
 if(id.equals("student"))
{
   
   String branch=r.substring(5,7);
   if(branch.equals("10"))
   brh="CS";
   
   if(branch.equals("31"))
   brh="EC";
   
   if(branch.equals("32"))
   brh="EE";
   
   if(branch.equals("33"))
   brh="EI";
   
   if(branch.equals("40"))
   brh="ME";
   
   System.out.println("---->"+branch);
   
   int r1=Integer.parseInt(r);
 q1= "select STUDENTNAME ,YEARS from "+brh+"STUDENT where ROLLNO="+r1+"";
 
 m="student";
 
     System.out.println("------->qery--"+q1);
     ResultSet rs=stmt.executeQuery(q1);
     System.out.println("-------> EXECUTED-------");
 
    if(rs.next())
	   {
	   
	     name=rs.getString(1);
         System.out.println("---->n->"+name);
        
		 
		  int years=rs.getInt(2);
		 session.setAttribute("name",name);
		 session.setAttribute("username",brh);
		 session.setAttribute("id",r);
		 session.setAttribute("y",years); 
		 	out.write(m);
	   }
	   
	    
		 else
		 {
		 out.write("not");
		 }
	   
 }