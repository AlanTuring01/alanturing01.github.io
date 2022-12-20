<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Black And White Bootstrap Landing Page / Portfolio</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
    <!-- Google fonts - Montserrat for headings, Cardo for copy-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Cardo:400,400italic,700">
    <!-- Lightbox-->
    <link rel="stylesheet" href="vendor/lightbox2/css/lightbox.min.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="css/custom.css">
    <!-- Favicon-->
    <link rel="shortcut icon" href="img/favicon.png">
    <!-- Leaflet CSS - For the map-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.css">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
	 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900">
  </head>
  <body>
    <section id="intro" style="background-image: url('img/Alan Turing.png');" class="intro">       
      <div class="overlay"></div>
      <div class="content">
        <div class="container clearfix">
          <div class="row">
            <div class="col-lg-8 col-md-12 mx-auto">
              <p style="font-family:Noto Sans SC;">欢迎您访问&nbsp;</p>
              <h1 style="font-family:Noto Sans SC;">杨坤的博客&nbsp;</h1>
				<br>
              <p style="font-family:Noto Sans SC;">关于我的一些点滴。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- intro end-->
    <!-- navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container"><a href="#intro" class="navbar-brand link-scroll" style="font-family:Noto Sans SC;">杨坤的博客</a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
			<audio controls>
  			<source src="FlowerDance.ogg" type="audio/ogg">
  			<source src="FlowerDance.mp3" type="audio/mpeg">
			您的浏览器不支持 audio 元素。
			</audio>
			♫ DJ Okawari - Flower Dance
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a href="#intro" class="nav-link link-scroll" style="font-family:Noto Sans SC;">首页</a></li>
              <li class="nav-item"><a href="#about" class="nav-link link-scroll" style="font-family:Noto Sans SC;">关于我</a></li>
              <li class="nav-item"><a href="#services" class="nav-link link-scroll" style="font-family:Noto Sans SC;">视频</a></li>
              <li class="nav-item"><a href="#portfolio" class="nav-link link-scroll" style="font-family:Noto Sans SC;">相册</a></li>
              <li class="nav-item"><a href="#text" class="nav-link link-scroll" style="font-family:Noto Sans SC;">文字</a></li>
              <li class="nav-item"><a href="#contact" class="nav-link link-scroll" style="font-family:Noto Sans SC;">留言板</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- about-->
    <section id="about" class="text">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="heading">关于我</h2>
            <h3 style="font-family:Noto Sans SC;color:red;font-size:25px;">&nbsp; &nbsp; 杨坤</h3>
            <ul style="font-family:Noto Sans SC;">
			<li>上海海事大学<br>人工智能 211</li>
  			<li>INTP / 自由 / 理想主义者</li>
  			<li>为什么跟大一一起上课：<br>转专业补大一课程</li>
			<li>GTA 5 / CS:GO / 文明 6 / 黎明杀机 / 三国杀</li>
			<li>喜欢交朋友</li>
			<li><a href="img/WechatQRCode.jpg" style="font-family:Noto Sans SC;color:blue;">微信二维码</a></li>
			</ul>
          </div>
          <div class="col-lg-5 mx-auto">
            <p><img src="img/Alan Turing.png" alt="" class="img-fluid rounded-circle"></p>
          </div>
        </div>
      </div>
    </section>
    <!-- about end-->
    <!-- Services-->
    <section id="services" style="background-color: #eee">
      <div class="container">
        <div class="row services">
          <div class="col-lg-12">
            <h2 class="heading" style="font-family:Noto Sans SC;">视频</h2>
			  <div class="col-md-4">
              <video width="1024" height="576" controls>
  			  <source src="img/1.mp4" type="video/mp4">
			  </video>
				</div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services end-->
    
    <!-- Portfolio / gallery-->
    <section id="portfolio" class="gallery">
      <div class="container clearfix">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-12 col-lg-8">
                <h2 class="heading" style="font-family:Noto Sans SC;">相册</h2>
                <p style="font-family:Noto Sans SC;">浮光掠影。</p>
              </div>
            </div>
            <div class="row">
				<div class="col-md-4">
                <div class="box"><a href="img/11.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/11.png" alt="image" class="img-fluid"></a></div>
              </div>
				<div class="col-md-4">
                <div class="box"><a href="img/12.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/12.png" alt="image" class="img-fluid"></a></div>
              </div>
              
              <div class="col-md-4">
                <div class="box"><a href="img/14.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/14.png" alt="image" class="img-fluid"></a></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="box"><a href="img/15.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/15.png" alt="image" class="img-fluid"></a></div>
              </div>
              <div class="col-md-4">
                <div class="box"><a href="img/16.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/16.png" alt="image" class="img-fluid"></a></div>
              </div>
              <div class="col-md-4">
                <div class="box"><a href="img/17.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/17.png" alt="image" class="img-fluid"></a></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="box"><a href="img/18.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/18.png" alt="image" class="img-fluid"></a></div>
              </div>
              <div class="col-md-4">
                <div class="box"><a href="img/19.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/19.png" alt="image" class="img-fluid"></a></div>
              </div>
              <div class="col-md-4">
                <div class="box"><a href="img/20.png" data-lightbox="image-1" data-title="Some footer information" class="has-border"><img src="img/20.png" alt="image" class="img-fluid"></a></div>
              </div>
				</div>
              </div>
              </div>
            </div>
    </section>
    <div class="tlinks">Collect from <a href="http://lidaojia.tmall.com/"  title="网站模板">网站模板</a></div>
    <!-- Portfolio / gallery end-->
    <!-- text page-->
    <section id="text" class="text-page section-inverse">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="heading" style="font-family:Noto Sans SC;">文字</h2>
            <div class="row">
              <div class="col-md-6">
                <p style="font-family:Noto Sans SC;font-size:20px;">2006年德国世界杯，第一次看世界杯，印象最深的还是阿根廷6-0塞黑，马拉多纳在现场激动地大喊，“梅西就是我的接班人！”C罗也刚刚初出茅庐，我还在困惑怎么又是大罗又是小罗还有个C罗。一个个未来之星迭出，从内马尔到J罗，没人比姆巴佩更配赢。姆巴佩未来的身价完全值得巅峰梅西+C罗身价之和，一人扛着法国全队向冠军冲击。希望2026年能在美国现场观赛，到时候就不知道还能有几个我让我从小如雷贯耳的球星还在了…<br><br>
                姆巴佩加油！<br><br>2022/12/19</p>
              </div>
              <div class="col-md-6">
                <p><img src="img/MC.jpg"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- text page end-->
    <!-- contact-->
    <section id="contact" style="background-color: #fff;" class="text-page pb-4"> 
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="heading" style="font-family:Noto Sans SC;">留言板</h2>
            <div class="row">
              <div class="col-lg-6">
                <form id="contact-form" method="post" action="#" class="contact-form">
                  <div class="controls">
                    <div class="row">
						<div class="col-md-6">
                        <div class="form-group">
                          <label for="surname" style="font-family:Noto Sans SC;">姓名 *</label>
                          <input type="text" name="surname" placeholder="请输入您的姓名" required="required" class="form-control" style="font-family:Noto Sans SC;">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="name" style="font-family:Noto Sans SC;">昵称 *</label>
                          <input type="text" name="name" placeholder="请输入您的昵称" required="required" class="form-control" style="font-family:Noto Sans SC;">
                        </div>
                      </div>
                      
                    </div>
                    <div class="form-group">
                      <label for="surname" style="font-family:Noto Sans SC;">E-Mail *</label>
                      <input type="email" name="email" placeholder="请输入您的E-Mail" required="required" class="form-control" style="font-family:Noto Sans SC;">
                    </div>
                    <div class="form-group">
                      <label for="surname" style="font-family:Noto Sans SC;">留言 *</label>
                      <textarea rows="4" name="message" placeholder="请输入您的留言" required class="form-control" style="font-family:Noto Sans SC;"></textarea>
                    </div>
                    <div class="text-center">
                      <input type="submit" name="name" value="提交" class="btn btn-outline-primary btn-block" style="font-family:Noto Sans SC;">
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-6">
				  <h4 style="font-family:Noto Sans SC;">精选留言</h4>
				  <p style="font-family:Noto Sans SC;">杨坤，好久没来看你了，居然搞了个博客，以后每天都会来逛逛的 : ) </p>
		        <p style="font-family:Noto Sans SC;">—— 来自 张三，2022/12/12</p>
                  <p style="font-family:Noto Sans SC;">杨坤是谁？对盲人而言，他是视觉；对饥饿之人而言，他是厨师；对口渴之人而言，他便是水。我定赞同他的思想；我必倾听他之所言。如果杨坤只有一个粉丝，那便是我，如果杨坤没有粉丝，那我便不复存在。</p>
			    <p style="font-family:Noto Sans SC;">—— 来自 一个匿名的粉丝，2022/12/11</p>
			    <p style="font-family:Noto Sans SC;">Who is Kun? For the blind, He is the vision. For the hungry, He is the chef. For the thirsty, He is the water. If Kun thinks, I agree. If Kun speaks, I’m listening. If Kun has one fan, it is me. If Kun has no fans, I don’t exist.</p>
				  <p style="font-family:Noto Sans SC;">—— 来自 Kun's Fans，2022/12/11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<footer style="background-color: #111;">
  <div class="container"> 
        <div class="row copyright">
          <div class="col-md-6">
            <p class="mb-md-0 text-center text-md-left" style="font-family:Noto Sans SC;">&copy;2022 By 杨坤&nbsp; All Rights Reserved.</p>
          </div>
          <div class="col-md-6">
            <p class="credit mb-md-0 text-center text-md-right"></p>
            
          </div>
        </div>
      </div>
    </footer>
    <!-- JavaScript files-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/jquery.cookie/jquery.cookie.js"> </script>
    <script src="vendor/lightbox2/js/lightbox.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.js"> </script>
    <script src="js/front.js"></script>
  </body>
</html>
