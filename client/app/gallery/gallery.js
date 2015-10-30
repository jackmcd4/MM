angular.module('app.gallery', ['bootstrapLightbox']).config(function (LightboxProvider) {
  // set a custom template
  LightboxProvider.templateUrl = 'modal.html';

  // set the caption of each image as its text color
  // LightboxProvider.getImageCaption = function (imageUrl) {
  //   return '#' + imageUrl.match(/00\/(\w+)/)[1];
  // };

  // increase the maximum display height of the image
  LightboxProvider.calculateImageDimensionLimits = function (dimensions) {
    return {
      'maxWidth': dimensions.windowWidth >= 768 ? // default
        dimensions.windowWidth - 92 :
        dimensions.windowWidth - 52,
      'maxHeight': 1600                           // custom
    };
  };

  // the modal height calculation has to be changed since our custom template is
  // taller than the default template
  LightboxProvider.calculateModalDimensions = function (dimensions) {
    var width = Math.max(400, dimensions.imageDisplayWidth + 32);

    if (width >= dimensions.windowWidth - 20 || dimensions.windowWidth < 768) {
      width = 'auto';
    }

    return {
      'width': width,                             // default
      'height': 'auto'                            // custom
    };
  };
});

angular.module('app.gallery').controller('GalleryController', function($scope, Lightbox){
	console.log("inside gallery controller");
	$scope.lightbox = Lightbox;
	$scope.photos = [ { src: '../../images/lamps/short/bowl_black.jpg',
    desc: { lamps: true, black: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_black_base.jpg',
    desc: { lamps: true, black: true, base: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_black_examp.jpg',
    desc: { lamps: true, black: true, bowl: true, 'short': true, examp: true } },
  { src: '../../images/lamps/short/bowl_black_mid.jpg',
    desc: { lamps: true, black: true, mid: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_black_mid_closeup.jpg',
    desc: { lamps: true, black: true, mid: true, closeup: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_black_top.jpg',
    desc: { lamps: true, black: true, top: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_bronze.jpg',
    desc: { lamps: true, bronze: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_bronze_base.jpg',
    desc: { lamps: true, bronze: true, base: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_bronze_examp.jpg',
    desc: { lamps: true, bronze: true, bowl: true, 'short': true, examp: true } },
  { src: '../../images/lamps/short/bowl_bronze_mid.jpg',
    desc: { lamps: true, bronze: true, mid: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_bronze_top.jpg',
    desc: { lamps: true, bronze: true, top: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_silver.jpg',
    desc: { lamps: true, silver: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_silver_base.jpg',
    desc: { lamps: true, silver: true, base: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_silver_examp.jpg',
    desc: { lamps: true, silver: true, bowl: true, 'short': true, examp: true } },
  { src: '../../images/lamps/short/bowl_silver_mid.jpg',
    desc: { lamps: true, silver: true, mid: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_silver_mid_closeup.jpg',
    desc: { lamps: true, silver: true, mid: true, closeup: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/bowl_silver_top.jpg',
    desc: { lamps: true, silver: true, top: true, bowl: true, 'short': true } },
  { src: '../../images/lamps/short/taper.jpg',
    desc: { lamps: true, 'short': true, taper: true } },
  { src: '../../images/lamps/short/taper_base.jpg',
    desc: { lamps: true, base: true, 'short': true, taper: true } },
  { src: '../../images/lamps/short/taper_black.jpg',
    desc: { lamps: true, black: true, 'short': true, taper: true } },
  { src: '../../images/lamps/short/taper_black_top.jpg',
    desc: { lamps: true, black: true, top: true, 'short': true, taper: true } },
  { src: '../../images/lamps/short/taper_reverse.jpg',
    desc: { lamps: true, 'short': true, taper: true } },
  { src: '../../images/lamps/short/taper_reverse_base.jpg',
    desc: { lamps: true, base: true, 'short': true, taper: true } },
  { src: '../../images/lamps/short/taper_reverse_examp.jpg',
    desc: { lamps: true, 'short': true, examp: true, taper: true } },
  { src: '../../images/lamps/short/taper_reverse_top.jpg',
    desc: { lamps: true, top: true, 'short': true, taper: true } },
  { src: '../../images/lamps/short/tri.jpg',
    desc: { lamps: true, 'short': true, tri: true } },
  { src: '../../images/lamps/short/tri_base.jpg',
    desc: { lamps: true, base: true, 'short': true, tri: true } },
  { src: '../../images/lamps/short/tri_handle.jpg',
    desc: { lamps: true, 'short': true, tri: true, handle: true } },
  { src: '../../images/lamps/tall/tri.jpg',
    desc: { lamps: true, tall: true, tri: true } },
  { src: '../../images/lamps/tall/tri_base0.jpg',
    desc: { lamps: true, base: true, tall: true, tri: true } },
  { src: '../../images/lamps/tall/tri_base1.jpg',
    desc: { lamps: true, base: true, tall: true, tri: true } },
  { src: '../../images/lamps/tall/tri_handle.jpg',
    desc: { lamps: true, tall: true, tri: true, handle: true } },
  { src: '../../images/lamps/tall/tri_sqShade.jpg',
    desc: { lamps: true, tall: true, tri: true } },
  { src: '../../images/lamps/tall/tri_sqShade_base0.jpg',
    desc: { lamps: true, base: true, tall: true, tri: true } },
  { src: '../../images/lamps/tall/tri_sqShade_base1.jpg',
    desc: { lamps: true, base: true, tall: true, tri: true } },
  { src: '../../images/lamps/tall/tri_sqShade_examp.jpg',
    desc: { lamps: true, tall: true, examp: true, tri: true } },
  { src: '../../images/lamps/tall/tri_sqShade_handle.jpg',
    desc: { lamps: true, tall: true, tri: true, handle: true } },
  { src: '../../images/lamps/tall/tri_top.jpg',
    desc: { lamps: true, top: true, tall: true, tri: true } },
  { src: '../../images/mirrors/round.jpg', desc: { mirrors: true, round: true } },
  { src: '../../images/mirrors/round_dark.jpg',
    desc: { mirrors: true, dark: true, round: true } },
  { src: '../../images/mirrors/round_dark_examp.jpg',
    desc: { mirrors: true, dark: true, examp: true, round: true } },
  { src: '../../images/mirrors/round_examp0.jpg',
    desc: { mirrors: true, examp: true, round: true } },
  { src: '../../images/mirrors/round_examp1.jpg',
    desc: { mirrors: true, examp: true, round: true } },
  { src: '../../images/mirrors/round_examp2.jpg',
    desc: { mirrors: true, examp: true, round: true } },
  { src: '../../images/mirrors/round_pewter.jpg',
    desc: { mirrors: true, pewter: true, round: true } },
  { src: '../../images/mirrors/round_pewter_closeup.jpg',
    desc: { mirrors: true, pewter: true, closeup: true, round: true } },
  { src: '../../images/mirrors/round_pewter_examp.jpg',
    desc: { mirrors: true, pewter: true, examp: true, round: true } },
  { src: '../../images/other/bowl.jpg', desc: { other: true, bowl: true } },
  { src: '../../images/other/bowl_edge.jpg',
    desc: { other: true, edge: true, bowl: true } },
  { src: '../../images/other/bowl_edge_closeup.jpg',
    desc: { other: true, edge: true, closeup: true, bowl: true } },
  { src: '../../images/other/bowl_side.jpg',
    desc: { other: true, bowl: true, side: true } },
  { src: '../../images/other/bowl_top.jpg',
    desc: { other: true, top: true, bowl: true } },
  { src: '../../images/tables/leather_three.jpg',
    desc: { tables: true, leather: true } },
  { src: '../../images/tables/leather_three_leg.jpg',
    desc: { tables: true, leather: true } },
  { src: '../../images/tables/leather_two.jpg',
    desc: { tables: true, leather: true } },
  { src: '../../images/tables/leather_two_examp.jpg',
    desc: { tables: true, leather: true, examp: true } },
  { src: '../../images/tables/leather_two_leg.jpg',
    desc: { tables: true, leather: true } },
  { src: '../../images/tables/side_black.jpg',
    desc: { tables: true, black: true, side: true } },
  { src: '../../images/tables/side_black_base.jpg',
    desc: { tables: true, black: true, base: true, side: true } },
  { src: '../../images/tables/side_black_examp.jpg',
    desc: { tables: true, black: true, side: true, examp: true } },
  { src: '../../images/tables/side_black_top.jpg',
    desc: { tables: true, black: true, top: true, side: true } },
  { src: '../../images/tables/side_gold.jpg',
    desc: { tables: true, gold: true, side: true } },
  { src: '../../images/tables/side_gold_examp.jpg',
    desc: { tables: true, gold: true, side: true, examp: true } },
  { src: '../../images/tables/side_marble.jpg',
    desc: { tables: true, marble: true, side: true } },
  { src: '../../images/tables/side_marble_base.jpg',
    desc: { tables: true, marble: true, base: true, side: true } },
  { src: '../../images/tables/side_marble_examp.jpg',
    desc: { tables: true, marble: true, side: true, examp: true } },
  { src: '../../images/tables/side_marble_top.jpg',
    desc: { tables: true, marble: true, top: true, side: true } } ]


  $scope.openLightboxModal = function (obj, $event) {
    console.log(obj.target.src)
    console.log(obj.target);
  	var curr = obj.target.src;
  	curr = "../.." + curr.slice(21);
  	console.log(curr);	
    Lightbox.openModal([curr], 0);
  };


   // $scope.setMaster = function(obj, $event){
   //  	console.log(obj.target.src)
   //  	console.log(obj.target);
   //  	// obj.target.classList.toggle('show');
   //  	var curr = obj.target.src;
   //  	curr = "../.." + curr.slice(21);
   //  	console.log(curr);	
   //  	startOverlay(curr);
  	// }

  //   function startOverlay(overlayLink) {
		// 	document.body.innerHTML += '<div class="overlay"></div><div class="lightbox"></div>';
		// 	var element = document.querySelector('.lightbox');
		// 	var backdrop = document.querySelector('.overlay');
		// 	var image = document.createElement("img");
		// 	var gal = document.querySelector('container');
		// 	image.setAttribute("src", overlayLink);
		// 	// backdrop.setAttribute("ng-animate", "animate");
		// 	backdrop.setAttribute("ng-click", "clearImage($event)");			
		// 	var w = image.width;
		// 	var h = image.height;
		// 	element.style.top = "50%";
		// 	element.style.left = "50%";
		// 	element.style.width = w;
		// 	element.style.height = h;
		// 	element.style["margin-right"] = "auto";
		// 	element.style["margin-left"] = "auto";
		// 	image.setAttribute("width", w);
		// 	image.setAttribute("height", h);
		// 	element.appendChild(image);
		// }

  // 	$scope.clearImage = function() {
  // 		console.log("closing now");
  // 	}
});


