const getUse = async () => {
  const response = (await fetch("data/uses.json")).json();
  return response;
};

const LoadDataOut = async () => {
  let users = [];
  try {
    users = await getUse();
  } catch (error) {
    console.log(error);
  }
  render(users);
};

const render = (users) => {
  const loadUres = users.map((use, index) => {
    return `
                <ul class ="item-use">
                        <li> id la : ${use.id}</li>
                        <li> ten la : ${use.useName}</li>
                        <li> tuoi la : ${use.age}</li>
                </ul>
            `;
  });

  html = loadUres.join(" "); // biết mảng thành chuỗi và ở đây ko ngăn cách bằng gì
  document.getElementById("box-users").innerHTML = html;
};

document.addEventListener("DOMContentLoaded", LoadDataOut());

// Tài liệu tham khảo https://www.youtube.com/watch?v=8KkM6JFjJZA  , (f8 dom)
// https://www.youtube.com/watch?v=Yp9KIcSKTNo (nuoc ngoai)

