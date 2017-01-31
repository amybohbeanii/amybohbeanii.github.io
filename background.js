$(document).ready(function(){
	function addTriangleTo(target,inputColor) {
	    var dimensions = target.getClientRects()[0];
	    var pattern = Trianglify({
	        width: screen.width,
	        height: dimensions.height,
			x_colors: inputColor,
			y_colors: 'match_x'
	    });
	    target.style['background-image'] = 'url(' + pattern.png() + ')';
	}

	addTriangleTo(document.getElementById('home'),'PRGn');
	addTriangleTo(document.getElementById('education'),'Spectral');	
	addTriangleTo(document.getElementById('work-experience'),'GnBu');	
	addTriangleTo(document.getElementById('projects'),'PuOr');
	addTriangleTo(document.getElementById('about'),'PuOr');	
	addTriangleTo(document.getElementById('awards'),'PuOr');
	addTriangleTo(document.getElementById('contact'),'PuOr');	
	
	
})



