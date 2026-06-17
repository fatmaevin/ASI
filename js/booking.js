window.onload = () => {
  emailjs.init("ltwqVLNHAXJcaPh8a");

  const dateInput = document.querySelector("#date");
  const timeInput = document.querySelector("#time");

  // ❌ disable past dates
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);

  function updateMinTime() {
    const now = new Date();
    const selectedDate = dateInput.value;

    if (selectedDate === today) {
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");

      timeInput.min = `${hours}:${minutes}`;
    } else {
      timeInput.removeAttribute("min");
    }
  }

  dateInput.addEventListener("change", updateMinTime);

  const form = document.querySelector("#booking-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.querySelector("#name").value,
      phone: document.querySelector("#phone").value,
      email: document.querySelector("#email").value,
      date: dateInput.value,
      time: timeInput.value,
      guests: document.querySelector("#guests").value,
      requests: document.querySelector("#requests").value,
    };

    emailjs
      .send("service_ovfluvp", "template_lvyruj9", data)
      .then(() => {
        alert("Booking sent successfully 🎉");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  });
};
