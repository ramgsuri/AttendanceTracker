<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>


<%
try{

   System.out.println("-->HASSUB.jsp<---");
   
    int i,flag=0;
     String AGSID="";
    String AGSNAME="";
    String AGSCODE="";
	 String UNAGSID="";
    String UNAGSNAME="";
    String UNAGSCODE="";
	String SSN="";
	String SEC="";
	String SUBALLOT="";
	String FAALLOT="";
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
  
  
       String q3="SELECT NAMES FROM "+b+"FACULTY WHERE SSNNO="+sn+"";
	   System.out.println("Q3-->"+q3);
	   ResultSet rs3=stmt3.executeQuery(q3);
	   System.out.println("EXECUTED");
	   if(rs3.next())
	   {
	    String n=rs3.getString(1); 
		System.out.println("----sn->"+sn+"--->name--->"+n);
		FAALLOT=FAALLOT+n+";";
		
	     } 
		 
		 
	   
     String section=rs2.getString(2);
     String sn1=Integer.toString(sn); 
  SSN=SSN+sn1+";";
  SEC=SEC+section+";";
  SUBALLOT=SUBALLOT+subid+";";
  flag=1;
  }
  }//for closed
  if(flag==1)
  {
  AGSID=AGSID+subid+";";
  AGSNAME=AGSNAME+subname+";";
  AGSCODE=AGSCODE+subcode+";";
  } 
  else
  {
  UNAGSID=UNAGSID+subid+";";
  UNAGSNAME=UNAGSNAME+subname+";";
  UNAGSCODE=UNAGSCODE+subcode+";";
  }
  
  }//while closed
  
  System.out.println("--AGSID-->"+AGSID);
  System.out.println("--AGSNAME--->"+AGSNAME);
  System.out.println("---AGSCODE--->"+AGSCODE);
  System.out.println("--UNAGSID-->"+UNAGSID);
  System.out.println("--UNAGSNAME--->"+UNAGSNAME);
  System.out.println("---UNAGSCODE--->"+UNAGSCODE);
  System.out.println("--SSN ALLOTED-->"+SSN);
  System.out.println("--SECTION ALLOTED--->"+SEC);
  System.out.println("---SUBJECT ID ALLOTED--->"+SUBALLOT);
  System.out.println("--->FACULTY NAME--->"+FAALLOT);
  String st=AGSID+","+AGSNAME+","+AGSCODE+","+UNAGSID+","+UNAGSNAME+","+UNAGSCODE+","+SSN+","+SEC+","+SUBALLOT+","+FAALLOT;
  System.out.println("st--->"+st);
  out.write(st);
}
catch(Exception e)
{
System.out.println("--->"+e);
}
%>