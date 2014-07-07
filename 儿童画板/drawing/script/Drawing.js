
var pen_style_temp=2;
var pen_style=2;			//画笔样式
var MARK_PEN=0;				//马克彩笔
var CRAYON=1;				//蜡笔材质
var PENCIL=2;				//彩色铅笔
var ERASER=3;				//橡皮
var BACKGROUND_COLOR="#000"	//背景颜色
var pen_size=5;				//画笔大小
var pen_color="#c80000";	//画笔颜色
var can_paint=false;		//能否作画，true能做画，false不能作画
var posX=new Array();		//记录鼠标在画板上移动的所有X坐标（只记录从按下，到抬起之间的点）
var posY=new Array();		//记录鼠标在画板上移动的所有Y坐标（只记录从按下，到抬起之间的点）
var stuff_posX=new Array()	//记录鼠标跟随物的坐标X
var stuff_posY=new Array()	//记录鼠标跟随物的坐标Y
var pos_size=new Array();	//记录鼠标跟随物的大小
var context_paint_canvas;	//设备上下文；
var context_image_canvas;
var context_ball_canvas;
var DOT_NUM=10;				//用于蜡笔，表示单位面积粒子的浓度
var outlineImage = new Image();	//用于载入轮廓图片
var choicedPen = "#pen_"+pen_style+1;  //当前被选择的笔,在penPicture()中被调用
var	choicedPenNum=1;
var colour=new Array();
colour.push("#c80000");colour.push("#ff0000");colour.push("#ff4400");colour.push("#ff008a");colour.push("#ffcacc");colour.push("#c66212");colour.push("#ff8000");colour.push("#ffc800");colour.push("#ffff34");colour.push("#a2ff00");colour.push("#00ff00");colour.push("#808000");colour.push("#006400");colour.push("#00ffff");colour.push("#8cccab");
colour.push("#007ecc");colour.push("#0000ff");colour.push("#d3a0ff");colour.push("#8a2ae2");colour.push("#800080");colour.push("#b0841d");colour.push("#6e501e");colour.push("#4e4e4e");colour.push("#000000");

//当画笔被点击时被调用,控制画笔(图片)的位置并且改变画笔颜色.
function penPicture(event)
{
	if(pen_style==ERASER)
		pen_style=pen_style_temp;
	x=event.target; 
  	//alert("The id of the triggered element: " + x.id);
	$(choicedPen).css({"margin-top":"35px"});
	var mid = "#"+x.id
	$(mid).css({"margin-top":"0px"});
	choicedPen = mid;
	choicedPenNum=Number(x.id.substring(5,x.id.length));
	pen_color = colour[Number(x.id.substring(5,x.id.length))-1];
	//alert(pen_color);
};//penPicture

$(document).ready(function(e){
	//screen_size 控制界面大小
	zs_screenWidth = screen.availWidth;
	zs_screenHeight = screen.availHeight;
	$(".zs_canvas").attr("width",zs_screenWidth);
	$(".zs_canvas").attr("height",zs_screenHeight);	
	$(".struct_body").css("width",zs_screenWidth);
	$(".struct_body").css("height",zs_screenHeight);
	$(".struct_sheet").css("width",zs_screenWidth);
	$(".struct_head").css("width",zs_screenWidth);
	$(".struct_sheet").css("top",zs_screenHeight-100);
	$("#hideButton").css("top",zs_screenHeight);
	$("#hideButton").css("left",zs_screenWidth-50);
	//screen_size
	
	//初始化画板设备上下文
	context_paint_canvas=document.getElementById("paint_canvas").getContext("2d");	//取得设备上下文
	context_image_canvas=document.getElementById("image_canvas").getContext("2d");	//取得设备上下文
	context_ball_canvas=document.getElementById("ball_canvas").getContext("2d");	//取得设备上下文
	context_paint_canvas.lineCap="round";
	var url=location.href; 
	preImage("image/needColoringPic/"+url.split("?")[1]+".png",function(){
    context_image_canvas.drawImage(this,0,40,800,900);
}); 
	loadPenImage();
	
	//加载画笔图片
	function loadPenImage()
	{
		var str="";
		for(var i=1;i<=24;i++)
		{
			if(choicedPenNum==i)
				str += "<li><img id=\"pen_"+pen_style+i+"\" src=\"image/pencil"+pen_style+"/"+i+".png\" style=\"margin-top:0px;width:50px;height:180px;\" onclick=\"penPicture(event)\" value=\""+i+"\"/></li>";
			else
				str += "<li><img id=\"pen_"+pen_style+i+"\" src=\"image/pencil"+pen_style+"/"+i+".png\" style=\"margin-top:35px;width:50px;height:180px;\"onclick=\"penPicture(event)\" value=\""+i+"\"/></li>";
		}
		$("#struct_sheet_ul").html(str); 
	}//loadPenImage
	

	function preImage(url,callback)
	{  
		 var img = new Image(); //创建一个Image对象，实现图片的预下载  
		 img.src = url;  
		if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
			 callback.call(img);  
			return; // 直接返回，不用再处理onload事件  
		 }  
		 img.onload = function () { //图片下载完毕时异步调用callback函数。  
			 callback.call(img);//将回调函数的this替换为Image对象  
		 };  
	}//preImage
		
	//控制面板的显示与消失
	var hide_button = document.getElementById("hideButton");
	hide_button.addEventListener("touchstart", panhidden, false);	
	function panhidden(event)
	{
		event.preventDefault();
		$("#hideButton").css("top",zs_screenHeight);
		$("#struct_head").animate({top:"-100px"});
		$("#struct_sheet").animate({top:zs_screenHeight-100});	
		if(pen_style==ERASER)
			pen_style=pen_style_temp;	
	}//panhidden
	function showPan(e)
	{
		$("#struct_head").animate({top:"-200px"},"fast");
		$("#struct_sheet").animate({top:zs_screenHeight},"fast",function(){$("#hideButton").css("top",zs_screenHeight-50);});
	}
	
	var touch_struct_sheet=document.getElementById("struct_sheet");
	touch_struct_sheet.addEventListener("touchstart", touchStructSheet, false);
	touch_struct_sheet.addEventListener("touchmove", touchStructSheet_move, false);
	var start,move;
	function touchStructSheet(e)
	{
		start=e.touches[0].pageY;//记录按下的第一个点
		
	};//touchStructSheet
	function touchStructSheet_move(e)
	{
		e.stopPropagation();
		if(Math.abs(start-e.touches[0].pageY)>4)//记录移动的点，两点做差如果绝对值超过4则禁止默认行为
		{
			e.preventDefault();
		}
		
	};//touchStructSheet_move
	
	var touch_struct_head=document.getElementById("struct_head");
	touch_struct_head.addEventListener("touchstart", touchStructHead, false);
	function touchStructHead(e)
	{
		e.preventDefault();
		showPan();
	};//touchStructHead
	var pencilPic=document.getElementById("pencil_pic"); 
	pencilPic.addEventListener("touchstart",PencilPicTouch,false);
	function PencilPicTouch(e)
	{
		e.preventDefault();
		e.stopPropagation();
		$("#pencil_pic").animate({top:'50px'},"slow");
		$("#pencil_pic").animate({top:'100px'},"slow");
		pen_size=5;
		context_paint_canvas.shadowBlur=0;
		pen_style=PENCIL;
		choicedPen = "#pen_"+pen_style+choicedPen.substring(6,choicedPen.length); 
		loadPenImage();
	}//PencilPicTouch
	var markPenPic=document.getElementById("markPen_pic"); 
	markPenPic.addEventListener("touchstart",MarkPenPicTouch,false);
	function MarkPenPicTouch(e)
	{
		e.preventDefault();
		e.stopPropagation();
		$("#markPen_pic").animate({top:'60px'},"slow");
		$("#markPen_pic").animate({top:'100px'},"slow");
		pen_size=10;
		pen_style=MARK_PEN;
		choicedPen = "#pen_"+pen_style+choicedPen.substring(6,choicedPen.length);  
		loadPenImage();
	}//MarkPenPicTouch
	var caryonPic=document.getElementById("caryon_pic"); 
	caryonPic.addEventListener("touchstart",CaryonPicTouch,false);
	function CaryonPicTouch(e)
	{
		e.preventDefault();
		e.stopPropagation();
		$("#caryon_pic").animate({top:'60px'},"slow");
		$("#caryon_pic").animate({top:'100px'},"slow");
		pen_size=5;
		context_paint_canvas.shadowBlur=0;
		pen_style=CRAYON;
		choicedPen = "#pen_"+pen_style+choicedPen.substring(6,choicedPen.length);  
		loadPenImage();
	}
	document.getElementById("goback").addEventListener("touchstart",function(e){window.location.assign("index.html"); },false);//返回选择页
	document.getElementById("eraser").addEventListener("touchstart",function(e)
	{	
		e.preventDefault();
		e.stopPropagation();
		$("#eraser").animate({top:'60px'});
		$("#eraser").animate({top:'100px'});
		if(pen_style!=ERASER)
			pen_style_temp=pen_style;
		pen_style=ERASER;
		
		
	},false);

	 var el = document.getElementById("ball_canvas");
	 el.addEventListener("touchstart", handleStart, false);
     el.addEventListener("touchmove", handleMove, false);	
	function handleStart(e) 
	{
      	e.preventDefault();
	 	showPan();
	 	if(e.touches.length==1)
	 	{
			touches=e.touches;
			posX.splice(0);
			posY.splice(0);
			//stuff_posX.splice(0);
			//stuff_posY.splice(0);
			pos_size.splice(0);
			//pos_size.push(10);
			for(var i=0;i<touches.length;i++)
			{ 
				//stuff_posX.push(e.touches[i].pageX);
				//stuff_posY.push(e.touches[i].pageY);
				posX.push(e.touches[i].pageX);
				posY.push(e.touches[i].pageY);
				can_paint=true;
				draw(pen_style);
			}
	    }	
    }//handleStart
     function handleMove(e) 
	 {
     	e.preventDefault();
		if(can_paint&&e.touches.length==1)
		{
		touches=e.touches;
			for(var i=0;i<touches.length;i++)
			{ 
				posX.push(e.touches[i].pageX);
				posY.push(e.touches[i].pageY);
				//stuff_posX.push(e.touches[i].pageX);
				//stuff_posY.push(e.touches[i].pageY);
				pos_size.push(5);
				draw(pen_style);
			}	
		}
		else
		{
			posX.splice(0);
			posY.splice(0);
			//stuff_posX.splice(0);
			//stuff_posY.splice(0);
			pos_size.splice(0);	
		}
    }//handleMove
	
	$("#wooden_pen").click(function(){
		//pen_color="red"
		pen_style=0;
		choicedPen = "#pen_"+pen_style+1;  
		loadPenImage();
		})
	$("#eraser").click(function(){
	
		})//eraser
	$("#crayon_pen").click(function(){
		pen_style=1;
		choicedPen = "#pen_"+pen_style+1;  
		loadPenImage();
		});//crayon_pen
	
	
	$("#ball_canvas").mousedown(function(e){
		posX.splice(0);
		posY.splice(0);
		//stuff_posX.splice(0);
		//stuff_posY.splice(0);
		pos_size.splice(0);
		//pos_size.push(10);
		//stuff_posX.push(e.pageX-this.offsetLeft);
		//stuff_posY.push(e.pageY-this.offsetTop);
		posX.push(e.pageX-this.offsetLeft);
		posY.push(e.pageY-this.offsetTop);
		can_paint=true;
	});//mousedown
	$("#ball_canvas").mouseup(function(e){
		//context.drawImage(outlineImage,10, 10);
		can_paint=false;
		});//mouseup
	$("#ball_canvas").mouseleave(function(e){
		can_paint=false;
		});//mouseleave
	$("#ball_canvas").mousemove(function(e){
		//goodlooking();
		if(can_paint)
		{
			posX.push(e.pageX-this.offsetLeft);
			posY.push(e.pageY-this.offsetTop);
			stuff_posX.push(e.pageX-this.offsetLeft);
			stuff_posY.push(e.pageY-this.offsetTop);
			pos_size.push(5);
			draw(pen_style);
		}
		});//mousemove
	function draw(e)
	{
		context_paint_canvas.strokeStyle = pen_color;
  		context_paint_canvas.lineWidth = pen_size;
		context_paint_canvas.fillStyle = pen_color;
		context_paint_canvas.shadowBlur=0;
		context_paint_canvas.beginPath();
		//context.drawImage(outlineImage,10, 10);
		switch(e)
		{
			case MARK_PEN: 
				length=posX.length;
				if( posX[length-1]==posX[length-2]&&posY[length-1]==posY[length-2]){		//如果当前坐标等于上一个坐标则画一个圆
					context_paint_canvas.arc(posX[length-1],posY[length-1],pen_size/4,0,Math.PI * 2,true);
					context_paint_canvas.fill();	//填充绘画路径
				}
				else
				{
					context_paint_canvas.moveTo(posX[length-2],posY[length-2]);//移动到上一个点  
     	    		context_paint_canvas.lineTo(posX[length-1],posY[length-1]);//画到当前点
					context_paint_canvas.stroke();	
				}
			break;
			case CRAYON: 
				context_paint_canvas.closePath();
				context_paint_canvas.beginPath();
				context_paint_canvas.shadowBlur=1;
				context_paint_canvas.shadowColor="#fff";
				length=posX.length;
				if( length!=1&&posX[length-1]==posX[length-2]&&posY[length-1]==posY[length-2]){
					crayonPen(posX[length-1],posY[length-1]);
				}
				else
				{
					crayon_Pen( posX[length-1], posY[length-1],posX[length-2],posY[length-2]);
				}
				break;
			case PENCIL:
				length=posX.length;
				if( posX[length-1]==posX[length-2]&&posY[length-1]==posY[length-2]){		//如果当前坐标等于上一个坐标则画一个圆
					context_paint_canvas.arc(posX[length-1],posY[length-1],pen_size/1.7,0,Math.PI * 2,true);
					context_paint_canvas.fill();	//填充绘画路径
				}
				else
				{
					context_paint_canvas.moveTo(posX[length-2],posY[length-2]);//移动到上一个点  
     	    		context_paint_canvas.lineTo(posX[length-1],posY[length-1]);//画到当前点
					context_paint_canvas.stroke();	
				}
			break;
			case ERASER:
				context_paint_canvas.closePath();
				context_paint_canvas.beginPath();
				context_paint_canvas.strokeStyle = "#fff";
			  	context_paint_canvas.lineWidth = 10;
				context_paint_canvas.fillStyle = "#fff";
				context_paint_canvas.shadowBlur=8;
				context_paint_canvas.shadowColor="#fff";
				length=posX.length;
				if( posX[length-1]==posX[length-2]&&posY[length-1]==posY[length-2]){		//如果当前坐标等于上一个坐标则画一个圆
					context_paint_canvas.arc(posX[length-1],posY[length-1],pen_size/4,0,Math.PI * 2,true);
					context_paint_canvas.fill();	//填充绘画路径
				}
				else
				{
					context_paint_canvas.moveTo(posX[length-2],posY[length-2]);//移动到上一个点  
     	    		context_paint_canvas.lineTo(posX[length-1],posY[length-1]);//画到当前点
					context_paint_canvas.stroke();	
				}
			break;
			default: break;
		}
		context_paint_canvas.closePath();
		context_paint_canvas.restore();//回复绘画状态
	
	}//draw
	
	function crayonPen( x_position, y_position)
	{
		context_paint_canvas.strokeStyle = pen_color;
  		context_paint_canvas.lineWidth = 1;//粒子的大小
		context_paint_canvas.fillStyle = pen_color;
		context_paint_canvas.beginPath();
		
		for(var i=0;i<DOT_NUM;i++)
		{
			c = random(Math.PI * 2);
			x = x_position + 2 * Math.sin(c) - random(Math.PI*2);
			y = y_position + 2 * Math.cos(c) - random(Math.PI*2);
			context_paint_canvas.rect(x, y, 0.1,0.1);
		}
		context_paint_canvas.stroke();
		context_paint_canvas.closePath();
		context_paint_canvas.restore();
	}//crayonPen坐标重合时
	
	function crayon_Pen( x_1, y_1,x_2,y_2)
	{
		var x_length=x_2-x_1;
		var y_length=y_2-y_1;
		var length = Math.sqrt( x_length*x_length+y_length*y_length);
		var cos_=x_length/length;
		var sin_=y_length/length;
		
		context_paint_canvas.strokeStyle = pen_color;
  		context_paint_canvas.lineWidth = 1;//粒子的大小
		context_paint_canvas.fillStyle = pen_color;
		context_paint_canvas.beginPath();
		for(var j=0;j<length;j++)
			for(var i=0;i<DOT_NUM;i++)
			{
				c = random(Math.PI * 2);
				x = x_1 + 2 * Math.sin(c) - random(Math.PI*2);
				y = y_1 + 2 * Math.cos(c) - random(Math.PI*2);
				context_paint_canvas.rect(x+cos_*j, y+sin_*j, 0.1,0.1);
			}
		context_paint_canvas.stroke();
		context_paint_canvas.restore();
	}//crayon_Pen画直线时
	
	function random(max, min) {
    if (typeof max !== 'number') {
        return Math.random();
    } else if (typeof min !== 'number') {
        min = 0;
    }
    return Math.random() * (max - min) + min;
}//random
	
	
	function clear_ball_canvas(){
		context_ball_canvas.clearRect(0,0,screen.width,screen.height);
		draw_star();
	}//clear_ball_canvas
	
	//self.setInterval(clear_ball_canvas, 80);
	
	function draw_star(){
		context_ball_canvas.strokeStyle="black";
		context_ball_canvas.fillStyle="black";
		length=posX.length;
		
		for(var i=0;i<length;i+=2)
		{
			c = random(Math.PI * 2);
			stuff_posX[i] = stuff_posX[i] + 5 * Math.sin(c) - random(Math.PI*2);
			stuff_posY[i] = stuff_posY[i] - 5 * Math.cos(c) - random(Math.PI*2);
			context_ball_canvas.beginPath();
			context_ball_canvas.lineWidth=pos_size[i];
			if(pos_size[i]>1)
				context_ball_canvas.arc(stuff_posX[i],stuff_posY[i],pos_size[i],0,Math.PI * 2,true);
			
			context_ball_canvas.fill();	//填充绘画路径
			context_ball_canvas.stroke();
			context_ball_canvas.restore();
			if(pos_size[i]>1)
			{
				pos_size[i]=pos_size[i]-1;
			}//if
		}//for
		
	}//draw_start	
});