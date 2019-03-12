<?php
error_reporting(E_ALL^E_NOTICE);
include "connect.php";
include "comment.class.php";

$comments = array();
$result = mysql_query("SELECT * FROM comments ORDER BY id ASC");

if(is_resource($result)){

    while($row = mysql_fetch_assoc($result))
    {
    	$comments[] = new Comment($row);
    }
}else{
    echo "暂时没有评论的数据!";
}

?>
<!DOCTYPE html>
<html lang="zh_cn">
<head>
	<meta charset="UTF-8">
	<title>message</title>
	<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="js/jquery.superslide.2.1.1.js" ></script>
	<script type="text/javascript" src="js/script.js"></script>
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/message.css">
	<style>
		.return{
			width: 107px;
			height: 95px;
			position: fixed;
			right: 1em;
			bottom: 70px;
			border-radius: 5px;
			z-index: 1000;
		}
	</style>
</head>
<body class="bg_img">
<div class="bg-color">
<div class="body_container">
	<!--head 开始-->
	<div class="body_container6">
		<div class="header-container">
			<div class="banner-box">

			</div>
			<div style="width:100%; margin-top:50px;"><div class="navBar1">
			  <ul class="nav clearfix">
			    <li id="m1" class="m">
			      <h2 style="margin-right:15px">Home</h2>
			      <h3 style="margin-right:15px"><a href="index.html" target="_blank"><font face="微软雅黑">首页</font></a></h3>
			      <ul class="sub bg1">
			        <a href="index.html"  target="_blank"></a>
			      </ul>
			    </li>
			    <li id="m2" class="m">
			      <h2 style="margin-right:7px">Development</h2>
			      <h3 style="margin-right:7px"><a href="development.html" >发展历程</a></h3>
			      <ul class="sub bg2">
			        <a href="development.html"  ></a>
			      </ul>
			    </li>
			    <li id="m3" class="m">
			      <h2 style="margin-left:0px">Cooperation</h2>
			      <h3 style="margin-left:0px"><a href="cooperation.html"  >合作重点</a></h3>
			      <ul class="sub bg3">
			        <a href="cooperation.html"  ></a>
			      </ul>
			    </li>
			    <li id="m4" class="m">
			      <h2 style="margin-left:8px">Influence</h2>
			      <h3 style="margin-left:8px"><a href="influence.html"  >影响意义</a></h3>
			      <ul class="sub bg4">
			        <a href="influence.html"  ></a>
			      </ul>
			    </li>
			    <li id="m5" class="m">
			      <h2 style="margin-left:16px">Plan</h2>
			      <h3 style="margin-left:16px"><a href="plan.html"  >丝路蓝图</a></h3>
			      <ul class="sub bg5">
			        <a href="plan.html"  ></a>
			      </ul>
			    </li>
			    <li id="m6" class="m">
			      <h2 style="margin-left:21px">Guangxi</h2>
			      <h3 style="margin-left:21px"><a href="guangxi.html"  >广西丝绸</a></h3>
			      <ul class="sub bg6">
			        <a href="guangxi.html"  ></a>
			      </ul>
			    </li>
			     <li id="m7" class="m">
			      <h2 style="margin-left:35px">Message</h2>
			      <h3 style="margin-left:35px"><a href="message.php"  >留言板</a></h3>
			      <ul class="sub bg7">
			        <a href="message.php"  ></a>
			      </ul>
			    </li>
			  </ul>
			</div></div>
			<!-- header 结束-->
		</div>
	</div>	

	<!-- 留言部分开始-->
	<div class="bg-m">
	<div class="message-container">
	<div class="left_img">
		<h1>你眼中的一带一路</h1>
		<div id="main">
			<?php
			foreach($comments as $c){
				echo $c->markup();
			}

			?>

		<div id="addCommentContainer">
			<form id="addCommentForm" method="post" action="">
		    	<div>
		        	<label for="name">昵称</label>
		        	<input type="text" name="name" id="name" />
		            
		            <label for="email">Email</label>
		            <input type="text" name="email" id="email" />
		            
		            <label for="body">评论内容</label>
		            <textarea name="body" id="body" cols="20" rows="5"></textarea>
		            
		            <input type="submit" id="submit" value="Submit" />
		        </div>
		    </form>
		</div>

		</div>
		</div>
	</div>
	
</div>	
</div>

<div class="return">
	<a href="javascript:scroll(0,0)"><img src="images/发展与合作页.png"></a>
</div>
	<!-- 导航栏 -->
	<script type="text/javascript">
			jQuery(".nav").slide({ 
					type:"menu", //效果类型
					titCell:".m", // 鼠标触发对象
					targetCell:".sub", // 效果对象，必须被titCell包含
					delayTime:300, // 效果时间
					triggerTime:0, //鼠标延迟触发时间
					returnDefault:false  //返回默认状态
				});
	</script>
	<!-- message-container -->
	<script type="text/javascript">
	$("#submit").click(function (){
		$(".message-container").height(function(n,c){
			return c+115;
		});
	});
	$("#submit").click(function (){
		$(".bg-color").height(function(n,c){
			return c+115;
		});
	});	
	$("#submit").click(function (){
		$(".bg-m").height(function(n,c){
			return c+115;
		});
	});	
	</script>
	<!--footer 底部开始 -->
	<div class="footer">
		<div class="message-bottom">
		<p style="padding-top: 100px"><a href="about.html">关于我们</a></p>
		<p>Copyright © 2017-2027. All Rights Reserved. 桂林电子科技大学第X组 版权所有</p>
		</div>
	</div>
	<!--footer 底部结束 -->
</div>	
</body>
</html>