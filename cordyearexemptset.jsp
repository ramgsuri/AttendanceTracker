<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>view faculty</title>
</head>

<body>
<%@ page language="java" session="true" import="java.sql.*" %>

<%
// out.println("--------");
System.out.println("----cordyearexemptset.jsp->");
  String y=request.getParameter("YEARS");
  session.setAttribute("yearexempt",y);
 System.out.println("---values set-->"+y);
  
// String branch=session.getAttribute('branch').toString();

 //System.out.println("----viewfaculty.jsp->"+branch);
 %>
</body>
</html>