const data = [
  (object1 = {
    principal: 2500,
    time: 1.8
  }),
  (object2 = {
    principal: 1000,
    time: 5
  }),
  (object3 = {
    principal: 3000,
    time: 1
  }),
  (object4 = {
    principal: 2000,
    time: 3
  })
];
let interestData = [{}];
const interestCalculator = function(arr) {
  let rate;
  let interest = [];
  interestData = [{}];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].principal >= 2500 && arr[i].time > 1 && arr[i].time < 3) {
      rate = 3;
    } else if (arr[i].principal >= 2500 && arr[i].time >= 3) {
      rate = 4;
    } else if (arr[i].principal < 2500 || arr[i].time <= 1) {
      rate = 2;
    } else {
      rate = 1;
    }
    interest[i] = (arr[i].principal * rate * arr[i].time) / 100;
    interestData[i] = {
      principal: arr[i].principal,
      rate: rate,
      time: arr[i].time,
      interest: interest[i]
    };
  }
  console.log(interestData);
  return interestData;
};

interestCalculator(data);
