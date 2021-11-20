const operatorRandomizer = (number) => {
    let operator = "-";
    let results = 0;
    let numArr = [];
    let numstring = number.toString();
    //   // for (const num of numstring) {
    //   //   if ((operator = 0)) {
    //   //     results += parseInt(num);
    //   //     operator = 1;
    //   //   } else {
    //   //     results -= parseInt(num);
    //   //     operator = 0;
    //   //   }
    //   // }
    //   // console.log(operator);
    for (const num of numstring) {
      numArr.push(num);
    }
    //   console.log(numArr);
    //   // numArr.forEach((num) => {
    //   //   if (operator === "+") {
    //   //     results += +num;
    //   //     operator = "-";
    //   //     console.log(`${operator} ${num}`);
    //   //   } else if (operator === "-") {
    //   //     results -= +num;
    //   //     operator = "+";
    //   //     console.log(`${operator} ${num}`);
    //   //   }
    //   // });
  
    for (let index = 0; index < numArr.length; index++) {
      // console.log(operator);
      if (operator === "-") {
        // console.log(operator);
        results -= +numArr[index];
        console.log(`${operator} ${numArr[index]}`);
        operator = "+";
      } else if (operator === "+") {
        results += +numArr[index];
        console.log(`${operator} ${numArr[index]}`);
        operator = "-";
      }
    }
  
    return results;
  };
  
  console.log(operatorRandomizer(44436));