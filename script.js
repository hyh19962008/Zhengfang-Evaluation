function autoEval(){
    iframe=document.getElementById("iframeautoheight");
    itable=iframe.contentWindow.document.getElementById("trPjs");
    irows=itable.getElementsByTagName("select");
    irows[0].value="4(良好)";
    for(i=1;i<8;i++){
        irows[i].value="5(优秀)";
    }   
}