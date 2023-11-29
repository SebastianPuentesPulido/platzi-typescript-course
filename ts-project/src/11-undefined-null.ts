(() => {
  // let myNumber:number;
  // let myString:string;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  // myNull = 1234;

  let myString: string | undefined = undefined;
  myString = 'qwerty';

  function hi(name: string | null) {
    let hello = 'Hola';
    hello += (name?.toLocaleLowerCase() ?? 'nobody');
    console.log(hello);
  }

  hi("Nicolas");
  hi(null)
})();
