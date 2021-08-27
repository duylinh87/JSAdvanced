const findphone = () => {
  console.log("cho tao xin so thang Nam");
  console.log("thang ban dang tim so");
  let finded;
  const promiseTest = new Promise((res, rej) => {
    finded = true;
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

const goiChoNam = (sdt) => {
  console.log(`dang noi chuyen voi Nam tai so ${sdt}`);
};
// vi findphone tra ve 1 promise nen co the viet theo async await
const hangdong = async () => {
  try {
    const result = await findphone();
    goiChoNam(result);
  } catch (error) {
    console.log(error);
  }
};

hangdong();
