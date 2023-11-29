(()=> {
  let userId:string | number;
  userId = 1945;
  userId = 'saSSSa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`); // string
    } else {
      console.log(`number ${myText.toFixed(1)}`); // number 🔢
    }
  }

  greeting("SEBASTIAN"); // ✅
  greeting(1233.212);  // ✅
   // greeting(null) // ❌
   // greeting(undefined) // ❌
})();
