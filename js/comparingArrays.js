var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 3 , 5, 7, "9", 'i'];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === arr2[i]) {
    console.log('this is the same')
  } else {
    console.log('this is not the same')
  }
}