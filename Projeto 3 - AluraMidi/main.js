function tocaSom(idElementoAudio) {
	document.querySelector(idElementoAudio).play()
}

/*function tocaSom() {
	document.querySelectorAll(".tecla").play()
	const lista = document.querySelectorAll("#som_tecla")
}*/

const listaDeTeclas = document.querySelectorAll(".tecla")

//let contador = 0

/*while (contador < listaDeTeclas.length) {
	const tecla = listaDeTeclas[contador]
	const instrumento = tecla.classList[1]

	//template string
	const idAudio = `#som_${instrumento}`
	console.log(idAudio)

	tecla.onclick = function () {
		//FUNÇÃO ANONIMA
		tocaSom(idAudio)
	}

	contador++
	//console.log(contador)
}*/

//BATERIA
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const tecla = listaDeTeclas[contador]
	const instrumento = tecla.classList[1]
	const idAudio = `#som_${instrumento}`

	tecla.onclick = function () {
		tocaSom(idAudio)
	}

	tecla.onkeydown = function (evento) {
		if (evento.code === "Space" || evento.code === "Enter") {
			tecla.classList.add("ativa")
		}
	}

	tecla.onkeyup = function () {
		tecla.classList.remove("ativa")
	}
}

//TELEFONE
const listaDeTeclasTelefone = document.querySelectorAll("input[type=button]")
const inputTel = document.querySelector("input[type=tel]")

for (let indice = 0; indice < listaDeTeclasTelefone.length; indice++) {
	const tecla = listaDeTeclasTelefone[indice]

	tecla.onclick = function () {
		inputTel.value = inputTel.value + tecla.value
	}
}
