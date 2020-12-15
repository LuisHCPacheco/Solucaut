//Aparecer botão "voltar ao topo"
window.onscroll = function(){
    scroll();
}

function backToTop(){
    document.documentElement.scrollTop = 0;
}

function openNav(){
    document.getElementById("mySidebar").style.width =  "100vw";
    document.getElementById("main").style.marginLeft = "100vh";
}

function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0"; 
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var largura = window.innerWidth;
    let btn = document.getElementById("btnGoToTop");

    var largura = window.innerWidth;
    if(prevScrollpos > 50){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.position="fixed";
    } else {
    document.getElementById("navbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
}

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