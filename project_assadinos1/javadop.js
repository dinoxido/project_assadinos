

function salvarDados() {
       var img = document.querySelectorAll(".img");
       var imgsrc = img.alt;
    localStorage.setItem("imgsrc", imgsrc);
    window.location.href = "carne.html";
}
var img = document.querySelectorAll(".img");
var imgsrc = img.alt;
localStorage.setItem("imgsrc", imgsrc);

function carregarDados() {
        var img = localStorage.getItem("imgsrc");
        if (img) {
            document.getElementById("carnetitu").innerHTML ='<img src="' + img + '">';
        }
        console.log(img)
    }
    carregarDados(); 
   
/*
//------------------------------------------------------------------
function redirecionamento(){
        var eleimg = document.querySelector("img.img");
        var eletitu = document.querySelector("p.titulo");
        localStorage.setItem("carneimg", eleimg.innerHTML);
        localStorage.setItem("eletitu", eletitu.innerHTML);
        window.location.href = "carne.html"

}
//------------------------------------------------------------------
function salvarDados() {
        var img = document.querySelectorAll(".img").innerHTML
    localStorage.setItem('img', img);
    window.location.href = "carne.html"
}
function carregarDados() {
        
       
        if ('img'){
                var img1 = document.querySelectorAll(".img").innerHTML;
                var img = img1.getAttribute('data-src');
            document.getElementById("carneimg").innerHTML = '<img src="' + img + '">';
        }
    }
    carregarDados();
    */