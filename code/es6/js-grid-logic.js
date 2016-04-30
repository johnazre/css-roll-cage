// NEEDS REFACTORING. WRITTEN A LONG LONG
// TIME AGO IN A GALAXY FAR FAR AWAY.


var xs = 1,
	sm = 480,
	md = 768,
	lg = 992,
	xlg = 1200;

var default_gutter = 1;

console.clear();
//CUSTOM FUNCTION: ARRAY ITEMS TO NUMBERS.
function arr_to_numbers(array) {
	var theLen = array.length;
	for (var i = 0; i < theLen; i++) {
		array[i] = Number(array[i]);
	};
};

//CUSTOM FUNCTION: GENERATE WIDTHS FROM widths ATTRIBUTE.
function generate_widths(array) {
	var theLen = array.length;
	for (var i = 0; i < theLen; i++) {
		if (space) {
			array[i] = (((Number(array[i]) / 12) * 100)-.5).toFixed(1);
		}//CLOSE IF (SPACE).
		else {
			array[i] = ((Number(array[i]) / 12) * 100).toFixed(1);
		};
	
		if (array[i] < 0) {
			array[i] = 0;
		};
	}
};



//DECLARE NEEDED VARIABLES.
var space, flex_arr, cols, wid_vars, col_id, num_reg, i,
	query_string_1, query_string_2, query_string3, size, x_elem,
	query_string4, query_string5, ii, x, wid_percents,
	sizes = ["xs", "sm", "md", "lg", "xlg"];

//FOR EACH ROW...
i = 0;
document.querySelectorAll('roll').forEach(function(r) {
	i++;

	//HAS SP-A or SP-B? STORE BOOLEAN.
	space = (r.getAttribute('flx').includes('jc-around') || r.getAttribute('flx').includes('jc-between'));
	// console.log("SPACE: " + space);

	//SELECT ALL COLUMNS.
	cols = r.querySelectorAll('cage');

	//ii = 0
	//FOR EACH COLUMN...
	ii = 0;
	cols.forEach(function(col) {
		ii++;

		//CREATE UNIQUE ID: col-X
		col_id = i + "-" + ii;
		// console.log(col_id);

		//SET THIS COLUMN'S COL-ID ATTR.
		col.setAttribute('col-id', col_id);

		//GET THIS COLUMN'S widths ATTR, SPLIT INTO ARRAY.
		wid_vars = col.getAttribute('cx').match(/[\d]+/g);
		// console.log(wid_vars);

		//CONVERT EACH NUM TO PERCENT DIGIT,
		//CONSIDERING WHETHER OR NOT SPACING IS NEEDED.
		wid_percents = generate_widths(wid_vars);
		// console.log(wid_vars);

		//IF ONLY ONE VALUE, ASSUME IT APPLIES TO ALL SCREENS.
		if (wid_vars.length == 1) {
			col.setAttribute('all-screens', wid_vars[0]);
			col.style.width = wid_vars[0] + "%";
			// col.innerHTML = "<p>"+wid_vars[0]+"%-ALL"+"</p>"
			
		} else {
		//FOR EACH IN COL_WID ARRAY...
			x = 0;
			wid_vars.forEach(function(wid) {
				size = sizes[x];
				//CREATE NEW ATTR FOR EACH SCREEN SIZE.
				//ADD VALUE BASED ON widths ATTR.
				col.setAttribute(size, wid_vars[x]);
				x++;
			});
		}

	}); //END COL.FOREACH
}); //END ROW.FOREACH


function sizer() {
	if (window.outerWidth >= xlg) {
		x_elem = document.querySelectorAll('[xlg]');

		for (i = 0; i < x_elem.length; i++) {
			var width = x_elem[i].getAttribute('xlg') + "%";
			x_elem[i].style.width = width;

			var idd = x_elem[i].getAttribute('col-id');
			// x_elem[i].innerHTML = "<p>" + idd + ":" + width + "-XLG.</p>";
		} //END FOR LOOP.

	} //END IF >= xlg.
	else if (window.outerWidth < xlg && window.outerWidth >= lg) {
		x_elem = document.querySelectorAll('[lg]');

		for (i = 0; i < x_elem.length; i++) {
			var width = x_elem[i].getAttribute('lg') + "%";
			x_elem[i].style.width = width;

			var idd = x_elem[i].getAttribute('col-id');
			// x_elem[i].innerHTML = "<p>" + idd + ":" + width + "-LG.</p>";
		} //END FOR LOOP.

	} //END IF < xlg & >= lg.
	else if (window.outerWidth < lg && window.outerWidth >= md) {
		x_elem = document.querySelectorAll('[md]');

		for (i = 0; i < x_elem.length; i++) {
			var width = x_elem[i].getAttribute('md') + "%";
			x_elem[i].style.width = width;

			var idd = x_elem[i].getAttribute('col-id');
			// x_elem[i].innerHTML = "<p>" + idd + ":" + width + "-MD.</p>";
		}
	} //END IF < LG && >= MD.
	else if (window.outerWidth < md && window.outerWidth >= sm) {
		x_elem = document.querySelectorAll('[sm]');

		for (i = 0; i < x_elem.length; i++) {
			var width = x_elem[i].getAttribute('sm') + "%";
			x_elem[i].style.width = width;

			var idd = x_elem[i].getAttribute('col-id');
			// x_elem[i].innerHTML = "<p>" + idd + ":" + width + "-SM.</p>";
		}
	} //END IF < MD && >= SM.
	else if (window.outerWidth < sm && window.outerWidth >= xs) {
		x_elem = document.querySelectorAll('[xs]');

		for (i = 0; i < x_elem.length; i++) {
			var width = x_elem[i].getAttribute('xs') + "%";
			x_elem[i].style.width = width;

			var idd = x_elem[i].getAttribute('col-id');
			// x_elem[i].innerHTML = "<p>" + idd + ":" + width + "-XS.</p>";
		}
	}
};
