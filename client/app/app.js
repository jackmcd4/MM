var app = angular.module('app', ['firebase', 'ngRoute', 'app.about', 'app.gallery', 'ngAnimate', /*'wu.masonry', */'app.contact', 'ui.bootstrap']);
app.config(function($routeProvider){
  console.log("argh")
  $routeProvider
    .when('/about', {
      templateUrl : 'app/about/about.html',
      controller : 'AboutController'
    })
    .when('/gallery', {
      templateUrl : 'app/gallery/gallery.html',
      controller : 'GalleryController'
    })
    .when('/contact', {
      templateUrl : 'app/contact/contact.html',
      controller : 'ContactController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// var app = angular.module('app', ['app.gallery', 'app.about', 'app.contact', 'ui.router'])
// .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('gallery');

//   $stateProvider
//     .state('index', {
//       name: 'index',
//       url: '/',
//       templateUrl: 'index.html',
//     })
//     .state('gallery', {
//       name: 'gallery',
//       url: '/gallery',
//       templateUrl: 'app/gallery/gallery.html',
//       controller: 'GalleryController'
//     })
//     .state('about', {
//       name: 'about',
//       url: '/about',
//       templateUrl: 'app/about/about.html',
//       controller: 'AboutController'
//     })
//     .state('contact', {
//       name: 'contact',
//       url: '/contact',
//       templateUrl: 'app/contact/contact.html',
//       controller: 'ContactController'
//     })
// }]);
