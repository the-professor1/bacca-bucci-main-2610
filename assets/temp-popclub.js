// // //variables
// console.log('baccabucci_live 6.0');
// const popcoinsBottomBtn = document.querySelector("#popcoinsBottomBtn");

// const popcoinBtnSpan = document.querySelector("#popcoinBtnSpan");
// const popcoinsModalCloseBtn = document.querySelector("#popcoinsModalCloseBtn");

// const popcoinsIframeModal = document.querySelector("#popcoinsIframeModal");
// const popCoinsIframe = document.querySelector("#popcoinsIframe");
// const defaultIframeURL = "https://coins.mypopcoins.com/?brand=baccabucci";

// const key = customCookie();
// const parameters = "?shop=" + Shopify.shop + "&key=" + key;

// const rewardsName = "Bacca Bucci Rewards";
// const rewardsCallOut = "Get upto 5% Off using";

// const getAvailablePopcoinsURL =
//   "https://prodreplica.mypopcoins.com/api/get-available-coins";
// const getBrandURL = "https://prodreplica.mypopcoins.com/api/get-brand?shop=";
// const getCartDiscountURL =
//   "https://prodreplica.mypopcoins.com/api/get-coins-cart-discount";
// const removeDiscountCode =
//   "https://prodreplica.mypopcoins.com/api/remove-discount-code";

// let popCoinsAvailable = false;
// let popCoinsLoginFlag = document.querySelector("#pop-club-login-flag");
// let popCoins = 0;

// function cartSessionUpdate(popClubSessionKey) {
//   let shopifyToken = {
//     'attributes': {
//       'pop_token': `${popClubSessionKey}`
//     }
//   };

//   fetch(window.Shopify.routes.root + 'cart/update.js', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(shopifyToken)
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

// //PLP
// // let productCard = document.querySelectorAll(".product-item .card");
// // let popcoinsListingDiv = document.getElementsByClassName("pop-club-listing");

// //PDP

// //CART DRAWER
// let cartDrawerPopcoinsLabel = document.querySelector(
//   "#buy-with-pop-coins-cart-drawer-label"
// );
// if (cartDrawerPopcoinsLabel) {
//   $(document).on('click', '#buy-with-pop-coins-cart-drawer-label', function () {
//     if (popCoinsLoginFlag.value == "false") {
//       openPopcoinsModal();
//     }
//   })
// }
// //CART PAGE
// let cartPagePopcoinsLabel = document.querySelector(
//   "#buy-with-pop-coins-cart-page-label"
// );

// let externalCheckout = ".CartDrawer-Checkout";
// let externalCheckoutOnPDP = "#gokwik-buy-now";
// const lottieAnimation = "";
// const rewardNameLottieAnimationLink = "BaccaBucci Rewards <lottie-player class='popcoins-lottie-animation'src='https://ik.imagekit.io/t2vt6tx4m/media/112490-new-tag.json' background='transparent'  speed='1'  style='width: 60px; height: 40px;' loop autoplay></lottie-player>";
// saveBrandData();
// function saveBrandData() {
//   fetch(getBrandURL + Shopify.shop)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // if (localStorage.getItem("popCoinsIframeUrl") !== null) {
//       //   // myKey is set in localStorage
//       // } else {
//       //   // myKey is not set in localStorage
//       localStorage.setItem("popCoinsIframeUrl", data.iframe_url);
//       // }
//       // if (localStorage.getItem("popCoinsIssuance") !== null) {
//       //   // myKey is set in localStorage
//       // } else {
//       // myKey is not set in localStorage
//       localStorage.setItem("popCoinsIssuance", data.issuance);
//       // }
//       // if (localStorage.getItem("popCoinsRedeem") !== null) {
//       //   // myKey is set in localStorage
//       // } else {
//       // myKey is not set in localStorage
//       localStorage.setItem("popCoinsRedeem", data.redeem);
//       // }
//     })
//     .catch((error) => {
//       console.log("Error in brand api - popcoins ", error);
//     });
// }

// // function setIframeURL() {
// //   if (localStorage.getItem("") !== null) {
// //     popCoinsIframe.src =
// //       localStorage.getItem("popCoinsIframeUrl") + "?key=" + key;
// //   } else {
// //     popCoinsIframe.src = defaultIframeURL + "?key=" + key;
// //   }

// //   if (window.location.href.indexOf("/cart") != -1) {
// //   } else {
// //     popcoinsBottomBtn.style.display = "block";
// //   }
// // }


// function updateCartData(currKey) {

//   let updatenew = {
//     'line': 0,
//     'properties': { '__pop_id': currKey }
//   }

//   fetch(window.Shopify.routes.root + 'cart/change.js', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updatenew)
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

// }

// function load_iframe() {
//   console.log('Iframe Loaded');

//   let keyvalue1 = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];
//   if (window.location.href.indexOf('/products/') != -1) {
//     var redeemPrices = document.getElementById('pop-club-redeem-price').value;
//     let key = document.cookie
//       .split('; ')
//       .find((row) => row.startsWith('_shopify_s='))
//       ?.split('=')[1];
//     let redeemCoins = redeemPrices;
//     popCoinsIframe.src =
//       defaultIframeURL + '&key=' + key + '&page=pdp&discount=' + redeemCoins + '&url='+window.location.href;
//   } else {
//     let cartPage = '';
//     if (window.location.href.indexOf('/cart') != -1) {
//       cartPage = '&page=cart';
//     }
//     popCoinsIframe.src =
//       defaultIframeURL + '&key=' + keyvalue1 + cartPage + '&url='+window.location.href;
//   }
// }

// function openPopcoinsModal() {
//   setTimeout(function () {
//     customAddClass("body", "popcoinsModalActive");
//     popcoinsIframeModal.style.display = "block";
//   }, 200);
// }

// function create(el) {
//   var d = document;
//   var element = d.createElement(el);
//   element.classList.add("manual-class");
//   return element;
// }

// document.addEventListener('touchstart', load_iframe, { once: true });
// document.addEventListener('mousemove', load_iframe, { once: true });

// document.addEventListener("DOMContentLoaded", function () {

//   // const popClubSessionKey = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];
//   // cartSessionUpdate(popClubSessionKey);

//   // let loaderDiv = document.createElement("div");
//   // loaderDiv.setAttribute("class", "popCoinsLoader");
//   // document.body.prepend(loaderDiv);
//   // load_iframe();
//   // addPopcoinsInMenu();

//   cart_bottom_menu_handle();
//   showPopCoins();
//   if (window.location.href.indexOf("/cart") != -1) {
//     document.getElementById('popcoinsBottomBtn').style.display = "none";
//   }
//   cartPage();
//   window.addEventListener("click", function () {
//     if (window.location.href.indexOf("/cart") != -1) {
//       // showPopCoins();
//       document.getElementById('popcoinsBottomBtn').style.display = "none";
//     }
//   });
//   if (window.location.href.indexOf("/product") != -1) {
//     pdp_buy_now_page()
//   } else {
//     pdp_buy_now();
//   }
//   // $(document).on('click','.product-item__quick-form',function(){
//   //   console.log('omin');
//   //   setTimeout(function(){
//   //     pdp_buy_now()
//   //   },1000);
//   // })
//   // if(screen.width < 1025 && window.location.href.indexOf("/product") != -1){
//   //   popcoinsBottomBtn.style.display = "none";
//   // }
// });
// $(document).on('click', '.product-form__quantity .quantity-selector', function () {
//   pdp_buy_now();
//   pdp_buy_now_page();
// });
// $(document).on('click', '#mini-cart-form .quantity-selector', function () {
//   if (screen.width < 1025) {
//     setTimeout(function () {
//       cartDrawerSubTotalChanges();
//     }, 500)
//   }
// })
// $(document).on('click', '.product-item__quick-form .button--outline, .shopify-product-form .product-item__link, .product-item__quick-form .product-item__quick-buy-button', function () {
//   // if ($('.lock-all').length == 1) {
//   // pointerEventNone.style.pointerEvents = "none"
//   setTimeout(function () {
//     showPopCoins();
//     cartDrawerSubTotalChanges();
//   }, 2000);
//   // }
// })
// $(document).on('click', '.line-item__quantity', function () {
//   if ($('.lock-all').length == 1) {
//     // pointerEventNone.style.pointerEvents = "none"
//     setTimeout(function () {
//       showPopCoins();
//       cartDrawerSubTotalChanges();
//     }, 1500);
//   }
// })
// $(document).on('click', '.cart-icon-bubble', function () {
//   if ($('.lock-all').length == 1) {
//     // pointerEventNone.style.pointerEvents = "none"
//     setTimeout(function () {
//       showPopCoins();
//       cartDrawerSubTotalChanges();
//     }, 2000);
//   }
// })
// $(document).on('click', '#buy-with-pop-coins-cart-page-label', function () {
//   openPopcoinsModal()
// })
// $(document).on('click', '.drawer__overlay, .drawer__close-button', function () {
//   pdp_buy_now_page();
// })
// $(document).on('change', '#buy-with-pop-coins-cart-drawer-checkbox', function () {
//   cartDrawerSubTotalChanges();
// })
// $(document).on('change', '#buy-with-pop-coins', function () {
//   pdp_buy_now();
// })
// // $(document).on('click)
// $(document).on('change', '#buy-with-pop-coins-cart-drawer-checkbox', function () {
//   showPopCoins();
// })
// $(document).on('click', '#AddToCart', function () {

//   setTimeout(function () {
//     cartDrawerSubTotalChanges();
//   }, 2000);
// })
// /* event listeners */
// popcoinsBottomBtn.addEventListener("click", function () {
//   openPopcoinsModal();
// });
// $(document).on('click', '.product-item__quick-buy-button', function () {
//   setTimeout(function () {
//     showPopCoins();
//   }, 1000);
// })
// //floater close btn
// popcoinsModalCloseBtn.addEventListener("click", function () {
//   showPopCoins();
//   popcoinsIframeModal.style.display = "none";
//   customRemoveClass("body", "popcoinsModalActive");
//   if (window.location.href.indexOf("/products")) {
//     pdp_buy_now()
//     pdp_buy_now_page();
//   }
//   setTimeout(function () {
//     cartDrawerSubTotalChanges();
//   }, 800);
// });
// if (window.location.href.indexOf("/products")) {

//   let variantSelect = document.querySelector(".product-form__variants");
//   if (variantSelect) {
//     console.log("variantSelect", variantSelect);
//     variantSelect.addEventListener("click", function () {
//       setTimeout(function () {
//         showPopCoins();
//       }, 1000)
//     })
//   }
// }
// let cartPageCheckbox = document.querySelector('#buy-with-pop-coins-cart-page-checkbox');
// if (cartPageCheckbox) {
//   cartPageCheckbox.addEventListener('change', function () {
//     showPopCoins();
//   })
// }
// function customCookie() {
//   let key = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("_shopify_s="))
//     ?.split("=")[1];

//   var name1 = "_shopify_s";
//   var customCookies = document.cookie.match(
//     new RegExp("(^| )" + name1 + "=([^;]+)")
//   );

//   if (
//     key == "undefined" ||
//     key == undefined ||
//     key == "" ||
//     customCookies == null ||
//     customCookies == ""
//   ) {
//     // location.reload();
//   }
//   return key;
// }

// function customAddClass(identifier, className) {
//   let element = document.querySelector(identifier);
//   element.classList.add(className);
// }

// function customRemoveClass(identifier, className) {
//   let element = document.querySelector(identifier);
//   element.classList.remove(className);
// }

// function loading() {
//   let popLabels = document.querySelectorAll(".popcoinsLabel");
//   let popCheckboxes = document.querySelectorAll(".popcoins-login-checkbox");
//   let popText = 'Calculating <img width="30" height="30" src="https://testpopcoin.looksguru.com/sandtime.gif">';
//   popLabels.forEach((l) => {
//     l.innerHTML = popText;
//   });
//   popCheckboxes.forEach((c) => {
//     c.style.display = "none";
//   });
// }

// function showPopCoins() {
//   console.log("showPopCoins called");
//   loading();
//   fetch(getAvailablePopcoinsURL + parameters)
//     .then((response) => response.json())
//     .then((data) => {
//       popCoins = data.coins;
//       if (data.success == true) {
//         popCoinsLoginFlag.value = "true";
//         popCoinsAvailable = true;
//       } else {
//         popCoinsLoginFlag.value = "false";
//         popCoinsAvailable = false;
//       }

//       document.querySelector('#pop-club-data-coins').value = data.coins;

//       showPopcoinsListing(data);
//       popCoinsBottomBar(data);
//       // cartDrawerSubTotalChanges();

//       cartDrawer();

//       showpopCoinsOnPDP();
//       if (window.location.href.indexOf("/products") != -1) {
//         variantSelector();
//         showpopCoinsOnPDP();

//         // QUANTITY SELECTOR ON PDP
//         if (window.location.href.indexOf("/product") != -1) {
//           plusminusQtyIcon = document.querySelector(
//             ".product-form__quantity .quantity-selector"
//           );
//           if (plusminusQtyIcon) {
//             plusminusQtyIcon.addEventListener("click", function (e) {
//               popCoinsBottomBar(data);
//               pdp_buy_now();
//             });
//           }
//         }
//       }
//       if (window.location.href.indexOf("/cart") != -1) {
//         cartPage();
//         cartPageSubTotalChanges(data);
//       }
//     });
// }

// function showPopcoinsListing(data) {
//   let popcoinsDiv = document.getElementsByClassName("pop-club-listing");
//   for (let i = 0; i < popcoinsDiv.length; i++) {

//     let price = popcoinsDiv[i].getAttribute("price");
//     if (data.success == true && price > 99) {
//       if (data.coins > 0) {
//         let redeemCoins = Math.round(
//           (localStorage.getItem("popCoinsRedeem") / 100) * price
//         );
//         if (redeemCoins > data.coins && data.success == true) {
//           redeemCoins = data.coins;
//         }
//         let redeemPrice = Math.round(price - redeemCoins);
//         let popHTML =
//           "<p>or Rs. " +
//           redeemPrice +
//           " + <span class='pop-img'><img src='https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png'> </span> " +
//           redeemCoins +
//           "</p>";
//         popcoinsDiv[i].innerHTML = popHTML;
//       }
//       else {
//         popcoinsDiv[i].innerHTML = "";
//       }
//     }
//     else {
//       if (price > 99) {
//         let redeemCoins = Math.round(
//           (localStorage.getItem("popCoinsRedeem") / 100) * price
//         );
//         if (redeemCoins > data.coins && data.success == true) {
//           redeemCoins = data.coins;
//         }
//         let redeemPrice = Math.round(price - redeemCoins);
//         let popHTML =
//           "<p>or Rs. " +
//           redeemPrice +
//           " + <span class='pop-img'><img src='https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png'> </span> " +
//           redeemCoins +
//           "</p>";
//         popcoinsDiv[i].innerHTML = popHTML;
//       }
//       else {
//         popcoinsDiv[i].innerHTML = "";
//       }
//     }
//   }
// }

// //This function
// function showpopCoinsOnPDP() {
//   let popcoinsPdpDiv = document.querySelector(".pop-club-product");
//   let popcoinsDrawerDiv = document.querySelectorAll('.pop-club-product-drawer');

//   if (popcoinsPdpDiv) {
//     let price = popcoinsPdpDiv.getAttribute("price");
//     if (price > 99) {
//       var priceValue = Math.floor(price);

//       if (priceValue.toString().length > 2) {
//         var modulePrice = priceValue % 100;
//         var roundedPrice = priceValue - modulePrice;
//       } else {
//         var roundedPrice = 0;
//       }
//       let issueCoins = Math.round(
//         (localStorage.getItem("popCoinsIssuance") / 100) * roundedPrice
//       );
//       popHTML =
//         "<p id='product-issuance-msg' class='popCoinsEarnCallout'>Earn<span class='pop-img'> <img src='https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png'> </span> " +
//         issueCoins +
//         " on this product </p>";

//       let productIssuanceMsg = document.getElementById("product-issuance-msg");
//       if (productIssuanceMsg) {
//         popcoinsPdpDiv.innerHTML = popHTML;
//       } else {
//         popcoinsPdpDiv.insertAdjacentHTML("afterbegin", popHTML);
//       }
//     }
//   }
//   if (popcoinsDrawerDiv) {
//     popcoinsDrawerDiv.forEach((popCoin) => {
//       let price = popCoin.getAttribute("price");
//       if (price > 99) {
//         var priceValue = Math.floor(price);

//         if (priceValue.toString().length > 2) {
//           var modulePrice = priceValue % 100;
//           var roundedPrice = priceValue - modulePrice;
//         } else {
//           var roundedPrice = 0;
//         }
//         let issueCoins = Math.round(
//           (localStorage.getItem("popCoinsIssuance") / 100) * roundedPrice
//         );
//         popHTML =
//           "<p id='product-issuance-msg' class='popCoinsEarnCallout'>Earn<span class='pop-img'> <img src='https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png'> </span> " +
//           issueCoins +
//           " on this product </p>";

//         let productIssuanceMsg = document.getElementById("product-issuance-msg");
//         if (productIssuanceMsg) {
//           popCoin.innerHTML = popHTML;
//         } else {
//           popCoin.insertAdjacentHTML("afterbegin", popHTML);
//         }
//       }
//     });
//   }
// }

// function popCoinsBottomBar(data) {
//   let popCoins = data.coins;
//   let popcoinsPdpDiv = document.querySelector(".pop-club-product");

//   if (popCoinsAvailable) {
//     // if (window.location.href.indexOf("/product") != -1) {
//       // if (popcoinsPdpDiv) {
//       //   let price = popcoinsPdpDiv.getAttribute("price");
//       //   let pdpQty = 0;
//       //   pdpQty = document.querySelector(
//       //     ".product-form__quantity .quantity-selector .quantity-selector__input"
//       //   ); //quantity selector
//       //   $('.product-form__quantity .quantity-selector .quantity-selector__input').change();
//       //   if (pdpQty) {

//       //     let totalProductPrice = price * parseInt(pdpQty.value);
//       //     let redeemCoins = Math.round(
//       //       (localStorage.getItem("popCoinsRedeem") / 100) * totalProductPrice
//       //     );

//       //     document.getElementById("pop-club-redeem-price").value = redeemCoins;

//       //     if (redeemCoins > popCoins && data.success == true) {
//       //       redeemCoins = popCoins;
//       //       document.getElementById("pop-club-redeem-price").value = redeemCoins;
//       //     }
//       //     if (popCoins == 0) {
//       //       let popCoinBarHTML =
//       //         '<div class="available_popcoins"><img width="30" height="30" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png" loading="lazy">' +
//       //         redeemCoins +
//       //         '</div><span class="zeroPopcoinsCallout">Shop and Earn POPcoins</span> <img class="arrow" width="16" height="13" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/arrow-right.png" loading="lazy">';
//       //       popcoinBtnSpan.innerHTML = popCoinBarHTML;
//       //     } else {
//       //       let popCoinBarHTML =
//       //         '<span class="rewards-title">' +
//       //         rewardsName +
//       //         "</span>" +
//       //         rewardsCallOut +
//       //         ' <div class="available_popcoins"><img width="30" height="30" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png" loading="lazy">' +
//       //         redeemCoins +
//       //         '</div><img class="arrow" width="16" height="13" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/arrow-right.png" loading="lazy">';
//       //       popcoinBtnSpan.innerHTML = popCoinBarHTML;
//       //     }
//       //   }
//       // }
//     // } else {
//       if (popCoins == 0) {
//         let popCoinBarHTML =
//           '<div class="available_popcoins"><img width="30" height="30" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png" loading="lazy">' +
//           popCoins +
//           '</div><span class="zeroPopcoinsCallout">Shop and Earn POPcoins</span><img class="arrow" width="16" height="13" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/arrow-right.png" loading="lazy">';
//         popcoinBtnSpan.innerHTML = popCoinBarHTML;
//       } else {
//         let popCoinBarHTML =
//           '<span class="rewards-title">' +
//           rewardsName +
//           "</span>" +
//           rewardsCallOut +
//           '<div class="available_popcoins"><img width="30" height="30" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png" loading="lazy">' +
//           popCoins +
//           '</div><img class="arrow" width="16" height="13" src="https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/arrow-right.png" loading="lazy">';
//         popcoinBtnSpan.innerHTML = popCoinBarHTML;
//       }
//     // }
//   }
// }

// function addPopcoinsInMenu() {

//   let desktop_nav = document.querySelector(".list-menu");

//   let li_menu = document.createElement("li");
//   li_menu.setAttribute("class", "popcoinsMenu");

//   let menu = document.createElement("a");
//   menu.setAttribute(
//     "class",
//     "header__linklist-link link--animated"
//   );
//   menu.setAttribute("onclick", "openPopcoinsModal()");

//   let menuSpan = document.createElement("span");
//   menuSpan.setAttribute(
//     "class",
//     "text"
//   );
//   menuSpan.innerHTML = rewardNameLottieAnimationLink;
//   menu.appendChild(menuSpan);
//   li_menu.appendChild(menu);
//   desktop_nav.appendChild(li_menu);

//   // mobile menu
//   let mobile_nav = document.querySelector(".mobile-nav");
//   let li_mob_menu = document.createElement("li");
//   li_mob_menu.setAttribute("class", "mobile-nav__item popcoinMobMenu");

//   let mob_menu = document.createElement("a");
//   mob_menu.setAttribute("class", "mobile-nav__link heading h6");
//   mob_menu.setAttribute("onclick", "openPopcoinsModal()")
//   mob_menu.innerHTML = rewardNameLottieAnimationLink;

//   li_mob_menu.appendChild(mob_menu);
//   mobile_nav.appendChild(li_mob_menu);
// }
// function cartDrawer() {
//   let cartDrawerParentElement = document.querySelectorAll(
//     "#mini-cart .drawer__content #mini-cart-form .line-item"
//   );
//   let cartDrawerChildElement = "#mini-cart .drawer__content #mini-cart-form .line-item .line-item__content-wrapper .line-item__info .product-item-meta";
//   let cartDrawerPopcoinsLabel = document.querySelector(
//     "#buy-with-pop-coins-cart-drawer-label"
//   );
//   if (cartDrawerPopcoinsLabel) {
//     cartDrawerPopcoinsLabel.addEventListener("click", function () {
//       if (popCoinsLoginFlag.value == "false") {
//         openPopcoinsModal();
//       }
//     });
//   }

//   fetch(window.Shopify.routes.root + "cart.js", {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((cartData) => {
//       if (cartData["items"].length != 0) {
//         let j = 0;
//         cartDrawerParentElement.forEach((lineItem) => {
//           let priceLenght = cartData["items"][j].price.toString().length - 2;
//           let quantity = cartData["items"][j].quantity;
//           let price =
//             cartData["items"][j].price.toString().slice(0, priceLenght) +
//             "." +
//             cartData["items"][j].price.toString().slice(priceLenght);

//           let priceValue = Math.floor(price);
//           if (priceValue.toString().length > 2) {
//             var modulePrice = priceValue % 100;
//             var roundedPrice = priceValue - modulePrice;
//           } else {
//             var roundedPrice = 0;
//           }
//           let issueCoins = Math.round(
//             (localStorage.getItem("popCoinsIssuance") / 100) *
//             roundedPrice *
//             quantity
//           );
//           if (issueCoins >= 5) {
//             let lineItemPopcoins =
//               "<p id='product-issuance-msg' class='popCoinsEarnCallout'>Earn<span class='pop-img'> <img src='https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png' loading='lazy'> </span> " +
//               issueCoins.toString() +
//               "</p>";

//             lineItem
//               .querySelector(cartDrawerChildElement)
//               .appendChild(create("div"));
//             lineItem
//               .querySelector(cartDrawerChildElement)
//               .querySelector(".manual-class").innerHTML = lineItemPopcoins;
//           }

//           j++;
//         });
//       }
//     })
//     .catch((error) => {
//       console.log("Cart js error - popcoins", error);
//     });
// }

// function cartPage() {
//   let cartPageParentElement = document.querySelectorAll(
//     ".cart__content .line-item-table .line-item-table__list .line-item"
//   );
//   let cartPageChildElement = ".cart__content .line-item-table .line-item-table__list .line-item .line-item__product .line-item__content-wrapper .line-item__info .product-item-meta";

//   if (cartPagePopcoinsLabel) {
//     cartPagePopcoinsLabel.addEventListener("click", function () {
//       if (popCoinsLoginFlag.value == "false") {
//         openPopcoinsModal();
//       }
//     });
//   }
//   fetch(window.Shopify.routes.root + "cart.js")
//     .then((response) => response.json())
//     .then((cartData) => {
//       if (cartData["items"].length > 0) {
//         let c = 0;

//         cartPageParentElement.forEach((lineItem) => {

//           let priceLenght = cartData["items"][c].price.toString().length - 2;
//           let quantity = cartData["items"][c].quantity;
//           let price =
//             cartData["items"][c].price.toString().slice(0, priceLenght) +
//             "." +
//             cartData["items"][c].price.toString().slice(priceLenght);
//           let priceValue = Math.floor(price);
//           console.log("priceValue.toString()", priceValue.toString())
//           if (priceValue.toString().length > 2) {

//             let modulePrice = priceValue % 100;
//             roundedPrice = priceValue - modulePrice;
//           }
//           else {
//             roundedPrice = 0;
//           }

//           let issueCoins = Math.round((localStorage.getItem("popCoinsIssuance") / 100) * roundedPrice * quantity);
//           if (issueCoins > 0) {
//             var newstring =
//               "<p id='product-issuance-msg' class='popCoinsEarnCallout'>Earn<span class='pop-img'> <img src='https://ecomapp-dev.s3.ap-south-1.amazonaws.com/media/Coin.png' width='20' height='21' loading='lazy'> </span> " +
//               issueCoins +
//               " </p>";
//             var coinDiv = lineItem.querySelector(".product-item-meta").querySelector(".manual-class");
//             if (coinDiv != null) {
//               // coinDiv.remove();
//               console.log(" lineItem.querySelectorAll('.manual-class')", lineItem.querySelectorAll(".manual-class"));
//               lineItem.querySelectorAll(".manual-class").forEach((old_item) => {
//                 old_item.remove();
//               });
//             }



//             lineItem.querySelector(".product-item-meta").appendChild(create("div"));
//             lineItem.querySelector(".product-item-meta").querySelector(".manual-class").innerHTML = newstring;
//             c++;

//           }
//         });
//       }
//     });
// }

// function variantSelector() {
//   let regular_price = document.querySelector(".product-meta .product-meta__price-list-container .price-list .price");
//   if (regular_price) {
//     let temp_str = regular_price.innerHTML.replace('<span class="visually-hidden">Sale price</span>Rs.', "").replace(",", "");
//     let variantPrice = parseFloat(temp_str.trim());
//     let popClubProductPrice = document.querySelector(
//       ".custom_popcoin_box .pop-club-product"
//     );

//     if (popClubProductPrice)
//       popClubProductPrice.setAttribute("price", variantPrice);
//   }
// }

// function cartPageSubTotalChanges(data) {
//   let cartPagePopcoinsLabel = document.querySelector(
//     "#buy-with-pop-coins-cart-page-label"
//   );
//   let cartPagePopcoinsCheckbox = document.querySelector(
//     "#buy-with-pop-coins-cart-page-checkbox"
//   );

//   function prices_val() {
//     const afterPopDiscountPrice = document.querySelector(
//       ".cart__recap-block .cart__total-container .pop-subtotal"
//     );

//     let price_value = "Rs." + " " + afterPopDiscountPrice.textContent.split(" ")[1];
//     afterPopDiscountPrice.innerHTML = price_value;
//   }

//   fetch(window.Shopify.routes.root + "cart.js", {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((cartData) => {

//       let currKey = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];
//       // Cart LineItem Update
//       if (cartData.items.length > 0) {
//         if (!cartData.items[0].properties.__pop_id) {
//           updateCartData(currKey);
//         }
//         else if (cartData.items[0].properties.__pop_id != currKey) {
//           updateCartData(currKey);
//         }
//       }
      
//       let priceLength = cartData["items_subtotal_price"].toString().length - 2;
//       let price =
//         cartData["items_subtotal_price"].toString().slice(0, priceLength) +
//         "." +
//         cartData["items_subtotal_price"].toString().slice(priceLength);
//       let dataRedeem = localStorage.getItem("popCoinsRedeem");
//       let dataCoins = data.coins;
//       let redeemCoins = Math.round((dataRedeem / 100) * price);
//       let redeemPrice = Math.round(price - redeemCoins);

//       if (redeemCoins > dataCoins && popCoinsLoginFlag.value == "true") {
//         redeemCoins = dataCoins;
//       }
//       if (cartPagePopcoinsCheckbox && cartPagePopcoinsLabel) {
//         if (popCoinsLoginFlag.value == "true") {
//           if (dataCoins > 0) {

//             cartPagePopcoinsCheckbox.style.display = "block";
//           }
//           else {
//             cartPagePopcoinsCheckbox.style.display = "none";
//           }

//           if (cartPagePopcoinsCheckbox.checked) {
//             if (redeemCoins == 0) {
//               popHTML = "You have 0 POPcoins. Shop now & earn coins.";
//               cartPagePopcoinsCheckbox.checked = false;
//               cartPagePopcoinsCheckbox.style.display = "none";
//               prices_val();
//             } else {
//               addExternalDiscount(cartData);
//               popHTML = "<div class='label-pop'>Rs. " + redeemCoins + " | Saved using POPcoins</div>" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//               prices_val();
              
//             }
//             const paragraph = document.querySelector(".cart__recap-block .cart__total-container .pop-subtotal");

//             let paragraph3 = paragraph.textContent;
//             let paragraph1 = paragraph3.split(" ");
//             let subTotal = paragraph1[1].replace(",", "");
//             let main_value = price - redeemCoins;
//             let main_value1 = parseFloat(main_value).toFixed(2);

//             paragraph.innerText = paragraph1[0] + " " + main_value1;
//             subTotal = price;

//           } else {
//             const paragraph = document.querySelector(".cart__recap-block .cart__total-container .pop-subtotal");

//             var paragraph3 = paragraph.textContent;
//             let paragraph1 = paragraph3.split(" ");

//             paragraph.innerText = paragraph1[0] + " " + price;


//             if (redeemCoins == 0) {
//               popHTML = "You have 0 POPcoins. Shop now & earn coins.";
//               cartPagePopcoinsCheckbox.checked = false;
//               prices_val();
//             } else {
//               removeExternalDiscount();
//               popHTML =
//                 "<div class='label-pop'>Save Rs. " + redeemCoins + " using POPcoins</div>" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//               prices_val();
//               document.querySelector('#buy-with-pop-coins-cart-page-checkbox').checked = false;
//               if (document.querySelector('#buy-with-pop-coins-cart-page-checkbox').checked == false && redeemCoins > 0) {
//                  document.querySelector('#buy-with-pop-coins-cart-page-checkbox').click();
//               }
//             }
//           }
//         } else {
//           cartPagePopcoinsCheckbox.checked = false;
//           cartPagePopcoinsCheckbox.style.display = "none";
//           popHTML =
//             "<div class='label-pop'><span class='popCoinsClickBtn'>Click</span><span class='popCoinsClickCallout'> & get upto 5% off using POPcoins</span></div>" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//         }
//         cartPagePopcoinsLabel.innerHTML = popHTML;
//       }
//     });
// }

// function cartDrawerSubTotalChanges() {
//   let cartDrawerPopcoinsLabel = document.querySelector(
//     "#buy-with-pop-coins-cart-drawer-label"
//   );
//   let cartDrawerPopcoinsCheckbox = document.querySelector(
//     "#buy-with-pop-coins-cart-drawer-checkbox"
//   );


//   function cartDrawer_prices_val() {
//     const afterPopDiscountPrice = document.querySelector(
//       ".mini-cart__drawer-footer .priceflags span"
//     );

//     let price_value = "Rs. " + " " + afterPopDiscountPrice.textContent.split(" ")[1];
//     afterPopDiscountPrice.innerHTML = price_value;

//     //     const checkoutBtnPrice = document.querySelector("#CartDrawer-Checkout .total-text");
//     // let btn_price_value = "₹" + " " + checkoutBtnPrice.textContent.split(" ")[1];
//     // checkoutBtnPrice.innerHTML = btn_price_value;      
//   }

//   fetch(window.Shopify.routes.root + "cart.js", {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((cartData) => {

//       let currKey = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];
//       // Cart LineItem Update
//       if (cartData.items.length > 0) {
//         if (!cartData.items[0].properties.__pop_id) {
//           updateCartData(currKey);
//         }
//         else if (cartData.items[0].properties.__pop_id != currKey) {
//           updateCartData(currKey);
//         }
//       }
      
//       let priceLength = cartData["items_subtotal_price"].toString().length - 2;
//       let price =
//         cartData["items_subtotal_price"].toString().slice(0, priceLength) +
//         "." +
//         cartData["items_subtotal_price"].toString().slice(priceLength);
//       let dataRedeem = localStorage.getItem("popCoinsRedeem");
//       let dataCoins = popCoins;
//       let redeemCoins = Math.round((dataRedeem / 100) * price);
//       let redeemPrice = Math.round(price - redeemCoins);

//       if (redeemCoins > dataCoins && popCoinsLoginFlag.value == "true") {
//         redeemCoins = dataCoins;
//       }
//       if (cartDrawerPopcoinsCheckbox && cartDrawerPopcoinsLabel) {
//         if (popCoinsLoginFlag.value == "true") {
//           if (dataCoins > 0) {
//             cartDrawerPopcoinsCheckbox.style.display = "block";
//           } else {
//             cartDrawerPopcoinsCheckbox.style.display = "none";
//           }
//           if (cartDrawerPopcoinsCheckbox.checked) {
//             console.log("pop_cart_drawer_checkbox checked");
//             if (redeemCoins == 0) {
//               popHTML = "You have 0 POPcoins. Shop now & earn coins.";
//               cartDrawerPopcoinsCheckbox.checked = false;
//               cartDrawerPopcoinsCheckbox.style.display = "none";
//               cartDrawer_prices_val();
//             } else {
//               cartDrawer_prices_val();
//               addExternalDiscount(cartData);
//               popHTML =
//                 "<div class='label-pop'>Rs. " +
//                 redeemCoins +
//                 " | Saved using POPcoins</div>" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//             }
//             const paragraph = document.querySelector(".mini-cart__drawer-footer .priceflags span");
//             let paragraph3 = paragraph.textContent;
//             let paragraph1 = paragraph3.split(" ");
//             let subTotal = paragraph1[1].replace(",", "");
//             let main_value = price - redeemCoins;
//             let main_value1 = parseFloat(main_value).toFixed(2);

//             paragraph.innerText = paragraph1[0] + " " + main_value1;
//             subTotal = price;
//           } else {
//             console.log("drawer checkbox is false");
//             removeExternalDiscount();
//             const paragraph = document.querySelector(".mini-cart__drawer-footer .priceflags span");

//             var paragraph3 = paragraph.textContent;
//             let paragraph1 = paragraph3.split(" ");

//             paragraph.innerText = paragraph1[0] + " " + price;
//             if (redeemCoins == 0) {
//               popHTML = "You have 0 POPcoins. Shop now & earn coins.";
//               cartDrawerPopcoinsCheckbox.checked = false;
//               cartDrawer_prices_val();
//             } else {
//               popHTML = "<div class='label-pop'> Save Rs." + redeemCoins + " using POPcoins</div>" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//               cartDrawer_prices_val();
//               let cartIsOpened = document.querySelector('cart-drawer[open]');
//               document.querySelector('#buy-with-pop-coins-cart-drawer-checkbox').checked = false;
//               if (cartIsOpened && document.querySelector('#buy-with-pop-coins-cart-drawer-checkbox').checked == false && redeemCoins > 0) {
//                  document.querySelector('#buy-with-pop-coins-cart-drawer-checkbox').click();
//               }
//             }
//           }
//         } else {
//           console.log("drawer flag is false");
//           cartDrawerPopcoinsCheckbox.checked = false;
//           cartDrawerPopcoinsCheckbox.style.display = "none";
//           popHTML =
//             "<div class='label-pop'><span class='popCoinsClickBtn'>Click</span><span class='popCoinsClickCallout'> & get upto 5% off using POPcoins</span></div>" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//         }
//         console.log(cartDrawerPopcoinsLabel);
//         cartDrawerPopcoinsLabel.innerHTML = popHTML;
//       }
//     });
// }

// function popcoinsOnPDP(data) {
//   let popcoinsPdpDiv = document.querySelector(".pop-club-product");

//   let pdpPopcoinsLabel = document.querySelector(
//     "#buy-with-pop-coins-pdp-label"
//   );
//   let pdpPopcoinsCheckbox = document.querySelector(
//     "#buy-with-pop-coins-pdp-checkbox"
//   );
//   let price = popcoinsPdpDiv.getAttribute("price");
//   let pdpQty1 = 0;
//   pdpQty1 = document.querySelector(
//     ".productView-product .quantity__container .quantity__input"
//   );
//   console.log("pdpQty", parseInt(pdpQty1.value));

//   let totalProductPrice1 = price * parseInt(pdpQty1.value);

//   let redeemCoins = Math.round(
//     (localStorage.getItem("popCoinsRedeem") / 100) * totalProductPrice1
//   );

//   if (popCoinsLoginFlag.value == "true") {
//     pdpPopcoinsCheckbox.style.display = "block";

//     document.getElementById("pop-club-redeem-price").value = redeemCoins;
//     if (redeemCoins > popCoins && data.success == true) {
//       redeemCoins = popCoins;
//       document.getElementById("pop-club-redeem-price").value = redeemCoins;
//     }
//     console.log("flag is true");
//     if (pdpPopcoinsCheckbox.checked) {
//       console.log("pdp checkbox checked");
//       if (redeemCoins == 0) {
//         popHTML = "You have 0 POPcoins. Shop now & earn coins.";
//         pdpPopcoinsCheckbox.checked = false;
//         pdpPopcoinsCheckbox.style.display = "none";
//       } else {
//         popHTML = "<div class='label-pop'>Rs. " + redeemCoins + " | Saved using POPcoins</div>" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//         fetch(window.Shopify.routes.root + "cart.js", {
//           method: "GET",
//         })
//           .then((response) => response.json())
//           .then((cartData) => {
//             addExternalDiscount(cartData);
//           });
//       }
//     } else {
//       console.log("pdp checkbox is false");
//       removeExternalDiscount();
//       if (redeemCoins == 0) {
//         popHTML = "You have 0 POPcoins. Shop now & earn coins.";
//         pdpPopcoinsCheckbox.checked = false;
//         pdpPopcoinsCheckbox.style.display = "none";
//       } else {
//         popHTML =

//           "<div class='label-pop'>Save Rs. " + redeemCoins + " using POPcoins" + "<div class='label-pop2'>" + lottieAnimation + "</div>";
//       }
//     }
//     pdpPopcoinsLabel.innerHTML = popHTML;
//   }
// }


// function addExternalDiscount(data) {
//   let externalCheckoutBtn = document.querySelector(externalCheckout);
//   let popcoinsLoader = document.querySelector(".CartDrawer-Checkout div");
//   let disabledCheckout = document.querySelector('.CartDrawer-Checkout');
//   let pointerEventNone = document.querySelector('.gokwik-checkout');

//   popcoinsLoader.style.display = "block";
//   pointerEventNone.style.pointerEvents = "none";
//   externalCheckoutBtn.disabled = true;
//   customAddClass("body", "popcoinsModalActive");


//   let priceLenght = data["items_subtotal_price"].toString().length - 2;
//   let price =
//     data["items_subtotal_price"].toString().slice(0, priceLenght) +
//     "." +
//     data["items_subtotal_price"].toString().slice(priceLenght);
//   let variants = "";
//   for (let i = 0; i < data["items"].length; i++) {
//     variants +=
//       data["items"][i]["variant_id"] +
//       "-" +
//       data["items"][i]["quantity"] +
//       ",";
//   }

//   let checkoutParameters =
//     "?cart=" +
//     price +
//     "&shop=" +
//     Shopify.shop +
//     "&key=" +
//     key +
//     "&variants=" +
//     variants;
//   // setTimeout(function(){
//   console.log(checkoutParameters);
//   fetch(getCartDiscountURL + checkoutParameters)
//     .then((response) => response.json())
//     .then((data) => {
//       //console.log(data);
//       console.log(data);
//       if (data.success == true) {
//         // window.location = data.url;
//         var now = new Date();
//         var time = now.getTime();
//         time += 3600 * 1000;
//         now.setTime(time);

//         document.cookie =
//           "discount_code=" +
//           data.code +
//           "; expires=" +
//           now.toUTCString() +
//           "; path=/";
//         console.log("external discount added");
//         setTimeout(function () {
//           console.log("Loader removed");
//           externalCheckoutBtn.disabled = false;
//           popcoinsLoader.style.display = "none";
//           pointerEventNone.style.pointerEvents = "all";
//           customRemoveClass("body", "popcoinsModalActive");
//         }, 2000);
//       }
//     });
// }

// function removeExternalDiscount() {
//   let externalCheckoutBtn = document.querySelectorAll(externalCheckout);
//   console.log("removed external discount");
//   externalCheckoutBtn.disabled = true;
//   document.cookie =
//     "discount_code=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
//   fetch(removeDiscountCode + parameters, {
//     Method: "POST",
//   })
//     .then((response) => {
//       //handle respons
//       externalCheckoutBtn.disabled = false;

//     })
//     .catch((error) => {
//       console.log("Error removing discount - popcoins");
//     });
// }

// function pdp_buy_now() {
//   let quickViewDrawer = document.querySelector("quick-buy-drawer[open]");
//   if (quickViewDrawer) {
//     let key = document.cookie
//       .split('; ')
//       .find((row) => row.startsWith('_shopify_s='))
//       ?.split('=')[1];
//     let parameters = '?shop=' + Shopify.shop + '&key=' + key;
//     fetch('https://prodreplica.mypopcoins.com/api/get-available-coins' + parameters)
//       .then((response) => response.json())
//       .then(data => {
//         if (!data.success) {
//           document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.add('hidden');
//         }
//         else {
//           document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.remove('hidden');

//           let coin_val = data.coins;
//           let quick_drawer = document.querySelector('quick-buy-drawer[open]');
//           var specificDiv = quick_drawer.querySelector('#pop-club-product-detail');
//           var pdp_price = specificDiv.getAttribute('price');
//           pdp_price = parseInt(pdp_price);
//           let pdp_qty = parseInt(document.querySelector('quick-buy-drawer[open] .product-form__quantity .quantity-selector .quantity-selector__input').value);
//           let pdp_curr_pop_price = Math.min(Math.ceil((pdp_price * 5) / 100) * pdp_qty, coin_val);
//           let price_pdp = Math.min(Math.ceil(pdp_price * pdp_qty));

//           if (pdp_curr_pop_price == 0) {
//             document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.add('hidden');
//           }
//           else {
//             document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.remove('hidden');
//           }

//           let pdp_input_checked = document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins').checked;

//           let pdp_pop_last_str;
//           if (pdp_input_checked == true) {
//             let key = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];

//             let pdp_var_id = document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins').getAttribute('variant_id');

//             let parameters = '?cart=' + price_pdp + '&shop=' + Shopify.shop + '&key=' + key + '&variants=' + pdp_var_id;

//             fetch('https://prodreplica.mypopcoins.com/api/get-coins-cart-discount' + parameters)
//               .then((response) => response.json())
//               .then((data) => {
//                 document.cookie = "discount_code=" + data.code + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
//               });
//             document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Rs. " + pdp_curr_pop_price + " | Saved Using POPcoins" + lottieAnimation;

//           }
//           else {
//             document.cookie = "discount_code=" + "; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
//             document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Save Rs. " + pdp_curr_pop_price + " Using POPcoins " + lottieAnimation;

//           }
//         }

//       });
//     document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins').addEventListener('click', function () {

//       document.querySelector('quick-buy-drawer[open] #gokwik-buy-now').style.pointerEvents = "none";
//       document.querySelector('quick-buy-drawer[open] #gokwik-buy-now div').style.display = "block";
//       document.querySelector('quick-buy-drawer[open] #gokwik-buy-now').setAttribute('disabled', '');

//       let key = document.cookie
//         .split('; ')
//         .find((row) => row.startsWith('_shopify_s='))
//         ?.split('=')[1];
//       let parameters = '?shop=' + Shopify.shop + '&key=' + key;
//       fetch('https://prodreplica.mypopcoins.com/api/get-available-coins' + parameters)
//         .then((response) => response.json())
//         .then(data => {
//           if (!data.success) {
//             document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.add('hidden');
//           }
//           else {
//             document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.remove('hidden');

//             let coin_val = data.coins;
//             let quick_drawer = document.querySelector('quick-buy-drawer[open]');
//             var specificDiv = quick_drawer.querySelector('#pop-club-product-detail');
//             var pdp_price = specificDiv.getAttribute('price');
//             // let pdp_price = document.querySelector('#pop-club-product-detail').getAttribute('price');
//             pdp_price = parseInt(pdp_price);
//             let pdp_qty = parseInt(document.querySelector('quick-buy-drawer[open] .product-form__quantity .quantity-selector .quantity-selector__input').value);
//             let pdp_curr_pop_price = Math.min(Math.ceil((pdp_price * 5) / 100) * pdp_qty, coin_val);
//             let price_pdp = Math.min(Math.ceil(pdp_price * pdp_qty));
//             if (pdp_curr_pop_price == 0) {
//               document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.add('hidden');
//             }
//             else {
//               document.querySelector('quick-buy-drawer[open] .pdp_popcoin').classList.remove('hidden');
//             }

//             let pdp_input_checked = document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins').checked;

//             let pdp_pop_last_str;
//             if (pdp_input_checked == true) {
//               let key = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];
//               let pdp_var_id = document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins').getAttribute('variant_id');
//               let parameters = '?cart=' + price_pdp + '&shop=' + Shopify.shop + '&key=' + key + '&variants=' + pdp_var_id;

//               fetch('https://prodreplica.mypopcoins.com/api/get-coins-cart-discount' + parameters)
//                 .then((response) => response.json())
//                 .then((data) => {
//                   document.cookie = "discount_code=" + data.code + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
//                   setTimeout(() => {
//                     document.querySelector('quick-buy-drawer[open] #gokwik-buy-now').style.pointerEvents = "all";
//                     document.querySelector('quick-buy-drawer[open] #gokwik-buy-now div').style.display = "none";
//                     document.querySelector('quick-buy-drawer[open] #gokwik-buy-now').removeAttribute('disabled');
//                   }, 2000);

//                 });
//               document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Rs. " + pdp_curr_pop_price + " | Saved Using POPcoins" + lottieAnimation;


//             }
//             else {
//               document.cookie = "discount_code=" + "; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
//               document.querySelector('quick-buy-drawer[open] #gokwik-buy-now').style.pointerEvents = "all";
//               document.querySelector('quick-buy-drawer[open] #gokwik-buy-now div').style.display = "none";
//               document.querySelector('quick-buy-drawer[open] #gokwik-buy-now').removeAttribute('disabled');
//               document.querySelector('quick-buy-drawer[open] .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Save Rs. " + pdp_curr_pop_price + " Using POPcoins " + lottieAnimation;

//             }
//           }

//         });
//     });
//   }
// }
// function pdp_buy_now_page() {
//   if (window.location.href.includes('/products') == true) {
//     let key = document.cookie
//       .split('; ')
//       .find((row) => row.startsWith('_shopify_s='))
//       ?.split('=')[1];
//     let parameters = '?shop=' + Shopify.shop + '&key=' + key;
//     fetch('https://prodreplica.mypopcoins.com/api/get-available-coins' + parameters)
//       .then((response) => response.json())
//       .then(data => {
//         if (!data.success) {
//           document.querySelector('.pdp_popcoin').classList.add('hidden');
//         }
//         else {
//           document.querySelector('.pdp_popcoin').classList.remove('hidden');
//           let coin_val = data.coins;
//           let pdp_price = document.querySelector('.shopify-section--main-product #pop-club-product-detail').getAttribute('price');
//           pdp_price = parseInt(pdp_price);
//           let pdp_qty = parseInt(document.querySelector('.shopify-section--main-product .product-form__quantity .quantity-selector .quantity-selector__input').value);
//           let pdp_curr_pop_price = Math.min(Math.ceil((pdp_price * 5) / 100) * pdp_qty, coin_val);
//           let price_pdp = Math.min(Math.ceil(pdp_price * pdp_qty));

//           if (pdp_curr_pop_price == 0) {
//             document.querySelector('.shopify-section--main-product .pdp_popcoin').classList.add('hidden');
//           }
//           else {
//             document.querySelector('.shopify-section--main-product .pdp_popcoin').classList.remove('hidden');
//           }

//           let pdp_input_checked = document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins').checked;

//           let pdp_pop_last_str;
//           if (pdp_input_checked == true) {
//             let key = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];

//             let pdp_var_id = document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins').getAttribute('variant_id');
//             console.log(pdp_var_id);

//             console.log(pdp_curr_pop_price);
//             let parameters = '?cart=' + price_pdp + '&shop=' + Shopify.shop + '&key=' + key + '&variants=' + pdp_var_id;

//             fetch('https://prodreplica.mypopcoins.com/api/get-coins-cart-discount' + parameters)
//               .then((response) => response.json())
//               .then((data) => {
//                 document.cookie = "discount_code=" + data.code + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
//               });
//             document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Rs. " + pdp_curr_pop_price + " | Saved Using POPcoins" + lottieAnimation;

//           }
//           else {
//             document.cookie = "discount_code=" + "; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
//             document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Save Rs. " + pdp_curr_pop_price + " Using POPcoins " + lottieAnimation;

//           }
//         }

//       });
//     document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins').addEventListener('click', function () {
//       document.querySelector('.shopify-section--main-product #gokwik-buy-now').style.pointerEvents = "none";
//       document.querySelector('.shopify-section--main-product #gokwik-buy-now div').style.display = "block";
//       document.querySelector('.shopify-section--main-product #gokwik-buy-now').setAttribute('disabled', '');

//       let key = document.cookie
//         .split('; ')
//         .find((row) => row.startsWith('_shopify_s='))
//         ?.split('=')[1];
//       let parameters = '?shop=' + Shopify.shop + '&key=' + key;
//       fetch('https://prodreplica.mypopcoins.com/api/get-available-coins' + parameters)
//         .then((response) => response.json())
//         .then(data => {
//           if (!data.success) {
//             document.querySelector('.shopify-section--main-product .pdp_popcoin').classList.add('hidden');
//           }
//           else {
//             document.querySelector('.shopify-section--main-product .pdp_popcoin').classList.remove('hidden');

//             let coin_val = data.coins;
//             let pdp_price = document.querySelector('.shopify-section--main-product #pop-club-product-detail').getAttribute('price');
//             pdp_price = parseInt(pdp_price);
//             let pdp_qty = parseInt(document.querySelector('.shopify-section--main-product .product-form__quantity .quantity-selector .quantity-selector__input').value);
//             let pdp_curr_pop_price = Math.min(Math.ceil((pdp_price * 5) / 100) * pdp_qty, coin_val);
//             let price_pdp = Math.min(Math.ceil(pdp_price * pdp_qty));
//             if (pdp_curr_pop_price == 0) {
//               document.querySelector('.shopify-section--main-product .pdp_popcoin').classList.add('hidden');
//             }
//             else {
//               document.querySelector('.shopify-section--main-product .pdp_popcoin').classList.remove('hidden');
//             }

//             let pdp_input_checked = document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins').checked;

//             let pdp_pop_last_str;
//             if (pdp_input_checked == true) {
//               let key = document.cookie.split('; ').find((row) => row.startsWith('_shopify_s='))?.split('=')[1];
//               console.log(key);
//               let pdp_var_id = document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins').getAttribute('variant_id');
//               console.log(pdp_var_id);
//               let parameters = '?cart=' + price_pdp + '&shop=' + Shopify.shop + '&key=' + key + '&variants=' + pdp_var_id;

//               fetch('https://prodreplica.mypopcoins.com/api/get-coins-cart-discount' + parameters)
//                 .then((response) => response.json())
//                 .then((data) => {
//                   console.log(data.code);

//                   document.cookie = "discount_code=" + data.code + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
//                   setTimeout(() => {
//                     document.querySelector('.shopify-section--main-product #gokwik-buy-now').style.pointerEvents = "all";
//                     document.querySelector('.shopify-section--main-product #gokwik-buy-now div').style.display = "none";
//                     document.querySelector('.shopify-section--main-product #gokwik-buy-now').removeAttribute('disabled');
//                   }, 2200);

//                 });
//               document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Rs. " + pdp_curr_pop_price + " | Saved Using POPcoins" + lottieAnimation;


//             }
//             else {
//               document.cookie = "discount_code=" + "; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
//               document.querySelector('.shopify-section--main-product #gokwik-buy-now').style.pointerEvents = "all";
//               document.querySelector('.shopify-section--main-product #gokwik-buy-now div').style.display = "none";
//               document.querySelector('.shopify-section--main-product #gokwik-buy-now').removeAttribute('disabled');
//               document.querySelector('.shopify-section--main-product .pdp_popcoin #buy-with-pop-coins-label').innerHTML = "Save Rs. " + pdp_curr_pop_price + " Using POPcoins " + lottieAnimation;

//             }
//           }

//         });
//     });

//   }
// }

// function cart_bottom_menu_handle() {
//   const element = document.querySelector("cart-drawer");

//   if (element != null) {
//     const observer = new MutationObserver((mutations) => {
//       for (const mutation of mutations) {
//         if (mutation.type === "attributes") {
//           if (element.hasAttribute('open') == true) {
//             document.querySelector('#popcoinsBottomBtn').classList.add('hidden');
//           }
//           else {
//             document.querySelector('#popcoinsBottomBtn').classList.remove('hidden');
//           }
//           pop_pdp_disc_manage();
//         }
//       }
//     });

//     observer.observe(element, { attributes: true });
//   }

// }

// // Cart and PDP Cookie Manage
// function pop_pdp_disc_manage() {

//   if (window.location.href.includes('/products') == false) {

//     fetch('/cart.js')
//       .then((response) => response.json())
//       .then((cartData) => {
//         const isPopLogin = document.querySelector('#pop-club-login-flag').value;
//         const coinBal = parseInt(document.querySelector('#pop-club-data-coins').value);
//         const isCartDrawerOpened = document.querySelector('cart-drawer[open]');
//         if (isPopLogin == 'true' && coinBal > 0 && isCartDrawerOpened && (cartData.items.length > 0) && (cartData.items_subtotal_price / 100) > 0) {
//           let cart_pop_checked = document.querySelector('.popcoinsConfiguration.popcoinsLogin  #buy-with-pop-coins-cart-drawer-checkbox');
//           if (cart_pop_checked && cart_pop_checked.checked == false) {
//             cart_pop_checked.click();
//           }
//         }
//       })

//   }

// }

// $('.product-form__quantity .quantity-selector .quantity-selector__input').change(function () {
//   console.log($(this).val());
// })
// $(document).on('click', '#buy-with-pop-coins-cart-drawer-label', function () {
//   var darat = $('#buy-with-pop-coins-cart-drawer-label').text();
//   if (darat.includes("get upto")) {
//     $('#popcoinsBottomBtn').click();
//   }
// });