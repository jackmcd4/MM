angular.module('app', [
  'app.load',
  'app.gallery',
  'app.about',
  'app.contact',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../index.html',
      controller: 'LoadController'
    })
    .when('/gallery', {
      templateUrl: 'app/gallery/gallery.html',
      controller: 'GalleryController'
    })
    .when('/about', {
      templateUrl: 'app/about/about.html',
      controller: 'AboutController'
    })
    .when('/contact', {
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/gallery'
    })
})
