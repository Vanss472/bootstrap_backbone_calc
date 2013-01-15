define(['jquery', 'backbone', 'text!templates/footerTemplate.html' ], function($, Backbone, footerTemplate ) {
	var FooterView = Backbone.View.extend({
		el: $('footer'),
		render: function() {
			var self = this;
			var compiledTemplate = _.template(footerTemplate);
			this.$el.html(compiledTemplate());
			this.$('a').each(function() {
				$(this).bind('click', function(e) {e.preventDefault();});
			});
			return this;
		},
		updateLinks: function(currentAppPosition) {
			this.$('a').each(function(index) {
				$(this).removeClass('active');
				if(index < currentAppPosition) {
					if(index == (currentAppPosition - 1)) $(this).addClass('active');
					$(this).unbind('click');
				}
			});
		}
	});
	return FooterView;
});