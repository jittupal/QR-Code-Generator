var imgbox = document.querySelector("#QR-code")
var qrimg = document.querySelector("#qr-img")
var intp = document.querySelector("#input")
var button = document.querySelector("#button")



function generateQR(){
    if(intp.value.length > 0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + intp.value;
        imgbox.classList.add("show-img")
    }else{
        intp.classList.add('error');
        setTimeout(function(){
            intp.classList.remove('error');
        },1000)
    }
}

button.addEventListener("click", function(){
    generateQR();

})