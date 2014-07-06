

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>Home</title>
        <meta name="keywords" content="keyword1, keyword2, keyword3, etc..." />
        <meta name="description" content="Description of website here..." />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
<!--[if IE ]>
<link href="css/ie.css" rel="stylesheet" type="text/css" />
        <![endif]-->
<style type="text/css">

a.two:hover {font-size: 150%}
a.two:visited{color:#6F6F6F}
a.one:hover {font-size:150%}
a.one:visited{color:#464646}


            <!--
.style3 {
	color: #99bb00;
	font-size: 16px;
	font-weight: bold;
}
a:link {
	text-decoration: none;
}
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
a:active {
	text-decoration: none;
}
.style6 {color: #464646}

.style1 {
	color: #990000;
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-weight: bold;
	font-size:14px;
}
.style2 {
	color: #464646;
	font-weight: bold;
	font-family: Verdana, Arial, Helvetica, sans-serif;
}
            -->
        </style>
    </head>
	
    <body  >
	
	
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                        <li><a href="help.html" class="two">Help</a></li>
                       <li><layer name="kl" width="87" height="19" id="kl"><a  href="hod.jsp" class="two" id="FACULTY"  >Back</a></layer></li>
                        <li><a href="contact.html" class="two">Contact us</a></li>      
                    </ul>
              </div>
               
          </div>
            <div id="main-inner">
			<%@ page language="java" session="true" import="java.sql.*,java.util.*" %>
<jsp:useBean class="connection.Conn" id="con" scope="session"/>
<%

System.out.println("------>SHOWING HOD ATTENDANCE-->showatthod1.jsp--");
 
// out.println("--------");
  
  String mon=request.getParameter("asgname");
   System.out.println("-month->"+mon);
 
 String yrs=session.getAttribute("yrs").toString();
 //System.out.println("--yrs-->"+yrs);
//String b=null;

String b=session.getAttribute("brh").toString();
//System.out.println("----viewfaculty.jsp->"+branch);
/*if(branch.equals("COMPUTER SCIENCE"))
b="CS";
if(branch.equals("ELECTRONICS AND COMMUNICATION"))
b="EC";
if(branch.equals("ELECTRICAL SCIENCE"))
b="EE";
if(branch.equals("ELECTRONICS AND INSTRUMENTATION"))
b="EI";
if(branch.equals("MECHANICAL ENGINEERING"))
b="ME"; */


String yr=null;
if(yrs.equals("1"))
yr="FIRST YEAR";

if(yrs.equals("2"))
yr="SECOND YEAR";

if(yrs.equals("3"))
yr="THIRD YEAR";

if(yrs.equals("4"))
yr="FINAL YEAR";

 %>
	
			
			          <div class="clear"></div>
					  <div align="center"><%  out.println("<p><font color='#990000' size='3px'><b><u>"+b+"&nbsp;&nbsp;"+yr+"&nbsp;&nbsp;ATTENDANCE&nbsp;&nbsp;OF&nbsp;&nbsp;"+mon+"&nbsp;MONTH</u></b></font></p>"); %></div>
           <div align="center">
		   
			<table width='297' height="35" border='0' align='center' bordercolor='#990000' bgcolor='#D8D8DA'>
			<tr ><td><div align="center"><font color="#990000" size="3px"><b><u>STUDENT NAME</u></b></font></div></td><td><div align="center"><font color="#990000" size="3px"><b><u>STUDENT ROLLNO</u></b></font></div></td><td><div align="center"><font color="#990000" size="3px" ><b><u>ATTENDANCE</u></b></font></div></td></tr> 
			</br>
			</br>
			</br>
			
			  
			  <% 
			 
	


try
{


System.out.println("-------->SHWATTHOD1.jsp---");
   
    
    //System.out.println("------>SHOW STUDENT ATTENDANCE ");
    Statement stmt=con.getcon();
  
   /*String b=session.getAttribute("username").toString(); 
   System.out.println("--branch--->"+b);
   String roll=session.getAttribute("id").toString();
    System.out.println("--roll-->"+roll); */
   int yn=Integer.parseInt(yrs);
    //System.out.println("--int yn--->"+yn);
   // String name=session.getAttribute("name").toString(); 
   //System.out.println("--branch--->"+name);
   //String yrs=session.getAttribute("y").toString();
    //System.out.println("--years-->"+yrs); 
	
	

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
   //System.out.println("-->bb-->"+b);
//System.out.println("--CURRENT MONTH-->"+currt);

 String qu1="SELECT ROLLNO,STUDENTNAME FROM "+b+"STUDENT WHERE YEARS="+yrs+" ORDER BY STUDENTNAME";
  Statement stm=con.getcon();
		  ResultSet r1=stm.executeQuery(qu1);
	
	String name=null;
	
	//System.out.println(""+qu1);	  
	while(r1.next())
	{	
	
	  // int total=0;
	  // int absent=0;
	   
	    int rn=r1.getInt(1); 
		name=r1.getString(2);
		System.out.println(""+rn);
		
		
    %>
	
	<tr><td height="30"><div align="center"><strong><%out.println(""+name); %></strong></div></td>
	<td><div align="center"><strong><%out.println(""+rn); %></strong></div></td>
	<%
  
  /*-------------------------------------------------------------------------*/
  
  String q1="SELECT * FROM "+b+"HELP WHERE YEARS='"+yrs+"'";
//System.out.println("--q1-->"+q1);
ResultSet rs1=stmt.executeQuery(q1);
ResultSetMetaData rsmd1 = rs1.getMetaData();
int dd=rsmd1.getColumnCount();
   System.out.println("--ddd-->"+dd);
    int i=2;
     int p=0;
String sub=null;
String flag=null;


String a3="";


 int tot=0;
 int ab=0;
if(rs1.next())
{
  //System.out.println("1");
  
  try
  {
do
{

      String a5="";
      String a6="";
      String a1=""; //subject name
      String a2="";  //subject code
      String a4="";  // class conducted dates
	  String y="";   // absent dates
       // int ab=0,tot=0;  // total absents  toatal classes
  //System.out.println("2");
  
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
	 
	 
	 
    
        //System.out.println("---sub-->"+sub);
  
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
		  //System.out.println("---->lab-->"+lab);
		 String lab1=lab.substring(7);
		  p=Integer.parseInt(lab1);
		  
		 //System.out.println("--->SUBID-->"+sub+"---pp-->"+lab+"--lab1-->"+lab1+"---pp-->"+p);
		           /*P REPRESENTS PRIORITY */
		
		int k;
		         /* NOW GATHERING ATTENDANCE AT P */
		 //System.out.println("3");
		 String q3="SELECT * FROM "+yrs+b+mon+" WHERE ROLLNO="+rn+"";
		 //System.out.println("-->"+q3);
		 ResultSet rs3=stmt3.executeQuery(q3);
		 ResultSetMetaData rsmd3 = rs3.getMetaData();
		 int cont=rsmd3.getColumnCount();
	     //System.out.println("---cont-->"+cont);
		 
		  
		 if(rs3.next())
		 {
		  //System.out.println("4");
		    for(k=2;k<=cont;k++)
		    {
		      //System.out.println("5");
		      String atn=rs3.getString(k);
		     // System.out.println("-->att-->"+atn);
		      //System.out.println("---ppp---->after atn-->"+p);
		       char sta=atn.charAt(p-1);
		       // System.out.println("---->AFTER CHAR AT---sta-->"+sta);
		        String d1= rsmd3.getColumnLabel(k);
		       // System.out.println("-d1->"+d1);
		         String d2=d1.substring(4);
	          	//System.out.println("--d1-->"+d1+"---d2-->"+d2); 
				
		        //System.out.println("----->"+sta);
		         if( sta=='P')
		        {
		          // System.out.println("-->PRESENT");
		           tot=tot+1;
				   a4=a4+d2+"-";
		          }
		       if(sta=='A')
		       {
		        // System.out.println("-->ABSENT");
		         ab=ab+1;
		         y=y+d2+"-";
		         tot=tot+1;
				 a4=a4+d2+"-";
		         }
		         //System.out.println("5");
		         }//for
				  a6=Integer.toString(tot);
				  a5=Integer.toString(ab);
				 
		        }   //if  
				
				//System.out.println("--->sub-->"+sub+"<--total--"+tot+"----"+ab+"--->dates-->"+y+"--class conducted--->"+a4+"");
            /* 
			 System.out.println("--->ATTENDANCE<------");
			  System.out.println(""+sub); */
			   System.out.println(""+tot);
			    System.out.println(""+ab);
				//total=tot+total;
				//absent=ab+absent;
				 /*System.out.println(""+a4);
				  System.out.println(""+y);
				   System.out.println(""+a5); 
				   System.out.println(""+a6);
			
			
		  a3= a3+":"+sub+";"+a1+";"+a2+";"+a6+";"+a5+";"+y+";"+a4+";";
		 System.out.println("--a3--]]--->"+a3); */
		 i=i+1;
		// if(i==5)
		//{
		// flag="false";
		// }
		 //System.out.println("--ATTEND FOR--"+sub+"--tot-->"+tot+"--ab-->"+ab+"--a1-->"+a1);
		 
		 }while(flag.equals("true"));
		 
		 }
		 catch(Exception ee)
       {
             System.out.println("-e-->"+ee);
           // out.write("ERROR");
         }

   // System.out.println("-->a3==]]--"+a3);
 System.out.println("--tot-->"+tot+"<---ab--->"+ab+"--name-->"+name);
   %>
   
   <td><div align="center"><strong><%out.println(""+(tot-ab)+"&nbsp;&nbsp;/"+tot+""); %></strong></div></td></tr>
   <%

         } //if closed 

  /*---------------------------------------------------------------------------*/
  
  
  
		 }//r1closed

//out.write(a3);
}//first try
catch(Exception e)
{
System.out.println("-e-->"+e);
out.write("ERROR");
}



 %>
		
			
			</table></div>
		   </div>
            <div id="footer"> &copy;2009 Attendance Tracker <br />
                <!-- This template is provided free of charge as long as you keep the link to http://www.finerdesign.com -->
                <a href="index.hot.htm" style="text-decoration:none;">Home</a> |
                <a href="legal.htm" style="text-decoration:none;"> Legal </a>| 
                <a href="Privecy_p.htm" style="text-decoration:none;">Privacy Policy </a>| 
            <a href="terms.htm" style="text-decoration:none;">Terms Of Services </a></div>
        </div>
		
		
			
    </body>
</html>