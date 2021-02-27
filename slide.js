const slideContain = document.querySelector('.slideImg2');
const sliderImg = document.querySelectorAll('.slideImg2 img');

const prvBtn = document.querySelector('#prvbtn')
const nxtBtn = document.querySelector('#nextbtn')

let counter = 1;
const size = sliderImg2[0].clientWidth;

slideContain.style.transform = 'translateX(' +(-size * counter) +'px)';


nxtBtn.addEventListener('click',()=>{
	slideContain.style.transition = "transform 0.4s ease-in-out";
	counter++
	slideContain.style.transform = 'translateX(' +(-size * counter) +'px)';
	});
prvBtn.addEventListener('click',()=>{
	slideContain.style.transition = "transform 0.4s ease-in-out";
	counter--
	slideContain.style.transform = 'translateX(' +(-size * counter) +'px)';
	});