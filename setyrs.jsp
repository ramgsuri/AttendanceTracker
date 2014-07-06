<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>view faculty</title>
</head>

<body>
<%@ page language="java" session="true" import="java.sql.*" %>

<%
// out.println("--------");
  String yrs=request.getParameter("years");
  session.setAttribute("years",yrs);
 System.out.println("---values set-->"+yrs);
  
// String branch=session.getAttribute('branch').toString();

 //System.out.println("----viewfaculty.jsp->"+branch);
 %>
</body>
</html>
