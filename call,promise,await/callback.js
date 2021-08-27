// callback
//th1 không gọi được sdt ra vì chạy bất đồng bộ thì sdt đã được return ra
// trước nên bị undefined
const findphone1 = () => {
  let sdt;
  console.log("cho tao xin so thang Nam");
  console.log("thang ban dang tim so");
  setTimeout(() => {
    sdt = "12345";
    console.log(`da tim so dien thoai `);
  }, 1000);
  return sdt;
};
// findphone1();
// xử lý bằng callback
const findphone = (callback) => {
  let sdt;
  console.log("cho tao xin so thang Nam");
  console.log("thang ban dang tim so");
  setTimeout(() => {
    sdt = "12345";
    console.log(`da tim so dien thoai `);
    callback(sdt);
  }, 1000);

  return sdt;
};

const callback = (result) => {
  console.log(result);
};
findphone(callback);
