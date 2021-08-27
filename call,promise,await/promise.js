const findphone = () => {
  console.log("cho tao xin so thang Nam");
  console.log("thang ban dang tim so");
  let finded;
  const promiseTest = new Promise((res, rej) => {
    finded = false;
    if (finded) {
      setTimeout(() => {
        sdt = "12345";
        console.log(`da tim so dien thoai `);
        res(sdt);
      }, 1000);
    } else {
      rej("loi roi");
    }
  });
  return promiseTest;
};

findphone()
  .then((sdt) => console.log(sdt))
  .catch((error) => console.log(error));
