//prompt kullanicidan girdi almak icin kullanilir.

//var boy = prompt("Lutfen Boyunuzu Metre Cinsinden Girin: ");  //1.70, 1.86 metre cinsinde
//var kilo = prompt("Lutfen Kilonuzu Kilogram Cinsinde Girin:");  //kg cinsiden 70




function vkiHesapla() {


var boy = document.getElementById("inputBoy").value;
var kilo = document.getElementById("inputKilo").value;


console.log("boy: " + boy);
console.log("kilo: " + kilo);



var vki = kilo / (boy * boy);

var vkiDuzeltilmis = vki.toFixed(1)

console.log("Kitle Endeksiniz: ", vki);

var mesaj = "BMI: " + vkiDuzeltilmis;


var imageToShow1 = "img1";
var imageToShow2 = "img2";
var imageToShow3 = "img3";
var imageToShow4 = "img4";
var imageToShow5 = "img5";

var resultText = document.getElementById("vkiDegeri");

//2 sartida ayni anda saglayacaksa && ile birlestirilir
//2 sartin birini saglayacaksa || ile birlestiriyoruz




if(vki >= 30 && vki < 35) {
    document.getElementById(imageToShow4).classList.remove("hidden");
    docAdvice = "'You're in the obese range.It’s very important to take steps to tackle obesity because, as well as causing obvious physical changes, it can lead to a number of serious and potentially life-threatening conditions.'";
    resultText.style.color = "rgb(233, 100, 38"; 
} else if(vki >=25 && vki < 30 ) {
    document.getElementById(imageToShow3).classList.remove("hidden");
    docAdvice = "'You're in the overweight range.To do this you should: eat a balanced, calorie-controlled diet as recommended by your GP or weight loss management health professional (such as a dietitian) join a local weight loss group.'";
    resultText.style.color = "orange";
} else if(vki >= 18.5 && vki < 25){
    document.getElementById(imageToShow2).classList.remove("hidden");
    docAdvice = "'You're in the normal range. A healthy lifestyle can help you thrive throughout your life. Making healthy choices isn't always easy, however your efforts will pay off in many ways, and for the rest of your life.'";
    resultText.style.color = "green"; 
} else if(vki <18.5){
    document.getElementById(imageToShow1).classList.remove("hidden");
    docAdvice = " 'You're in the underweight range.it is important to eat a variety of foods that give you the nutrition you need. You should make sure you eat foods with enough energy to help you gain weight, protein to repair your body and build your muscles, and vitamins and minerals to keep your body cells functioning well' ";
    resultText.style.color = "rgb(11, 179, 176)"; 
} else if(vki >=35 ) {
    document.getElementById(imageToShow5).classList.remove("hidden");
    docAdvice = "'You're in Extremely Obese range.If you’re extremely obese, Dr. Eckel recommends that you become more active, but not to start a vigorous workout program without getting physician advice and not until you’ve lost about 10 percent of your body weight.'";
    resultText.style.color = "red"; 
}


document.getElementById("vkiDegeri").innerHTML = mesaj;
//document.getElementById("imageDisplay").innerHTML = selectedImage;
document.getElementById("docAdvice").innerHTML = docAdvice;
document.getElementById("vkiDegeri").innerHTML = resultTex;




const imageDisplay = document.getElementById('imageDisplay');
      imageDisplay.src = selectedImage;
      imageDisplay.style.display = 'block';

/*let selectedImage;
if(vki >= 30 && vki < 35) {
    doktorTavsiyeMesaji = "Acilen Doktora Gorunmen Lazim";
    selectedImage = 'path/to/obese.jpg';
} else if(vki >=25 && vki < 30 ) {
    doktorTavsiyeMesaji = "Yediklerine Dikkat Etmen Lazim"
} else if(vki >= 18.5 && vki < 25){
    doktorTavsiyeMesaji = "Ideal Kilodasiniz"
} else if(vki <18.5){
    doktorTavsiyeMesaji = "Zazifsiniz Kilo Almalisiniz"
}


document.getElementById("vkiDegeri").innerHTML = mesaj + " " + doktorTavsiyeMesaji;
*/


}

document.getElementById("inputBoy").addEventListener('focus', function() {
    this.value = ''; // input kutusunun içeriğini temizle
});

document.getElementById("inputKilo").addEventListener('focus', function() {
    this.value = ''; // input kutusunun içeriğini temizle
});

document.getElementById('inputBoy').addEventListener('focus', function() {
    // Tüm resimleri gizle
    var images = document.querySelectorAll(".overlay-image");
    images.forEach(function(img) {
        img.classList.add('hidden');
    });
});
document.getElementById('inputKilo').addEventListener('focus', function() {
    // Tüm resimleri gizle
    var images = document.querySelectorAll(".overlay-image");
    images.forEach(function(img) {
        img.classList.add('hidden');
    });
});

