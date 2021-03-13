/* Target a Specific Child of an Element Using jQuery
You've seen why id attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with.

Fortunately, jQuery has some other tricks for targeting the right elements.

jQuery uses CSS Selectors to target elements. The target:nth-child(n) CSS selector allows you to select all the nth elements with the target class or element type.

Here's how you would give the third element in each well the bounce class:

$(".target:nth-child(3)").addClass("animated bounce");

Make the second child in each of your well elements bounce. You must select the elements' children with the target class. 

$('.target:nth-child(2)').addClass('animated bounce');
*/