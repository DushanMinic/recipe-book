Template.Recipe.events({
	'click .toggle-menu' () {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	}
});