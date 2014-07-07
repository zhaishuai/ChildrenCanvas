using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Text;

namespace ScreenCapture11325
{
	public partial class upload : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			string fname = Request.Form["UserName"];
			int len = Request.ContentLength;

			if (Request.Files.Count > 0)
			{
				HttpPostedFile file = Request.Files.Get(0);
				string timeCur = DateTime.Now.ToString("yyyy-MM-dd");
				string uploadFolder = "/upload/" + timeCur + "/";//上传文件夹。相对路径
				string folder = Server.MapPath(uploadFolder);
				//自动创建文件夹
				if (!Directory.Exists(folder))
				{
					Directory.CreateDirectory(folder);
				}

				//防止用户上传非图片文件
				string ext = Path.GetExtension(file.FileName).ToLower();
				if (ext == ".gif"
					|| ext == ".bmp"
					|| ext == ".png"
					|| ext == ".jpg")
				{
					//在这里我们将会根据时间重新生成一个名称
					string time = DateTime.Now.ToString("HHmmssffff") + ext;
					string filePath = Path.Combine(folder, time);

					file.SaveAs(filePath);
					//最后将新生成的文件名称发给客户端
					Response.Write(uploadFolder + time);
				}
			}
		}
	}
}
