document.getElementById('media').addEventListener('click', function (e) {
    e.preventDefault();
    updateContent(
        'Mtr/image/coupe9.png', 'Gói Crôm AMG', 'Với gói Crôm AMG[3], chiếc xe của bạn sẽ trở nên đặc biệt và sang trọng hơn. Các chi tiết mạ crôm sáng bóng sẽ là điểm nhấn cho thiết kế tinh tế vào tạo nên sự tương phản nổi bật với màu sắc của chiếc xe.',
        'Mtr/image/coupe10.png', 'Nắp bình nhiên liệu AMG', 'Thể hiện phong cách độc nhất ngay cả khi ẩn mình: Nắp bình nhiên liệu AMG[3]màu bạc mạ crôm với logo AMG và các chi tiết thiết kế màu đen tôn lên nét thể thao thuần chủng AMG.',
        'Mtr/image/coupe11.png', 'Hệ thống chiếu sáng logo AMG', 'Đèn chiếu logo AMG sẽ biến chiếc xe của bạn trở thành chiến binh thực thụ trên mọi đường đua. Đèn được lắp ở cấu kiện dọc ốp sườn xe chiếu rọi dòng chữ "AMG" lên mặt đường vô cùng bắt mắt, khởi dậy sự hứng khởi trước khi xuất phát.'
    );
});

document.getElementById('comfort').addEventListener('click', function (e) {
    e.preventDefault();
    updateContent(
        'Mtr/image/coupe12.png', 'Tay lái AMG Performance với thiết kế Carbon / vi sợi MICROCUT', 'Tay lái AMG mang thiết kế Carbon nổi bật kết hợp với vi sợi MICROCUT[3]chắc chắn - một điểm nhấn về ngoại hình thỏa mãn mọi xúc giác.',
        'Mtr/image/coupe13.png', 'Băng ghế sau 3 chỗ ngồi', 'Băng ghế sau với 3 chỗ ngồi[3] linh hoạt biến xe của bạn thành chiếc xe AMG 5 chỗ thoải mái hơn. Ghế giữa cỡ lớn được bổ sung thêm cũng có thể dùng làm tựa tay cho khách khoang sau.',
        'Mtr/image/coupe14.png', 'Chi tiết trang trí bằng chất liệu Carbon mờ', 'Các chi tiết trang trí giúp nội thất xe thêm độc đáo và cá tính. Đồng thời, chi tiết này là một đặc điểm chất lượng dễ nhận biết bất cứ lúc nào của một sản phẩm sang trọng được xử lý cẩn thận.'
    );
});

function updateContent(imageSrc1, title1, description1, imageSrc2, title2, description2, imageSrc3, title3, description3) {
    document.getElementById('boxImage').src = imageSrc1;
    document.getElementById('boxTitle').textContent = title1;
    document.getElementById('boxDescription').textContent = description1;

    document.getElementById('boxImage2').src = imageSrc2;
    document.getElementById('boxTitle2').textContent = title2;
    document.getElementById('boxDescription2').textContent = description2;

    document.getElementById('boxImage3').src = imageSrc3;
    document.getElementById('boxTitle3').textContent = title3;
    document.getElementById('boxDescription3').textContent = description3;
}
