let btn=document.getElementById('btn');
let hexa=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexadec=document.getElementById('hexadec');
btn.onclick=function(){
    let color='#';
    for(let i=0;i<6;i++){
        color+=hexa[ getrandom()];
    }
    document.body.style.background=color;
    hexadec.innerHTML=color;

}
function getrandom(){
    return Math.floor(Math.random()*hexa.length);
}