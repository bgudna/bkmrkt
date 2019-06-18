Meteor.methods({
	'setjaInnLeikmann' : function(nafn, url, flokkur){
		var notandiId = Meteor.userId();
		LeikmannaListi.insert({
			name: nafn,
			score: 0,
			url: url,
			group: flokkur,
			createdBy: notandiId
		});
	},
	'burtMedLeikmann' : function(valinnGaur){
		LeikmannaListi.remove(valinnGaur);

	},
	'breytaStigagjof' : function(valinnGaur, stig){
		LeikmannaListi.update(valinnGaur, {$inc: {score : stig}} );
	}
});