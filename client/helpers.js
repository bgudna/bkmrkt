  	Template.listinn.helpers({
		'player': function() {
			var notandiId = Meteor.userId();
			return LeikmannaListi.find({}, {sort: {score: -1, name: 1}});
		},
		'valinnClassi' : function(){
			var playerId = this._id;
			var valinnGaur = Session.get('valinnGaur');
			if(playerId == valinnGaur) {
				return "valinn"	
			}
		},
		'synaValinnGaur' : function(){
			var valinnGaur = Session.get('valinnGaur');
			return LeikmannaListi.findOne(valinnGaur);
		},
		'workList': function() {
			var notandiId = Meteor.userId();
			return LeikmannaListi.find({ group: "work"}, {sort: {score: -1, name: 1}})
		},
		'personalList': function() {
			var notandiId = Meteor.userId();
			return LeikmannaListi.find({ group: "personal"}, {sort: {score: -1, name: 1}})
		},
		'inspireList': function() {
			var notandiId = Meteor.userId();
			return LeikmannaListi.find({ group: "inspire"}, {sort: {score: -1, name: 1}})
		},
	});