window.addEventListener('scroll',
	function(){
		const title = document.querySelector('#title');
		title.classList.toggle("diss", window.scrollY > 80);
		title.removeClass("diss",window.scrollY<60);
	});
window.addEventListener('scroll',
	function(){
		const myHeader = document.querySelector('#myHeader');
		myHeader.classList.toggle("style",window.scrollY > 300);
	});
window.addEventListener('scroll',
	function(){
		const learn = document.querySelector('.learn');
		learn.classList.toggle("margone",window.scrollY > 60);
		learn.removeClass("margone",window.scrollY<40);
	});
window.addEventListener('scroll',
	function(){
		const join = document.querySelector('.join');
		join.classList.toggle("margtwo",window.scrollY > 60);
		join.removeClass("margtwo",window.scrollY < 40);
	});
window.addEventListener('scroll',
	function(){
		const topcontent = document.querySelector('.topcontent');
		topcontent.classList.toggle("transition",window.scrollY > 30)
	});
window.addEventListener('scroll',
	function(){
		const topcontainer = document.querySelector('.topcontainer');
		topcontainer.classList.toggle("trans",window.scrollY > 100);
	});
window.addEventListener('scroll',
	function(){
		const prodcon = document.querySelector('.prodcon');
		prodcon.classList.toggle("tool",window.scrollY > 250);
	});
window.addEventListener('scroll',
	function(){
		const hire = document.querySelector('.hire');
		hire.classList.toggle("exp",window.scrollY > 500);
	})