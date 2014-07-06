package connection;
import java.sql.*;
public class  Conn
{
	     
		 public Statement getcon()
	       {
                Statement stmt=null;
			   try
			   {
				   
			   
			   Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
    	     Connection cn=DriverManager.getConnection("jdbc:odbc:attendance");
    	   stmt=cn.createStatement();
		}
			   catch (Exception e)
			   {
				   System.out.println("======>"+e);
			   }
			   return stmt;
	}
}
