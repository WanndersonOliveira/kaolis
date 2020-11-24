var app = angular.module('app',[]);
	  app.controller('ctrl', function($scope){
	      $scope.produtos = [];


	      produtos.forEach(function (item,index){
		    
		    if(item.preco == 0){
			item = null;
		    }
			
		    if(!(item == null)){
			if(item.img == ""){
				item.img = "img/img_indisp.jpg";
		    	}

		     
		    	item.preco = "R$ "+item.preco;

			if(item.page == page){
			   $scope.produtos.push(item);
			}
		    }
		});

		$("#prev").hide();
		
		$scope.next = function(){
			page++;

			$scope.produtos = [];


	      		produtos.forEach(function (item,index){
		    
		    		if(item.preco == 0){
					item = null;
		    		}
			
		    		if(!(item == null)){
					if(item.img == ""){
						item.img = "img/img_indisp.jpg";
		    		}


				if(item.page == page){
			   		$scope.produtos.push(item);
				}
		    	}
			});

			$("#prev").show();

			if(produtos[(produtos.length-1)].page == page){
				$("#next").hide();
			}
		}

		
		$scope.prev = function(){
			page--;

			$scope.produtos = [];


	      		produtos.forEach(function (item,index){
		    
		    		if(item.preco == 0){
					item = null;
		    		}
			
		    		if(!(item == null)){
					if(item.img == ""){
						item.img = "img/img_indisp.jpg";
		    		}


				if(item.page == page){
			   		$scope.produtos.push(item);
				}
		    	}
			});

			$("#next").show();

			if(page == 1){
				$("#prev").hide();
			}
		}

		$scope.myFunc = function(myE){
			$scope.y = myE.pageY;

			console.log(myE);

			document.getElementById("painel").style.top=$scope.y+"px";
			document.getElementById("painel").style.display="block";
				
		}
	  });
