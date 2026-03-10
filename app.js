document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU ================= */
    const btn = document.querySelector(".lang-btn");
    const menu = document.querySelector(".lang-dropdown");
  
    if (btn && menu) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("show");
      });
  
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".lang-dropdown")) {
          menu.classList.remove("show");
        }
      });
    }
  
    /* ================= SLIDER ================= */
    const inner = document.querySelector(".inner");
    const cards = document.querySelectorAll(".card");
    const rightBtn = document.querySelector(".right");
    const leftBtn = document.querySelector(".left");
  
    if (inner && cards.length && rightBtn && leftBtn) {
      let index = 0;
      const cardWidth = cards[0].offsetWidth + 20;
      const total = cards.length;
      const visible = 5;
  
      rightBtn.addEventListener("click", () => {
        index++;
        if (index > total - visible) index = 0;
        inner.style.transform = `translateX(-${index * cardWidth}px)`;
      });
  
      leftBtn.addEventListener("click", () => {
        index--;
        if (index < 0) index = total - visible;
        inner.style.transform = `translateX(-${index * cardWidth}px)`;
      });
    }
  
    /* ================= FETCH PRODUCTS ================= */
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => {
  
        products.forEach((item, i) => {
          const n = i + 1;
  
          const img  = document.getElementById(`img${n}`);
          const a    = document.getElementById(`a${n}`);
          const as   = document.getElementById(`as${n}`);
          const asp  = document.getElementById(`asp${n}`);
          const aspp = document.getElementById(`aspp${n}`);
          const iq   = document.getElementById(`iq${n}`);
  
          // Agar HTML’da yo‘q bo‘lsa – xatosiz o‘tkazib yuboradi
          if (!img || !a || !as || !asp || !aspp || !iq) return;
  
          img.src = item.image;
          img.style.width = "100%";
          img.style.height = "20vh";
          img.style.objectFit = "contain";
  
          a.textContent = item.description;
          a.style.color = "black";
          a.style.fontSize = "8px";
  
          as.textContent = `$${item.price}`;
          as.style.marginTop = "20px";
  
          asp.textContent = item.category;
          asp.style.marginTop = "-20px";
  
          aspp.textContent = item.rating.rate;
          aspp.style.marginTop = "-20px";
  
          iq.textContent = item.title;
          iq.style.color = "black";
        });
  
      })
      .catch(err => console.error("Fetch xato:", err));
  
  });