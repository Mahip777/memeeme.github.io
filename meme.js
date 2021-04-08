let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx, color, selector, fontFam, fontFamStyle;

function binc() {

   let sinc =  document.getElementById('show');
   sinc.style.opacity = "0.9";
}

function oinc() {

    let ninc =  document.getElementById('show');
    ninc.style.opacity = "none";
    ninc.style.filter = "grayscale(0)";
}
function dinc() {

    let pinc =  document.getElementById('show');
    pinc.style.opacity = "0.3";
}
function baw() {

    let baww =  document.getElementById('show');
    baww.style.filter = "grayscale(1)";
}

function updateFont() {
    fontFam.value = selector.options[selector.selectedIndex].value;
    fontFamStyle.style.fontFamily = fontFam;
}

function makeMeme (img, topText, bottomText, topTextSize, bottomTextSize, textcolor, fontStyle, top1, brightt) {
    let fontSize;


    // var fileName = img.src.split(/(\\|\/)/g).pop();
           
    // var blob;
    // // ... get as Data URI
    // if (img.src.indexOf(".jpg") > -1) {
    // blob = canvas.toDataURL("image/jpeg");
    // } else if (img.src.indexOf(".png") > -1) {
    // blob = canvas.toDataURL("image/png");
    // } else if (img.src.indexOf(".gif") > -1) {
    // blob = canvas.toDataURL("image/gif");
    // } else {
    // blob = canvas.toDataURL("image/png");
    // }
    // $("body").html("<b>Click image to download.</b><br><a download='" + fileName + "' href='" + blob + "'><img src='" + blob + "'/></a>");



    
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = textcolor;
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';
    ctx.filter = brightt;
    //ctx.font = topTextSize + "px " + fontStyle;
   // ctx.fontFamily = fontStyle;

    // ctx.bottomText.fillStyle = 'white';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px ' + fontStyle;
    ctx.lineWidth = fontSize / 20;

    // topText(function (textcolor) {
    //     ctx.fillStyle = 'textcolor'
        
    // });

  


    ctx.textBaseline = 'top';
    topText.fontFamily = fontStyle;
    bottomText.fontFamily = fontStyle;
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px ' + fontStyle;
    ctx.lineWidth = fontSize / 20;

  





    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) { 
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

function init () {

    topTextInput = document.getElementById('top');
    bottomTextInput = document.getElementById('bottom');
    topTextSizeInput = document.getElementById('upsize');
    bottomTextSizeInput = document.getElementById('downsize');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('show');
    color = document.getElementById('favcolor');
    selector = document.getElementById('selectFont');
    fontFamStyle = document.getElementById('top');
    fontFam = selector.options[selector.selectedIndex];
    brightness = document.getElementById('bright')
    fontFamStyle2 = document.getElementById('bottom');
    
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
           
            makeMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value, color.value, fontFam.value, fontFamStyle);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
}

init();