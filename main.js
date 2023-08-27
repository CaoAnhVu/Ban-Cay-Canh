document.addEventListener("DOMContentLoaded", () => {
  // Toggle Menu (Navbar)
  const navbarToggle = document.querySelector(".navbar__links");
  const navbarActions = document.querySelector(".navbar_actions");

  navbarToggle.addEventListener("click", () => {
    navbarActions.classList.toggle("active");
  });

  // Slider for Features
  const featuresItems = document.querySelectorAll(".features__left--item");
  let currentIndex = 0;

  function showFeature(index) {
    featuresItems.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  showFeature(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % featuresItems.length;
    showFeature(currentIndex);
  }, 5000); // Change every 5 seconds

  // Image Hover Effects
  const productImages = document.querySelectorAll(".product__item--image img");

  productImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.style.transform = "scale(1.2)";
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = "scale(1)";
    });
  });

  // Newsletter Subscription
  const subscribeButton = document.querySelector(".field__button");
  const emailInput = document.querySelector(".field__email");

  subscribeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const email = emailInput.value;

    if (email) {
      // You can send the email to your server for subscription processing
      console.log(`Subscribed with email: ${email}`);
    }
  });
});
