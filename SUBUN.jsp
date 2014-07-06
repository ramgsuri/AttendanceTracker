<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>


<%
try{

   System.out.println("-->SUBUN.jsp<---");
   
    int i,flag=0,count=0;
     
	 String SUBID="";
    String SUBNAME="";
    String SUBCODE="";
	String st="HI";
	
   Statement stmt1=con.getcon();
   Statement stmt2=con.getcon();
    Statement stmt3=con.getcon();
   String opt=request.getParameter("opt"); 
   System.out.println("--->"+opt);
  String b=session.getAttribute("brh").toString(); 
  System.out.println("--branch--->"+b);
  
  
   String q1="SELECT SUBJECTID,SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT";
  System.out.println("--q1-->"+q1);
  ResultSet rs1=stmt1.executeQuery(q1);
 System.out.println("QUERY EXECUTED-->q1"); 
 
  while(rs1.next())
  {
  count=0;
  String subid=rs1.getString(1);
  String subname=rs1.getString(2);
  String subcode=rs1.getString(3);
  System.out.println("-->"+subid);
  System.out.println("-->"+subname);
  System.out.println("-->"+subcode);
  for(i=1;i<=6;i++)
  {
  String q2="SELECT  SSNNO,SEC"+i+" FROM "+b+"AGFACULTY WHERE ASSIGN"+i+" ='"+subid+"'";
  System.out.println("-->"+q2);
  ResultSet rs2=stmt2.executeQuery(q2);
  System.out.println("EXECUTED");
  while(rs2.next())
  {
  int sn=rs2.getInt(1);
  count=count+1;
       
  
          } 
		 
   
   }  
   
   
   if(count==0)
   {
   SUBID=SUBID+subid+";";
   SUBNAME=SUBNAME+subname+";";
   SUBCODE=SUBCODE+subcode+";";
   
   }
  
  }
  System.out.println(""+SUBID);
  System.out.println(""+SUBNAME);
  System.out.println(""+SUBCODE);
  st=SUBID+"-"+SUBNAME+"-"+SUBCODE;
  System.out.println("-----st-->"+st);
  
  
 
  out.write(st);
}
catch(Exception e)
{
System.out.println("--->"+e);
}
%>