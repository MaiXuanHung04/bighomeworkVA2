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
