const { Events } = require("discord.js");
const COFFEE_KEYWORDS =
	/\b(?:cafecito|cafetera|cafes|café|iced coffee|flat white|cold brew|drip coffee|turkish coffee|french press|clever dripper|coffee maker|coffee grinder|coffee beans|coffee grounds|coffee break|coffee shop|coffee pot|pour over|aeropress|cappuccino|percolator|americano|macchiato|cafetière|espresso|cortado|caffeine|affogato|ristretto|frappe|siphon|chemex|barista|arabica|robusta|greca|geisha|decaf|latte|mocha|lungo|kaffe|moka|café|cafe|coffee|beans|bean|brew|roast|kalua)\b/i;

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) {
			return;
		}
		if (COFFEE_KEYWORDS.test(message.content)) {
			message.channel.send("`HTTP/1.1` **418** I'm a teapot");
			console.log(
				`Detected coffee talk from ${message.author.tag} in #${message.channel.name}. Sent '418 I'm a teapot'.`,
			);
		}
	},
};
