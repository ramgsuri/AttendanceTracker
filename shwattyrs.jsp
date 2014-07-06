<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>view faculty</title>
</head>

<body>
<%@ page language="java" session="true" import="java.sql.*" %>

<%
// out.println("--------");
  String y=request.getParameter("opt");
  session.setAttribute("yrs",y);
 System.out.println("---yrs set-->"+y);
 
  String y1=request.getParameter("branch");
  session.setAttribute("brh",y1);
 System.out.println("---brh set-->"+y1);
  
// String branch=session.getAttribute('branch').toString();

 //System.out.println("----viewfaculty.jsp->"+branch);
 %>
</body>
</html>
