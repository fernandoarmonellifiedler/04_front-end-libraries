/* Create a Bootstrap Headline
Now let's build something from scratch to practice our HTML, CSS and Bootstrap skills.

We'll build a jQuery playground, which we'll soon put to use in our jQuery challenges.

To start with, create an h3 element, with the text jQuery Playground.

Color your h3 element with the text-primary Bootstrap class, and center it with the text-center Bootstrap class. 

=============================
House our page within a Bootstrap container-fluid div
Now let's make sure all the content on your page is mobile-responsive.

Let's nest your h3 element within a div element with the class container-fluid.

=============================
Create a Bootstrap Row
Now we'll create a Bootstrap row for our inline elements.

Create a div element below the h3 tag, with a class of row.

=============================
Split Your Bootstrap Row
Now that we have a Bootstrap Row, let's split it into two columns to house our elements.

Create two div elements within your row, both with the class col-xs-6.

=============================
Create Bootstrap Wells
Bootstrap has a class called well that can create a visual sense of depth for your columns.

Nest one div element with the class well within each of your col-xs-6 div elements.

=============================
Add Elements within Your Bootstrap Wells
Now we're several div elements deep on each column of our row. This is as deep as we'll need to go. Now we can add our button elements.

Nest three button elements within each of your div elements having the class name well.

=============================
Apply the Default Bootstrap Button Style
Bootstrap has another button class called btn-default.

Apply both the btn and btn-default classes to each of your button elements.

=============================
Create a Class to Target with jQuery Selectors
Not every class needs to have corresponding CSS. Sometimes we create classes just for the purpose of selecting these elements more easily using jQuery.

Give each of your button elements the class target.

=============================
Add id Attributes to Bootstrap Elements
Recall that in addition to class attributes, you can give each of your elements an id attribute.

Each id must be unique to a specific element and used only once per page.

Let's give a unique id to each of our div elements of class well.

Remember that you can give an element an id like this:

<div class="well" id="center-well">

Give the well on the left the id of left-well. Give the well on the right the id of right-well.

=============================
Label Bootstrap Wells
For the sake of clarity, let's label both of our wells with their ids.

Above your left-well, inside its col-xs-6 div element, add a h4 element with the text #left-well.

Above your right-well, inside its col-xs-6 div element, add a h4 element with the text #right-well.

=============================
Give Each Element a Unique id
We will also want to be able to use jQuery to target each button by its unique id.

Give each of your buttons a unique id, starting with target1 and ending with target6.

Make sure that target1 to target3 are in #left-well, and target4 to target6 are in #right-well.

=============================
Label Bootstrap Buttons
Just like we labeled our wells, we want to label our buttons.

Give each of your button elements text that corresponds to its id selector.

=============================
Use Comments to Clarify Code
When we start using jQuery, we will modify HTML elements without needing to actually change them in HTML.

Let's make sure that everyone knows they shouldn't actually modify any of this code directly.

Remember that you can start a comment with <!-- and end a comment with -->

Add a comment at the top of your HTML that says Code below this line should not be changed
*/