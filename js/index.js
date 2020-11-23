//Aparecer botão "voltar ao topo"
window.onscroll = function(){
    scroll();
}

function openNav(){
    document.getElementById("mySidebar").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "100vw";
}

function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var oldScroll = window.pageYOffset;
window.addEventListener('scroll', () => {
  var largura = window.innerWidth;
  if(largura < 992){
    if(document.documentElement.scrollTop == 0){
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.top = "12vh";
    }
    else{
      document.getElementById("navbar").style.position = "fixed";
      if (pageYOffset > oldScroll) {
        document.getElementById("navbar").style.top = "-100px";
      } else {
        document.getElementById("navbar").style.top = "12vh";
      }
      oldScroll = window.pageYOffset;
    }
  }
  else{
    document.getElementById("navbar").style.position = "absolute";
  }
})

function scroll(){
    let btn = document.getElementById("btnGoToTop");
    let nav = document.getElementById("navbar");
    var largura = window.innerWidth;
    if(document.documentElement.scrollTop > 50){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}
function backToTop(){
    document.documentElement.scrollTop = 0;
}


//Aparecer navbar
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
});


//Animação do conteúdo
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeOnScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/3.4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }
        else{
            element.classList.remove(animationClass);
        }
    })
}

animeOnScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeOnScroll();
    }, 50));//tempopara a animação ocorrer
}

window.addEventListener('resize', function () {
    var largura = window.innerWidth;
    var checkBox = document.getElementById("check");

    if (largura > 1250){
        document.getElementById("allContentSite").style.display = "block";
        checkBox.checked = false;
    }
});

$("#item1").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});
$("#item2").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});
$("#item3").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});
$("#item4").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});