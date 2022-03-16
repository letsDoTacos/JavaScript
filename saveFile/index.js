// alert('taco time!!!');


function downloadFile(filename, content) {
  const element = document.createElement('a');

  const blob = new Blob([content], {type: 'plain/text'});

  //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
  const fileUrl = URL.createObjectURL(blob);

  //setAttribute() Sets the value of an attribute on the specified element.

  // file location
  element.setAttribute('href', fileUrl);
  // file name
  element.setAttribute('dowbload', 'filename')
  element.style.display = 'none';

  //use appendChild() method to move an element from one element to another
  document.body.appendChild(element);
  element.click();

  //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
  document.body.removeChild(element);
};

window.onload = () => {
  document.getElementById('download').addEventListener('click', e => {

    // The value of the file name is the input box
    const filename = document.getElementById('filename').value;

    //The value of what had been input in the textarea
    const content = document.getElementById('text').value;

    // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

    if(filename && content){
      downloadFile(filename, content)
    }
  });
};