define(['jquery', 'backbone', 'text!templates/introFactsTemplate.html'], function($, Backbone, introFactsTemplate) {
	var IntroFactsView = Backbone.View.extend({
		el: $('.row'),
		initialize: function() {
		 _.bindAll(this, 'render');
		},
		render: function() {
			var compiledTemplate = _.template(introFactsTemplate);
			this.$el.html(compiledTemplate());
			return this;
		}
	});

	return IntroFactsView;

});