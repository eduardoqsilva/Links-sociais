const typed = new Typed('.typed', {

    strings:[
     '<text>Eduardo:)<text>',
     '<text>Edu:)<text>'
    ],

	typeSpeed: 75, // velocidade
	startDelay: 300, //tempo para iniciar e recomeçar
	backSpeed: 75, // velocidade para apagar
	smartBackspace: true, // eliminar somente palavras novas
	shuffle: false, //alternar entre palavras aleatoriamente
	backDelay: 3500, // tempo de espera após terminar apalavra
	loop: true, // Repetir 
	loopCount: false, //quantidade de vezes para repetir
	showCursor: true, // Mostrar cursor palpitando
	cursorChar: '|', // Caracter para o cursor
	contentType: 'html', // 'html' o 'null' para texto sem formato
	
});

