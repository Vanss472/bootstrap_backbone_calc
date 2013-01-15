define(['jquery', 'backbone', 'text!templates/headerTemplate.html' ], function($, Backbone, headerTemplate ) {
	var HeaderView = Backbone.View.extend({
		el: $('header'),
		render: function() {
			this.$el.html(headerTemplate);
		}
	});
	return HeaderView;
});