let iconCart = document.querySelector('#open-cart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');
const listCart = document.querySelector('.listCart');
const openCart = document.querySelector(".open-cart");
const checkout = document.querySelector(".checkout");
let orders = [];

checkout.addEventListener('click', function () {
  openCart.style.display = "none";
  cart.style.right = '-100%';
  container.style = '';
  orders = [];
  document.documentElement.style = "";
  document.querySelector(".badge").textContent = orders.length;
});




iconCart.addEventListener('click', function () {
    openCart.style.display = "block";
    cart.style.right = '0';
    container.style.transform = 'translateX(-400px)';
    let item = "";
    orders.forEach(order => {
      item += `
    <div class="item">
        <img src="${order.url}">
        <div class="content">
            <div class="name">${order.name}</div>
            <div class="price">Rp. ${parseInt(order.price).toLocaleString('id-ID')} / 1 foot</div>
        </div>
        <div class="quantity">
            <button class="decrease">-</button>
            <span class="value">${order.qty}</span>
            <button class="increase">+</button>
        </div>
    </div>`;
    });

    listCart.innerHTML = item;
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const qtySpans = document.querySelectorAll('.value');

    decreaseButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (orders[index].qty > 1) {
          orders[index].qty--;
          qtySpans[index].textContent = orders[index].qty;
        }
      });
    });

    increaseButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        orders[index].qty++;
        qtySpans[index].textContent = orders[index].qty;
      });
    });

    openCart.scrollIntoView({
      behavior: 'smooth', // Scroll halus
      block: 'start' // Pastikan scroll ke atas elemen
    });

    document.documentElement.style = "overflow: hidden";
});





document.querySelector(".close").onclick = () => {
  openCart.style.display = "none";
  cart.style.right = '-100%';
  container.style = '';
  listCart.innerHTML = "";
  iconCart.style = "width: 50px; height: 50px;display: flex; justify-content: center; align-items: center; position: fixed; top: 12px;right: 3%";
  document.documentElement.style = "";
}
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("header"); window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
  });

});
function getIngredient() {
  fetch("https://maddening-confirmed-cosmos.glitch.me/food")
    .then((res) => res.json())
    .then((data) => {
      for (let a = 0; a < 8; a++) {
        const popularItemDiv = document.createElement("div");
        popularItemDiv.className = "popular-box";
        const popularImgDiv = document.createElement("div");
        popularImgDiv.className = "popular-img";

        const popularImg = document.createElement("img");
        popularImg.src = data[a].url;
        popularImg.alt = "foodies";
        popularImg.style.height = "202px";
        popularImg.onclick = async () => {
          const res = await fetch(`https://maddening-confirmed-cosmos.glitch.me/food/${data[a].id}`);
          const dataDetail = await res.json();

          const container = document.createElement("div");
          container.style = `
            height: 100vh;
            width: 100%;
            background: #d651083b;
            position: fixed;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;
          `;
          container.className = "countainer-box"

          const containerBox = document.createElement("div");
          const all = document.querySelector("*");
          all.style = `
            margin: 0;
            overflow-y: hidden;
            padding: 0;
            overflow-x: hidden;
            box-sizing: border-box;
            scroll-padding-top: 2rem;
            font-family: "Poppins", sans-serif;
            list-style: none;
            text-decoration: none;
          `;

          containerBox.className = "box";

          const titleIngredient = document.createElement('h1');
          titleIngredient.className = "title-ingredient";
          titleIngredient.textContent = "Foot Detail :";
          containerBox.appendChild(titleIngredient);
          const judul = document.createElement("p");
          judul.className = "ingredientItem";
          judul.textContent = dataDetail.name;
          containerBox.appendChild(judul);
          const div = document.createElement("div");
          const ingredient2 = document.createElement("img");
          ingredient2.style = "width: 74%; height:87%;border-radius: 14px;height: 94 %; margin: auto; ";
          ingredient2.src = data[a].url;
          div.appendChild(ingredient2);
          div.style = 'display: flex;justify-content: center;align-items: center;height: 62%;';
          containerBox.appendChild(div);

          const price = document.createElement("p");
          price.className = "ingredientItem";
          price.textContent = `Rp. ${parseInt(dataDetail.price).toLocaleString('id-ID')}`;
          containerBox.appendChild(price);

          const containerResep = document.createElement("div");
          containerResep.className = "ingredientItem";

          const containerResepRow = document.createElement("div");
          containerResepRow.style = "display: flex;flex-direction: row;justify-content: space-evenly;";
          const containerResepRow1 = document.createElement("div");
          const containerResepRow2 = document.createElement("div");

          const meterial1 = document.createElement("p");
          meterial1.textContent = "- " + dataDetail.materials["bahan 1"];
          containerResepRow1.appendChild(meterial1);

          const meterial2 = document.createElement("p");
          meterial2.textContent = "- " + dataDetail.materials["bahan 2"];
          containerResepRow2.appendChild(meterial2);
          containerResepRow.appendChild(containerResepRow1);

          const meterial3 = document.createElement("p");
          meterial3.textContent = "- " + dataDetail.materials["bahan 3"];
          containerResepRow1.appendChild(meterial3);

          const meterial4 = document.createElement("p");
          meterial4.textContent = "- " + dataDetail.materials["bahan 4"];
          containerResepRow2.appendChild(meterial4);

          containerResepRow.appendChild(containerResepRow2);
          containerBox.appendChild(containerResepRow);

          // Membuat elemen lainnya untuk bahan 5 sampai 10
          const ingredient5 = document.createElement("p");
          ingredient5.className = "ingredientItem";
          containerBox.appendChild(ingredient5);

          const ingredient6 = document.createElement("p");
          ingredient6.className = "ingredientItem";
          containerBox.appendChild(ingredient6);

          const ingredient7 = document.createElement("p");
          ingredient7.className = "ingredientItem";
          containerBox.appendChild(ingredient7);

          const ingredient8 = document.createElement("p");
          ingredient8.className = "ingredientItem";
          containerBox.appendChild(ingredient8);

          const ingredient9 = document.createElement("p");
          ingredient9.className = "ingredientItem";
          containerBox.appendChild(ingredient9);

          const ingredient10 = document.createElement("p");
          ingredient10.className = "ingredientItem";
          containerBox.appendChild(ingredient10);

          const btnClose = document.createElement("i");
          btnClose.className = "bi bi-x-circle btn-close";

          btnClose.addEventListener("click", () => {
            const containerBox = document.querySelector(".countainer-box");
            if (containerBox) {
              containerBox.remove();

              all.style = `* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  scroll-padding-top: 2rem;
  font-family: "Poppins", sans-serif;
  list-style: none;
  text-decoration: none;
}`
            }
          });

          containerBox.appendChild(btnClose);

          container.appendChild(containerBox);
          document.querySelector("header").appendChild(container);
        }


        popularImgDiv.appendChild(popularImg);
        popularItemDiv.appendChild(popularImg);
        const popularNameDiv = document.createElement("div");
        popularNameDiv.className = "popular-name";
        popularItemDiv.appendChild(popularNameDiv);
        const popularHeadingDiV = document.createElement("div");
        popularNameDiv.appendChild(popularHeadingDiV);
        const popularNameHeading = document.createElement("h3");
        popularNameHeading.textContent = data[a].name;
        popularHeadingDiV.appendChild(popularNameHeading);

        const popularSaleHeading = document.createElement("h3");
        popularSaleHeading.textContent = `Rp. ${parseInt(data[a].price).toLocaleString('id-ID')}`;
        popularHeadingDiV.appendChild(popularSaleHeading);


        const showRecipe = document.createElement("a");
        showRecipe.textContent = "Order Now";
        showRecipe.className = "recipe";
        showRecipe.style.cursor = "pointer";

        showRecipe.addEventListener("click", () => {
          if (orders.length != 0) {
            let check = false;
            for (let i = 0; i < orders.length; i++) {
              if (orders[i].id === data[a].id) {
                orders[i].qty++;
                break;
              } else {
                check = true;
              }
            }
            check && orders.push({ ...data[a], qty: 1 });
          } else {
            orders.push({ ...data[a], qty: 1 });
          }

          document.querySelector(".badge").textContent = orders.length;


        });

        popularNameDiv.appendChild(showRecipe);
        const div = document.querySelector("#popular-container");
        div.appendChild(popularItemDiv);
      }
    });
}

getIngredient();
