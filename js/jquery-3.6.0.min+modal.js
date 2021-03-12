// get Modal
var modals = document.getElementsByClassName("modals");
//get the class which loads Modal
var btns = document.getElementsByClassName("btn");
//get the class which close Modal
var spanes = document.getElementsByClassName("close");
var funcs = [];

var x = document.querySelectorAll(".youtube_player");
console.log(x)
for(var i =0; i < x.length; i++){
  console.log(x[i].getAttribute("src"));
}
// var num;


// define click event which open and close Modal / modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        nums = num;
        console.log(num);
        var src = x[num-1].getAttribute("data_src")
        x[num - 1].removeAttribute("src")
        x[num - 1].setAttribute("src", src)
    };
 
    // close modal when click <span> (X button).
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
        var src = x[num-1].getAttribute("src")
        x[num - 1].removeAttribute("src")
        x[num - 1].setAttribute("src", src)
        
    };
  };
}
 
//  call as many  modal as i want -> define at funcs /원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
//call funcs as i want  /원하는 Modal 수만큼 funcs 함수를 호출합니다.
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}

window.onload = function() {
  var srcs = document.getElementsByClassName(".youtube_player");
  for (var i = 0; i < srcs.length; i++){
    if(srcs[i].getAttribute("data_src")){
      srcs[i].setAttribute("src", srcs[i].getAttribute("data_src"))
    }
  }s
}

// // close modal when click modal outside 
// window.onclick = function(event) {
//   if (event.target.className == "modals") {
//       event.target.style.display = "none";
//   }
// };

