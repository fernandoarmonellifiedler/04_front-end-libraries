// Create an app that involves radio buttons, a checkbox, aselectdropdown, and a textarea. You canmodel it after this form for ordering a pizza, or make up something on your own.

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const OtherHelloApp = () => {

  return (
    <div>
    
    </div>
  );
};

ReactDOM.render(<OtherHelloApp/>, document.getElementById('root'));

/* 
Though we haven’t explicitly talked about other input types likeselect,radio,checkbox, andtextarea, they work much the same as the plain oldtextinputs you’ve used so far.Theselectandtextareaboth use the familiarvalueandonChangeprops.  Theradioandcheckboxdiffer a bit. Checkboxes and radio buttons both usecheckedinstead ofvalueto de-termine if they’re active or not, so instead of readingevent.target.valueyou’ll need to useevent.target.checked.With radio buttons, it’s often helpful to give them a staticvalueprop, and store that value in stateto keep track of which radio button is selected. Then, you can set theircheckedprop based on thatvalue. Here’s a snippet of code to show you what I mean:setLetter=(event)=>{this.setState({letter:event.target.value});}render() {const{ letter }=this.state;return(<form><inputtype="radio"value="a"checked={letter==='a'}onChange={this.setLetter}/><inputtype="radio"value="b"checked={letter==='b'}onChange={this.setLetter}162
Contents/><inputtype="radio"value="c"checked={letter==='c'}onChange={this.setLetter}/></form>);}

*/