const ValidatePassword = (inputtxt) => {
    const alphanumericRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{1,}$/;
    debugger;
    if (inputtxt.match(alphanumericRegex)) {
      return true;
    }
    else {
      alert("Password should contain at least 1 number and 1 letter character !!");
      return false;
    }
  };
  
  export default ValidatePassword;
  