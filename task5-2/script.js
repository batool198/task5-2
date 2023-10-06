fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    displayData(json.products);
  });

function displayData(arr) {
  let a = 6;
  arr.forEach(function (item) {
    if (a == 0) {
      return "false";
    } else {
      const cardsAreas = document.querySelector(".cards-area");

      const div1 = document.createElement("div");

      div1.classList = "col-md-4 col-sm-12 my-3";

      const div2 = document.createElement("div");
      div2.classList = "card ";
      div2.style.width = "18rem";
      const img = document.createElement("img");
      img.src = item.images[0];
      img.classList = "image card-img-top";

      const div3 = document.createElement("div");
      div3.classList = "card-body card-body-gray  ";

      const h5 = document.createElement("h5");
      h5.classList = "card-title text-center";
      h5.innerHTML = item.title;

      const p = document.createElement("p");
      p.classList = "card-text text-center card-text-red";

      p.innerHTML = "$" + item.price;

      div3.appendChild(h5);
      div3.appendChild(p);
      div2.appendChild(img);
      div2.appendChild(div3);

      div1.appendChild(div2);
      cardsAreas.appendChild(div1);
      a--;
    }
  });
}
