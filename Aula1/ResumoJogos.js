'use scritc'


const Resumo = { ListaDeJogos:[],

}

const RacingGame = {
	Genero:'Racing Game',
	Descricao:' é um gênero de jogos eletrônicos em que o jogador participa de competições de corrida com qualquer tipo de veículo terrestre, inclusive motocicletas e quadriciclos. Existem alternativas de jogos com veículos aquáticos, aéreos e até espaciais.',
	Exemplo: ['Forza Horizon','Need For Speed']
}

const TopDownShooter = {
	Genero:'Top Down Shooter',
	Descricao:' é um gênero de jogos eletrônicos que tem visão sobre a cabeça do personagem, onde o personagem pode se movimentar em qualquer ângulo e tiro.',
	Exemplo: ['GTA1','GTA2']
}
const DoisDPlataformer={
	Genero:'2D Plataformerr',
	Descricao:' é um gênero de jogos eletrônicos que tem visão bidimencional gráficos 2D são normalmente classificados como jogos de plataforma isométricos',
	Exemplo: ['Sonic','Super Mario']
}

const ColorMatchingPuzzleGame={
	Genero:'Color Matching Puzzle Game',
	Descricao:' é um gênero de jogos eletrônicos que tem objetivo, combine as cores dos objetos para ganhar o jogo., combinando painéis com as mesmas cores ao lado do outro.',
	Exemplo: ['Candy Crush']
}

const DoisDPuzzlePlatformer={
	Genero:'2D Puzzle Platformer',
	Descricao:' é um gênero de jogos eletrônicos que tem objetivo, percorre fases ou mapas em side-scrolling ou seja, em duas dimensoẽs (frente e para trás), contém alguns engimas em sua jogabilidade.',
	Exemplo: ['Limbo']
}
const TresDPlatformer={
	Genero:'3D Platformer',
	Descricao:' é um gênero de jogos eletrônicos onde a plataforma possui tres dimensoẽs, dando efeitos animadores para o jogo oque atualmente utilizado nos games de alta definição.',
	Exemplo: ['Sonic Regeneration']
}

const FPS={
	Genero:'FPS',
	Descricao:'é um gênero de jogo de computador e consoles, centrado no combate com armas de fogo no qual se enxerga a partir do ponto de vista do protagonista, como se o jogador e personagem do jogo fossem o mesmo observador. É um subgênero de Jogo de tiro.',
	Exemplo: ['Point blank']
}
const JRPG = {
	Genero:'JRPG',
	Descricao:'Surgiram e se popularizaram no Japão, são RPGs com foco na historia e com personagens com visual de anime/mangá, podendo ser de ação ou táticos.',
	Exemplo: ['Final Fantasy','Dragon Quest']
}
const FightingGame={
	Genero:'Fighting Game',
	Descricao:'é um gênero de jogo de computador e consoles, centrado no combate com armas de fogo no qual se enxerga a partir do ponto de vista do protagonista, como se o jogador e personagem do jogo fossem o mesmo observador. É um subgênero de Jogo de tiro.',
	Exemplo: ['Mortal Combate']
}
const ActionAdventure = {
	Genero:'Action Adventure',
	Descricao:'Jogos de ação e aventura requerem reflexos rápidos, desafio, coordenação e reação, se subdivide em várias categorias, o jogador assume o papel de um protagonista em uma história interativa com exploração e resolução de quebra-cabeças..',
	Exemplo: ['Good of War']
}
const WesternRPG={
	Genero:'Western RPG',
	Descricao:'é um gênero de jogo de computador onde tem as funcoes de RPG porem e aberto o ambiente.',
	Exemplo: ['Skyrim']
}
const RTS = {
	Genero:'RTS',
	Descricao:'RTS – Real-time strategy, de maneira diferente de outros tipos de jogos de estratégia, os RTS não funcionam em turnos, mas sim ao mesmo tempo para todos os jogadores.',
	Exemplo: ['Dota','Age OF Empires']
}

Resumo['ListaDeJogos'] = {
	RacingGame,
	TopDownShooter,
	DoisDPlataformer,
	ColorMatchingPuzzleGame,
	DoisDPuzzlePlatformer,
	TresDPlatformer,
	FPS,
	JRPG,
	FightingGame,
	ActionAdventure,
	WesternRPG,
	RTS
};
console.log(Resumo)