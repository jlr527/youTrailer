app.controller('insertController', function($scope, formElements, trailerElements){
	var trailer={};
	$scope.extructure=formElements.body.form;
	angular.forEach(formElements.extructure,function(value, key){
		angular.forEach(value,function(value2, key2){
			$scope.value2=value;
		});
	});
    $scope.insert = function() {
    	$scope.invalid=null;
    	var invalid=[];
    	//load form in trailer object
	   	angular.forEach(formElements.body.form.extructure,function(value, key){
	   		if(key!="actions"){
				angular.forEach(value,function(value2, key2){
					trailer[value2.attr.id]=value2.model;
				});
			}
		});
		//validation form
	   	angular.forEach(trailer,function(value, key){
			if(value==""||value.length==0)
				invalid.push(key);
		});
		//insert conditions
		if(invalid.length==0&&$scope.trailerForm.$valid){

			trailerElements.$add(trailer);
			//reset model
			angular.forEach(formElements.body.form.extructure,function(value, key){
		   		if(key=="inputs"||key=="textArea"){
					angular.forEach(value,function(value2, key2){
						value2.model="";
					});
				}
				if(key=="selectsMulti"){
					angular.forEach(value,function(value2, key2){
						value2.model=["Aventura"];
					});
				}
			});
			 Materialize.toast('El trailer se ha insertado exitosamente', 4000, 'rounded')
		}
		else if(invalid.length!=0)
			$scope.invalid=invalid;
    };

});
