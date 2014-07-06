<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
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
 
 int flag=0,i;
 int asn=0;
 String msg=null,name=null;
 Statement stmt2=con.getcon();
 
 
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
   stmt1.close();
  out.write(msg);
  }
  else
  {
  int j=0;
  msg="ALLOT";
  System.out.println("YET NOT ALLOTED");
  Statement stmt3=con.getcon();
 String f1=null;
  String q3="SELECT * FROM "+b+"AGFACULTY WHERE SSNNO="+asn+"";
  ResultSet rs3=stmt3.executeQuery(q3);
  if(rs3.next())
  {
    for(j=2;j<=13;j=j+2)
	{
	f1=rs3.getString(j);
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
  }
  System.out.println("-->jjj--->"+j);
  out.write(msg);
  }
 %>
</body>
</html>
