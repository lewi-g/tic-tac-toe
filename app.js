'use strict';

$(document).ready(
  clickOnBox()
);

// State object
const ticTacToeObj = {
  Boxes: [[],[],[]]
//click Value:
// 
};

// Functions that modify state
//put X/O vlaue in Boxes
const x = $('.x').attr.src;
const o = $('.o').attr.src;

const putXInBoxes = () => {
  // populates a specific box div 
};

//evaluate win and tie conditions

// Render functions
//Render updated boxes


// event listener functions 
const clickOnBox = () => {
  $('.box1').on("click", () => alert("meee!!!") )
};


