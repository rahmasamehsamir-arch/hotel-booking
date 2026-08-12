document.addEventListener("DOMContentLoaded", function () {
  
  const roomButtons = document.querySelectorAll(".btn-room-blue, .btn-room-navy");
  
  roomButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const roomCard = this.closest(".room-card");
      const roomName = roomCard ? roomCard.querySelector("h4").innerText : "هذه الغرفة";
      
      alert("شكرًا لاختيارك: " + roomName + "\nسيتم تحويلك لصفحة إتمام الحجز الآن.");
    });
  });

  
  const contactInfoList = document.querySelectorAll(".card-info-val");
  
  contactInfoList.forEach(function (info) {
    info.style.cursor = "pointer";
    info.addEventListener("click", function () {
      const textToCopy = this.innerText;
      navigator.clipboard.writeText(textToCopy);
      alert("تم نسخ: " + textToCopy);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("Book a Table JavaScript Initialized!");

  
  let selectedGuests = 1;
  let selectedDay = "9"; 
  let selectedTime = "9:00 am"; 


  const guestCountEl = document.getElementById("guestCount");
  const btnPlus = document.getElementById("btnPlus");
  const btnMinus = document.getElementById("btnMinus");

  if (btnPlus && btnMinus && guestCountEl) {
    btnPlus.addEventListener("click", function () {
      if (selectedGuests < 20) { 
        selectedGuests++;
        guestCountEl.innerText = selectedGuests;
      }
    });

    btnMinus.addEventListener("click", function () {
      if (selectedGuests > 1) { 
        selectedGuests--;
        guestCountEl.innerText = selectedGuests;
      }
    });
  }


  const calendarDays = document.querySelectorAll(".calendar-table .cal-day");

  calendarDays.forEach(function (dayCell) {
    dayCell.addEventListener("click", function () {
   
      document.querySelectorAll(".calendar-table td").forEach(td => td.classList.remove("active-day"));

     
      this.classList.add("active-day");
      selectedDay = this.innerText.trim();
    });
  });


  const timeSlotBtns = document.querySelectorAll(".time-slot-btn");

  timeSlotBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
     
      timeSlotBtns.forEach(b => b.classList.remove("navy-slot"));

     
      this.classList.add("navy-slot");
      selectedTime = this.innerText.trim();
    });
  });


  const bookTableBtn = document.getElementById("bookTableBtn");

  if (bookTableBtn) {
    bookTableBtn.addEventListener("click", function (e) {
      e.preventDefault();

      
      const terraceSelect = document.querySelector(".terrace-select-title");
      const selectedTerrace = terraceSelect ? terraceSelect.value : "Garden Terrace";

  
      const occasionSelect = document.querySelector(".calendar-navy-card select");
      const selectedOccasion = occasionSelect ? occasionSelect.value : "None";

      
      alert(
        ` Table Reservation Successful!\n\n` +
        ` Location: ${selectedTerrace}\n` +
        ` Guests: ${selectedGuests} Person(s)\n` +
        ` Date: August ${selectedDay}, 2026\n` +
        ` Time: ${selectedTime}\n` +
        ` Occasion: ${selectedOccasion}\n\n` +
        `We look forward to hosting you at Hotel Booking Sea Resort!`
      );
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  console.log("Search Page JavaScript Initialized!");

  const branchSelect = document.getElementById("branchSelect");
  const roomCards = document.querySelectorAll(".room-card");

  if (branchSelect) {
    branchSelect.addEventListener("change", function () {
      const selectedBranch = this.value;

      roomCards.forEach((card) => {
        const cardBranch = card.getAttribute("data-branch");

        if (selectedBranch === "all" || cardBranch === selectedBranch) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }


  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  if (priceRange && priceValue) {
    priceRange.addEventListener("input", function () {
      priceValue.innerText = `${this.value} $`;
    });
  }

 
  const bookBtns = document.querySelectorAll(".book-btn");

  bookBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.hasAttribute("disabled")) return;

      const roomName = this.getAttribute("data-room");
      const roomPrice = this.innerText;

      alert(` Selection Saved!\n\nRoom: ${roomName}\nPrice Info: ${roomPrice}\n\nProceeding to Step 2: Booking...`);
      
     
    });
  });
});
