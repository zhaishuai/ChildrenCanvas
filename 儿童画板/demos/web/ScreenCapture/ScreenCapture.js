/*
	官方网站：http://www.ncmem.com
	官方博客：http://www.cnblogs.com/xproer
	产品首页：http://www.ncmem.com/webplug/screencapture/index.aspx
	产品介绍：http://www.cnblogs.com/xproer/archive/2010/08/09/1796077.html
	在线演示-标准版：http://www.ncmem.com/products/screencapture/demo/index.html
	在线演示-专业版：http://www.ncmem.com/products/screencapture/demo2/index.html
	在线演示-CKEditor3.6.1：http://www.ncmem.com/products/screencapture/demo-ckeditor361/index_ckeditor361.html
	布署文档：http://www.cnblogs.com/xproer/archive/2011/09/14/2176188.html
	升级日志：http://www.cnblogs.com/xproer/archive/2010/12/04/1896399.html
	开发文档-ASP.NET(C#)：http://www.cnblogs.com/xproer/archive/2010/12/04/1896552.html
	开发文档-PHP：http://www.cnblogs.com/xproer/archive/2011/05/16/2047915.html
	开发文档-JSP：http://www.cnblogs.com/xproer/archive/2011/05/20/2051862.html
	示例下载-标准版：http://www.ncmem.com/download/ScreenCapture-demo.rar
	示例下载-专业版：http://www.ncmem.com/download/ScreenCapturePro-demo.rar
	文档下载：http://www.ncmem.com/download/ScreenCapture-doc.rar
	VC运行库：http://www.microsoft.com/downloads/details.aspx?FamilyID=9b2da534-3e03-4391-8a4d-074b9f2bc1bf%20
	联系邮箱：1085617561@qq.com
	联系QQ：1085617561
*/

//全局对象
var ScreenCaptureError = {
	"0": "连接服务器失败"
	, "1": "发送数据错误"
	, "2": "未设置上传地址"
	, "3": "公司未授权"
	, "4": "域名未授权"
};

/*
	截屏对象管理类，提供常用配置功能
	参数
		infDivID 截屏信息层
*/
function CaptureManager(infDivID)
{
	this.StateType = {
		Ready				: 0
		,Posting			: 1
		,Stop				: 2
		,Error				: 3
		,GetNewID			: 4
		,Complete			: 5
		,WaitContinueUpload	: 6
		,None				: 7
		,Waiting			: 8
	};
	this.State = this.StateType.None;
	this.CaptureDlgID = infDivID;
	
	//全局配置信息
	this.Config = {
		"PostUrl"			: "http://www.ncmem.com/upload.aspx"
		,"EncodeType"		: "utf-8"
		, "LicensedCompany": "北京新颖网络"
		, "Clsid": "B10327CB-56EC-43D9-BED0-C91E4AE8F42E"
		, "ProjID": "Xproer.ScreenCapture"
		, "CabPath": "http://www.ncmem.com/products/screencapture/demo/ScreenCapture.cab#version=1,6,21,54771"
	};
	
	//附加对象
	this.Fields = {
		"UserName"	: "test"
		, "UserPass": "test"
	};

	this.Load = function()
	{
		var acx = '<div style="display: none">';
		acx += '<object id="objScreenCapture" classid="clsid:' + this.Config["Clsid"] + '"';
		acx += ' codebase="' + this.Config["CabPath"] + '" width="1" height="1"></object>';
		acx += '</div>';
		document.write(acx);
	};

	//加载CAB控件
	this.Load();
	
	//初始化截屏控件，一般在window.onload中调用
	this.Init = function()
	{
		//插件名称
		this.ATL = new ActiveXObject(this.Config["ProjID"]);
		this.ATL.Object = this;
		this.ATL.PostUrl = this.Config["PostUrl"];
		this.ATL.EncodeType = this.Config["EncodeType"];
		this.ATL.LicensedCompany = this.Config["LicensedCompany"];
		this.ATL.OnComplete = ScreenCapture_Complete;
		this.ATL.OnPost = ScreenCapture_OnProcess;
		this.ATL.OnStop = ScreenCapture_Stop;
		this.ATL.OnError = ScreenCapture_OnError;
		this.ATL.OnConnected = ScreenCapture_Connected;
		this.ATL.AfterCapture = ScreenCapture_AfterCapture;
		//
		this.CapturePanel = document.getElementById(this.CaptureDlgID); //获取截屏信息层
		this.Message = this.CapturePanel.childNodes(1);
		this.Progress = this.CapturePanel.childNodes(2);
	};

	//截屏函数
	this.Capture = function()
	{
		this.ATL.ClearFields();//清空附加字段
		var pname;
		for (pname in this.Fields)
		{
			this.ATL.AddField(pname, this.Fields[pname]);
		}
		this.ATL.Capture();
	};
	
	//截取整个屏幕
	this.CaptureScreen = function()
	{
		this.ATL.ClearFields(); //清空附加字段
		var pname;
		for (pname in this.Fields)
		{
			this.ATL.AddField(pname, this.Fields[pname]);
		}
		this.ATL.CaptureScreen();
	};

	this.OpenInfPanel = function()
	{
		this.CapturePanel.style.display = "block";
	};

	this.CloseInfPanel = function()
	{
		this.CapturePanel.style.display = "none"; //隐藏信息层
	};
}

//事件-连接成功
function ScreenCapture_Connected(obj)
{
	obj.Progress.innerText = "10%";
}

//事件-传输完毕
function ScreenCapture_Complete(obj)
{
	//var fid = arguments[0];
	obj.Progress.innerText = "100%";
	obj.Message.innerText = "上传完成";
	obj.State = obj.StateType.Complete;
	obj.CloseInfPanel(); //隐藏信息层
	//显示截取的屏幕图片
	var img = document.getElementById("ScreenImg");
	img.src = obj.ATL.Response;
	img.style.display = "block";
}

/*
	事件-传输中....
	参数:
		obj		JS对象
		speed	传输速度
		postedLength 已传输长度。1Byte,1KB,1MB,1GB
		percent 上传百分比
		time 剩余时间
*/
function ScreenCapture_OnProcess(obj,speed,postedLength,percent,time)
{
	obj.Progress.innerText = percent;
	//obj.pProcess.style.width = arguments[3] + "%";
	//obj.pMsg.innerText = "已上传:" + arguments[2];
	//obj.pMsg.innerText += " 速度:" + arguments[1] + "/s";
	//obj.pMsg.innerText += " 剩余时间:" + arguments[4];
}

//事件-传输停止
function ScreenCapture_Stop(obj)
{
	obj.State = obj.StateType.Stop;
}
/*
	事件-传输错误
	参数:
		obj
		errCode
*/
function ScreenCapture_OnError(obj,errCode)
{
	obj.Message.innerText = ScreenCaptureError[errCode];
	obj.Progress.innerText = "";
	//obj.pButton.innerText = "重试";
	obj.State = obj.StateType.Error;
}

function ScreenCapture_AfterCapture(obj)
{
	obj.OpenInfPanel();//打开信息面板
}