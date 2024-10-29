document.getElementById('media').addEventListener('click', function (e) {
    e.preventDefault();
    updateContent(
        'Mtr/image/a-class4.png',
        'Mercedes-Benz User Experience (MBUX)',
        'MBUX (Trải nghiệm người dùng của Mercedes-Benz) mang đến những trải nghiệm lái thoải mái nhất có thể. Nhờ trí tuệ nhân tạo, hệ thống có khả năng lấy thông tin và theo thời gian thích ứng ngày một tốt hơn với người lái. Với hệ thống điều khiển bằng giọng nói thông minh LINGUATRONIC, bạn có thể nói chuyện gần như tự nhiên như với một người bạn.'
    );
});

document.getElementById('comfort').addEventListener('click', function (e) {
    e.preventDefault();
    updateContent(
        'Mtr/image/comfort.png',
        'Hệ thống điều hòa tự động THERMOTRONIC',
        'THERMOTRONIC điều chỉnh nhiệt độ cá nhân ở hai vùng. Điều này cho phép bạn và hành khách ghế trước cài đặt nhiệt độ mong muốn tách biệt với nhau. Bạn không bao giờ phải điều chỉnh lại. Bởi vì các cảm biến chính xác cũng ghi lại các điều kiện thay đổi như bức xạ mặt trời.'
    );
});

document.getElementById('safety').addEventListener('click', function (e) {
    e.preventDefault();
    updateContent(
        'Mtr/image/safe.png',
        'Bảo vệ xe URBAN GUARD Plus',
        'Gói Bảo vệ xe URBAN GUARD Plus giúp giám sát xung quanh chiếc xe. Nhờ hệ thống Báo động đột nhập và trộm cắp, cũng như Vô hiệu hóa chìa khóa khẩn cấp mà bạn có thể ứng phó nhanh chóng. Khi đang trên đường đi, ứng dụng có thể báo động cho bạn về phát hiện nguy cơ va chạm. Ngoài ra dịch vụ Hỗ trợ chống trộm xe giúp tăng khả năng lấy lại tài sản của bạn.'
    );
});

function updateContent(imageSrc, title, description) {
    document.getElementById('boxImage').src = imageSrc;
    document.getElementById('boxTitle').textContent = title;
    document.getElementById('boxDescription').textContent = description;
}