// b = 2;

// function fun() {
//   let a = 12;
//   const c = 123;
// }
// var b;
// console.log(b);

// let arr = [5, 4, 3, 2, 1];
// // arr.sort()

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let tmp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = tmp;
//     }
//   }
// }
// // console.log(arr);

// // for (let i in arr) {
// //     console.log(arr[i])
// // }

// arr.forEach((item)=>{
//     console.log(item)
// })
// // fot( i of arr)
// // {

// // }

const promise = new Promise((resolve, reject) => {
  console.log(11);
  setTimeout(() => {
    console.log("A");
    resolve("B");
    console.log("C");
  }, 0);
  console.log(1);
});
promise.then((res) => {
  console.log(res);
});
console.log(111);

async function a() {
  const response = await fetch("www");
  if (!response.ok) return;

  let data=await response.json()
  
}
