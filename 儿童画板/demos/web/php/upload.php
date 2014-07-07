<?php
ob_start();
$uploadDir = dirname(__FILE__).'/upload';

//自动创建目录
if(!file_exists($uploadDir)){
	mkdir($uploadDir);
}

//取时间字符串，格式：_09_09_时分秒毫秒
$time = date("Y_m_d_His") . floor(microtime() * 10000);
//如果PHP页面为UTF-8编码，请使用urldecode解码文件名称
//$fileName = urldecode($_FILES['postedFile']['name']);
//如果PHP页面为GB2312编码，则可直接读取文件名称
$fileName = urldecode($_FILES['img']['name']);
$tmpName = $_FILES['img']['tmp_name'];

//取文件扩展名jpg,gif,bmp,png
$path_parts = pathinfo($fileName);
$ext = $path_parts["extension"];

//年_月_日_时分秒毫秒.jpg
$saveFileName = $time . '.' . $ext;

//xxx/2011_05_05_091250000.jpg
$savePath = $uploadDir . "/" . $saveFileName;

//另存为新文件名称
if (!move_uploaded_file($tmpName,$savePath))
{
	exit('upload error!' . "文件名称：" .$fileName . "保存路径：" . $savePath);
}

//输出图片路径
//$_SERVER['HTTP_HOST']	localhost:81
//$_SERVER['REQUEST_URI'] /FCKEditor2.4.6.1/php/test.php 
$reqPath = str_replace("upload.php","",$_SERVER['REQUEST_URI']);
echo $reqPath . "upload/" .  $saveFileName;
header('Content-Length: ' . ob_get_length());

?>