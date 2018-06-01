function autoEval(){
    iframe=document.getElementById("iframeautoheight");
    itable=iframe.contentWindow.document.getElementById("trPjs");
    irows=itable.getElementsByTagName("select");
    for(i=0;i<irows.length;i++){
        if(i%8==0)
            irows[i].value=irows.options[2].value;
        else
            irows[i].value=irows.options[1].value;
    }   
}
