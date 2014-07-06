<%@ page language="java" import="java.sql.*,java.util.*" session="true" %>
	
	<jsp:useBean class="connection.Conn" id="con" scope="session"/>
	
<% 

try
{


System.out.println("-------->ATT.jsp---");
   
    String mont=request.getParameter("mon");
    System.out.println("------>SHOW STUDENT ATTENDANCE OPTION");
    Statement stmt=con.getcon();
  
   String b=session.getAttribute("username").toString(); 
   System.out.println("--branch--->"+b);
   String roll=session.getAttribute("id").toString();
    System.out.println("--roll-->"+roll);
   int rn=Integer.parseInt(roll);
    System.out.println("--ssn--->"+rn);
    String name=session.getAttribute("name").toString(); 
   System.out.println("--name--->"+name);
   String yrs=session.getAttribute("y").toString();
    System.out.println("--years-->"+yrs); 
	
	

/* GETTING DATE------- RETRIVEING DATES */
	 

Calendar cal= Calendar.getInstance();
int yers   =(cal.get(Calendar.YEAR));
int months =(cal.get(Calendar.MONTH))+1;
int date  =(cal.get(Calendar.DATE));
int day=(cal.get(Calendar.DAY_OF_WEEK));
String date1=Integer.toString(date);
String year1=Integer.toString(yers);
String day1="";

if(day==1)
day1="SUNDAY";

if(day==2)
day1="MONDAY";

if(day==3)
day1="TUESDAY";

if(day==4)
day1="WEDNESDAY";

if(day==5)
day1="THURSDAY";

if(day==6)
day1="FRIDAY";

if(day==7)
day1="SATURDAY";


String []month=new String[12];


		month[0]="JANUARY";
	
    	month[1]="FEBURARY";
	
		month[2]="MARCH";
	
		month[3]="APRIL";
	
		month[4]="MAY";
	
		month[5]="JUNE";
	
		month[6]="JULY";
	
		month[7]="AUGUST";
	
		month[8]="SEPTEMBER";
	
		month[9]="OCTOBER";
	
		month[10]="NOVEMBER";
	
		month[11]="DECEMBER";
	
	 Statement stmt2=con.getcon();
     Statement stmt3=con.getcon();
   String currt=month[(months-1)];
System.out.println("--CURRENT MONTH-->"+currt); 
String q1="SELECT * FROM "+b+"HELP WHERE YEARS='"+yrs+"'";
System.out.println("--q1-->"+q1);
ResultSet rs1=stmt.executeQuery(q1);
ResultSetMetaData rsmd1 = rs1.getMetaData();
   System.out.println("--q1--EXECUTED--");
    int i=2;
     int p=0;
String sub=null;
String flag=null;


String a3="";


 
if(rs1.next())
{
  System.out.println("1");
do
{

      String a5="";
      String a6="";
      String a1=""; //subject name
      String a2="";  //subject code
      String a4="";  // class conducted dates
	  String y="";   // absent dates
        int ab=0,tot=0;  // total absents  toatal classes
  System.out.println("2");
  
   sub=rs1.getString(i);
  
     /* GATHERING SUBJECT NAME & CODe--*/
	 
	 String q2="SELECT SUBJECTNAME,SUBJECTCODE FROM "+b+"SUBJECT WHERE SUBJECTID='"+sub+"'";
	 ResultSet rs2=stmt2.executeQuery(q2);
	 if(rs2.next())
	 {
	 String subname=rs2.getString(1);
	 String subcode=rs2.getString(2);
	 a1=a1+subname+"-";
	 a2=a2+subcode+"-";
	 }
	 
	 
	 
    
        System.out.println("---sub-->"+sub);
  
        if(sub.equals("0"))
         { 
          flag="false";
         break;
          }
          else
            {
            flag="true";
               } 

                       /* GATHERING PRIORITY */
		  String lab=rsmd1.getColumnLabel(i);
		  System.out.println("---->lab-->"+lab);
		 String lab1=lab.substring(7);
		  p=Integer.parseInt(lab1);
		  
		 System.out.println("--->SUBID-->"+sub+"---pp-->"+lab+"--lab1-->"+lab1+"---pp-->"+p);
		           /*P REPRESENTS PRIORITY */
		
		int k;
		         /* NOW GATHERING ATTENDANCE AT P */
		 System.out.println("3");
		 String q3="SELECT * FROM "+yrs+b+mont+" WHERE ROLLNO="+rn+"";
		 System.out.println("-->"+q3);
		 ResultSet rs3=stmt3.executeQuery(q3);
		 ResultSetMetaData rsmd3 = rs3.getMetaData();
		 int cont=rsmd3.getColumnCount();
	     System.out.println("---cont-->"+cont);
		 
		  
		 if(rs3.next())
		 {
		  System.out.println("4");
		    for(k=2;k<=cont;k++)
		    {
		      System.out.println("5");
		      String atn=rs3.getString(k);
		      System.out.println("-->att-->"+atn);
		      //System.out.println("---ppp---->after atn-->"+p);
		       char sta=atn.charAt(p-1);
		        System.out.println("---->AFTER CHAR AT---sta-->"+sta);
		        String d1= rsmd3.getColumnLabel(k);
		        System.out.println("-d1->"+d1);
		         String d2=d1.substring(4);
	          	System.out.println("--d1-->"+d1+"---d2-->"+d2); 
				
		        //System.out.println("----->"+sta);
		         if( sta=='P')
		        {
		           System.out.println("-->PRESENT");
		           tot=tot+1;
				   a4=a4+d2+"-";
		          }
		       if(sta=='A')
		       {
		         System.out.println("-->ABSENT");
		         ab=ab+1;
		         y=y+d2+"-";
		         tot=tot+1;
				 a4=a4+d2+"-";
		         }
		         System.out.println("5");
		         }//for
				  a6=Integer.toString(tot);
				  a5=Integer.toString(ab);
				 
		        }   //if  
				
				System.out.println("--->sub-->"+sub+"<--total--"+tot+"----"+ab+"--->dates-->"+y+"--class conducted--->"+a4+"");
             
			 System.out.println("--->ATTENDANCE<------");
			  System.out.println(""+sub);
			   System.out.println(""+tot);
			    System.out.println(""+ab);
				 System.out.println(""+a4);
				  System.out.println(""+y);
				   System.out.println(""+a5); 
				   System.out.println(""+a6);
			
			
		  a3= a3+":"+sub+";"+a1+";"+a2+";"+a6+";"+a5+";"+y+";"+a4+";";
		 System.out.println("--a3--]]--->"+a3);
		 i=i+1;
		 
		 System.out.println("--ATTEND FOR--"+sub+"--tot-->"+tot+"--ab-->"+ab+"--a1-->"+a1);
		 
		 }while(flag.equals("true"));

    System.out.println("-->a3==]]--"+a3);



         } //if closed 

out.write(a3);
}//first try
catch(Exception e)
{
System.out.println("-e-->"+e);
out.write("ERROR");
}



%>
