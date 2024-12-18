const Validation = (name) => {
    if (!name) {
      alert("Name required");
      return false ;
    } else if (name.length < 3) {
      alert("Name must be more than 3 character");
      return false;
    }
  
    return true;
  };
  
  export default Validation;
  