/*
 *@Author: 赵元达
 *@Date: 2022-04-24 16:27:33
 *@parms:
 *@Description: 返回base64数据
 *@demo <img src='那个base64数据'>
 */
 const toBaseImg64 = (event) => {
  let file = event.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(file[0]);
  return reader.result;
};

/*
 *@Author: 赵元达
 *@Date: 2022-04-24 16:28:13
 *@parms:
 *@Description: 正常formdata提交  上传时候的回调
 */
const putOfFromData = async (event) => {
  let imgfilesback = [];
  let file = event.target.files;
  let leng = file.length;
  for (let i = 0; i < leng; i++) {
    var reader = new FileReader(); // 使用 FileReader 来获取图片路径及预览效果
    imgfilesback.push(file[i]);
    reader.readAsDataURL(file[i]);
    reader.onload = function (e) {
      _this.imgsback.push(e.target.result); // base 64 图片地址形成预览
    };
  }
  // 图片上传给后台部分
  var files = imgfilesback;

  let form = new FormData();
  // 处理多张图片
  for (let i = 0; i < files.length; i++) {
    form.append("file", files[i]);
  }
  form.append("userId", userData.userId);
  // 这里还要添加表单的数据
  let res = await axios({
    url: "/api/system/file/uploadAvatar",
    method: "post",
    data: form,
    headers: { "content-Type": "multipart/form-data" },
  });
  console.log(res);
};


/*
 *@Author: 赵元达
 *@Date: 2022-04-24 16:34:37
 *@parms: 
 *@Description: 文件导出
*/

const exportFile = () => { }

/*
 *@Author: 赵元达
 *@Date: 2022-04-24 16:34:37
 *@parms: 
 *@Description: 文件导入
*/
const importFile = () => { }



