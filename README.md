# Zhengfang-Evaluation
## 实现正方教务管理系统的教学质量评价的批量自动评价功能
![img](https://raw.githubusercontent.com/hyh19962008/Zhengfang-Evaluation/master/autoEval.gif)  
因为系统不允许全部选项一样，所以默认第一个为4(良好)，其他都为5(优秀)。
## 使用方法：
使用Firefox、Chrome、IE等带有调试工具的浏览器，打开评价页面，按下F12，转到控制台，粘贴下面代码后按回车或Ctrl+回车。  
  
iframe=document.getElementById("iframeautoheight");  
itable=iframe.contentWindow.document.getElementById("trPjs");  
irows=itable.getElementsByTagName("select");  
irows[0].value="4(良好)";  
for(i=1;i<8;i++){  
    irows[i].value="5(优秀)";  
}  
