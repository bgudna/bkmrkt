Template.listinn.events({
	'click .leikmadur' : function(){
		var playerId = this._id;
		Session.set('valinnGaur', playerId);
		//$('.footer').toggleClass('fela');
		//($('.leikmadur').not($(this))).removeClass('valinn');
		//$(this).toggleClass('valinn');
	},
	'click .increment' : function(){
		var valinnGaur = Session.get('valinnGaur');
		Meteor.call('breytaStigagjof', valinnGaur, 1)
	},
	'click .decrement' : function(){
		var valinnGaur = Session.get('valinnGaur');
		Meteor.call('breytaStigagjof', valinnGaur, -1)
	},
	'click .remove' : function(){
		var valinnGaur = Session.get('valinnGaur');
		Meteor.call('burtMedLeikmann', valinnGaur)
	},
	'click .deselect' : function(){
		Session.set('valinnGaur',0);
	}
});

Template.baetaVidLeikmanni.events({
	'submit form': function(event){
		event.preventDefault();
		var nafn = event.target.nafnLeikmanns.value;
		var url = event.target.urlTengils.value;
		var flokkur = event.target.flokkur.value;
		Meteor.call('setjaInnLeikmann', nafn, url, flokkur);
		event.target.nafnLeikmanns.value = "";
		event.target.urlTengils.value = "";
	}

});
