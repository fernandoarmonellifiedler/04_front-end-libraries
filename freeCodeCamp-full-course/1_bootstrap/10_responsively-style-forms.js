/* Responsively Style Radio Buttons
You can use Bootstrap's col-xs-* classes on form elements, too! This way, our radio buttons will be evenly spread out across the page, regardless of how wide the screen resolution is.

Nest both your radio buttons within a <div class="row"> element. Then nest each of them within a <div class="col-xs-6"> element.

Note: As a reminder, radio buttons are input elements of type radio. 

<div class='row'>
  <div class="col-xs-6">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  </div>
  <div class="col-xs-6">
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  </div>
</div>

=============================
Responsively Style Checkboxes
Since Bootstrap's col-xs-* classes are applicable to all form elements, you can use them on your checkboxes too! This way, the checkboxes will be evenly spread out across the page, regardless of how wide the screen resolution is.

---------
Exercise: Nest all three of your checkboxes in a <div class="row"> element. Then nest each of them in a <div class="col-xs-4"> element.

<div class="row">
  <div class="col-xs-4">
    <label><input type="checkbox" name="personality"> Loving</label>
  </div>
  <div class="col-xs-4">
    <label><input type="checkbox" name="personality"> Lazy</label>
  </div>
  <div class="col-xs-4">
    <label><input type="checkbox" name="personality"> Crazy</label>
  </div>
</div>

=============================
Style Text Inputs as Form Controls
You can add the fa-paper-plane Font Awesome icon by adding <i class="fa fa-paper-plane"></i> within your submit button element.

Give your form's text input field a class of form-control. Give your form's submit button the classes btn btn-primary. Also give this button the Font Awesome icon of fa-paper-plane.

All textual <input>, <textarea>, and <select> elements with the class .form-control have a width of 100%.

<input type="text" class="form-control" placeholder="cat photo URL" required>
    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>

=============================
Line up Form Elements Responsively with Bootstrap
Now let's get your form input and your submission button on the same line. We'll do this the same way we have previously: by using a div element with the class row, and other div elements within it using the col-xs-* class.

Nest both your form's text input and submit button within a div with the class row. Nest your form's text input within a div with the class of col-xs-7. Nest your form's submit button in a div with the class col-xs-5.

This is the last challenge we'll do for our Cat Photo App for now. We hope you've enjoyed learning Font Awesome, Bootstrap, and responsive design!

<div class='row'>
      <div class='col-xs-7'>
    <input type="text" class="form-control" placeholder="cat photo URL" required>
    </div>
    <div class='col-xs-5'>
    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
    </div>
    </div>
*/