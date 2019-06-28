
function test1(){
  alert("실습 버튼을 클릭하셨습니");
}
function test2(){
  var date=new Date();
  var hour=date.getHours();

  if(hour < 12){
    alert("오전입니다");
  }else if(hour >=12){
    alert("오후입니다");
  }
}
function test3(){
  var date=new Date();
  var hour=date.getHours();

  if(hour < 6){
    alert("새벽입니");
  }else if(hour <12){
    alert("아침입니다");
  }else if(hour <18){
    alert("낮입니다");
  }else{
    alert("밤입니다");
  }
}

function test4(){
  var lis=document.getElementsByTagName('li');
  for(var i = 0; i<lis.length; i++){
    lis[i].style.color='blue';
  }

}

function test5(){
  var lis=document.getElementsByClassName('group');
  for(var i = 0; i<lis.length; i++){
    lis[i].style.color='red';
  }


}

function test6(){
  var lis=document.getElementById('li1');
  lis.style.color='pink';

  var lis=document.getElementById('li2');
  lis.style.color='cyan';

  var lis=document.getElementById('li3');
  lis.style.color='rgb(153, 151, 10)';

  var lis=document.getElementById('li4');
  lis.style.color='rgb(213, 54, 107)';

  var lis=document.getElementById('li5');
  lis.style.color='rgb(31, 158, 171)';

}


window.onload=function(){
  $('body').append('<h1></h1>');


  $(".one").on("mouseenter", function(){
    $(".s_one").show();

    $(".one").on("mouseleave", function(){
        $(".slide").hide();
      });
  });


  $(".two").on("mouseenter", function(){
    $(".s_two").show();

    $(".two").on("mouseleave", function(){
        $(".slide").hide();
      });
  });


  $(".three").on("mouseenter", function(){
    $(".s_three").show();

    $(".three").on("mouseleave", function(){
        $(".slide").hide();
      });
  });




}
