<% @Language=vbscript Codepage=936 %>
<%
Option Explicit
Response.Buffer=True
%>
<!--#include file="UpLoadClass.asp"-->
<%
dim lngUpSize,uploader,intError
	Set uploader = new UpLoadClass
	uploader.TotalSize= 10485760'10MB
	uploader.MaxSize  = 10000*1024
	uploader.FileType = "gif/jpg/png/bmp"
	uploader.Savepath = "upload/"
	
	'自动创建上传文件夹
	dim folder,fs
	folder = server.MapPath(uploader.Savepath)
	set fs = Server.CreateObject("Scripting.FileSystemObject")
	if(fs.FolderExists(folder) = false) then
		fs.CreateFolder(folder)
	end if

	lngUpSize = uploader.Open()
	intError = uploader.Form("photo2_Err")
	'输出文件名称和路径：2011-09-10-5-52-255252.jpg'
	response.Write("upload/" & uploader.Form("ServerFileName"))
	if lngUpSize>uploader.MaxSize then
%>
		<script language="javascript">
		<!--
			alert("您上传的文件最大不能超过10M!!");
			history.back();
		//-->
		</script>
<%
		response.end
	end if
	if intError=-1 then
%>
		<script language="javascript">
		<!--
			alert("您没有上传任何文件，请重新上传!!");
			history.back();
		//-->
		</script>
<%
		response.end
	end if
	Set uploader = nothing
%>
