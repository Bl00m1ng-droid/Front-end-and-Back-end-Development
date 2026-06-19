//functions
async function loadComponent(selector, targetId, callback) {
  try {
    const response = await fetch('index.html');

    if (!response.ok) {
      throw new Error("Failed to load index.html");
    }

    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const element = doc.querySelector(selector);
    const target = document.getElementById(targetId);

    if (!element || !target) return;

    if (selector === '.header') {
      target.appendChild(element.cloneNode(true));

      setupMobileMenu();

      if (callback) callback(); 

      return true;
    }

    target.innerHTML = "";
    target.appendChild(element.cloneNode(true));

    if (callback) callback(); 

    return true;

  } catch (err) {
    console.error("Component load error:", err);
    return false;
  }
}
async function loadHeader() {
    const res = await fetch('/components/header.html');
    const html = await res.text();

    document.getElementById('headerplaceholder').innerHTML = html;

    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user && user.type === "admin") {

        // Change home link
        const homeLink = document.querySelector(".homeLink");
        if(homeLink){
            homeLink.href = "admin.html";
        }

        // Hide wishlist
        const wishlist = document.querySelector(".wishlist-link");
        if(wishlist){
            wishlist.style.display = "none";
        }

        // Hide cart
        const cart = document.querySelector(".cart-link");
        if(cart){
            cart.style.display = "none";
        }
    }
}

function loadFooter() {
  loadComponent('.footer', 'footerplaceholder');
}
function loadLogin() {
  loadComponent('.login-container', 'loginplaceholder');
}
function displayLoggedInUser() {

   
    const usernameDisplay =
        document.getElementById("username-display");

    if (!usernameDisplay) return;

    const currentUser =
        localStorage.getItem("loggedInUser");

    usernameDisplay.textContent =
        currentUser
            ? `Hi, ${currentUser}`
            : "Account";

}


function setupMobileMenu() {

    const mobileBtn =
        document.getElementById("mobile-menu-btn");

    const navbar =
        document.getElementById("nav-menu");

    if (!mobileBtn || !navbar) return;

    mobileBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}
function fetchBooks() {

    fetch('/api/books')

    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        return response.json();

    })

    .then(data => {

        const bookGrid =
            document.getElementById('book-grid');

        if (!bookGrid) return;

        bookGrid.innerHTML = "";

        data.forEach(book => {

            const bookCard =
                document.createElement('div');

            bookCard.className = 'book-card';

            bookCard.innerHTML = `

                <div class="book-img">
                <a href="book-details.html?id=${book.bookID}">
                    <img src="${book.image}"
                    alt="${book.title}">
                </a>
                    
                </div>

                <div class="book-info">

                    <div class="book-tag">
                        ${book.category}
                    </div>

                    <h3 class="book-title">
                        ${book.title}
                    </h3>

                    <p class="book-author">
                        Author: ${book.author}
                    </p>

                    <!--<p class="book-desc">
                        ${book.description}
                    </p>-->

                    <div class="book-footer">

                        <div class="book-price">
                            R${book.price}
                        </div>
                        <div>
                        <button class="btn btn-secondary add-cart-btn">
                            Add To Cart
                        </button>
                        <button class="btn btn-secondary add-wishlist-btn">
                            Add to Wishlist
                        </button>
                        </div>
                    </div>

                </div>

            `;

            // ======================================
            // ADD TO CART BUTTON
            // ======================================

            const addBtn =
                bookCard.querySelector(".add-cart-btn");

            addBtn.addEventListener("click", () => {

                addToCart(book);

            });

            const wishlistBtn = bookCard.querySelector(".add-wishlist-btn");
            wishlistBtn.addEventListener("click",() =>{
                addToWishlist(book);
            })

            bookGrid.appendChild(bookCard);

        });

    })

    .catch(error => {

        console.error(
            "Error fetching books:",
            error
        );

    });

}
function addToCart(book) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    // ======================================
    // CHECK IF BOOK EXISTS
    // ======================================
   
    const existingBook =
        cart.find(item => item.bookID === book.bookID);

    if (existingBook) {

        existingBook.quantity++;
        
    } else {

        cart.push({
            ...book,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(`${book.title} added to cart`);
    updateCartCount();
}
function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const cartCount =
        document.getElementById("cart-count");

    if (!cartCount) return;

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity || 1;

    });

    cartCount.textContent = totalItems;

}
function setupSearch() {

    const searchInput =
        document.querySelector(".search-input");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {

        const searchValue =
            searchInput.value.toLowerCase();

        const books =
            document.querySelectorAll(".book-card");

        books.forEach(book => {

            const title =
                book.querySelector(".book-title")
                .textContent
                .toLowerCase();

            const author =
                book.querySelector(".book-author")
                .textContent
                .toLowerCase();

            if (
                title.includes(searchValue) ||
                author.includes(searchValue)
            ) {

                book.style.display = "block";

            } else {

                book.style.display = "none";

            }

        });

    });

}
//search autocomplete
function setupAutocomplete() {

    const searchInput =
        document.querySelector(".search-input");

    const suggestions =
        document.getElementById("search-suggestions");

    if (!searchInput || !suggestions) return;

    searchInput.addEventListener("input", async () => {

        const query =
            searchInput.value.trim().toLowerCase();

        suggestions.innerHTML = "";

        if (query.length < 2) return;

        try {

            const response =
                await fetch("/api/books");

            const books =
                await response.json();

            const matches =
                books.filter(book =>
                    book.title.toLowerCase().includes(query) ||
                    book.author.toLowerCase().includes(query)
                )
                .slice(0, 5);

            matches.forEach(book => {

                const item =
                    document.createElement("div");

                item.classList.add("suggestion-item");

                item.innerHTML = `
                    <strong>${book.title}</strong>
                    <br>
                    <small>${book.author}</small>
                `;

                item.addEventListener("click", () => {

                    window.location.href =
                        `book-details.html?id=${book.bookID}`;

                });

                suggestions.appendChild(item);

            });

        } catch (err) {

            console.error(
                "Autocomplete error:",
                err
            );

        }

    });

}
function setupSignup() {

    const signupForm =
        document.querySelector('.auth-form');

    if (!signupForm) return;

    const confirmField =
        document.querySelector('#confirm-password');

    // only run on signup page
    if (!confirmField) return;

    signupForm.addEventListener('submit',
    async (e) => {

        e.preventDefault();

        const username =
            document.querySelector('#username').value;

        const email =
            document.querySelector('#email').value;

        const password =
            document.querySelector('#password').value;

        const confirm =
            document.querySelector('#confirm-password').value;

        const type =
            document.querySelector('#type').value;

        const address =
            document.querySelector('#address').value;

        // ======================================
        // VALIDATION
        // ======================================

        if (password !== confirm) {

            alert("Passwords do not match");

            return;

        }

        try {

            const response = await fetch(
                'http://localhost:3000/api/signup',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type':
                        'application/json'
                    },

                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        type,
                        address
                    })

                }
            );

            const data =
                await response.json();

            if (response.ok) {

                alert(
                    "Account created successfully!"
                );

                window.location.href =
                    "signIn.html";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(
                "Signup error:",
                error
            );

        }

    });

}
function setupSignin() {
    const signinForm = document.querySelector('.auth-form');
    if (!signinForm) return;

    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');

        if (!emailInput || !passwordInput) {
            alert("Form fields not found.");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const submitBtn = signinForm.querySelector("button[type='submit']");

        try {
            // Disable button (UX improvement)
            if (submitBtn) submitBtn.disabled = true;

            const response = await fetch('http://localhost:3000/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Login failed.");
                return;
            }

            // Save user session
            localStorage.setItem("loggedInUser", data.email);
            localStorage.setItem("userType", data.type);

            alert("Login successful!");

            if (data.type === "admin") {
                window.location.href = "admin.html";
            } else {
                window.location.href = "index.html";
           }

        } catch (error) {
            console.error("Signin error:", error);
            alert("Cannot connect to server. Please try again later.");

        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
}
function renderAuthNav() {

    const username = localStorage.getItem("loggedInUser");

    const authLink = document.getElementById("auth-link");
    const authText = document.getElementById("auth-text");

    if (!authLink || !authText) return;

    if (username) {

        authLink.href = "profile.html";
        authText.textContent = `Hi, ${username}`;

    } else {

        authLink.href = "signIn.html";
        authText.textContent = "Sign In";

    }
}
function logout() {

    if (!confirm("Are you sure you want to log out?")) return;

    localStorage.clear();

    renderAuthNav();

    setTimeout(() => {
        window.location.href = "signIn.html";
    }, 100);
}
function bookDetails() {

    const bookDetailsContainer =
        document.getElementById("book-details");

    if (!bookDetailsContainer) return; // only run on book-details.html

    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    if (!bookId) {
        bookDetailsContainer.innerHTML = "<p>No book selected.</p>";
        return;
    }

    fetch(`/api/books/${bookId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch book details");
        }
        return response.json();
    })
    .then(book => {
        bookDetailsContainer.innerHTML = `
            
               <div class="book-details-flex">
                   <div class="book-details-img">
                      <img src="${book.image}" alt="${book.title}">
                   </div>
                  
                   <div class="book-details-info">
                      <h2 class="book-title title-lg">${book.title}</h2>
                      <p class="book-author"><strong>Author:</strong> ${book.author}</p>
                      <p class="book-desc"><strong>Description:</strong> ${book.description}</p>
                      <div class="book-details-footer">
                           <div class="book-price">R${book.price}</div>
                           <button class="btn btn-secondary add-cart-btn">Add To Cart</button>
                            <p class="book-details-category"><strong>Category:</strong> ${book.category}</p>
                      </div>
                     
                    </div>
                </div>
           
        `;

        const addBtn = bookDetailsContainer.querySelector(".add-cart-btn");

        addBtn.addEventListener("click", () => {
            addToCart(book);
        });
        fetchRelatedBooks(book.bookID );
    })
    .catch(error => {
        console.error("Error fetching book details:", error);
        bookDetailsContainer.innerHTML = "<p>Error loading book details.</p>";
    });
    

}
function profileDetails() {
  const profileContainer = document.getElementById("profile-details");

  if (!profileContainer) return;

  const currentUser = localStorage.getItem("loggedInUser");

  if (!currentUser) {
    profileContainer.innerHTML = "<p>Please log in to view your profile.</p>";
    return;
  }

  fetch(`/api/user/${currentUser}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      return response.json();
    })
    .then(user => {
         console.log("User data:", user)
      profileContainer.innerHTML = `
        <i class="fas fa-user"></i>
        <h2>Username:${user.username}</h2>
        <p>Email: ${user.email}</p>
        <p>User Type: ${user.type}</p>
        <p>Address: ${user.address}</p>
      `;
    })
    .catch(error => {
      console.error("Error fetching user details:", error);
      profileContainer.innerHTML = "<p>Error loading profile details.</p>";
    });
}
//related books that that are in the same category as the current book
async function fetchRelatedBooks(bookID) {

    const container = document.getElementById("related-books");

    if (!container) return;

    try {
        const response = await fetch(`/api/books/related/${bookID}`);

        if (!response.ok) {
            throw new Error("Failed to fetch related books");
        }

        const books = await response.json();

        container.innerHTML = "";

        if (books.length === 0) {
            container.innerHTML = "<p>No related books found.</p>";
            return;
        }

        books.forEach(book => {
            const card = document.createElement("div");
            card.classList.add("related-book-card");

            card.innerHTML = `
                <div class="card book-card">
                   <div class="book-img">
                       <a href="book-details.html?id=${book.bookID}">
                           <img src="${book.image}" alt="${book.title}">
                       </a>
                    </div>

                <div class="book-info">

                    <div class="book-tag">  ${book.category}</div>

                    <h3 class="book-title">  ${book.title}</h3>

                    <p class="book-author">   Author: ${book.author}</p>

                    <div class="book-footer">

                        <div class="book-price">   R${book.price}</div>
                        
                    </div>

                </div>
            </div>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        console.error("Failed to load related books:", err);
    }
}
//catogory filter
function setupCategoryFilter() {

    const categorySelect = document.getElementById("category");

    if (!categorySelect) return;

    categorySelect.addEventListener("change", () => {

        const selected = categorySelect.value.toLowerCase();

        const books = document.querySelectorAll(".book-card");

        books.forEach(book => {

            const category = book
                .querySelector(".book-tag")
                .textContent
                .trim()
                .toLowerCase();

            if (!selected || category === selected) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }

        });

    });
}
//category sort
function setupSort() {

    const sortSelect = document.getElementById("sort");

    if (!sortSelect) return;

    sortSelect.addEventListener("change", () => {

        const value = sortSelect.value;

        const bookGrid = document.getElementById("book-grid");

        const books = Array.from(document.querySelectorAll(".book-card"));

        let sorted = [...books];

        // ======================================
        // SORT LOGIC
        // ======================================

        if (value === "title-asc") {

            sorted.sort((a, b) => {
                const titleA = a.querySelector(".book-title").textContent.toLowerCase();
                const titleB = b.querySelector(".book-title").textContent.toLowerCase();
                return titleA.localeCompare(titleB);
            });

        }

        else if (value === "price-low-high") {

            sorted.sort((a, b) => {
                const priceA = parseFloat(a.querySelector(".book-price").textContent.replace("R", ""));
                const priceB = parseFloat(b.querySelector(".book-price").textContent.replace("R", ""));
                return priceA - priceB;
            });

        }

        else if (value === "price-high-low") {

            sorted.sort((a, b) => {
                const priceA = parseFloat(a.querySelector(".book-price").textContent.replace("R", ""));
                const priceB = parseFloat(b.querySelector(".book-price").textContent.replace("R", ""));
                return priceB - priceA;
            });

        }

        else if (value === "author-asc") {

            sorted.sort((a, b) => {
                const authorA = a.querySelector(".book-author").textContent.toLowerCase();
                const authorB = b.querySelector(".book-author").textContent.toLowerCase();
                return authorA.localeCompare(authorB);
            });

        }

        // ======================================
        // RE-ATTACH ORDERED ELEMENTS
        // ======================================

        sorted.forEach(book => {
            bookGrid.appendChild(book);
        });

    });
}
//add to wishlist
function addToWishlist(book) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(item => item.bookID === book.bookID);

    if (exists) {
        alert("Already in wishlist");
        return;
    }

    wishlist.push(book);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(`${book.title} added to wishlist`);
    updateWishlistCount();
}
//remove from wishlist
function removeFromWishlist(bookID) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter(
        item => item.bookID !== bookID
    );

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();
    renderWishlist();
}
//wishlist count
function updateWishlistCount() {

    const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const wishlistCount =
        document.getElementById("wishlist-count");

    if (!wishlistCount) return;

    wishlistCount.textContent = wishlist.length;
}
//render wishlist
function renderWishlist() {

    const container = document.getElementById("wishlist-items");
    if (!container) return;

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    container.innerHTML = "";

    wishlist.forEach(book => {

        const card = document.createElement("div");
        card.classList.add("book-card");

        card.innerHTML = `
        
                <div class="book-img">
                <a href="book-details.html?id=${book.bookID}">
                    <img src="${book.image}"
                    alt="${book.title}">
                </a>
                    
                </div>

                <div class="book-info">

                    <div class="book-tag">
                        ${book.category}
                    </div>

                    <h3 class="book-title">
                        ${book.title}
                    </h3>

                    <p class="book-author">
                        Author: ${book.author}
                    </p>

                    <!--<p class="book-desc">
                        ${book.description}
                    </p>-->

                    <div class="book-footer">

                        <div class="book-price">
                            R${book.price}
                        </div>
                        <div>
                        <button class="btn btn-secondary add-cart-btn">
                            Add To Cart
                        </button>
                         <button class="btn btn-primary" onclick="removeFromWishlist(${book.bookID})">
                                 Remove
                         </button> 
                        </div>
                    </div>

                </div>
                  
        `;

        container.appendChild(card);
    });
}
//admin
async function loadDashboard() {
  try {
    const res = await fetch('/api/dashboard'); // <-- backend route
    const data = await res.json();

    // Update totals
    document.getElementById('totalBooks').textContent = data.totalBooks;
    document.getElementById('totalUsers').textContent = data.totalUsers;

    // Update categories
    const categoryGrid = document.getElementById('categoryGrid');
    categoryGrid.innerHTML = '';
    data.categories.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'admin-card';
      card.innerHTML = `<h3>${cat.category}</h3><p>${cat.count}</p>`;
      categoryGrid.appendChild(card);
    });

    // Stock alerts
const stockAlerts = document.getElementById('stockAlerts');
stockAlerts.innerHTML = '';

if (data.lowStock && data.lowStock.length > 0) {
  data.lowStock.forEach(book => {
    const alert = document.createElement('div');
    alert.className = 'stock-alert stock-low';
    alert.textContent = `${book.title} — only ${book.stockQuantity} left!`;
    stockAlerts.appendChild(alert);
  });
} else {
  stockAlerts.innerHTML = '<p class="stock-ok">All stock levels are healthy</p>';
}

  } catch (err) {
    console.error('Error loading dashboard:', err);
  }
}
//add book form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addBookForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      try {
        const res = await fetch('/api/add-book', {
          method: 'POST',
          body: formData
        });
        const result = await res.json();
        alert(result.message);

        if (result.success) {
          loadDashboard();   // refresh dashboard
          e.target.reset();  // clear form fields
        }
      } catch (err) {
        console.error('Error adding book:', err);
        alert('Something went wrong while adding the book.');
      }
    });
  }
});


// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        // Prevent errors on empty links
        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

//rendercart
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const continueShoppingBtn = document.getElementById("continueShoppingBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (!cartItemsContainer) return; // only run on Cart.html

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-item">
      <p class=" text-muted">Your cart is empty.</p>
      <i class="fa-solid fa-cart-shopping fa-3x"></i>
        </div>
    `;
    cartTotalElement.textContent = "0.00";
    checkoutBtn.disabled = true;
    checkoutBtn.classList.add("disabled-btn")
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-info">
        <h3>${item.title}</h3>
        <p>Price: R${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <div class="cart-controls">
          <button class="btn btn-secondary" data-action="increase" data-index="${index}">+</button>
          <span>1</span>
          <button class="btn btn-secondary" data-action="decrease" data-index="${index}">-</button>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  cartTotalElement.textContent = total.toFixed(2);
  checkoutBtn.disabled = false;
  checkoutBtn.classList.remove("disabled-btn");
  updateCartCount();
}


  cartItemsContainer.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    const index = e.target.dataset.index;

    if (action && index !== undefined) {
      if (action === "increase") {
        cart[index].quantity++;
      } else if (action === "decrease") {
        cart[index].quantity--;
        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }
      } else if (action === "remove") {
        cart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  continueShoppingBtn.addEventListener("click", () => {
    window.location.href = "Catalog.html"; 
  });

  checkoutBtn.addEventListener("click", () => {
    alert("Proceeding to checkout...");
    localStorage.removeItem("cart"); // clear cart after checkout
    renderCart();
  });

  renderCart();
});


document.addEventListener("DOMContentLoaded", async () => {

    await loadHeader();

    displayLoggedInUser();
    updateCartCount();
    renderAuthNav();

    profileDetails();

    setupMobileMenu();
    setupSignin();
    setupSignup();
    setupSearch();
    setupAutocomplete();

    fetchBooks();
    bookDetails();
    setupCategoryFilter();
    setupSort();
    renderWishlist();
    updateWishlistCount();
    loadDashboard();

    loadFooter();

});


