// console.clear(); // clear console on refresh.

/*

Roll Cage is an experimental grid system with one foot in JavaScript
and the other in CSS. The JavaScript half finds all <cage> elements
and disects each one's [width] attribute. It then distributes the
values it finds into new attributes, [xs], [sm], [md], [lg], and [xl].

Next, the CSS kicks in and applies widths to the <cage> elements based
on the newly created attributes.


### Example:

  <cage widths='1 2 3 4 5'>
  </cage>

### Will be processed to become:

  <cage widths='1 2 3 4 5' xs='1' sm='2'
  md='3' lg='4' xl='5'>
  </cage>

### The new attributes are then assessed by CSS
and proper widths are applied to the elements for
each necessary media query.


*/

// // let initTime = performance.now()/1000;
// let sizes = ['xs','sm','md','lg','xl']; // For setting custom attributes.
// let cages = Array.from(document.getElementsByTagName('cage'));
// cages = cages.concat(Array.from(document.getElementsByClassName('cage')));

// // For each <cage> element, hereby 'column'...
// cages.forEach((column, i) => {

//   // Get 'widths' attribute as an array of numbers contained.
//   let columnWidths = column.getAttribute('widths').split(' ').filter(Boolean);
//   console.log(columnWidths);

//   columnWidths.forEach((value, i) => {
//     if (value)
//   })

// If there is only number in columnWidths, apply it to all screen sizes.
//   if (columnWidths.length == 1) {
//     column.setAttribute('univ', columnWidths[0]);

//   // Otherwise, set each number accordingly.
//   } else {
//     columnWidths.forEach((width, i) => {
//       column.setAttribute(sizes[i], columnWidths[i]);
//     });
//   }
// });

//////////////////////////////////////////
/* For performance testing and display: */
// let elapsedTime = performance.now()/1000 - initTime;
// document.querySelector('h4').innerText = `IN ${elapsedTime.toFixed(3)} SECONDS.`
// console.log(`GRID COMPLETE IN ${elapsedTime.toFixed(3)} SECONDS.`);
// console.log(Array.from(document.getElementsByTagName('cage')).length);
"use strict";