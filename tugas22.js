var sentences = "Saya ingin belajar bersama";
var arr = sentences.split(" ");

var finish = arr.forEach((item, index) => {
  console.log("Item : " + item + " index ke " + index);
});
