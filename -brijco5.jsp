<%-- 
    Document   : f4
    Created on : Jan 26, 2009, 11:04:53 AM
    Author     : db2admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import ="java.util.*"%>
<%@page import ="java.sql.*"%>
<%@page import ="java.io.Serializable"%>
<%@page import="java.io.*"%>
<%@page import ="java.net.*"%>
<%@page import="javax.servlet.*"%>
<%@page import ="javax.servlet.http.*"%>
<%@page import ="java.lang.*"%>

<%

            PreparedStatement pstmt, pstmtq, pstmt1, pstmt2, pstmtw,pstmt3,pstmtn;     
            HttpSession ses=request.getSession(true);
            Enumeration  enume = null;
            java.util.Date now = new java.util.Date();
            String date=""+now.getDate()+"";
            String day=""+now.getDay()+"";
            String sem=(String)ses.getAttribute("sem");
            String sec=(String)ses.getAttribute("sec");
            String roll=(String)ses.getAttribute("roll");
            
            String branch=(String)ses.getAttribute("branch");
            ses.setAttribute("sem",sem);   
            ses.setAttribute("branch",branch);   
            ses.setAttribute("sec",sec);   
            enume=request.getParameterNames();
            //Connection con = DriverManager.getConnection("jdbc:odbc:zx","scott","tiger");
            Connection conn = DriverManager.getConnection("jdbc:odbc:attendance");
           // char c[];     
            String data="";
  int p=2,prl=0;    


%>
<form action="-brijco2sp.jsp">
<%
            while(enume.hasMoreElements())
          {
              data=(String)enume.nextElement();
        int len= data.length();
        for(int i=0;i<len;i++)
{                 
if(data.charAt(i)=='w')       
{
//out.println(i);
prl=i;
}
}                  
//out.println(len);

//String s1=new String(data,0,2);



/*for(int i=0;i<prl;i++)
{
   c[i] =data.charAt(i);
}
String pr=new String(c);
out.println("PRIORITY IS==="+pr);
*/
String pr=data.substring(0,prl);
//out.println("PRIORITY="+pr);
String da=data.substring(prl+1,len);
// out.println("date="+da); 

 Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
            
    String qu = "select * from csjan where roll=?";
            pstmtw = conn.prepareStatement(qu);
               pstmtw.setString(1,roll);
            ResultSet rs = pstmtw.executeQuery();
            int q = 0;
            String s = "vvvvvvvvvvv";
            while (rs.next())
                {
              s = rs.getString(da);

                 }
StringBuffer sb = new StringBuffer(s);
 p=Integer.parseInt(pr);
int qw=2;
sb.setCharAt(p-1,'e');
String sd=sb+"";           

String strii="UPDATE csjan SET "+da+"=?  WHERE roll =?" ;
//pstmt2 = con.prepareStatement(strii);
pstmt2 = conn.prepareStatement(strii);
pstmt2.setString(1,sd);
pstmt2.setString(2,roll);        
pstmt2.executeUpdate(); 
}
  
  //response.sendRedirect("co2sp.jsp");
  %>
  <input type=submit value=89></form>