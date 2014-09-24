	$(document).ready(function(){
		$(".scores span").draggable({helper:"clone",cursor:"move"});
		$(".teams li").droppable({hoverClass:"hovered",drop:scorer});
	});
	function scorer(event,ui){
		$(this)
	}
