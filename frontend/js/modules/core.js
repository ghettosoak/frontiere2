$(function() {

	window.supportsSvg = function() {
		return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
	}

	window.scrollToHere = function(where, extra){
		if (!extra) extra = 0;
		
		var target = $(where).offset().top;

		if (window.mediaQuery.getQuery() === 'mobile') target -= 55;

		$('html,body').animate({
			scrollTop: target + extra
		}, 500);
	}

	window.pageSetup = (function() {
		var subscribers = [],
			isSetUp = false;

		function okaygo(){
			for (var method in subscribers) {
				subscribers[method]();
			}
			isSetUp = true;
		}

		function subscribe(method) {
			subscribers.push(method);

			isSetUp && okaygo();
		}

		// Returnal  
		//////////////////////////////////////////////////

		return {
			okaygo: okaygo,
			subscribe: subscribe
		};
	})(); 

	window.debounce = function(func, wait, immediate) {
		var timeout, args, context, timestamp, result;

		var later = function() {
			var last = new Date().getTime() - timestamp;

			if (last < wait && last > 0) {
				timeout = setTimeout(later, wait - last);
			} else {
				timeout = null;
				if (!immediate) {
					result = func.apply(context, args);
					if (!timeout) context = args = null;
				}
			}
		};

		return function() {
			context = this;
			args = arguments;
			timestamp = new Date().getTime();
			var callNow = immediate && !timeout;
			if (!timeout) timeout = setTimeout(later, wait);
			if (callNow) {
				result = func.apply(context, args);
				context = args = null;
			}

			return result;
		};
	};

	window.mediaQuery = (function() {
		var subscribers = [],
			mediaCurrent,
			mediaPrev,
			$window = $(window);

		function calculate(){
			if ($window.innerWidth() < 768) 
				mediaCurrent = 'mobile'
			else if (($window.innerWidth() >= 768) && ($window.innerWidth() < 992)) 
				mediaCurrent = 'tablet'
			else if ($window.innerWidth() >= 992 && ($window.innerWidth() < 1200)) 
				mediaCurrent = 'desktop'
			else if ($window.innerWidth() >= 1200) 
				mediaCurrent = 'large_desktop'

			if (mediaCurrent !== mediaPrev){
				for (var method in subscribers) {
					subscribers[method](mediaCurrent);
				}
			}

			mediaPrev = mediaCurrent; 
		}

		function subscribe(method) {
			subscribers.push(method);
		};

		function getQuery(){
			return mediaCurrent;
		};

		var calculateDebounce = window.debounce(calculate, 200);

		$window.resize(calculateDebounce);

		window.pageSetup.subscribe(calculate);

		// Returnal  
		//////////////////////////////////////////////////

		return {
			subscribe: subscribe,
			getQuery: getQuery
		};
	})();

	

});