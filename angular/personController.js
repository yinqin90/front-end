/***
function personController($scope){
	$scope.person = {
		firstNme:"aa",
		lastName:"bb",
		fullName:function(){
			return $scope.person.firstNme + " " + $scope.person.lastName;
		}
	}
}


function personController($scope){
	$scope.persons = [
		{name:"aa",age:21},
		{name:"bb",age:22},
		{name:"cc",age:45}
	];
	$scope.myVar = false;
	$scope.toggle = function(){
		$scope.myVar = !$scope.myVar;
	}
}
***/



