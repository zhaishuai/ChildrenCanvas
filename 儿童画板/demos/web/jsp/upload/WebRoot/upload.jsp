<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="net.wl.upload.core.SmartUpload"%>
<%@ page import="net.wl.upload.web.upload"%>
<%
	StringBuffer sb=null;
	String path = request.getContextPath();
	sb=new StringBuffer();
	int port=request.getServerPort();
	if(port==80){
		//这是不存在端口的代码！
		sb.append(request.getScheme()).append("://")
	    .append(request.getServerName()).append(path);
	}else{
		//存在端口号的映射
		sb.append(request.getScheme()).append("://")
	    .append(request.getServerName()).append(":")
	    .append(request.getServerPort()).append(path);
	}
    String t=sb.toString();
    
    String pageErrorInfo = null;   
    SmartUpload su = null;   
    String s = null;
    try{   
        su = new SmartUpload();   
        su.initialize(pageContext);   
        su.upload();   
        pageErrorInfo = upload.fileUpload(su,pageContext,request);   
        s = t+"/upload/"+pageErrorInfo;
    }catch(Exception e){   
        pageErrorInfo = e.getMessage();   
    }finally{   
        su = null;   
        if(pageErrorInfo!=null){   
            out.print(s); 
        }   
    }
%> 
