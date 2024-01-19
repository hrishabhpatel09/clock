setInterval(()=>{
let a = new Date();
let hrs=document.querySelector("#hrs");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
let h=a.getHours();
let m=a.getMinutes();
let s=a.getSeconds();
hrs.innerHTML=(h<10?"0":"")+h;
min.innerHTML=(m<10?"0":"")+m;
sec.innerHTML=(s<10?"0":"")+s;
},1000)
