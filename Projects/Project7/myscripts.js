var printBtn1 = new Image();
var printBtn2 = new Image();
var logoImg1  = new Image();
var logoImg2  = new Image();

if (document.images) {
    printBtn1.src = "Images/print5.gif";
    printBtn2.src = "Images/print6.gif";
    logoImg1.src  = "Images/logo1.jpg";
    logoImg2.src  = "Images/logo2.jpg";
}

var imgArray = [
    'Image1Lg.jpg',
    'Image2Lg.jpg',
    'Image3Lg.jpg',
    'Image4Lg.jpg'
];

var titleArray = [
    'Raspberry Cake',
    'Cherry Cheesecake',
    'Backyard Grill',
    'Jello Cake'
];

var imgPath = "Images/fullsize/";

function swapImage(imgID) {
    document.getElementById('theImage').src = imgPath + imgArray[imgID];
    document.getElementById('bottomText').innerHTML = titleArray[imgID];
}

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmp = new Image();
        tmp.src = imgPath + imgArray[i];
    }
}

function swapPrint(toImg) {
    document.getElementById('printBtn').src = toImg;
}

function swapLogo(toImg) {
    document.getElementById('logoBtn').src = toImg;
}
