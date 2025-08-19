(() => {
  // Single peso formatter
  function formatPeso(n) {
    return "₱" + Number(n || 0).toFixed(2);
  }

  const TAX = 0.12;
  const els = {
    attract: document.getElementById("attract"),
    startOrdering: document.getElementById("startOrdering"),
    app: document.getElementById("app"),
    menu: document.getElementById("menu"),
    cartList: document.getElementById("cartList"),
    tSubtotal: document.getElementById("tSubtotal"),
    tTax: document.getElementById("tTax"),
    tTotal: document.getElementById("tTotal"),
    btnCheckout: document.getElementById("btnCheckout"),
    btnClear: document.getElementById("btnClear"),
    chips: Array.from(document.querySelectorAll(".chip")),
    clock: document.getElementById("clock"),

    paymentModal: document.getElementById("paymentModal"),
    cashModal: document.getElementById("cashModal"),
    cardModal: document.getElementById("cardModal"),

    cashDue: document.getElementById("cashDue"),
    cashTendered: document.getElementById("cashTendered"),
    cashChange: document.getElementById("cashChange"),
    btnCashConfirm: document.getElementById("btnCashConfirm"),
    keypadDisplay: document.getElementById("keypadDisplay"),

    cardAnim: document.getElementById("cardAnim"),
    btnSimulateCard: document.getElementById("btnSimulateCard"),
    btnCardApproved: document.getElementById("btnCardApproved"),

    complete: document.getElementById("complete"),
    rcptMeta: document.getElementById("rcptMeta"),
    rcptLines: document.getElementById("rcptLines"),
    rSubtotal: document.getElementById("rSubtotal"),
    rTax: document.getElementById("rTax"),
    rTotal: document.getElementById("rTotal"),
    rCash: document.getElementById("rCash"),
    rTendered: document.getElementById("rTendered"),
    rChange: document.getElementById("rChange"),
    btnNewOrder: document.getElementById("btnNewOrder"),
    btnPrint: document.getElementById("btnPrint"),

    btnFull: document.getElementById("btnFull"),
  };

  const catalog = [
    //Curry
    {
      id: "b1",
      name: "Massaman ",
      cat: "curry",
      price: 229,
      img: "assets/curry/curry.jpeg",
      badge: "Best",
    },
    {
      id: "b2",
      name: "Gaeng Keow ",
      cat: "curry",
      price: 179,
      img: "assets/curry/green.jpeg",
    },
    {
      id: "b3",
      name: "Gaeng Phed ",
      cat: "curry",
      price: 159,
      img: "assets/curry/red.jpeg",
    },
    {
      id: "b4",
      name: "Gaeng Pangle",
      cat: "curry",
      price: 189,
      img: "assets/curry/jungle.jpg",
    },
    {
      id: "b5",
      name: "Phanaeng",
      cat: "curry",
      price: 149,
      img: "assets/curry/panang.jpg",
    },
    {
      id: "b6",
      name: "Gaeng Karee",
      cat: "curry",
      price: 210,
      img: "assets/curry/yellow.jpg",
    },

    //Noodles
    {
      id: "s1",
      name: "Pad Thai",
      cat: "noodles",
      price: 159,
      img: "assets/noodles/padthai.jpg",
      badge: "Best",
    },
    {
      id: "s2",
      name: "Pad See Ew",
      cat: "noodles",
      price: 169,
      img: "assets/noodles/padseeew.jpeg",
    },
    {
      id: "s3",
      name: "Pad Kee Mao ",
      cat: "noodles",
      price: 179,
      img: "assets/noodles/drunken.jpeg",
    },
    {
      id: "s4",
      name: "Kuay Teow",
      cat: "noodles",
      price: 149,
      img: "assets/noodles/kuayteow.jpg",
    },
    {
      id: "s5",
      name: "Khao Soi",
      cat: "noodles",
      price: 179,
      img: "assets/noodles/khaosoi.jpg",
    },
    {
      id: "s6",
      name: "Sen Lek",
      cat: "noodles",
      price: 209,
      img: "assets/noodles/senlek.jpg",
    },
    //Soup
    {
      id: "d1",
      name: "Tom Yum",
      cat: "soup",
      price: 179,
      img: "assets/soup/tomyum.jpg",
      badge: "Best",
    },
    {
      id: "d2",
      name: "Tom Kha Gai",
      cat: "soup",
      price: 180,
      img: "assets/soup/tom.jpeg",
    },
    {
      id: "d3",
      name: "Gaeng Jued",
      cat: "soup",
      price: 159,
      img: "assets/soup/clear.jpeg",
    },
    {
      id: "d4",
      name: "Khao Tom",
      cat: "soup",
      price: 159,
      img: "assets/soup/khaotom.jpg",
    },
    {
      id: "d5",
      name: "Kaeng Om",
      cat: "soup",
      price: 169,
      img: "assets/soup/kaengom.jpg",
    },
    {
      id: "d6",
      name: "Nam Prik",
      cat: "soup",
      price: 159,
      img: "assets/soup/namprik.jpg",
    },
    //Dessert
    {
      id: "ds1",
      name: "Mango Sticky Rice",
      cat: "desserts",
      price: 127,
      img: "assets/dessert/mango.jpeg",
      badge: "Best",
    },
    {
      id: "de1",
      name: "Thai Coconut Pudding",
      cat: "desserts",
      price: 115,
      img: "assets/dessert/pudding.jpeg",
    },
    {
      id: "df1",
      name: "Fried Banana",
      cat: "desserts",
      price: 109,
      img: "assets/dessert/banana.jpg",
    },
    {
      id: "dg1",
      name: "Thong Yip",
      cat: "desserts",
      price: 99,
      img: "assets/dessert/thongyip.jpg",
    },
    {
      id: "dh1",
      name: "Tub Tim",
      cat: "desserts",
      price: 99,
      img: "assets/dessert/tubtim.jpg",
    },
    {
      id: "di1",
      name: "Bua Loy",
      cat: "desserts",
      price: 109,
      img: "assets/dessert/bualoy.jpg",
    },
    //Drinks
    {
      id: "dg2",
      name: "Thai Iced Tea",
      cat: "drinks",
      price: 99,
      img: "assets/drink/1.jpeg",
      badge: "Best",
    },
    {
      id: "dh2",
      name: "Thai Iced Coffee",
      cat: "drinks",
      price: 99,
      img: "assets/drink/2.jpeg",
    },
    {
      id: "dk2",
      name: "Lemongrass Tea",
      cat: "drinks",
      price: 99,
      img: "assets/drink/3.jpeg",
    },
    {
      id: "dl2",
      name: "Cha Manao",
      cat: "drinks",
      price: 99,
      img: "assets/drink/chamanao.jpg",
    },
    {
      id: "dm2",
      name: "Cha Yen",
      cat: "drinks",
      price: 99,
      img: "assets/drink/chayen.jpg",
    },
    {
      id: "dn2",
      name: "Nam Dok",
      cat: "drinks",
      price: 99,
      img: "assets/drink/namdok.jpg",
    },
  ];

  let cart = [];
  let orderId = 1;
  let idleTimer = null;

  function resetIdleTimer() {
    // Example: clear and restart your idle timer
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      showAttract(false);
    }, idleTimeoutDuration);
  }
  function showAttract(show) {
    // Example: show or hide the attract screen
    document.getElementById("attract-screen").style.display = show
      ? "block"
      : "none";
  }

  function renderMenu(filter = "all") {
    els.menu.innerHTML = "";
    catalog
      .filter((it) => (filter === "all" ? true : it.cat === filter))
      .forEach((it) => {
        const card = document.createElement("button");
        card.className = "card";
        card.innerHTML = `
              <img alt="${it.name}" src="${it.img}" />
              <div style="flex:1">
                <div class="title">${it.name}</div>
                <div class="muted">${
                  it.cat.charAt(0).toUpperCase() + it.cat.slice(1)
                }</div>
                <div class="price">${formatPeso(it.price)}</div>
              </div>
              ${
                it.badge
                  ? `<span class="badge ${it.cat === "deals" ? "deal" : ""}">${
                      it.badge
                    }</span>`
                  : ""
              }
            `;
        card.addEventListener("click", () => addToCart(it.id));
        card.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          addToCart(it.id);
        });
        els.menu.appendChild(card);
      });
  }

  function addToCart(id) {
    const found = cart.find((l) => l.id === id);
    if (found) found.qty++;
    else {
      const it = catalog.find((i) => i.id === id);
      cart.push({ id: it.id, name: it.name, price: it.price, qty: 1 });
    }
    renderCart();
  }

  function renderCart() {
    els.cartList.innerHTML = "";
    if (cart.length === 0) {
      els.btnCheckout.disabled = true;
      els.cartList.innerHTML = '<li class="muted">Your cart is empty.</li>';
    } else {
      els.btnCheckout.disabled = false;
    }

    let subtotal = 0;
    cart.forEach((line) => {
      const lineTotal = line.price * line.qty;
      subtotal += lineTotal;
      const li = document.createElement("li");
      li.className = "li";
      li.innerHTML = `
  <div>
    <div class="name">${line.name}</div>
    <div class="muted">${formatPeso(line.price)} each</div>
  </div>
  <div class="qty">
    <button aria-label="Decrease" data-dec>−</button>
    <div>${line.qty}</div>
    <button aria-label="Increase" data-inc>＋</button>
  </div>
  <div class="line-total">${formatPeso(lineTotal)}</div>
  `;
      li.querySelector("[data-inc]").onclick = () => {
        line.qty++;
        renderCart();
      };
      li.querySelector("[data-dec]").onclick = () => {
        line.qty--;
        if (line.qty <= 0) {
          cart = cart.filter((x) => x !== line);
        }
        renderCart();
      };
      els.cartList.appendChild(li);
    });
    const tax = subtotal * TAX;
    const total = subtotal + tax;
    els.tSubtotal.textContent = formatPeso(subtotal);
    els.tTax.textContent = formatPeso(tax);
    els.tTotal.textContent = formatPeso(total);
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.remove("hidden");
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.add("hidden");
  }

  // Payment Flow
  function startCheckout() {
    openModal(els.paymentModal);
  }

  // Cash
  let tendered = 0;
  function refreshCash() {
    const due = getTotals().total;
    els.cashDue.textContent = formatPeso(due);
    els.cashTendered.textContent = formatPeso(tendered);
    const change = Math.max(0, tendered - due);
    els.cashChange.textContent = formatPeso(change);
    els.btnCashConfirm.disabled = tendered < due;
    if (els.keypadDisplay)
      els.keypadDisplay.textContent = Number(tendered || 0).toFixed(2);
  }

  function getTotals() {
    const subtotal = cart.reduce((s, l) => s + l.price * l.qty, 0);
    const tax = subtotal * TAX;
    return { subtotal, tax, total: subtotal + tax };
  }

  function finishOrder(payment) {
    const { subtotal, tax, total } = getTotals();
    // Build receipt
    const now = new Date();
    const meta = `#${String(orderId).padStart(
      4,
      "0"
    )} • ${now.toLocaleString()}`;
    els.rcptMeta.textContent = meta;
    els.rcptLines.innerHTML = cart
      .map(
        (l) => `
  <div class="row"><span>${l.qty} × ${l.name}</span><strong>${formatPeso(
          l.qty * l.price
        )}</strong></div>
  `
      )
      .join("");
    els.rSubtotal.textContent = formatPeso(subtotal);
    els.rTax.textContent = formatPeso(tax);
    els.rTotal.textContent = formatPeso(total);

    if (payment && payment.type === "cash") {
      els.rCash.classList.remove("hidden");
      els.rTendered.textContent = formatPeso(payment.tendered);
      els.rChange.textContent = formatPeso(payment.tendered - total);
    } else {
      els.rCash.classList.add("hidden");
    }
    // Show complete screen
    els.complete.classList.remove("hidden");
    // Print immediately
    setTimeout(() => window.print(), 200);

    // Reset order
    orderId++;
  }

  // Fullscreen helper
  function toggleFull() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  // Clock
  setInterval(() => {
    els.clock.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, 1000);

  // Category chips
  els.chips.forEach((ch) =>
    ch.addEventListener("click", () => {
      els.chips.forEach((c) => c.classList.remove("active"));
      ch.classList.add("active");
      renderMenu(ch.dataset.cat);
    })
  );

  // Buttons
  els.btnCheckout.addEventListener("click", startCheckout);
  els.btnClear.addEventListener("click", () => {
    cart = [];
    renderCart();
  });
  els.btnFull.addEventListener("click", toggleFull);

  // Payment modal actions
  document.addEventListener("click", (e) => {
    // delegate for payment modal buttons and close buttons
    const target = e.target;
    if (!target) return;

    // Close any modal buttons with data-close
    if (target.matches("[data-close]")) {
      // find closest modal ancestor and close it
      const modal = target.closest(".modal");
      if (modal) closeModal(modal);
    }

    // Payment choice (cash/card) inside payment modal
    if (target.dataset.pay === "cash") {
      closeModal(els.paymentModal);
      openModal(els.cashModal);
      tendered = 0;
      refreshCash();
    }
    if (target.dataset.pay === "card") {
      closeModal(els.paymentModal);
      openModal(els.cardModal);
      if (els.cardAnim) els.cardAnim.textContent = "Insert / Tap your card…";
      if (els.btnCardApproved) els.btnCardApproved.disabled = true;
    }
  });

  // Cash modal close handled by delegated listener above

  // Cash keypad
  function setupCashKeypad() {
    document.querySelectorAll("#cashModal [data-k]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const k = btn.dataset.k;
        if (k === "clear") tendered = 0;
        else if (k === "enter") {
          /* noop for now */
        } else if (k === ".") {
          // ignore, decimals handled through internal representation
        } else {
          // Build numeric cents representation
          const currentStr = (tendered || 0).toFixed(2).replace(".", "");
          let val = currentStr + (k === "00" ? "00" : k);
          // trim leading zeros
          val = val.replace(/^0+(?=\d)/, "");
          tendered = Number(val) / 100;
        }
        refreshCash();
      })
    );
  }
  setupCashKeypad();

  // Quick cash chips
  document.querySelectorAll("[data-quick]").forEach((b) =>
    b.addEventListener("click", () => {
      tendered += Number(b.dataset.quick);
      refreshCash();
    })
  );

  els.btnCashConfirm.addEventListener("click", () => {
    closeModal(els.cashModal);
    finishOrder({ type: "cash", tendered });
    cart = [];
    renderCart();
  });

  // Card simulation
  els.btnSimulateCard.addEventListener("click", () => {
    els.cardAnim.textContent = "Processing…";
    els.btnSimulateCard.disabled = true;
    setTimeout(() => {
      els.cardAnim.textContent = "Approved ✅";
      els.btnCardApproved.disabled = false;
    }, 1600);
  });
  els.btnCardApproved.addEventListener("click", () => {
    closeModal(els.cardModal);
    finishOrder({ type: "card" });
    cart = [];
    renderCart();
    els.btnSimulateCard.disabled = false;
  });

  // Complete screen actions
  els.btnNewOrder.addEventListener("click", () => {
    els.complete.classList.add("hidden");
    showAttract(true);
  });
  els.btnPrint.addEventListener("click", () => window.print());
  // Attract screen + start
  document.addEventListener("DOMContentLoaded", () => {
    if (els.startOrdering) {
      els.startOrdering.addEventListener("click", () => {
        showAttract(true);
        resetIdleTimer();
      });
    }
  });

  // Global listeners
  ["click", "touchstart", "keydown"].forEach((evt) =>
    document.addEventListener(evt, resetIdleTimer, { passive: true })
  );

  // Init
  renderMenu("all");
  renderCart();
  showAttract(false); // set to true if you want attract first
})();
