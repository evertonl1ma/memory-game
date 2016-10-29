/*
	1 - Posicionar as cartas X
	2 - Virar as cartas X
	3 - Virar apenas duas cartas X
	4 - Embaralhar as cartas toda vez que o jogo começar X
	5 - Adicionar classe nas cartas que forem match e fazer subir uma imagem
	6 - Ter um contador para verificar quando o jogo vai acabar
	7 - Criar tela de game over
*/

(function() {
	function buildCard() {
		let totalCards= 42;
		let $container= document.querySelector(".container");

		for(let i= 0; i < totalCards; i++) {
			let $card= document.createElement("div");
			let $front= document.createElement("div");
			let $back= document.createElement("div");

			$card.classList.add("card");
			$front.classList.add("face");
			$front.classList.add("front");
			$back.classList.add("face");
			$back.classList.add("back");

			$card.appendChild($back);
			$card.appendChild($front);

			$container.appendChild($card);
		}
		
		return $container;
	}

	buildCard();

	let cards= document.querySelectorAll(".card");
	let flippedCards= [];
	let imagens= [];
	let matches= 0;

	for(let i= 0; i < cards.length; i++) {
		imagens.push({src: "img/" + i + ".png", id: i % (cards.length / 2)});
	}

	

	imagens= randomCard(imagens);
	
	cards.forEach(function(card, index) {
		let front= document.querySelectorAll(".front");

		front[index].style.background= "url(./" + imagens[index].src + ")";
		front[index].setAttribute("id", imagens[index].id);
		card.addEventListener("click", flipCards);
	});

	 function flipCards() { 
	 	let faces= this.querySelector(".face");
	 	if(flippedCards.length < 2) {

	 		if(faces.classList.contains("flipped")) {
	 			return;
	 		}

	 	   let front= this.querySelector(".front");
	 	   let back= this.querySelector(".back");

	 	   front.classList.toggle("flipped");
	 	   back.classList.toggle("flipped");

	 	   flippedCards.push(this);

	 	   if(flippedCards.length == 2) {
	 	   	  if(flippedCards[0].children[1].id == flippedCards[1].children[1].id) {
	 	   	  	 flippedCards[0].children[0].classList.add("match");
	 	  	     flippedCards[0].children[1].classList.add("match");
	 	  	     flippedCards[1].children[0].classList.add("match");
	 	  	     flippedCards[1].children[1].classList.add("match");
	 	  	     isMatch();
	 	  	     matches++;
	 	   	  	 flippedCards= [];
	 	   	  	 
	 	   	  	 if(matches == 21) {
	 	   	  	 	gameOver();
	 	   	  	 }
	 	   	  }
	 	   }
	 	  } else {
	 	  	flippedCards[0].children[0].classList.remove("flipped");
	 	  	flippedCards[0].children[1].classList.remove("flipped");
	 	  	flippedCards[1].children[0].classList.remove("flipped");
	 	  	flippedCards[1].children[1].classList.remove("flipped");

	 	  	flippedCards= [];
	 	  }
	 	
	 }

	 function randomCard(oldArray) {
	 	let newArray= [];

	 	while(oldArray.length != newArray.length) {
	 		let i= Math.floor(Math.random() * oldArray.length);
	 		if(newArray.indexOf(oldArray[i]) < 0) {
	 			newArray.push(oldArray[i]);
	 		}
	 	}
	 	return newArray;
	 }

	 function isMatch() {
	 	var img= document.querySelector(".matchImg");

	 	img.style.zIndex= "5";
	 	img.style.transform= "scale(1.5)";
	 	img.style.marginTop= "-100px";
	 	setTimeout(function() {
	 		img.style.zIndex= "-5";
	 		img.style.transform= "scale(0)";
	 		img.style.marginTop= "-48.5px";
	 	}, 700);
	 }

	 function gameOver() {
	 	var imgGameOver= document.querySelector(".modalGameOverImg");
	 	var modalGameOver= document.querySelector(".modalGameOver");
	 	modalGameOver.style.zIndex= "10";
	 	imgGameOver.addEventListener("click", function() {
	 		window.location.reload();
	 	})
	 }
})();

/*
Já cheguei.

Então, eu não sei se vc sabe, mas pelas linhas do rosto é possível 
saber muito sobre uma pessoa.

E em uma de suas fotos eu percebi algumas coisas sobre vc.

Então, são as linhas que nós temos na face.

Por exemplo

Por  essa linha no seu queixo eu percebo que vc é uma pessoa muito teimosa.
preguiçosa pra algumas coisas, disposta pra outras. Que é uma pessoa impulsiva, 

e que ás vezes toma algumas decisões que se arrepende. Vc queria voltar atrás.

Provavelmente sua mãe devia sofrer na sua mão. Haha

Mas eu vou te falar só das coisas superficiais que eu percebi. tá?!

As coisas profundas não é legal falar por aqui

Eu apenas percebi vendo uma foto sua 

Terceiro passo
--------------
Eu sei qual o encontro perfeito pra você

O encontro perfeito não é um encontro comum. 
Não quer um cara chato, quer um cara divertido, que fale coisas excitantes. É quando
vc se diverte.

Então eu acho que a gente vai se dar bem, pq eu sou exatamente assim.

*/