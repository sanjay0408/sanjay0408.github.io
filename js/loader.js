(function(){
  var preload = document.getElementById("loader");
  var loading = 0
  var id = setInterval(frame,64);

  function frame(){
  	if(loading == 80){
  		clearInterval(id);
  		window.open("welcome.html","_self");
  	}
  	else{
  		loading = loading + 1;
  	}
  }

})();