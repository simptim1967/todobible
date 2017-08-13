/*
	Highlight verse(s) based on URL goto parameter range e.g. ?goto=1-3
*/

function highlightVerses()
{
	var hv = /\?goto=(\d+)-?(\d+)?/i;
	var match = hv.exec(window.location.href);
	var startVerse;
	var endVerse;
	var elem;
	var scrollElem = 0;
	if (match) {
		startVerse = parseInt(match[1], 10);
		if (match[2]) {
			endVerse = parseInt(match[2], 10);
		} else {
			endVerse = startVerse;
		}
		if ((startVerse	>= 1) && (endVerse >= startVerse) && (endVerse <= 255)) {
			// highlights verse divs when URL contains ?vhl=startVerse[-endVerse]
			var v = 0;
			var vid = "";
			for (v = parseInt(startVerse, 10); v <= endVerse; v += 1) {
				vid = "v" + v;
				elem = document.getElementById(vid);
				if (elem) {
					scrollElem = scrollElem || elem;
					elem.className = 'highlightverse';
				}
			}
		}
		if (scrollElem) {
			$.scrollTo(scrollElem,800,{offset:-200});
		}
	}
}

function addLoadEvent(f)
{
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = f;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
		f();
		};
	}
}

// Do highlighting when page is done loading.		
addLoadEvent(highlightVerses);

// Initialise todo list button events

$(".tl-btn-open").on("click", function() {
	// $(this).parent().hide();
	var v = "#" + $(this).parent().attr("id");
	$(v+"o").toggleClass("tl-btn-hide");
	$(v+"c").toggleClass("tl-btn-hide");
	// show todo list
	$(v+"tl").toggleClass("tl-btn-hide");
});

$(".tl-btn-close").on("click", function() {
	// $(this).parent().hide();
	var v = "#" + $(this).parent().attr("id");
	$(v+"o").toggleClass("tl-btn-hide");
	$(v+"c").toggleClass("tl-btn-hide");
	// hide todo list
	$(v+"tl").toggleClass("tl-btn-hide");
});

/* TODO: add radio button event handling 
$(".verse-todo-item").on("click", function() {
	$(this).toggleClass("selected-todo-item");
});

$("[type='radio']").on("change", function() {
	$(this).parent().toggleClass("selected-todo-item");
});
*/
