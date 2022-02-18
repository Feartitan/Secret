module.exports = {
	name: "guildMemberAdd",
	execute(guildMember) {
		guildMember.send(`👋 HELLO, WE ARE SECRET HIDEOUT | ADVERTISING 

Welcome to our server. What's this server about? 
• We want to create a safe community for people where they are safe. Our number one priority is our members.

💬 | No cooldown in general chat. Chat more and express yourself.
🤖 | So many bots and bot channels only for u to enjoy. 
🎉 | Giveaways for our members. Who doesn't like a giveaway?
🎮 | Gamenights hosted by game night managers for our members to show their gaming skills
🎭 | Roleplay server
🎨 | Monthly art contests. Come and show your art.
🔌 | Advertising channels. Come and advertise your server.
▶️ | Promote other social media platforms of yours.
😃 | Cooperative staff members with whom u can directly interact.
📊 | Weekly polls.
🤣 | Memes
🎟️ |  Anybody can apply for staff if they meet our requirements
💭 |Question of the day and answers given by the owners. We really would like to answer u all.
📷 | Media channels where u can share the pictures u want to show us
🤝 | We partner with other servers for free
🎯 | SAFE TO WORK SERVER
🎙️ | So many voice channels!!!
AND SO MANY MORE.


Come join us in our server.
•Banner: https://imgur.com/uaFgUOI
•Invite link: https://discord.gg/5zSr2SjXdy
`)
		.catch(e => { console.log(e) });
	},
};