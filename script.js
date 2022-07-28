const frases=[
	"Foi sem querer querendo...",
	"Já chegou o disco voador!",
	"Volta o cão arrependido, com suas orelhas tão fartas, com seu osso roído e com o rabo entre as patas.",
	"Ninguém tem paciência comigo!",
	"Não se deve rezar para que se capture um ladrão. Se deve rezar para que o ladrão se arrependa e se torne bonzinho!",
	"Teria sido melhor ir ver o filme do Pelé!",
	"Ai, que burro, dá zero pra ele!",
	"Eu nunca roubei e nunca vou roubar de novo!",
	"Tudo eu! Tudo eu!",
	"Me escapuliu!",
	"Eu prefiro morrer do que perder a vida!",
	"Esse é de laranja que parece de limão, mas tem gosto de tamarindo.",
	"Tá bom, mas não se irrite!",
	"Eu vou plantar um pezinho de carambola que vai dar milhões de carambolas. Aí eu vendo os milhões de carambolas e daí eu planto mais milhões de carambolas e com o dinheiro vou morar em um lugar onde ninguém me bata.",
	"Ai pego e zaaz e depois zaaz!",
	"Carne de burro não é transparente.",
	"Quem come tudo e não divide nada acaba com a barriga inchada.",
	"Seu Madruga, o senhor não vai morrer. Vão matar o senhor!",
	"Isso, isso, isso, isso!",
	"Professor Linguiça!"

]

const btn=document.querySelector('.btn');
const pText=document.getElementById('text');

btn.addEventListener('click', function(){
	pText.innerHTML=frases[randomNumber()];
})

function randomNumber(){
	return Math.floor(Math.random()*frases.length);
}