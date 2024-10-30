var tabNext1 = document.getElementById('tab-next1');
var tabNext2 = document.getElementById('tab-next2');

var tabCar1 = document.getElementById('tabCar1');
var tabCar2 = document.getElementById('tabCar2');

tabNext1.addEventListener('click', function() {
  tabCar2.classList.remove('active');
  tabCar1.classList.add('active');
  tabNext2.classList.remove('active2');
  tabNext1.classList.add('active2');
});

tabNext2.addEventListener('click', function() {
  tabCar1.classList.remove('active');
  tabCar2.classList.add('active');
  tabNext1.classList.remove('active2');
  tabNext2.classList.add('active2');
});



document.getElementById('testDriveForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const carModel = document.getElementById('carModel').value;
  const preferredDate = document.getElementById('preferredDate').value;
  const resultMessage = document.getElementById('resultMessage');

  const selectedDate = new Date(preferredDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
      resultMessage.textContent = 'Không thể đặt lịch vào ngày đã qua. Vui lòng chọn ngày trong tương lai.';
      resultMessage.style.color = 'red';
      return;
  }

  if (name && gender && email && phone && carModel && preferredDate) {
      resultMessage.textContent = `Cảm ơn ${name}, thông tin của bạn đã được gửi đi! Chúng tôi sẽ liên hệ với bạn sớm nhất.`;
      resultMessage.style.color = "green";

      document.getElementById('testDriveForm').reset();
  } else {
      resultMessage.textContent = 'Vui lòng điền đầy đủ thông tin.';
      resultMessage.style.color = 'red';
  }
});
