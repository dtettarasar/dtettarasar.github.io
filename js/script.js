
var portHead = document.getElementsByClassName('portfolio-headline');
var portContent = document.getElementsByClassName('portfolio-presentation');
var i;

for(i=0;i<portHead.length;i++){
  portHead[i].addEventListener("click",function(){
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    }else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var btnTop = document.getElementById('btn-top');

function goToTop(){
  window.scrollTo(0, 0);
}

function displayBtn(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = 'block';
    }else{
    btnTop.style.display = 'none';
    }
  }

window.onscroll = function(){displayBtn()};
btnTop.addEventListener("click",goToTop);
