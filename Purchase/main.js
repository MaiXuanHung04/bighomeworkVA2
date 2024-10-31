
//nodeName : lay ten
//nodeValue : gia tri

var giohang = [];

function viewcart() {
    let kq = `
    <h2>Đơn hàng của bạn</h2>
    <table style="border-collapse: collapse;">
        <tr>
            <th>STT</th>
            <th>Hình</th>
            <th>Tên Sản Phẩm</th>
            <th>Đơn Giá</th>
            <th>Số Lượng</th>
            <th>Thành Tiền</th>
            <th>Xóa</th>
        </tr>`;

    let total = 0;
    for (let i = 0; i < giohang.length; i++) {
        let stt = i + 1;
        let ttien = giohang[i][3] * parseInt(giohang[i][2]);
        total += ttien;
        kq += `
        <tr>
            <td>${stt}</td>
            <td><img src="${giohang[i][0]}" alt="Sản phẩm" width="50"></td>
            <td>${giohang[i][1]}</td>
            <td>${giohang[i][2]} VND</td>
            <td>${giohang[i][3]}</td>
            <td>${ttien} VND</td>
            <td style="text-align: center;"><a href="#" onclick="removeCart(${i})">Xóa</a></td>
        </tr>`;
    }

    kq += `
        <tr>
            <td colspan="5">Tổng Đơn Hàng</td>
            <td class="total-price">${total} VND</td>
            <td></td>
        </tr>
    </table>`;

    document.getElementById("showgiohang").innerHTML = kq;
}

function addCart(x) {  
    var img = x.parentElement.children[0].src;
    var tensp = x.parentElement.children[1].innerText + " " + x.parentElement.children[2].innerText;
    var giasp = x.parentElement.children[3].innerText.replace('VND', '').trim();
    var sl = 1;
    var item = [img, tensp, giasp, sl];
    giohang.push(item);
    //viewcart();
    document.getElementById("slsp").innerHTML = giohang.length;
}

function removeCart(index) {
    giohang.splice(index, 1);
    viewcart();
}

function hienthigiohang() {
    var idgiohang = document.getElementById("showgiohang");
    if(idgiohang.style.display == ""){
        idgiohang.style.display = "none";
    }else{
        idgiohang.style.display = "";
        viewcart();
    }
}

// qr //

var openModel = document.querySelector(".open__model");
var model = document.querySelector(".model");
var iconClose = document.querySelector(".model__header i");


// Việc 1: khi click vào btnOpen thì sẽ show ra modal
function toggleModel() {
  model.classList.toggle('hide');
}

openModel.addEventListener('click', toggleModel);

model.addEventListener('click', toggleModel);

iconClose.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleModel();
});

