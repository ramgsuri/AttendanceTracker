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
	<script language="javascript" src="js/faculty.js" >
	
	</script>
    <body id="reload"  >
	
	<%@ page language="java" import="java.sql.*,java.util.*" session="true" %>
	
	<jsp:useBean class="connection.Conn" id="con" scope="session"/>
	
<% 
System.out.println("-------->SHOWATTHOD.jsp---");
   
    
    System.out.println("------>SHOW STUDENT ATTENDANCE OPTION");
    Statement stmt=con.getcon();
  
   /*String b=session.getAttribute("username").toString(); 
   System.out.println("--branch--->"+b);
   String roll=session.getAttribute("id").toString();
    System.out.println("--roll-->"+roll);
   int rn=Integer.parseInt(roll);
    System.out.println("--ssn--->"+rn);
    String name=session.getAttribute("name").toString(); 
   System.out.println("--branch--->"+name);*/
   String user=session.getAttribute("username").toString();
    //System.out.println("--years-->"+yrs); 
	
	//String yrs=request.getParameter("opt");
	//System.out.println("]]]===>"+yrs);
	//String yr=null;
 /*if(yrs.equals("1"))
yr="FIRST YEAR";

if(yrs.equals("2"))
yr="SECOND YEAR";

if(yrs.equals("3"))
yr="THIRD YEAR";

if(yrs.equals("4"))
yr="FINAL YEAR";

System.out.println("------yr-->"+yr); */




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
	
	

   String currt=month[(months-1)];
System.out.println("--CURRENT MONTH-->"+currt);

	
	  %>
	  
        <div id="main">
            <div id="logo">
              <img src="images/bg-logo.gif" alt="Your Business" width="254" height="42" border="0" align="left" />
              <div id="navbar">
                    <ul>
                        <li><a href="index.htm" class="two">Home</a></li>
                       <li><a href="help.html" class="two">Help</a></li>
                      <li><layer name="kl" width="87" height="19" id="kl"><a  href="" class="two" id="back" onclick=" return bak(this.id);" >Back</a></layer>
                      </li>
                       <li><a href="logout.jsp" class="two">log out</a></li>
			    </ul>      
                    
              </div>
			 
                <div class="clear"></div>
				 <div id="msg"></div>
          </div>
		 
            <div id="main-inner">
                <div id="main-inner-left"> <div id="img"><img src="images/53.jpg"  width="350px" height="161" /></div>
                <form name="offop" method="get">   
				 <div id="aa" >
			   <p><span class="style3">Welcome</span> <strong>To ATTENDANCE TRACKER </strong>
			    <font size="-1" face="Georgia, Times New Roman, Times, serif" color="#990000"><b><br/><div align="center"><br/>SELECT MONTH TO VIEW ATTENDANCE </div>
</b></font>
			   
			    </p><div id="tit"></div>
				<div id="wrt">
                    <p>This Site have been developed as a software which would help, </p>
                    <p>You <font color="#990000">to view attendance by clicking in options given aside.</font></p>
                    <p> <font color="#990000"> You can view the notices also</font> </p>
				   </div>
                    <p>&nbsp;</p></div> 
				
             </div>
                <div id="main-inner-right">
                   
					<div id="box-small" >
					<div id="box-top-small" style=" position:relative; left:0px; top:0px;">
                        <img src="images/bg-box-top-small.gif" width="191" height="19" /></div> 
                        <font size="-1" face="Georgia, Times New Roman, Times, serif" color="#990000">
<center>
   <div id="title"> <u> Select the Month</u></div>
   
</center></font><br />
<div id="option">

                     <p align="center">
					 <br/> <br/><strong>
                       
					   <div align='center'><select   name='asgname' style='border:groove 2pt black' id="<%out.println(""+user);%>" onchange="return VIEWATT(this.id);" /><option selected='selected'>--SELECT--</option>
					   
					   <%
					       int i=0;
						   
						   if(months==1 || months==2 || months==3 || months==4 || months==5 ||months== 6)
						   {
					        for(i=0;i<months;i++)
							{ %>
					   
					            <option  value="<%= month[i] %>"><div align='center'><%= month[i] %></div></option>
								<% }
								}
								if(months==7 || months==8 || months==9 || months==10 || months==11 ||months== 12)
						   {
					        for(i=7;i<months;i++)
							{ %>
								
								 <option value="<%= month[i] %>"><div align='center'><%= month[i] %></div></option>
								
								<%
								}
								} 
								         %>
								<br />

					   </select></div>
					   
					   <br/>
					   <br/>
					   <br/>
					   <div id='fine'></div>
                      </strong></p>  
					   
					    </form> 
	</div>				   
					   <img src="images/bg-box-bottom-small.gif" width="191px" /> 
			      </div>
                   
                     <div id="box-small">
                        <div id="box-top-small" style=" position:relative; left:0px; top:0px;">
						</div>
						<img src="images/bg-box-top-small.gif" width="191" height="19" />
						<div id="optbelow">
                        <center><img src="images/2.jpg" width="175" /></center>
						<br />
                        
						
						<p>
						<img src="images/latestnews.gif" height="18" />MID SEM SCHEDULE </p>
                        <p><blink>HOLIDAY NOTICES</blink></p>
						<p>TEACHERS DUTY CHART
                        <p align="left"><strong>Office Ph: 05212-2778456</strong><br /></p>
						</div>
						<br/>
						<div id='show'></div>
                        <img src="images/bg-box-bottom-small.gif" width="191px" />
						
                    </div>
                </div>
                <div class="clear"></div>
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