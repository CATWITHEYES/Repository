;(function($){

	var Carousel = function(picture){
		var self = this;
		//保存单个旋转木马对象
		this.picture = picture;
		this.pictureItemMain = picture.find("ul.picture-list");
		this.nextBtn = picture.find("div.picture-next-btn");
		this.prevBtn = picture.find("div.picture-prev-btn");
		this.pictureItems = picture.find("li.picture-item");
		if( this.pictureItems.size()%2 == 0 ){
			this.pictureItemMain.append( this.pictureItems.eq(0).clone() );
			this.pictureItems = this.pictureItemMain.children();
		}
		this.pictureFirstItem = this.pictureItems.first();
		this.pictureLastItem = this.pictureItems.last();
		this.rotateFlag = true;
		//默认配置参数
		this.setting = {
			"width" : 1000,			//幻灯片的宽度
			"height" : 270,			//幻灯片的高度
			"pictureWidth" : 640,	//幻灯片第一帧的宽度
			"pictureHeight" : 270,	//幻灯片第一帧的高度
			"scale" : 0.9,			//记录显示比例关系
			"speed" : 500,
			"autoPlay" : false,
			"delay" : 5000,
			"verticalAlign" : "middle" //top bottom
		};
		$.extend( this.setting,this.getSetting() );
		
		//设置配置参数值
		this.setSettingValue();
		//初始化幻灯片位置
		this.setpicturePos();
		//左旋转按钮
		this.nextBtn.click(function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouseRotate("left");
			}
		});
		//右旋转按钮
		this.prevBtn.click(function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouseRotate("right");
			}
		});
		//是否开启自动播放
		if(this.setting.autoPlay){
			this.autoPlay();
			this.picture.hover( function(){
				//self.timer是setInterval的种子
				window.clearInterval(self.timer);
			}, function(){
				self.autoPlay();
			});			
		}
	};
	Carousel.prototype = {
		autoPlay:function(){
			var self = this;
			this.timer = window.setInterval( function(){
				self.nextBtn.click();
			}, this.setting.delay );
		},

		//旋转
		carouseRotate:function(dir){
			var _this_  = this;
			var zIndexArr = [];
			//左旋转
			if(dir === "left"){
				this.pictureItems.each(function(){
					var self = $(this),
						prev = self.prev().get(0)?self.prev():_this_.pictureLastItem,
						width = prev.width(),
						height =prev.height(),
						opacity = prev.css("opacity"),
						left = prev.css("left"),
						top = prev.css("top"),
						zIndex = prev.css("zIndex");

					zIndexArr.push(zIndex);
					self.animate({
						width :width,
						height :height,
					  //zIndex :zIndex,
					    opacity :opacity,
					    left :left,
					    top :top
					},_this_.setting.speed,function(){
						_this_.rotateFlag = true;
					});
				});
				//zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex
				this.pictureItems.each(function(i){
					$(this).css("zIndex",zIndexArr[i]);
				});
			}else if(dir === "right"){//右旋转
				this.pictureItems .each(function(){
					var self = $(this),
						next = self.next().get(0)?self.next():_this_.pictureFirstItem,
						width = next.width(),
						height =next.height(),
						opacity = next.css("opacity"),
						left = next.css("left"),
						top = next.css("top"),
						zIndex = next.css("zIndex");

					zIndexArr.push(zIndex);					
					self.animate({
						width :width,
						height :height,
					  //zIndex :zIndex,
					    opacity :opacity,
					    left :left,
					    top :top
					},_this_.setting.speed,function(){
						_this_.rotateFlag = true;
					});	
				});
				//zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex
				this.pictureItems.each(function(i){
					$(this).css("zIndex",zIndexArr[i]);
				});
			}
		},
		//设置剩余的帧的位置关系
		setpicturePos:function(){
			var self = this,
				sliceItems = this.pictureItems.slice(1),
				sliceSize = sliceItems.size()/2,
				rightSlice = sliceItems.slice(0,sliceSize),
				//存在图片奇偶数问题
				level = Math.floor(this.pictureItems.size()/2),
				leftSlice = sliceItems.slice(sliceSize);
			
			//设置右边帧的位置关系和宽度高度top
			var firstLeft = (this.setting.width - this.setting.pictureWidth)/2;
			var rw = this.setting.pictureWidth,
				fixOffsetLeft = firstLeft + rw,
				rh = this.setting.pictureHeight,
				gap = ((this.setting.width - this.setting.pictureWidth)/2)/level;
			
			//设置右边位置关系
			rightSlice.each(function(i){
				level--;
				rw = rw * self.setting.scale;
				rh = rh * self.setting.scale;
				var j = i;
				$(this).css({
					zIndex :level,
					width :rw,
					height :rh,
					opacity :1/(++j),
					left :fixOffsetLeft+(++i)*gap - rw,
					top :self.setVerticalAlign(rh)
				});
			});

			//设置左边的位置关系
			var lw = rightSlice.last().width(),
				lh  =rightSlice.last().height(),
				oloop = Math.floor(this.pictureItems.size()/2);
			leftSlice.each(function(i){
				$(this).css({
					zIndex:i,
					width:lw,
					height:lh,
					opacity:1/oloop,
					left:i*gap,
					top:self.setVerticalAlign(lh)
				});
				lw = lw/self.setting.scale;
				lh = lh/self.setting.scale;
				oloop--;
			});
		},
	
		//设置垂直排列对齐
		setVerticalAlign:function(height){
			var verticalType  = this.setting.verticalAlign,
				top = 0;
			if(verticalType === "middle"){
				top = (this.setting.height-height)/2;
			}else if(verticalType === "top"){
				top = 0;
			}else if(verticalType === "bottom"){
				top = this.setting.height-height;
			}else{
				top = (this.setting.height-height)/2;
			}
			return top;
		},

		//设置配置参数值去控制基本的宽度高度。。。
		setSettingValue:function(){
			this.picture.css({
				width:this.setting.width,
				height:this.setting.height
			});
			this.pictureItemMain.css({
				width:this.setting.width,
				height:this.setting.height
			});
			//计算上下切换按钮的宽度
			var w = (this.setting.width-this.setting.pictureWidth)/2;
			//设置切换按钮的宽高，层级关系
			this.nextBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.pictureItems.size()/2)
			});
			this.prevBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.pictureItems.size()/2)
			});			
			this.pictureFirstItem.css({
				width:this.setting.pictureWidth,
				height:this.setting.pictureHeight,
				left:w,
				top:0,
				zIndex:Math.floor(this.pictureItems.size()/2)
			});
		},

		//获取人工配置参数
		getSetting:function(){			
			var setting = this.picture.attr("data-setting");
			if(setting && setting != ""){
				return $.parseJSON(setting);
			}else{
				return {};
			}
		}	
	};

	Carousel.init = function(pictures){
		var _this_ = this;
		pictures.each(function(){
			// console.log("halo Louis;")
			new  _this_($(this));
		});
	};

	//挂载到window下
	window.Carousel = Carousel;

})(jQuery);