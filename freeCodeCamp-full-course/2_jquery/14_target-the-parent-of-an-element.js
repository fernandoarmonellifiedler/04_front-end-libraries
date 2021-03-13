/* Target the Parent of an Element Using jQuery
Every HTML element has a parent element from which it inherits properties.

For example, your jQuery Playground h3 element has the parent element of <div class="container-fluid">, which itself has the parent body.

jQuery has a function called parent() that allows you to access the parent of whichever element you've selected.

Here's an example of how you would use the parent() function if you wanted to give the parent element of the left-well element a background color of blue:

$("#left-well").parent().css("background-color", "blue")

Give the parent of the #target1 element a background-color of red.

$('#target1').parent().css('background', 'red');
*/