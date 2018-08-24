let prev = document.getElementById("prev");
let current = document.getElementById("current");
let next = document.getElementById("next");
let page;
let arr = [1,2,3,4,5];

function codeAddress() {
    var parts = window.location.search.substr(1).split("&");
    console.log(parts);
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    if (typeof $_GET['pageNum'] === "string"){
        console.log('fired');
        page = $_GET['pageNum']; 
    }
    else{
        page = 1;
    }
    console.log(page);
}
window.onload = codeAddress;

function prevPage(){
    page = 1;
    var parts = window.location.search.substr(1).split("&");
    console.log(parts);
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    if (typeof $_GET['pageNum'] === "string"){
        console.log('fired');
        page = $_GET['pageNum']; 
    }
    if (page != 1){
        page--;
        window.location.href = "http://127.0.0.1:5500/Youtube/index.html?pageNum=" + page;
    }
    
}


function nextPage(){
    page = 1;
    var parts = window.location.search.substr(1).split("&");
    console.log(parts);

    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    if (typeof $_GET['pageNum'] === "string"){
        console.log('fired');
        page = $_GET['pageNum'];
    }
    page++;
    current.innerHTML = page;
    window.location.href = "http://127.0.0.1:5500/Youtube/index.html?pageNum=" + page;
}

prev.addEventListener("click",prevPage);
next.addEventListener("click",nextPage);