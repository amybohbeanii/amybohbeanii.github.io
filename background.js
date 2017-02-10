$(document).ready(function(){
	function addTriangleTo(target,inputColor) {
	    var dimensions = target.getClientRects()[0];
	    var pattern = Trianglify({
	        width: screen.width,
	        height: screen.height,
			x_colors: inputColor,
			y_colors: 'match_x'
	    });
	    target.style['background-image'] = 'url(' + pattern.png() + ')';
	}

	addTriangleTo(document.getElementById('home'),'Reds');
	addTriangleTo(document.getElementById('education'),'Reds');	
	addTriangleTo(document.getElementById('work-experience'),'Reds');	
	addTriangleTo(document.getElementById('project'),'Reds');

	
	
})



