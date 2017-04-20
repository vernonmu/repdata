angular.module("rtApp", ['ui.materialize', 'ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $stateProvider


  .state('home', {
    templateUrl: 'views/home.html',
    url: '/'
  })
  .state('about', {
    templateUrl: 'views/about.html',
    url: '/about'
  })
  .state('results', {
    templateUrl: 'views/repResults.html',
    url: '/results'
  })
  .state('feedback', {
    templateUrl: 'views/feedback.html',
    url: '/feedback'
  })
  .state('contact', {
    templateUrl: 'views/contact.html',
    url: '/contact'
  })
  .state('feedback-submit', {
    templateUrl: 'views/feedbacksubmit.html',
    url: '/feedback#submit'
  })

  $urlRouterProvider.otherwise('/')
})
