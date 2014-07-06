<%@ page language="java" import="java.sql.*,java.util.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
try
{
Statement stmt=con.getcon();
Statement stmt1=con.getcon();
Statement stmt2=con.getcon();
System.out.println("--remall.jsp---");
 String name=request.getParameter("name");
 String ssn=request.getParameter("ssn");
 int i=0,j=0;
 String b=session.getAttribute("brh").toString();
  String id=request.getParameter("id"); 
 System.out.println("--branch--->"+b);
  System.out.println("--name-->"+name);
   System.out.println("--ssn--->"+ssn);
    System.out.println("--sub--->"+id);
	String sid[]=id.split(":");
	System.out.println("subid-->"+sid[0]);
	System.out.println("section-->"+sid[1]);
	String q1="SELECT * FROM "+b+"AGFACULTY WHERE SSNNO="+ssn+"";
	ResultSet rs1=stmt.executeQuery(q1);
	String s1[]=new String[20];
	
	while(rs1.next())
	{
	
	for(i=2;i<=13;i=i+2)
	{
	   String u1=rs1.getString(i);
	    String u2=rs1.getString(i+1);
	   
	   if((sid[0].equals(u1)) && (sid[1].equals(u2)) )
	   {
	   System.out.println("MATCH FOUND");
	   }
	else
	{
	   if(u1.equals("0"))
	   {
	   
	   System.out.println("0000 found");
	   } 
	   else
	   {
	   System.out.println("setting value-->jj-->"+j+"--u1-->"+u1+"-->u2-->"+u2);
	     s1[j]=u1;
	     s1[j+1]=u2; 
	     j=j+2;
	 
	     }
	  }
	}
	
	}
	System.out.println("jjj-->"+j);
	for(i=0;i<j;i++)
	{
	System.out.println("--->s1---"+i+"->"+s1[i]);
	}
	for(i=j;i<20;i++)
	{
       s1[i]="0";	
	System.out.println("--->s1--->"+i+"->"+s1[i]);
	}
	
	String q3="DELETE FROM "+b+"AGFACULTY WHERE SSNNO="+ssn+"";
	System.out.println(""+q3);
	stmt2.executeUpdate(q3);
	System.out.println("DELETED");
	
	if(s1[0].equals("0"))
	{
	System.out.println("NO SUBJECT LEFT ALLOTED TO-->"+ssn+"");
	}
	else
	{
	
	String q2="INSERT INTO "+b+"AGFACULTY VALUES("+ssn+",'"+s1[0]+"','"+s1[1]+"','"+s1[2]+"','"+s1[3]+"','"+s1[4]+"','"+s1[5]+"','"+s1[6]+"','"+s1[7]+"','"+s1[8]+"','"+s1[9]+"','"+s1[10]+"','"+s1[11]+"')";
	System.out.println(""+q2);
	stmt1.execute(q2);
	System.out.println("EXECUTED");
	}
	
}


catch(Exception e)
{
System.out.println(""+e);

}
%>