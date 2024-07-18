function createProductCard() {
  const card = document.createElement("div");
  card.style.display = "inline-block";
  card.style.width = "250px";
  card.style.height = "350px";
  card.style.border = "1px solid #ddd";
  card.style.borderRadius = "5px";
  card.style.padding = "10px";
  card.style.margin = "10px";

  card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";

  const image = document.createElement("img");
  image.src = "../img/images.jfif";
  image.style.width = "100%";
  image.style.height = "200px";
  image.style.objectFit = "cover";
  image.style.borderRadius = "5px";

  const title = document.createElement("h3");
  title.textContent = "AL DOHA Egyptian White Rice 1kg";
  title.style.marginTop = "10px";
  title.style.fontWeight = "bold";

  const price = document.createElement("p");
  price.textContent = "EGP 35.25";
  price.style.fontSize = "18px";
  price.style.color = "green";

  const oldPrice = document.createElement("span");
  oldPrice.textContent = "49.95";
  oldPrice.style.textDecoration = "line-through";
  oldPrice.style.color = "#888";
  oldPrice.style.fontSize = "14px";

  const discount = document.createElement("span");
  discount.textContent = " 29% OFF";
  discount.style.color = "green";
  discount.style.fontSize = "14px";

  const delivery = document.createElement("p");
  delivery.textContent = "Free Delivery";
  delivery.style.fontSize = "14px";
  delivery.style.color = "#888";

  const express = document.createElement("div");
  express.style.backgroundColor = "#fff";
  express.style.border = "1px solid #ddd";
  express.style.padding = "5px 10px";
  express.style.borderRadius = "5px";
  express.style.marginTop = "10px";
  express.style.display = "flex";
  express.style.alignItems = "center";

  const expressIcon = document.createElement("img");
  expressIcon.src = "https://i.imgur.com/uO7j4t2.png";
  expressIcon.style.width = "20px";
  expressIcon.style.height = "20px";
  expressIcon.style.marginRight = "5px";
  //   expressIcon.style.marginBottom = "30px";

  const expressText = document.createElement("span");
  expressText.textContent = "Get it by 20 July";

  express.appendChild(expressIcon);
  express.appendChild(expressText);

  price.appendChild(oldPrice);
  price.appendChild(discount);

  const favoriteIcon = document.createElement("i");
  favoriteIcon.className = "fas fa-heart";
  favoriteIcon.style.fontSize = "18px";
  favoriteIcon.style.color = "#888";
  favoriteIcon.style.cursor = "pointer";

  const cartButton = document.createElement("button");
  cartButton.textContent = "Add to Cart";
  cartButton.style.backgroundColor = "#337ab7";
  cartButton.style.color = "#fff";
  cartButton.style.border = "none";
  cartButton.style.padding = "10px 20px";
  cartButton.style.borderRadius = "5px";
  cartButton.style.cursor = "pointer";

  cartButton.addEventListener("click", () => {
    // Add to cart logic here
    console.log("Added to cart!");
  });

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(delivery);
  card.appendChild(express);
  card.appendChild(favoriteIcon);
  card.appendChild(cartButton);

  document.body.appendChild(card);
}
createProductCard();
createProductCard();
createProductCard();
createProductCard();
createProductCard();
createProductCard();
