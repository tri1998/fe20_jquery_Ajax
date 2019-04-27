function NguoiDungService(){

    this.layDanhSachNguoiDung = function(){
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
        .done(function(result){
            localStorage.setItem("DSNguoiDung",JSON.stringify(result));
            taoBang(result);
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.themNguoiDung = function(nguoiDung){
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoiDung
        })
        .done(function(result){
            if(result === "tai khoan da ton tai !"){
                alert(result);
            }else{
                location.reload();
            }
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.xoaNguoiDung = function(taiKhoan){
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type: "DELETE"
        })
        .done(function(result){
            location.reload();
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.layThongTinNguoiDung = function(taiKhoan){
        var danhSachNguoiDung =JSON.parse(localStorage.getItem("DSNguoiDung"));
        // var nguoiDung;
        // danhSachNguoiDung.map(function(item){
        //     if(item.TaiKhoan===taiKhoan){
        //         nguoiDung = item;
        //         return nguoiDung;
        //     }
        // })
        return danhSachNguoiDung.find(function(item){
            return item.TaiKhoan===taiKhoan;
        })
    }

    this.capNhatThongTinNguoiDung = function(nguoiDung){
        var ND = JSON.stringify(nguoiDung);//Theo Yeu Cau Cua Back-End
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung",
            type:"PUT",
            data:ND,
            contentType:"application/json",//Luc Do Moi Cap Nhat Duoc
            dataType:"json"//Luc Do Moi Cap Nhat Duoc

        })
        .done(function(result){
            location.reload();
        })
        .fail(function(err){
            return err;
        })
    }
}

function taoBang(danhSachMang){
    var tblBody = ``;

    danhSachMang.map(function(item, index){
        tblBody += `
        <tr>
            <td>${index+1}</td>
            <td>${item.TaiKhoan}</td>
            <td>${item.MatKhau}</td>
            <td>${item.HoTen}</td>
            <td>${item.Email}</td>
            <td>${item.SoDT}</td>
            <td>${item.TenLoaiNguoiDung}</td>
            <td>
                <button class="btn btn-success btnSua" data-taikhoan="${item.TaiKhoan}" data-toggle="modal" data-target="#myModal">Sửa</button>
                <button class="btn btn-danger btnXoa" data-taikhoan="${item.TaiKhoan}">Xóa</button>
            </td>
        </tr>
    `
    })
    
    $("#tblDanhSachNguoiDung").html(tblBody);
}