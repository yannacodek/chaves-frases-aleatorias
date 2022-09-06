const url='data.json';

const btn=document.querySelector('.btn');
const pText=document.getElementById('text');

btn.addEventListener('click', function(){
	fetch(url).then(response=>{
		return response.json();

	}).then(data=>{
		if(data.erro){
			console.log('json nao encontrado');
		}
		let randomNumber=Math.floor(Math.random()*data.frases.length);
		pText.innerHTML=data.frases[randomNumber];
	})
});
