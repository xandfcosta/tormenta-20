export interface Character {
	id: number;
	image: string;
	name: string;
	player: string;
	origin: string;
	races: string[];
	classes: string[];
	level: number;
	divinity: string | null;
	size: string;
	movement: number;
	experience: number;
	description: string;

	attributes: {
		strength: number;
		dexterity: number;
		constitution: number;
		intelligence: number;
		wisdom: number;
		charisma: number;
	};

	hp: { max: number; current: number };
	mana: { max: number; current: number };

	pericies: {
		name: string;
		attribute: string;
		trained: boolean;
		trainBonus: number;
		bonus: number;
		total: number;
	}[];

	combat: {
		defense: {
			total: number;
			base: number;
			armor: { name: string; bonus: number; penalty: number; slot: number };
			shield: { name: string; bonus: number; penalty: number; slot: number }[];
			modifier: number;
		};
		attacks: {
			type: "item" | "others";
			name: string;
			damage: string;
			bonus: number;
			critic: { minDiceValue: number; multiplier: number; bonus: number };
			damageType: string;
			range: string;
			quantity: number;
			slot: number;
			manaCosts: number;
		}[];
	};

	inventory: {
		tibares: number;
		load: {
			limit: 20;
			used: 15;
		};
		items: { name: string; quantity: number; slot: number }[];
	};

	abilities: {
		race: { name: string; description: string }[];
		origin: { name: string; description: string }[];
		class: { name: string; description: string }[];
		powers: { name: string; description: string }[];
	};

	magic: {
		modifier: number;
		resitence: number;
		spells: {
			name: string;
			school: string;
			execution: string;
			range: number;
			area: number;
			duration: number;
			resistence: string;
			effect: string;
		}[];
	};

	notes: string;
}

export function useCharacters() {
	const mockCharacters: Character[] = [
		{
			id: 1,
			image: "/kharvos.jpeg",
			name: "Kharvos, O Guardião Rubro",
			player: "Xand",
			origin: "Refugiado",
			races: ["Minotauro", "Lefou"],
			classes: ["Bárbaro"],
			level: 1,
			divinity: "Tauron",
			size: "Médio",
			movement: 9,
			experience: 0,
			description: "",
			attributes: {
				strength: 5,
				dexterity: 1,
				constitution: 1,
				intelligence: -1,
				wisdom: 1,
				charisma: 0,
			},
			hp: { max: 25, current: 22 },
			mana: { max: 4, current: 3 },

			pericies: [
				{
					name: "Acrobacia",
					attribute: "Des",
					trained: false,
					trainBonus: 0,
					bonus: -2,
					total: -2,
				},
				{
					name: "Adestramento",
					attribute: "Car",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Atletismo",
					attribute: "For",
					trained: false,
					trainBonus: 0,
					bonus: 6,
					total: 6,
				},
				{
					name: "Atuação",
					attribute: "Car",
					trained: false,
					trainBonus: 0,
					bonus: 1,
					total: 1,
				},
				{
					name: "Cavalgar",
					attribute: "Des",
					trained: false,
					trainBonus: 0,
					bonus: 2,
					total: 2,
				},
				{
					name: "Conhecimento",
					attribute: "Int",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Cura",
					attribute: "Sab",
					trained: false,
					trainBonus: 0,
					bonus: 2,
					total: 2,
				},
				{
					name: "Diplomacia",
					attribute: "Car",
					trained: false,
					trainBonus: 0,
					bonus: 1,
					total: 1,
				},
				{
					name: "Enganação",
					attribute: "Car",
					trained: false,
					trainBonus: 0,
					bonus: 1,
					total: 1,
				},
				{
					name: "Fortitude",
					attribute: "Con",
					trained: true,
					trainBonus: 2,
					bonus: 4,
					total: 4,
				},
				{
					name: "Furtividade",
					attribute: "Des",
					trained: false,
					trainBonus: 0,
					bonus: -2,
					total: -2,
				},
				{
					name: "Guerra",
					attribute: "Int",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Iniciativa",
					attribute: "Des",
					trained: true,
					trainBonus: 2,
					bonus: 4,
					total: 4,
				},
				{
					name: "Intimidação",
					attribute: "Car",
					trained: true,
					trainBonus: 2,
					bonus: 4,
					total: 4,
				},
				{
					name: "Intuição",
					attribute: "Sab",
					trained: false,
					trainBonus: 0,
					bonus: 2,
					total: 2,
				},
				{
					name: "Investigação",
					attribute: "Int",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Jogatina",
					attribute: "Car",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Ladinagem",
					attribute: "Des",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Luta",
					attribute: "For",
					trained: true,
					trainBonus: 2,
					bonus: 8,
					total: 8,
				},
				{
					name: "Misticismo",
					attribute: "Int",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Nobreza",
					attribute: "Int",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Ofício",
					attribute: "Int",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Percepção",
					attribute: "Sab",
					trained: true,
					trainBonus: 2,
					bonus: 4,
					total: 4,
				},
				{
					name: "Pilotagem",
					attribute: "Des",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Pontaria",
					attribute: "Des",
					trained: true,
					trainBonus: 2,
					bonus: 4,
					total: 4,
				},
				{
					name: "Reflexos",
					attribute: "Des",
					trained: false,
					trainBonus: 0,
					bonus: 2,
					total: 2,
				},
				{
					name: "Religião",
					attribute: "Sab",
					trained: false,
					trainBonus: 0,
					bonus: 0,
					total: 0,
				},
				{
					name: "Sobrevivência",
					attribute: "Sab",
					trained: false,
					trainBonus: 0,
					bonus: 2,
					total: 2,
				},
				{
					name: "Vontade",
					attribute: "Sab",
					trained: false,
					trainBonus: 2,
					bonus: 4,
					total: 4,
				},
			],
			combat: {
				defense: {
					total: 17,
					base: 10,
					armor: { name: "Gibão de peles", bonus: 4, penalty: 3, slot: 1 },
					shield: [{ name: "Escudo leve", bonus: 1, penalty: 1, slot: 1 }],
					modifier: 1,
				},
				attacks: [
					{
						type: "others",
						name: "Chifrada",
						bonus: 0,
						damage: "1d6 + 5",
						critic: { minDiceValue: 20, bonus: 0, multiplier: 2 },
						damageType: "Perfuração",
						range: "Curto",
						quantity: 1,
						slot: 0,
						manaCosts: 1,
					},
					{
						type: "item",
						name: "Machado Táurico",
						bonus: -2,
						damage: "2d8 + 5",
						critic: { minDiceValue: 20, bonus: 0, multiplier: 3 },
						damageType: "Corte",
						range: "Curto",
						quantity: 1,
						slot: 2,
						manaCosts: 0,
					},
					{
						type: "item",
						name: "Espada Curta",
						bonus: 0,
						damage: "1d8 + 5",
						critic: { minDiceValue: 19, bonus: 0, multiplier: 1 },
						damageType: "Corte",
						range: "Curto",
						quantity: 1,
						slot: 1,
						manaCosts: 0,
					},
					{
						type: "item",
						name: "Espada Curta + Injeção alqúimica de fogo",
						bonus: 0,
						damage: "1d8 + 1d6(fogo)",
						critic: { minDiceValue: 19, bonus: 0, multiplier: 2 },
						damageType: "Corte",
						range: "Curto",
						quantity: 1,
						slot: 1,
						manaCosts: 0,
					},
					{
						type: "item",
						name: "Mangual",
						bonus: 0,
						damage: "1d8 + 5",
						critic: { minDiceValue: 20, bonus: 0, multiplier: 2 },
						damageType: "Impacto",
						range: "Curto",
						quantity: 1,
						slot: 1,
						manaCosts: 0,
					},
				],
			},
			inventory: {
				tibares: 473,
				load: { limit: 20, used: 15 },
				items: [
					{ name: "Mochila", quantity: 1, slot: 0 },
					{ name: "Trajes de viajante", slot: 0.5, quantity: 1 },
					{ name: "Saco de dormir", slot: 0.5, quantity: 1 },
					{ name: "Moedas de chocolate", quantity: 10, slot: 0.5 },
				],
			},
			abilities: {
				race: [
					{ name: "Chifres", description: "Você possui uma arma natural" },
					{ name: "Couro Rígido", description: "Você recebe +1 na Defesa" },
					{
						name: "Faro",
						description:
							"Você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha",
					},
					{
						name: "Medo de Altura",
						description: "Próximo a uma queda de 3m você fica abalado",
					},
					{
						name: "Cria da Tormenta",
						description:
							"Você é uma criatura do tipo monstro +5 em testes de resistência contra efeitos da Tormenta.",
					},
				],
				origin: [
					{ name: "Estoico", description: "Bônus de descanso" },
					{ name: "Sangue de Ferro", description: "3PM +2 de dano e 5 RD" },
					{ name: "Vontade de Ferro", description: "+1 PM por nível" },
				],
				class: [
					{
						name: "Fúria",
						description:
							"Gasta 2 PM para invocar fúria, +2 em testes de ataque e rolagens de dano corpo a corpo.",
					},
					{ name: "Olhos Vermelhos", description: "isão no escuro" },
				],
				powers: [],
			},
			magic: {
				modifier: -1,
				resitence: 9,
				spells: [],
			},
			notes: "",
		},
	];

	return { data: mockCharacters };
}
