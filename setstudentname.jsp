<%@ page language="java" session="true" import="java.sql.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%
String st="";
try
{
System.out.println("------setstudentname.jsp-->HELLO<------");
 String m=null;
  //String st="";
 String br=";"; 
 String section1=null;
 String section2=null;
 String b=null;
 String branch=session.getAttribute("branch").toString();
 String na=request.getParameter("studname");
 String fat=request.getParameter("fathername");
 String roll=request.getParameter("roll");
 String yr=request.getParameter("year");
 int year=0;
 
 System.out.println("-------Yr- STRING->"+yr);
 System.out.println("------roll---->"+roll);
 System.out.println("--------father----->"+fat);
 System.out.println("--------name------>"+na);
 System.out.println("---------branch--->"+branch);
 
 if(yr.equals("FIRST YEARS"))
 {
 year=1;
 }

 if(yr.equals("SECOND YEARS"))
 {
 year=2;
 }
 
  if(yr.equals("THIRD YEARS"))
  {
   year=3;
   }
   
   if(yr.equals("FINAL YEARS"))
   {
     year=4;
    }
	System.out.println("------>year-->"+year);
	
	if(branch.equals("COMPUTER SCIENCE"))
  {
   b="CS";
   section1="A1";
  section2="A2";
  }
  if(branch.equals("ELECTRONICS AND COMMUNICATION"))
{
b="EC";
section1="B1";
section2="B2";
}

if(branch.equals("ELECTRICAL SCIENCE"))
{
b="EE";
section1="C1";
section2="C2";
}

if(branch.equals("ELECTRONICS AND INSTRUMENTATION"))
{
b="EI";
section1="F1";
section2="F2";
}

if(branch.equals("MECHANICAL ENGINEERING"))
{
b="ME";
section1="D1";
section2="D2";
}
	System.out.println("----b->"+b);
	System.out.println("----section1->"+section1);
    System.out.println("----section2->"+section2);
	
	String q1="INSERT INTO "+b+"STUDENT VALUES('"+na+ "','"+fat+"',"+roll+","+year+",'"+section1+"')";
    System.out.println("----->"+q1);
	Statement stmt=con.getcon();
    stmt.execute(q1); 
    System.out.println("---->query executed");
    //m="inserted";
	//Statement stmt1=con.getcon();
	String q2="SELECT * FROM "+b+"STUDENT WHERE YEARS="+year+"";
	System.out.println("---------q2->"+q2);
	 ResultSet rs=stmt.executeQuery(q2);
	while(rs.next())
	{
	String name=rs.getString(1);
	String  fathername=rs.getString(2);
	int rollnum=rs.getInt(3);
	int yrs=rs.getInt(4);
	String sec=rs.getString(5);
	String rn=Integer.toString(rollnum);
	System.out.println("------name-->"+name);
	System.out.println("------fathername-->"+fathername);
	System.out.println("------rollnum-->"+rollnum);
	System.out.println("------name-->"+yrs);
	System.out.println("------name-->"+sec);
	System.out.println("------rn---STRING->"+rn);
	System.out.println("------------------------------------------------------");
	m=name+","+fathername+","+rn+","+sec+br;
	st=st+m;
	System.out.println("STRING M--->"+st);
	} 
	System.out.println("FINAL STRING--->"+st);
	out.write(st);
	}
	catch(Exception e)
	{
	st="EXCEPTION";
	System.out.println("--->"+st);
	out.write(st);
	System.out.println("--->"+e);
	}


 %>