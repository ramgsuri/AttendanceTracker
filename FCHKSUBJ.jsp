<%@ page language="java" session="true" import="java.sql.*,java.util.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
try
{
System.out.println("-->in FCHKSUBJ.jsp<--->");
 String b=session.getAttribute("brh").toString(); 
 System.out.println("--branch--->"+b);
 String sn=session.getAttribute("username").toString(); 
 int ssn=Integer.parseInt(sn);
 System.out.println("--ssn--->"+ssn);
String subid=request.getParameter("subid");
String sec=request.getParameter("sect");
String subname=request.getParameter("subname");
String subcode=request.getParameter("subcode");
String st="";
String n="";
String s="";
String flag="";
int i;
 Statement stmt1=con.getcon();
Statement stmt2=con.getcon();

 System.out.println("---->subid-->"+subid);
 System.out.println("---->subname-->"+subname);
 System.out.println("---->sec-->"+sec);
 System.out.println("---->subcode-->"+subcode);
 
 String q1="SELECT SUBJECTNAME FROM "+b+"SUBJECT WHERE SUBJECTCODE='"+subcode+"' AND SUBJECTID='"+subid+"'";
 System.out.println("--->q1-->"+q1);
 ResultSet rs1=stmt1.executeQuery(q1);
 System.out.println("---->q1--EXECUTED--");
 if(rs1.next())
 {
 n=rs1.getString(1);
 System.out.print("---->nn111--->"+n);
 }
 
 if(subname.equals(n))
 {
 System.out.println("--->MATCH OF SUBJECT NAME--->");
 st="SUCESS";
 }
 else
 {
  System.out.println("--->NO SUBJECT NAME--->");
 }
 
    if(st.equals("SUCESS"))
    {
          for (i=1;i<=6;i++)
           {
                 String q2="SELECT SEC"+i+" FROM "+b+"AGFACULTY WHERE SSNNO="+ssn+" AND ASSIGN"+i+"='"+subid+"'";
              System.out.println("--->q1-->"+q2);
              ResultSet rs2=stmt1.executeQuery(q2);
             System.out.println("---->q2--EXECUTED--");
             while(rs2.next())
             {
                s=rs2.getString(1);
                 System.out.println("---->section--->"+s);
 
                 if(sec.equals(s))
                 {
                    flag="SUCESS";
                   }
               }
              }
          }
 
 if(flag.equals("SUCESS") && st.equals("SUCESS") )
 {
 System.out.println(" CORRECT INFORMATION");
 //String a="http://localhost:7001/url2?txtname1="+NM1+"&txtclass1="+CL1+"";
 out.write("CORRECT");
  }
  else
  {
  System.out.println("WRONG INFORMATION");
  out.write("WRONG");
  }
   
 
 
 
}

catch(Exception e)
{
System.out.println("---->"+e);
}  %>