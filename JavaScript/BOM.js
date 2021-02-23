//사용자와의 소통용 함수

function BOM_Communication_confirm(){
    if(confirm("confirm 테스트")){
        alert("확인 버튼  클릭")
    }
    else {
        alert("취소 버튼 클릭");
    }
}

function BOM_Communication_prompt(){
    if(prompt("\"BB 바른 한 래퍼가 내게 말을 건다 ~\"\n\n이것은 누구의 노래인가요?")==="조광일"){
        alert("정답입니다.")
    }
    else {
        alert("오답입니다.");
    }
}

//Location 객체 사용

function BOM_Location_locationInfo(){
    document.write("location.toString() => ", location.toString(), "<br/>");
    document.write("location.href => ", location.href, "<br/>");
    document.write("<button onclick='javascript:location.reload();'>새로고침</button>");
}

function BOM_Location_urlParsing(){
    document.write("location.protocol => ", location.protocol, "<br/>");
    document.write("location.host => ", location.host, "<br/>");
    document.write("location.port => ", location.port, "<br/>");
    document.write("location.pathname => ", location.pathname, "<br/>");
    document.write("location.search => ", location.search, "<br/>");
    document.write("location.hash => ", location.hash, "<br/>");
    document.write("<button onclick='javascript:location.reload();'>새로고침</button>");
}

function BOM_Location_location_href(){
    location.href = "https://www.naver.com/";
    //location = "https://www.naver.com/";
}

function BOM_Location_location_reload(){
    location.reload();
}

//Navigator 객체 사용

function BOM_Navigator_navigatorInfo(){
    document.write("navigator.appName => ", navigator.appName, "<br/>");
    document.write("navigator.appVersion => ", navigator.appVersion, "<br/>");
    document.write("navigator.userAgent => ", navigator.userAgent, "<br/>");
    document.write("navigator.platform => ", navigator.platform, "<br/>");
    document.write("<button onclick='javascript:location.reload();'>새로고침</button>");
}

//창 제어

function BOM_Window_Open(type){
    switch(type){
        case 'basic':
            window.open('popup.html');
            break;
        case '_self':
            window.open('popup.html', '_self');
            break;
        case '_blank':
            window.open('popup.html', '_blank');
            break;
        case 'name':
            window.open('popup.html', 'name_is_popup');
            break;
        case 'option':
            window.open('popup.html', '_blank', 'width=200, height=200, resizable=yes');
            break;
    }
}

function BOM_Window_Controll(type){
    switch(type){
        case 'open':
            win = window.open('popup.html', 'name_is_popup', 'width=300px, height=500px');
            break;
        case 'message':
            win.document.write(parent.document.getElementById('message').value);
            break;
        case 'close':
            win.close();
            break;
    }
}