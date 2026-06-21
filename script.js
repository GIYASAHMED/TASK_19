const laundryServices = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=900",
    serviceName: "Wash & Fold",
    amount: 80,
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1633680889715-2c9752bf0840?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FzaCUyMGFuZCUyMGlyb258ZW58MHx8MHx8fDA%3D",
    serviceName: "Wash & Iron",
    amount: 120,
  },

  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=900",
    serviceName: "Dry Cleaning",
    amount: 250,
  },

  {
    id: 4,
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=900",
    serviceName: "Shirt Cleaning",
    amount: 50,
  },

  {
    id: 5,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900",
    serviceName: "Pant Cleaning",
    amount: 70,
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJlbWl1bSUyMGxhdW5kcnl8ZW58MHx8MHx8fDA%3D",
    serviceName: "Premium Laundry",
    amount: 500,
  },

  {
    id: 7,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    serviceName: "Blanket Cleaning",
    amount: 300,
  },

  {
    id: 8,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900",
    serviceName: "Curtain Cleaning",
    amount: 350,
  },

  {
    id: 9,
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=900",
    serviceName: "Shoe Cleaning",
    amount: 150,
  },

  {
    id: 10,
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=900",
    serviceName: "Express Laundry",
    amount: 200,
  },
];

const servicePart = document.querySelector(".servicesImgPart");
const skipBtn = document.getElementById("skipBtn");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const warningMsg = document.querySelector(".warning");
const totalVlue = document.querySelector(".totalVlue");
const bookNowBtn = document.getElementById("bookNowBtn");
const bookingMsg = document.querySelector(".bookingMsg");

let currentService = 0;
let cartServices = [];

function renderCurrentService() {
  let service = laundryServices[currentService];
  servicePart.innerHTML = `<div class="serviceImg">
                  <img
                    src="${service.image}"
                    alt="${service.serviceName}"
                  />
                  <div class="serviceContent">
                    <h4>${service.serviceName}</h4>
                    <h4>₹${service.amount}</h4>
                  </div>
                </div>`;
}
renderCurrentService();

skipBtn.addEventListener("click", nextService);

function nextService() {
  currentService++;
  if (currentService >= laundryServices.length) {
    currentService = 0;
  }
  renderCurrentService();
}

function renderAddToCart() {
  tableBody.innerHTML = "";
  cartServices.map((cart) => {
    tableBody.innerHTML += `<tr>
                        <td>${cart.id}</td>
                        <td>${cart.serviceName}</td>
                        <td>₹${cart.amount}</td>
                      </tr>`;
  });

  bookingMsg.classList.add("hide");
  bookNowBtn.style.background = "";

  let TotalAmount = cartServices.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  totalVlue.textContent = TotalAmount;
}

addBtn.addEventListener("click", () => {
  const selectedItem = laundryServices[currentService];
  console.log(selectedItem);

  cartServices.push(selectedItem);
  if (cartServices.length > 0) {
    warningMsg.classList.add("hide");
  }
  renderAddToCart();
  nextService();
});

// Form handling

bookNowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const fname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  console.log(fname, email, phone);
  msg2()
});

function msg2() {
  if (cartServices.length == 0) {
    bookingMsg.classList.remove("hide");
    bookNowBtn.style.background = "red";
  }

}

// ⚠️   Readme text

// ⚠️   Without input field form submit
