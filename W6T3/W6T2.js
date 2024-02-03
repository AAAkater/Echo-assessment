// function timer(n) {
//   for (let i = n; i >= 0; i--) {
//     setTimeout(() => {
//       console.log(`${i}`);
//     }, 1000 * (n - i));
//   }
// }
// timer(10);

function print(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function times() {
  for (let i = 1; i <= 10; i++) {
    await print(i);
  }
}
times();
