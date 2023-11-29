(()=> {
  // type alias
  type UserID = string | number | boolean;

  let userId:UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`); // string
    }
  }

  //  literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize:Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XD';


  function shirtID(userId: UserID, size:Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`); // string
    }
  }

  shirtID('gucci','M');
})();
