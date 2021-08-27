function Use(firtName, lastName, avatar) {
  this.firtName = firtName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = () => {
    return `${this.firtName} ${this.lastName}`;
    // từ khoá this ở trên là đại diện cho Use , còn
    // từ khoá this ở đây là đại diện cho cai doi tuong duoc tao
  };
}

let other = new Use("linh", "duy", "dep qua");
other.sex = "nam";

console.log(other.getName());

let use = new Use("hung", "manh", "xau");
console.log(use);
console.log(use.getName());
/// sử dụng như 1 bản mẫu lấy những thông tin chính cũng như trong java
// các function đươc đinh nghĩa thì gọi là phương thức
// còn các biến thì được gọi là thuộc tính
// muốn xoá thuộc tính ta dùng delete gọi tới thuọc tính vd ( delete other.avatar;)
