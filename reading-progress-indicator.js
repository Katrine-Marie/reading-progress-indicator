function setProgressIndicator(elId, color, height){
  var body = document.body;
	var el = document.getElementById(elId);

	var progress = document.createElement('div');
	progress.id = 'progress';
	body.appendChild(progress);

	progress.style.position = "fixed";
	progress.style.top = 0;
	progress.style.width = 0;
	progress.style.background = color;
  if(height >= 4){
		progress.style.height = "4px";
	}else {
		progress.style.height = height + "px";
	}

	window.addEventListener("scroll", function(){
		var elHeight = el.scrollHeight;

		// Get current location's distance from the top of the page
		var position = window.pageYOffset;

		// Get an element's distance from the top of the page
		var getElemDistance = function (elem) {
				var location = 0;
				if (elem.offsetParent) {
						do {
								location += elem.offsetTop;
								elem = elem.offsetParent;
						} while (elem);
				}
				return location >= 0 ? location : 0;
		};

		var location = getElemDistance(el);

		/*
		var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
								 html.clientHeight, html.scrollHeight, html.offsetHeight );
		*/

		var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		var scrollEnd = scrollTop + window.innerHeight;

		var p = (scrollTop - location) / (elHeight-window.innerHeight) * 100;

		var progress = document.getElementById('progress');

		if(scrollTop === 0){
			progress.style.width = '0%';
		}else {
			progress.style.width = p + '%';
		}

	});
};
