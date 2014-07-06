<head>

<title>view faculty</title>
</head>

<body>
<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
// out.println("--------");
System.out.println("SETALLOT");
  String cla=request.getParameter("c1");
   String sub=request.getParameter("sub");
   System.out.println("---cla-->"+cla+"-->"+sub);
  String b=session.getAttribute("brh").toString(); 
 System.out.println("--branch--->"+b);
 
 
 String ssn=session.getAttribute("sn").toString();
 System.out.println("----->"+ssn);
 
 
 
 int flag=0,i;
 int asn=0;
 String msg="",name="";
 Statement stmt2=con.getcon();
  Statement stmt3=con.getcon();
 Statement stmt4=con.getcon();
  Statement stmt5=con.getcon();
  for(i=1;i<=6;i++)
  {
  String q2="SELECT  SSNNO FROM "+b+"AGFACULTY WHERE ASSIGN"+i+" ='"+sub+"' AND SEC"+i+"='"+cla+"'";
  System.out.println("-->"+q2);
  ResultSet rs2=stmt2.executeQuery(q2);
  while(rs2.next())
  {
  asn=rs2.getInt(1);
  flag=1;
  }
  }
  
  if(flag==1)
  {
  System.out.println("ALERADY-->"+asn);
   Statement stmt1=con.getcon();
   String q1="SELECT NAMES FROM "+b+"FACULTY WHERE SSNNO="+asn+"";
   ResultSet rs1=stmt1.executeQuery(q1);
   while(rs1.next())
   {
   name=rs1.getString(1);
   }
   msg=asn+";"+name;
   
  out.write(msg);
  }
  else
  {
 int j=0;
   msg="ALLOT";
  System.out.println("YET NOT ALLOTED");
  
  
  
 String f1=null;
  String q4="SELECT * FROM "+b+"AGFACULTY WHERE SSNNO="+ssn+"";
  ResultSet rs4=stmt4.executeQuery(q4);
  if(rs4.next())
  {
    for(j=2;j<=13;j=j+2)
	{
	f1=rs4.getString(j);
	System.out.println("---->"+f1);
	if(f1.equals("0"));
	{
	System.out.println("=jj=-->"+j);
	break;
	}
	
	
	}
  }
  else
  {
  System.out.println("NO FACULTY SUCH PRESENT-->");
  
 String q3="insert into "+b+"AGFACULTY  values("+ssn+",'"+sub+"','"+cla+"','0','0','0','0','0','0','0','0','0','0')";
   System.out.println(""+q3);
      stmt3.execute(q3);
   System.out.println("EXECUTED Q3");
 }
 
 if(j!=0)
 {
 System.out.println("jjjj---->"+j); 
 String p=Integer.toString(j);
 System.out.println("pp-->"+p);
String q5="UPDATE "+b+"AGFACULTY SET ASSIGN"+p+"='"+sub+"', SEC"+p+"='"+cla+"' WHERE SSNNO="+ssn+"";
System.out.println("q5-->"+q5);
int c=stmt5.executeUpdate(q5);
System.out.println("EXECUTED-->cc-->"+c);
  
 
 }
 
  out.write(msg);
  }
 %>
</body>
</html>
