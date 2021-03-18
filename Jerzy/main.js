let start = 0;
let end = [721, 212, 127];
let target = {
	score: start
};
let duration = 5;

let user = document.getElementById('user');
let subsc = document.getElementById('subsc');
let contact = document.getElementById('contact');
let display = [user, subsc, contact];

function counter(){
	for (let i = 0; i < end.length; i++){
		gsap.to(target, duration, {
			score: end[i],
			onUpdate: function(){
				display[i].innerHTML = Math.floor(target.score);
			},
			ease: Expo.easeInOut
		})
	}
}

counter();