Meteor.publish('leikmennirnir', function() {
	var notandiId = this.userId;
	return LeikmannaListi.find({createdBy: notandiId})
});