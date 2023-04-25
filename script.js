// let name = prompt("Выберите персонажа")
// document.getElementById("hero-name").innerHTML = name

let timerInput = document.getElementById("time"); // Берём строку
let timerShow = document.getElementById("timer"); // Берём блок для показа времени
let timerValue = 4

window.addEventListener('load', function () {
    timeMinut = parseInt(timerValue) * 60
})

let timer = setInterval(function () {
	seconds = timeMinut%60 
  minutes = timeMinut/60%60 
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");

    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; 
}, 1000)


let defensePlayer2 = document.getElementsByClassName("defense2")[0]
let defenseHpPlayer2 = 0
let parent2 = document.getElementById("player2");
let child2 = document.getElementById("defense-hp-2");


let atackPlayer1 = document.getElementsByClassName("atack")[0]
let hp2Player2 = document.getElementsByClassName("hp2")[0]
let fullHpPlayer2 = 100
document.getElementsByClassName("hp2").innerHTML = fullHpPlayer2


// Использование ульты
let useAbleUlta = document.getElementsByClassName("run")[0].disabled = true; 
let ultaCount = 0
atackPlayer1.onclick = function() {
	let useAtack = Math.floor(Math.random() * 11)
	ultaCount = ultaCount + (useAtack * 4)

	if (fullHpPlayer2 <= 0) {
		let heroName = document.getElementById("hero-name").innerHTML
		alert(heroName + " победил!")
		document.getElementsByClassName("hp2")[0].innerHTML = "0/100"
		clearInterval(timer);
	} 
	else if (defenseHpPlayer2 > 0) {
			if (useAtack >= defenseHpPlayer2) {
				document.getElementsByClassName("hp-hit2")[0].innerHTML = "-" + useAtack
				useAtack = useAtack - defenseHpPlayer2
				defenseHpPlayer2 = 0
				document.getElementsByClassName("defense-hp-2")[0].innerHTML = defenseHpPlayer2
				fullHpPlayer2 = fullHpPlayer2 - useAtack
				document.getElementsByClassName("hp2")[0].innerHTML = fullHpPlayer2 + "/100"
				if (ultaCount >= 100) {
					ultaCount = 100
					useAbleUlta = document.getElementsByClassName("run")[0].disabled = false;
				}
			}
			else if (useAtack < defenseHpPlayer2){
				defenseHpPlayer2 = defenseHpPlayer2 - useAtack
				document.getElementsByClassName("defense-hp-2")[0].innerHTML = defenseHpPlayer2
				if (ultaCount >= 100) {
					ultaCount = 100
					useAbleUlta = document.getElementsByClassName("run")[0].disabled = false;
				}
			}
		}
		else if (defenseHpPlayer2 == 0) {
	 		fullHpPlayer2 = fullHpPlayer2 - useAtack
	 		document.getElementsByClassName("hp2")[0].innerHTML = fullHpPlayer2 + "/100"
		 	document.getElementsByClassName("hp-hit2")[0].innerHTML = "-" + useAtack
		 	if (ultaCount >= 100) {
		 			ultaCount = 100
					useAbleUlta = document.getElementsByClassName("run")[0].disabled = false;
				}
		 	if (fullHpPlayer2 <= 0) {
				let heroName = document.getElementById("hero-name").innerHTML
				document.getElementsByClassName("hp2")[0].innerHTML = "0/100"
				alert(heroName + " победил!")
				clearInterval(timer);
			}
		}

	else {
		document.getElementsByClassName("hp2")[0].innerHTML = fullHpPlayer2 + "/100"
		document.getElementsByClassName("hp-hit2")[0].innerHTML = "-" + useAtack
		let parentHpHit = document.getElementsByClassName("health2")[0];
		let childHpHit = document.getElementsByClassName("hp-hit2")
		function removeObject(parent, child) {
			parent.removeChild(childHp);
		}

	}
		document.getElementsByClassName("run")[0].innerHTML = ultaCount + "%"
}


document.addEventListener('keyup', function(event) {
  if (event.code == 'KeyD') {
    fullHpPlayer2 = fullHpPlayer2 - Math.floor(Math.random() * 11)
	if (fullHpPlayer2 <= 0) {
		let heroName = document.getElementById("hero-name").innerHTML
		alert(heroName + " победил!")
		document.getElementsByClassName("hp2")[0].innerHTML = "0/100"
		clearInterval(timer);
	} else {
		document.getElementsByClassName("hp2")[0].innerHTML = fullHpPlayer2 + "/100"
	}
  }
});



let defensePlayer1 = document.getElementsByClassName("defense")[0]
var defenseHpPlayer1 = 0
let parent = document.getElementsByClassName("hp-bar")[0];
let child = document.getElementsByClassName("defense-hp")[0];
defensePlayer1.onclick = function() {
	let getDefensePlayer1 = Math.floor(Math.random() * 11)
	document.getElementsByClassName("defense-hp")[0].style.border = "2px solid black"
	defenseHpPlayer1 = defenseHpPlayer1 + getDefensePlayer1
	if (defenseHpPlayer1 == 0) {
		parent.removeChild(child);
	} else {
		document.getElementsByClassName("defense-plus1")[0].innerHTML = "+" + getDefensePlayer1
		document.getElementsByClassName("defense-hp")[0].innerHTML = defenseHpPlayer1
	}
}




let atackPlayer2 = document.getElementsByClassName("atack2")[0]
let hp2Player1 = document.getElementsByClassName("hp")[0]
let fullHpPlayer1 = 100
document.getElementsByClassName("hp").innerHTML = fullHpPlayer1

atackPlayer2.onclick = function() {
	let useAtack2 = Math.floor(Math.random() * 11); 
	if (fullHpPlayer1 <= 0) {
		let heroName2 = document.getElementById("hero-name2").innerHTML
		document.getElementsByClassName("hp")[0].innerHTML = "0/100"
		alert(heroName2 + " победил!")
		clearInterval(timer);
	}
	
	
	else if (defenseHpPlayer1 > 0) {
		if (useAtack2 >= defenseHpPlayer1) {
			useAtack2 = useAtack2 - defenseHpPlayer1
			defenseHpPlayer1 = 0
			document.getElementsByClassName("defense-hp")[0].innerHTML = defenseHpPlayer1
			fullHpPlayer1 = fullHpPlayer1 - useAtack2
			document.getElementsByClassName("hp-hit")[0].innerHTML = "-" + useAtack2
			document.getElementsByClassName("hp")[0].innerHTML = fullHpPlayer1 + "/100"

		} else if (useAtack2 < defenseHpPlayer1){
			defenseHpPlayer1 = defenseHpPlayer1 - useAtack2
			document.getElementsByClassName("defense-hp")[0].innerHTML = defenseHpPlayer1
		}
	}
	else if (defenseHpPlayer1 == 0) {
	 	fullHpPlayer1 = fullHpPlayer1 - useAtack2
	 	document.getElementsByClassName("hp-hit")[0].innerHTML = "-" + useAtack2
	 	if (fullHpPlayer1 <= 0) {
			let heroName2 = document.getElementById("hero-name2").innerHTML
			document.getElementsByClassName("hp")[0].innerHTML = "0/100"
			alert(heroName2 + " победил!")
			clearInterval(timer);
		} else {
			document.getElementsByClassName("hp")[0].innerHTML = fullHpPlayer1 + "/100"
			document.getElementsByClassName("hp-hit")[0].innerHTML = "-" + useAtack2
		}
	}

}


document.addEventListener('keyup', function(event) {
  if (event.code == 'KeyL') {
    let useAtack2 = Math.floor(Math.random() * 11); 
	if (fullHpPlayer1 <= 0) {
		let heroName2 = document.getElementById("hero-name2").innerHTML
		document.getElementsByClassName("hp")[0].innerHTML = "0/100"
		alert(heroName2 + " победил!")
		clearInterval(timer);
	}
	
	
	else if (defenseHpPlayer1 > 0) {
		if (useAtack2 >= defenseHpPlayer1) {
			useAtack2 = useAtack2 - defenseHpPlayer1
			defenseHpPlayer1 = 0
			document.getElementsByClassName("defense-hp")[0].innerHTML = defenseHpPlayer1
			fullHpPlayer1 = fullHpPlayer1 - useAtack2
			document.getElementsByClassName("hp")[0].innerHTML = fullHpPlayer1 + "/100"

		} else if (useAtack2 < defenseHpPlayer1){
			defenseHpPlayer1 = defenseHpPlayer1 - useAtack2
			document.getElementsByClassName("defense-hp")[0].innerHTML = defenseHpPlayer1
		}
	}
	else if (defenseHpPlayer1 == 0) {
	 	fullHpPlayer1 = fullHpPlayer1 - useAtack2
	 	if (fullHpPlayer1 <= 0) {
			let heroName2 = document.getElementById("hero-name2").innerHTML
			document.getElementsByClassName("hp")[0].innerHTML = "0/100"
			alert(heroName2 + " победил!")
			clearInterval(timer);
		} else {
			document.getElementsByClassName("hp")[0].innerHTML = fullHpPlayer1 + "/100"
		}
	}
  }
});





defensePlayer2.onclick = function() {
	let getDefensePlayer2 = Math.floor(Math.random() * 11)
	document.getElementsByClassName("defense-hp-2")[0].style.border = "2px solid black"
	defenseHpPlayer2 = defenseHpPlayer2 + getDefensePlayer2
	if (defenseHpPlayer2 == 0) {
		// parent.removeChild(child);
	} else {
		document.getElementsByClassName("defense-hp-2")[0].innerHTML = defenseHpPlayer2
		document.getElementsByClassName("defense-plus2")[0].innerHTML = "+" + getDefensePlayer2
	}
}

let ultaPlayer1 = document.getElementsByClassName("run")[0];
ultaPlayer1.onclick = function() {
	ultaCount = 0
	let ultaHit = 40
	fullHpPlayer2 = fullHpPlayer2 - ultaHit
	document.getElementsByClassName("hp2")[0].innerHTML = fullHpPlayer2 + "/100"
	document.getElementsByClassName("hp-hit2")[0].innerHTML = "-" + ultaHit
	document.getElementsByClassName("run")[0].innerHTML = "0%"
	useAbleUlta = document.getElementsByClassName("run")[0].disabled = true;

}


// Начать игру
let start = document.getElementsByClassName("submit-heroes")[0]
	container = document.getElementsByClassName("container")[0]
	preContainer = document.getElementsByClassName("pre-container")[0]
var nickName

document.forms.nick.onsubmit = function() {
	nickName = this.name.value
	return false
};

start.onclick = function() {
	document.getElementsByClassName("hero-name")[0].innerHTML = nickName
	container = container.style.opacity = "1"
	preContainer = preContainer.style.display = "none"
	// container = container.style.display = "flex"
}

let hero1 = document.getElementsByClassName("hero-1")[0]
	hero = document.getElementsByClassName("hero")[0]
	hero2 = document.getElementsByClassName("hero-2")[0]
hero1.onclick = function(){

	hero.src = "images/scorpion2.gif"
}

hero2.onclick = function(){

	hero.src = "images/sabzero.gif"
}




