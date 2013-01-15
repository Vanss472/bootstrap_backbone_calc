define ([
	'jquery',
	'backbone',
	'models/model',
	'views/introFactsView',
	'views/firstFactView',
	'views/secondFactView',
	'views/thirdFactView',
	'views/introQuestionsView',
	'views/firstQuestionView',
	'views/firstAnswerView',
	'views/firstNotSureAnswerView',
	'views/secondQuestionView',
	'views/headerView',
	'views/footerView'
], function($, Backbone, Virtualization, IntroFactsView, FirstFactView, SecondFactView, ThirdFactView, IntroQuestionsView, FirstQuestionView, FirstAnswerView, FirstNotSureAnswerView, SecondQuestionView, HeaderView, FooterView) {
	var AppRouter = Backbone.Router.extend ({
		intialize: function() {
			virtualization = new Virtualization();
			headerView = new HeaderView();
			headerView.render();
			footerView = new FooterView();
			footerView.render();
			introFactsView = new IntroFactsView();
			firstFactView = new FirstFactView();
			secondFactView = new SecondFactView();
			thirdFactView = new ThirdFactView();
			introQuestionsView = new IntroQuestionsView();
			firstQuestionView = new FirstQuestionView();
			firstAnswerView = new FirstAnswerView();
			firstNotSureAnswerView = new FirstNotSureAnswerView();
			secondQuestionView = new SecondQuestionView();
			Backbone.history.start();
		},
		routes: {
			"secondQuestion": "showSecondQuestion",
			"notSureAnswer": "showNotSureAnswer",
			"answerNumber": "showFirstAnswer",
			"firstQuestion": "showFirstQuestion",
			"introQuestions": "showIntroQuestions",
			"thirdFact": "showThirdFact",
			"secondFact": "showSecondFact",
			"firstFact": "showFirstFact",
			"*other": "defaultRoute"
		},
		showFirstFact: function() {
			firstFactView.render();
			footerView.updateLinks(1);
		},
		showSecondFact: function() {
			secondFactView.render();
			footerView.updateLinks(2);
		},
		showThirdFact: function() {
			thirdFactView.render();
			footerView.updateLinks(3);
		},
		showIntroQuestions: function() {
			introQuestionsView.render();
			footerView.updateLinks(3);
		},
		showFirstQuestion: function() {
			firstQuestionView.render();
			footerView.updateLinks(4);
		},
		showFirstAnswer: function() {
			firstAnswerView.render();
			footerView.updateLinks(4);
		},
		showNotSureAnswer: function() {
			firstNotSureAnswerView.render();
			footerView.updateLinks(4);
		},
		showSecondQuestion: function() {
			secondQuestionView.render();
			footerView.updateLinks(5);
		},
		defaultRoute: function() {
			introFactsView.render();
		}
	});
	return AppRouter;
});