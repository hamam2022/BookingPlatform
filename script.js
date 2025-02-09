function openBookingModal(eventName) {
  document.getElementById('bookingModal').style.display = 'block';
  document.getElementById('selectedEvent').innerText = eventName;
  document.getElementById('eventName').value = eventName;
}

function closeBookingModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

function scrollToBookingForm() {
  closeBookingModal();
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const eventName = document.getElementById('eventName').value.trim();
  const date = document.getElementById('date').value;

  if (!name || !email || !eventName || !date) {
    alert("الرجاء تعبئة جميع الحقول.");
    return;
  }

  alert(`تم حجز الفعالية: ${eventName}\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالتاريخ: ${date}`);
  // هنا يمكن إرسال البيانات إلى الخادم عبر AJAX أو Fetch
  document.getElementById('bookingForm').reset();
}
