<%@ page language="java" import="java.sql.*" session="true" %>
<jsp:useBean id="con" class="connection.Conn" scope="session" />
<%
Statement stmt=con.getcon();
String q2="SELECT ";
%>