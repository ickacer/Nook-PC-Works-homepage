// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const targetId = this.getAttribute("href");
const target = document.querySelector(targetId);

if(target){

target.scrollIntoView({
behavior: "smooth"
});

}

});

});


// お問い合わせボタン
const contactBtn = document.querySelector(".cta");

if(contactBtn){

contactBtn.addEventListener("click", function(){

const contactSection = document.querySelector(".contact");

contactSection.scrollIntoView({
behavior: "smooth"
});

});

}

// サービス事例ポップアップ

const boxes = document.querySelectorAll(".box");
const popup = document.getElementById("popup");

const title = document.getElementById("popup-title");
const text = document.getElementById("popup-text");
const image = document.getElementById("popup-image");

const close = document.querySelector(".close");


const cases = {

boot:{
title:"PCが起動しない事例",
text:"電源を入れてもWindowsが起動しない症状。内部部品が焼け焦げていたため、交換し復旧いたしました。",
image:"unific528--8620_TP_V.jpg"
},

virus:{
title:"ウイルス感染の事例",
text:"不審な広告が大量に表示される症状。ウイルスを除去し、セキュリティ対策を実施しました。",
image:"virus.jpg"
},

slow:{
title:"動作が遅い事例",
text:"記憶媒体のTBWが限界値に近づいていたので、新しいものに交換しました。",
image:"acboost_DSC9531_TP_V.jpg"
},

data:{
title:"データ復旧事例",
text:"誤って削除してしまった写真データを専用の復旧ソフトを利用し、復旧いたしました。",
image:"unific1227f582_TP_V.jpg"
}

};


boxes.forEach(box=>{

box.addEventListener("click",()=>{

const type = box.dataset.type;
const data = cases[type];

title.textContent = data.title;
text.textContent = data.text;
image.src = data.image;

popup.style.display="flex";

});

});


if(close){
close.onclick = function(){
popup.style.display="none";
}
}

window.onclick = function(e){
if(e.target == popup){
popup.style.display="none";
}
}

//　電話プッシュボタン
function callPhone(){

window.location.href = "tel:08093568673";

}

//Email送信ボタン
function sendMail() {
    var recipient = 'nookpcworks@gmail.com';
    var subject = '';
    var body = '';
    // Use encodeURIComponent to ensure proper URL formatting for special characters
    var mailtoLink = 'mailto:' + encodeURIComponent(recipient)
                     + '?subject=' + encodeURIComponent(subject)
                     + '&body=' + encodeURIComponent(body);
    
    // Trigger the email client
    window.location.href = mailtoLink;
}

//スマホ仕様
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", ()=>{
    nav.classList.toggle("active");
});

document.querySelectorAll("#nav a").forEach(link=>{
link.addEventListener("click", ()=>{
nav.classList.remove("active");
});
});