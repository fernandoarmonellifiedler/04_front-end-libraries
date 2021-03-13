/* Target Even Elements Using jQuery
You can also target elements based on their positions using :odd or :even selectors.

Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, :odd selects the second element (position 1), fourth element (position 3), and so on.

Here's how you would target all the odd elements with class target and give them classes:

$(".target:odd").addClass("animated shake");

Try selecting all the even target elements and giving them the classes of animated and shake. Remember that even refers to the position of elements with a zero-based system in mind. */