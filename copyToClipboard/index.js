// alert('taco time!!!');

let copy = (textId) => {
  // select the text in the <input> element
  document.getElementById(textId).select();
  // copy the selected text to the clipboard
  document.execCommand("copy");
};