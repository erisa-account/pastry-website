
//shopping card

document.addEventListener('DOMContentLoaded', () => {
    

  const buttons = document.querySelectorAll('.btn.btn-primary'); 
  const cartItems = document.getElementById('cart-items');       
  const totalElement = document.getElementById('total');        

 let total = 0;

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.closest('.row');
      const name = product.getAttribute('data-name');
      const price = parseFloat(product.getAttribute('data-price'));

      if (!name || isNaN(price)) {
        console.warn('Invalid product data:', name, price);
        return;
      }

      
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = `${name} - €${price.toFixed(2)}`;
      cartItems.appendChild(li);

      
      total += price;
      totalElement.textContent = total.toFixed(2);
    });
  });
});






//validimi i froms

document.addEventListener("DOMContentLoaded", () => {

  function showError(input, message) {
    input.classList.add("is-invalid");
    input.nextElementSibling.textContent = message;
  }

  function clearErrors(form) {
    form.querySelectorAll(".form-control").forEach(input => {
      input.classList.remove("is-invalid");
    });
  }

  const contactForm = document.getElementById("contact-form");
  const contactSuccess = document.getElementById("successMessage");

  if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors(contactForm);

      const fname = document.getElementById("firstname");
      const lname = document.getElementById("lastname");
      const email = document.getElementById("email");
      const phone = document.getElementById("phonenumber");
      const message = document.getElementById("text-details");

      let valid = true;

      if (!/^[a-zA-Z\s]+$/.test(fname.value.trim())) {
        showError(fname, "Please enter a valid first name.");
        valid = false;
      }

      if (!/^[a-zA-Z\s]+$/.test(lname.value.trim())) {
        showError(lname, "Please enter a valid last name.");
        valid = false;
      }

      if (!email.value.includes("@") || !email.value.includes(".")) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      }

      if (!/^\d{9}$/.test(phone.value.trim())) {
        showError(phone, "Phone number should have exactly 9 digits.");
        valid = false;
      }

      if (message.value.trim().length < 10) {
        showError(message, "Please enter at least 10 characters.");
        valid = false;
      }

      if (valid) {
        contactSuccess.style.display = "block";
        contactForm.reset();
      }
    });
  }

  const recruitForm = document.getElementById("recruit-form");
  const recruitSuccess = document.getElementById("recruitsuccess");

  if (recruitForm && recruitSuccess) {
    recruitForm.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors(recruitForm);

      const fname = document.getElementById("fname");
      const lname = document.getElementById("lname");
      const email = document.getElementById("email-recruit");
      const phone = document.getElementById("phonenumber-recruit");
      const file = document.getElementById("file-recruit");

      let valid = true;

      if (!/^[a-zA-Z\s]+$/.test(fname.value.trim())) {
        showError(fname, "Please enter a valid first name.");
        valid = false;
      }

      if (!/^[a-zA-Z\s]+$/.test(lname.value.trim())) {
        showError(lname, "Please enter a valid last name.");
        valid = false;
      }

      if (!email.value.includes("@") || !email.value.includes(".")) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      }

      if (!/^\d{9}$/.test(phone.value.trim())) {
        showError(phone, "Phone number should have exactly 9 digits.");
        valid = false;
      }

      if (!file.files[0]) {
        showError(file, "Please upload your CV.");
        valid = false;
      } else {
        const selected = file.files[0];
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        if (!allowedTypes.includes(selected.type)) {
          showError(file, "Only PDF or DOC formats are allowed.");
          valid = false;
        }

        if (selected.size > 5 * 1024 * 1024) {
          showError(file, "File is too large. Max size is 5MB.");
          valid = false;
        }
      }

      if (valid) {
        recruitSuccess.style.display = "block";
        recruitForm.reset();
      }
    });
  }

});




//blog flip

 document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = button.closest('.flip-card');
      card.classList.add('flipped');
    });
  });

  
  document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = button.closest('.flip-card');
      card.classList.remove('flipped');
    });
  });





