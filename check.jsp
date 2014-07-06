<%@ page language="java" import="java.sql.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
Statement stmt=con.getcon();
System.out.println("---------CHECK.JSP-------");
System.out.println("HELLO");
//out.println(" HELLLO");
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
 //flag=1;
 m="student";
 }
 if(id.equals("faculty"))
 {
  q1="select NAMES from FACULTY where USERNAME="+b+" and PASSWORD='"+r+"'";
  
   q2="select BRANCH from FACULTY where USERNAME="+b+" and PASSWORD='"+r+"'";
  m="faculty";
 }
 if (id.equals("hod"))
 {
 q1="select NAMES from HOD where USERNAME='"+b+"' and PASSWORD='"+r+"'";
 q2="select BRANCH from HOD where USERNAME='"+b+"' and PASSWORD='"+r+"'";
 m="hod";
  }
 if(id.equals("office"))
  {
  q1="select NAMES from OFFICE where USERNAME='"+b+"' and PASSWORD='"+r+"'";
  //flag=1;
 m="office";
  
  }
  
  
   if(id.equals("cordinator"))
  {
   int b1=Integer.parseInt(b);
  q2="select STATUS from CORDINATOR where SSNNO="+b1+" and PASSWORD='"+r+"'";
 
 
   ResultSet rs2=stmt.executeQuery(q2);
     if(rs2.next())
       {
     String status=rs2.getString(1);
     session.setAttribute("status",status);
      System.out.println("---status--->"+status);
	  m="cordinator";
      }
	  
	  else
	  {
	  m="not";
	  }
   q1="select NAMES from FACULTY where USERNAME="+b+"";
 
  
  }
  
  if (id.equals("hod") || id.equals("faculty"))
 {
  System.out.println("--->"+q2);
 ResultSet rs1=stmt.executeQuery(q2);
 while(rs1.next())
 {
 brh=rs1.getString(1);
 System.out.println("------>branch---->"+brh);
 }
 

session.setAttribute("brh",brh);

  }
  
 
  
 
    System.out.println("------->qery--"+q1);
    ResultSet rs=stmt.executeQuery(q1);
     System.out.println("-------> after result set-------");
        if(rs.next())
	   {
	   System.out.println("------HI IN IF----");
       name=rs.getString(1);
       System.out.println("---->n->"+name);
         session.setAttribute("name",name);
		 
		  System.out.println("--->"+id+"---->"+brh);
		  
		  
		  if(id.equals("hod"))
		  {
		  session.setAttribute("username",b);
		   session.setAttribute("id",id); 
		  }
		 if(id.equals("office"))
		 {
		 session.setAttribute("username",b);
		 session.setAttribute("id",id); 
		 }
		 
		 if(id.equals("faculty"))
		 {
		 session.setAttribute("username",b);
		 session.setAttribute("id",id); 
		 }
		 
		 if(id.equals("student"))
		 {
		 int years=rs.getInt(2);
		 session.setAttribute("username",brh);
		 session.setAttribute("id",r);
		 session.setAttribute("y",years); 
		 }
		 if(id.equals("cordinator"))
		 {
		 session.setAttribute("ssn",b);
		 }
		 
		
		 
		
 
		 
		 
		  System.out.println("---><--");
	     
	    
		
		
		 response.setContentType("text/xml");
	    response.setHeader("Cache-Control","no-cache");
        out.write(m);	
	   }   
	   	 
	else
	{
	  System.out.println("---->HI IN ELSE <----");
	  m="not";
	  response.setContentType("text/xml");
	  response.setHeader("Cache-Control","no-cache");
	  out.write(m);
	  

	 }
	
		
 

 %>