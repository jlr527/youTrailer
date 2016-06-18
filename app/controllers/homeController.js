app.controller('homeController', function($scope, formElements, $interval,trailerElements){
//init filter
	$scope.search={"nombre":"","anio":"","genero":""};
//send banner elements
	$scope.carousel=formElements.body.carousel;
//config carrousel
	$scope.slickConfig = {
		enabled: true,
	    autoplay: true,
	    draggable: true,  
	    autoplaySpeed: 2000,
	    method: {},
	    dots: true,
	    infinite: true,
	    slidesToShow: 8,
	    slidesToScroll: 2,
	    responsive: [
	        {
	            breakpoint: 1024,
	            settings: {
	                slidesToShow: 8,
	                slidesToScroll: 1,
	                infinite: true,
	                dots: true
	            }
	        },
	        {
	            breakpoint: 600,
	            settings: {
	                slidesToShow: 5,
	                slidesToScroll: 1
	            }
	        },
	        {
	            breakpoint: 500,
	            settings: {
	                slidesToShow: 3,
	                slidesToScroll: 1
	            }
	        }
	    ]
	};
    $scope.numberLoaded = true;
//trailers
	var limit=3;//limit width trailers
	var years=formElements.body.form.extructure.selects[0].options;
	var genres=formElements.body.form.extructure.selectsMulti[0].options;
	$scope.trailerElements=trailerElements;
//send before result to view
	$scope.years=years;
	$scope.genres=genres;
//trailer init
	$scope.trailer={};

//modal trailer modal
	$scope.modal=function(trailer){
		$scope.trailer=trailer;
		$scope.theBestVideo= trailer.video;
		$('#modal1').openModal();
	};
//pagination trailers
	$scope.currentPage = 1; 
	$scope.entryLimit = 12; //max trailers view to page vertical
	$scope.total=$scope.trailerElements;
	$scope.changePage = function(pageNo) {
	    $scope.currentPage = pageNo;
	  };

}).filter('startFrom', function() {
  return function(input, start) {
    if (input) {
      start = +start; //parse to int
      return input.slice(start);
    }
    return [];
  }
});