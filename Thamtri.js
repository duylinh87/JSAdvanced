//-------------> tham trị (Value Types gồm : các biến nguyên thuỷ)
// Biến nguyên thuỷ gồm : string, number, boolean,underfine ,null
let c = 2; // tạo ra 1 vùng nhớ khi tạo biến vào ram
let d = c; // tạo ra 1 vùng nhớ
c = 5;
console.log("kiểu tham trị :", d);
////////
////////
//-------------> tham chiếu (Reference Types gồm : Array, Obj, Fucntion)
let a = {
  name: "linh",
}; // vùng nhớ 1 (Reference Types gán địa chỉ vào biến a )
let b = a; // ( biến b sẽ tham chiếu đến địa chỉ của biến a --> cùng 1 vùng nhớ với biến a)

b.name = "dung";
console.log("kiểu tham chiếu :", a);
////////
////////
//-------------> xử lý tham chiếu es6
let e = {
  name: "linh",
}; // vùng nhớ 1
let f = { ...e }; // vùng nhớ 2 để khi ta thay đổi f thì e không bị thay đổi

f.name = "dung";
console.log("kiểu tham chiếu es6 :", e);
