function Load(){
	var search = new google.search.SerachhControl();
	
	search.addSearcher(new google.search.ImageSearch());
	
	search.draw(document.getElementById('content')));
	
	search.execute('sky');
}

google.load('search','1');

google.setOnLoadCallback(Load);