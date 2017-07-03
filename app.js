'use strict';


// State object
const ticTacToeObj = {
  Boxes: [
    [{box1:'one', box2:'two' , box3: 'three'}],
    // [{box4 , box5 , box6}],
    // [{box7 , box8 , box9}]
  ],
  currentImageX: false
// 
};

// Functions that modify state
//put X/O vlaue in Boxes
const x = $('.x').attr.src;
const o = $('.o').attr.src;
const row1 = ticTacToeObj.Boxes[0];
const row1Obj = Object.keys(row1);
const row2 = ticTacToeObj.Boxes[1];
const row3 = ticTacToeObj.Boxes[2];
const trackLastImage = () => {
  if (ticTacToeObj.currentImageX) {
    ticTacToeObj.currentImageX = !ticTacToeObj.currentImageX;
  }
// populates a targetted box div with inage
// image will be picked based on last image picked 
};

const putImageInBox = (boxId) => {
  console.log(boxId);
  if (row1Obj.find(function(key) { row1Obj.key === boxId;})) {
    console.log('hey there?');
    row1.key = 'isthis the right thing';
    console.log(row1.key);
  }
};



//evaluate win and tie conditions

// Render functions
//Render updated boxes


// event listener functions 
const clickOnBox = () => {
  $('.box').on('click', () => {let boxId = event.target.id;
    putImageInBox(boxId);
    console.log('did we get this far');
  });
};

$(document).ready(
  clickOnBox()
);
