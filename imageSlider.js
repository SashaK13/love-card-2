/*
* call this function once the page is loaded
*/
window.onload = prepPage;

/*
* this variable must be global in order to be remembered the next time the user clicks a left/right button
*/
var slideIndex = 1;

/*
* this function is called on the window.load event
*/
function prepPage() {
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  btn1.addEventListener('click', onClickChangePicture);
  btn2.addEventListener('click', onClickChangePicture);
  showPics();
};

/*
*
*/
function onClickChangePicture(event) {
    console.log('button id in the click event is: ' + event.path[1].id);
    // update the slide index
    if (event.path[1].id === 'btn1') {
        slideIndex = slideIndex - 1;
    } else if(event.path[1].id === 'btn2') {
        slideIndex = slideIndex + 1;
    } else {
        // the user clicked in something else
        console.log('some error');
    }
    // call the function to show the next or previous picture
    showPics();
};

/*
*
*/
function showPics() {
  var myPics = document.getElementsByClassName('myPics');

  // if the user increased the index above the last of the list, then jump to the first picture of the list,
  // else if the user decreased the index below the first of the list, then jump to the last picture of the list.
  if (slideIndex > myPics.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = myPics.length;
  }
  // hide all the pictures
  for (var i = 0; i < myPics.length; i++) {
    myPics[i].style.display = "none";
  }
  // display only this picture
  myPics[slideIndex-1].style.display = "block";
};
