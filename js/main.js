let button = document.getElementsByClassName('payment-deliver__blockbutton');
let j=[];
j.length=button.length;
for(let i=0;i<j.length;i++) j[i]=0;
button[0].addEventListener('click', function(){
    title(0);
});



for(let i=0;i<button.length;i++){
    if(i==0){
        button[0].addEventListener('click', function(){
            title(0);
        });
    }
    button[i].addEventListener('click', function(){
        title(i);
    });
}


function title(i) {
    let k = document.getElementsByClassName('paymner-deliver__subtitle');
    let k1=document.getElementsByClassName('payment-deliver__block');
    if (j[i] == 0) {
        k[i].style.display='block';
        k1[i].style.height='148px';
        button[i].innerHTML = '<button><img src="images/minus_orange.svg" alt=""></button>';
        j[i]=1;
    } else {
        k1[i].style.height = '68px';
        k[i].style.display='none';
        button[i].innerHTML = '<button><img src="images/plus_orange.svg" alt="" ></button>';
        j[i]=0;
    }   
}






let lunch_add=document.getElementById('constructor-create__add');
lunch_add.addEventListener('click',function(){
    const n=document.getElementsByClassName('constructor-create__blocks')[0];
    lunch_add.insertAdjacentHTML('beforeBegin','<div class="constructor-create__blocks">' + n.innerHTML +'</div>');
    
    
})






const buttons=document.querySelectorAll('.btn');

buttons.forEach(button =>{
    button.addEventListener('click',function(event){
        const circle=document.createElement('span');
        circle.classList.add('circle');
        this.appendChild(circle);
    })
})