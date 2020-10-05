
Meteor.subscribe('todos');


Template.hello.helpers({
	'todos' : function(){
		return Todos.find({userId: Meteor.userId()}, {sort :{ createdAt : -1 }});
	},
});

Template.hello.events({
	'submit .newTodo' : function(event){
		event.preventDefault();
		var text = event.target.text.value;
		
		Meteor.call('addTodo', text);
		event.target.text.value= "";
	},
	'click .toogle-check': function(event){

		Meteor.call('setChecked', this._id, !this.checked);
	},
	'click .delete-todo': function(){

		Meteor.call('deleteTodo', this._id);
		
	},
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

This is main JS edit 1

