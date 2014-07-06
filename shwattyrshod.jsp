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
 
  
  
 //String branch=session.getAttribute("brh").toString();

//System.out.println("----viewfaculty.jsp->"+branch);
 %>
</body>
</html>