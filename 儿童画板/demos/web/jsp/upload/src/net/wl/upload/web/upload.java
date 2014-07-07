package net.wl.upload.web;

import java.io.File;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.PageContext;

import net.wl.upload.core.SmartUpload;

public class upload {
	
	/**  
     * 文件上传方法.  
     * @param su  
     * @param pageContext  
     * @return  
     * @throws Exception  
     */  
    public static String fileUpload(SmartUpload su,PageContext pageContext,HttpServletRequest request) throws Exception {   
        net.wl.upload.core.File suFile = null;   
        int fileCount = 0;   
        try {   
            int fileSize = 0;   
            double maxFileSize = 30*1024;//单文件最大大小，单位KB   
            //校验文件类型和大小   
            for (int i=0; i<su.getFiles().getCount();i++) {   
                suFile = su.getFiles().getFile(i);   
                if (suFile.isMissing())   
                    continue;   
                //校验文件大小   
                fileSize = suFile.getSize()/1024;//字节转换成KB   
                if(fileSize==0) fileSize=1;   
                if(maxFileSize<fileSize) throw new Exception("单个上传的容量不能超过["+maxFileSize+"KB]");   
                fileCount++;   
            }   
            if (fileCount==0) throw new Exception("请选择上传的文件");   
            //准备保存文件   
        	String url = "upload//"; // 应保证在根目录中有此目录的存在
    		String TMP_DIR = request.getRealPath("/") + url;
			//自动创建文件夹
			File dir = new File(TMP_DIR); 
			if (!dir.exists()) dir.mkdirs();
            String getDateStrName = getDateStr(URLDecoder.decode(suFile.getFileName(), "UTF-8"));
            for (int i=0; i<su.getFiles().getCount();i++) {
                suFile = su.getFiles().getFile(i);   
                suFile.saveAs(TMP_DIR+getDateStrName,SmartUpload.SAVE_PHYSICAL);//保存文件   
            }   
            //成功返回  
            return getDateStrName;   
        } finally {   
            //   
        }   
    }  
    
 // 返回一个当前时间的字符串表示
	private static String getDateStr(String fileName) {
		String pattern = "yyyy-MM-dd_HHmmssSSS";
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		String dateStr = sdf.format(new java.util.Date());
		String fileNameExt = "";
		if (!"".equals(fileName)&&fileName!=null){
            int index = fileName.lastIndexOf(".");
            if(index != -1)
        	  fileNameExt = fileName.substring(index+1);
		}
		return dateStr+"."+fileNameExt;
	}
	
    /**
     *生成具有唯一性的UUID文件名称
     *@param fileName
     *@return
     */
    private static String uuidName(String fileName){
    	String fileNameExt = "";
		if (!"".equals(fileName)&&fileName!=null){
            int index = fileName.lastIndexOf(".");
            if(index != -1)
        	  fileNameExt = fileName.substring(index+1);
		}
       UUID uuid = UUID.randomUUID();
       return uuid.toString() + "." + fileNameExt;

    }
	

}
