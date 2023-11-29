(()=> {
  const calcTotal = (prices:number[]):string => {
    let total = 0;
    prices.forEach(x => {
      total += x;
    });
    return total.toString();
  }

  const printTotal = (prices:number[]):void => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta}`);
  }

  printTotal([1,23,1,4,3,2,4,3]);
})();
