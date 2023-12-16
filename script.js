const btn = document.querySelector('#btn');

console.log(btn);
console.log(btn.textContent);

btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    if(btn.textContent ==='ダークモードにする'){
        btn.textContent ='ライトモードにする';
    }else{
        btn.textContent ='ダークモードにする';
    }
});
