var words = ["LA AMO ❤", "ES LO MEJORCITO ❤", "MY SUNSHINE ❤", "ME ENCANTA ❤", "ES MI ADORACION ❤", "MI DIOSA ❤", "MI MAMASITA PRECIOSA ❤", "MI SALVACION ❤", "MY INSPIRATION ❤", "MI MUJERCITA 🥰❤", "NESUKO CHIQUITA ❤", "XIV ❤"];

window.addEventListener("load", function() {
		var randoms = window.document.getElementsByClassName("randoms");
		for (i = 0; i < randoms.length; i++)
				changeWord(randoms[i]);
}, false);

function changeWord(a) {
		a.style.opacity = '0.1';
		a.innerHTML = words[getRandomInt(0, words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord(a);
		}, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}