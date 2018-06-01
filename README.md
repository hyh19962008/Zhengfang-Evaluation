# Zhengfang-Evaluation
## 实现正方教务管理系统的教学质量评价的批量自动评价功能
![img](https://raw.githubusercontent.com/hyh19962008/Zhengfang-Evaluation/master/autoEval.gif)  
因为系统不允许全部选项一样，所以默认第一个为4(良好)，其他都为5(优秀)。
## 使用方法：
使用Firefox、Chrome、IE等带有调试工具的浏览器，打开评价页面，按下F12，转到控制台，粘贴下面代码后按回车或Ctrl+回车。  
  
iframe=document.getElementById("iframeautoheight");  
itable=iframe.contentWindow.document.getElementById("trPjs");  
irows=itable.getElementsByTagName("select");  
for(i=1;i<irows.length;i++){  
    if(i%8==0)  
        irows[i].value=irows.options[2].value;  
    else  
        irows[i].value=irows.options[1].value;  
}   
## 其他
本脚本只在西南政法大学的教务系统上测试过，其他学校页面可能需要修改第二行的"trPjs"才能工作。
