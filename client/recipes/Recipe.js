Template.Recipe.onCreated(function () {
	this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
	updateRecipeId () {
		return this._id;
	},
	editMode () {
		return Template.instance().editMode.get();
	}
});

Template.Recipe.events({
	'click .toggle-menu' () {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash' () {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil' (event, template) {
		template.editMode.set(!template.editMode.get());
	},
});