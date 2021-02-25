//이벤트 등록 - 프로퍼티 리스너 방식
function propertyListenerTest(){
    var target = document.getElementById('propertyListenerTest');
    target.onclick = function(event){
        alert('propertyListenerTest success, event.target.value : ' + event.target.value);
    }
}
propertyListenerTest();

//이벤트 등록 - 프로퍼티 리스너 방식
var target = document.getElementById('addListenerTest');
target.addEventListener('click', function(event){
    alert('addEventListenerTest success, '+event.target.value);
});