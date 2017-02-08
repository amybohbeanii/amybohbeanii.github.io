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

	addTriangleTo(document.getElementById('home'),'GnBu');
	addTriangleTo(document.getElementById('education'),'GnBu');	
	addTriangleTo(document.getElementById('work-experience'),'GnBu');	
	addTriangleTo(document.getElementById('projects'),'GnBu');
	addTriangleTo(document.getElementById('aboutpage'),'GnBu');	
	addTriangleTo(document.getElementById('travels'),'GnBu');
	addTriangleTo(document.getElementById('publications'),'GnBu');	
	
	
})



