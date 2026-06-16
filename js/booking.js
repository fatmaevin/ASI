emailjs.init("ltwqVLNHAXJcaPh8a");

const form = document.querySelector("#booking-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: document.querySelector("#name").value,
    phone: document.querySelector("#phone").value,
    date: document.querySelector("#date").value,
    time: document.querySelector("#time").value,
    guests: document.querySelector("#guests").value,
    requests: document.querySelector("#requests").value,
  };

  emailjs
    .send("service_oodyfo6", "template_lvyruj9", data)
    .then(() => {
      alert("Booking sent successfully 🎉");
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong. Please try again.");
    });
});
