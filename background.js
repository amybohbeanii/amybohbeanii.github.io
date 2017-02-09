$(document).ready(function(){
	function addTriangleTo(target,inputColor) {
	    var dimensions = target.getClientRects()[0];
	    var pattern = Trianglify({
	        width: 100%,
	        height: 100%,
			x_colors: inputColor,
			y_colors: 'match_x'
	    });
	    target.style['background-image'] = 'url(' + pattern.png() + ')';
	}

	addTriangleTo(document.getElementById('home'),'YlOrRd');
	addTriangleTo(document.getElementById('education'),'PRGn');	
	addTriangleTo(document.getElementById('work-experience'),'PRGn');	
	addTriangleTo(document.getElementById('project'),'PRGn');

	
	
})



