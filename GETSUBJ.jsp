<%@ page language="java" session="true" import="java.sql.*,java.util.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
try
{
String subj="";
String sec="";
String subname="";
String subcode="";
String st="";
 System.out.println("-->in GETSUBJ.jsp<--->");
 String b=session.getAttribute("brh").toString(); 
 System.out.println("---->branch-->"+b);
 String opt=request.getParameter("opt");
 System.out.println("--->opt--->"+opt);
String ssn=request.getParameter("ssn");
int sn1=Integer.parseInt(ssn);
System.out.println("---int->"+sn1);
Statement stmt=con.getcon();
Statement stmt1=con.getcon();
String q="SELECT * FROM "+b+"AGFACULTY WHERE SSNNO="+sn1+"";
System.out.println("--->q-->"+q);
ResultSet rs=stmt.executeQuery(q);
System.out.println("--->q--executed");
while(rs.next())
{
String sub1=rs.getString(2);
String sec1=rs.getString(3);
String sub2=rs.getString(4);
String sec2=rs.getString(5);
String sub3=rs.getString(6);
String sec3=rs.getString(7);
String sub4=rs.getString(8);
String sec4=rs.getString(9);
String sub5=rs.getString(10);
String sec5=rs.getString(11);
String sub6=rs.getString(12);
String sec6=rs.getString(13);

  if(sub1.equals("0")) 
{
System.out.println("NOT-->1");
}
else
{

  String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub1+"'";
  System.out.println("-->q2-->"+q2);
  ResultSet rs1=stmt1.executeQuery(q2);
  System.out.println("QUERY EXECUTED");
  if (rs1.next())
  {
  String name=rs1.getString(1);
  String code=rs1.getString(2);
  System.out.println("NAME--"+name);
  System.out.println("code--"+code);
  subname=subname+name;
  subcode=subcode+code;
  }
   rs1.close();

  System.out.println("ELSE");
subj=subj+sub1;
sec=sec+sec1;
System.out.println("-->sub1-a[i]--->");
System.out.println("SUBJ1--->"+sub1);


}

if(sub2.equals("0")) 
{
System.out.println("NOT-->2");
}
else
{

 String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub2+"'";
  System.out.println("-->q2-->"+q2);
  ResultSet rs1=stmt1.executeQuery(q2);
  System.out.println("QUERY EXECUTED");
  if (rs1.next())
  {
  String name=rs1.getString(1);
   String code=rs1.getString(2);
  System.out.println("NAME--"+name);
  System.out.println("code--"+code);
  subname=subname+";"+name;
   subcode=subcode+";"+code;
  }
  rs1.close();
subj=subj+";"+sub2;
sec=sec+";"+sec2;

}
if(sub3.equals("0")) 
{
System.out.println("NOT-->3");
}
else
{

  String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub3+"'";
  System.out.println("-->q2-->"+q2);
  ResultSet rs1=stmt1.executeQuery(q2);
  System.out.println("QUERY EXECUTED");
  if (rs1.next())
  {
  String name=rs1.getString(1);
  String code=rs1.getString(2);
  System.out.println("NAME--"+name);
  System.out.println("code--"+code);
  subname=subname+";"+name;
  subcode=subcode+";"+code;
  } 
  rs1.close();
subj=subj+";"+sub3;
sec=sec+";"+sec3;

}
if(sub4.equals("0")) 
{
System.out.println("NOT->4");
}
else
{

  String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub4+"'";
  System.out.println("-->q2-->"+q2);
  ResultSet rs1=stmt1.executeQuery(q2);
  System.out.println("QUERY EXECUTED");
  if (rs1.next())
  {
  String name=rs1.getString(1);
  String code=rs1.getString(2);
  System.out.println("NAME--"+name);
   System.out.println("code--"+code);
   subname=subname+";"+name;
   subcode=subcode+";"+code;
  }
  rs1.close();
subj=subj+";"+sub4;
sec=sec+";"+sec4;

}
if(sub5.equals("0")) 
{
System.out.println("NOT-->5");
}
else
{

  String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub5+"'";
  System.out.println("-->q2-->"+q2);
  ResultSet rs1=stmt1.executeQuery(q2);
  System.out.println("QUERY EXECUTED");
  if (rs1.next())
  {
  String name=rs1.getString(1);
  String code=rs1.getString(2);
  System.out.println("NAME--"+name);
    System.out.println("code--"+code);
  subname=subname+";"+name;
   subcode=subcode+";"+code;
  } 
  rs1.close();
subj=subj+";"+sub5;
sec=sec+";"+sec5;

}
if(sub6.equals("0")) 
{
System.out.println("NOT-->6");
}
else
{

  String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub6+"'";
  System.out.println("-->q2-->"+q2);
  ResultSet rs1=stmt1.executeQuery(q2);
  System.out.println("QUERY EXECUTED");
  if (rs1.next())
  {
  String name=rs1.getString(1);
   String code=rs1.getString(2);
  System.out.println("NAME--"+name);
  System.out.println("code--"+code);
  subname=subname+";"+name;
   subcode=subcode+";"+code;
  } 
  rs1.close();
subj=subj+";"+sub6;
sec=sec+";"+sec6;

} 
System.out.println("------>END OF IF");
subj=subj+";"; 
sec=sec+";";
subname=subname+";";
subcode=subcode+";";
 }
 
 
 
 System.out.println("subname-->"+subname);
System.out.println("subcode-->"+subcode);
 System.out.println("subj-->"+subj);
 System.out.println("sec-->"+sec);
 if(opt.equals("HOD"))
 {
  st=subj+","+sec+","+subname;
 System.out.println("st-->"+st);
 }
 if(opt.equals("FACULTY"))
 {
 System.out.println("FACULTY REQUEST");
 st=subj+","+sec+","+subname+","+subcode;
System.out.println("st-->"+st);
}
 out.write(st);
 System.out.println("END OF TRY");
  }
  catch(Exception e)
  {
  System.out.println("-->"+e);
  } %>