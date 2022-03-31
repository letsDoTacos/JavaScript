// alert('peanut butter jelly time!!!');

// global constants 
  // display id 
  const passwordOutput = document.getElementById('password-input');
  // lower case data 
  const lowerCaseData = "abcdefghijklmnopqrstuvwxyz".split(''); 
  // upper case data
  const upperCaseDate = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  // number data
  const nums = "0123456789".split('');
  // symbols
  const symbolData = "!@#$%^&*-_=+\|:;',.>/?~".split('');

  function generatePassword() {

    const data = [].concat(
      lowercase.checked ? lowerCaseData : [],
      uppercase.checked ? upperCaseDate : [],
      numbers.checked ? nums : [],
      symbols.checked ? symbolData : [],
    );

    // value fromn the range slider is stored in password.length
    let passwordLength = parseInt(document.getElementById('display-password-length').value);
    let newPassword = '';
      // console.log("data: ", data);
      console.log("passWord: ", passwordLength);

    // alert if you do not select a box

    if(data.length === 0) {
      passwordOutput.innerHTML = "Come on already..";
      alert('Please check at least one criteria');
      return;
    }

    for(let i = 0; i < passwordLength; i++) {
      newPassword += data[Math.floor(Math.random() * data.length)];
      console.log("data: ", data);
    }
    // display new password
    passwordOutput.value = newPassword;
    console.log("newPassword: ", newPassword);


    // gennerating a new password will auto copy to cb
    passwordOutput.select();
    document.execCommand('copy');

    // visule que
    generateButton.innerHTML = "Copied!";

    // change text of btn after 3.5 secs
    setTimeout(() => {generateButton.innerHTML = "Generate Again"}, 3500)
  };