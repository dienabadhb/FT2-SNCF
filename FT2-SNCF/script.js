


var btn = document.getElementById("btn");

function toggleBtn(){
  btn.classList.toggle("active");
}


const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = '#6CA5FA';
    btn2.style.transition = '.5s ease';
});