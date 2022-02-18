module.exports = {
	name: "interactionCreate",
	intw: true,
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction`);
	},
};