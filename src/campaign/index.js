module.exports = {
	levels: [
		require('./level1'),
		require('./level2'),
		require('./level3'),
		require('./level4'),
		require('./level5'),
		require('./level6'),
	],
	messages:{
		gameWon:{
			"heading":"Bravo!",
			"message":"<p>Splendid, truly splendid. You've eliminated all of the nuisance invaders!</p><p>Have yourself a cola, by Jove you've earned it!</p><p>As a way of saying thanks, we've unlocked zen mode on the menu where you can blast aliens until your heart's content.</p>"
		},
		gameOver:{
			"heading":"Oh well",
			"message":"<p>You put up a good fight, and we all appreciate your efforts.</p><p>If we can't have the planet nobody can, so I'm going to have to press the doomsday button.</p><p>If you have any last words, best get to saying them.</p>"
		},
		unsupported:{
			"heading":"You need an upgrade",
			"message":"<p>Your browser is a bit old. <a href=\"//whatbrowser.org\">Upgrade to play</a>.</p>"
		},
		about:{
			heading:"Polar Defender",
			message:"<p>Polar defender is brought to you by <a href=\"//spacekidgames.com\">Space Kid Games</a>, aka <a href=\"//ash.ms\">Ash Kyd</a>."
		}
	}
};