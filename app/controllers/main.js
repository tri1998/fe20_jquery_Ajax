$(document).ready(function(){

    function taoMoiHam(){
        
    }

    var nguoiDungService = new NguoiDungService();

    layDanhSachNguoiDung();

    function setHeaderFooterModal(title, titleButton, idButton){
        $(".modal-title").html(title);

        var footer = `
            <button id="${idButton}" class="btn btn-success">${titleButton}</button>
        `
        $(".modal-footer").html(footer);
    }

    $("#btnThemNguoiDung").click(function(){
        setHeaderFooterModal("Thêm người dùng", "Thêm mới", "btnThem");
    })

    $("body").delegate(".btnSua", "click", function(){
        setHeaderFooterModal("Sửa người dùng", "Cập nhật", "btnCapNhat");
        var taiKhoan = $(this).data('taikhoan');
        var nguoiDung = nguoiDungService.layThongTinNguoiDung(taiKhoan);
        console.log(nguoiDung);


        $("#TaiKhoan").val(nguoiDung.TaiKhoan);
        $("#TaiKhoan").attr("disabled", "disabled");
        $("#HoTen").val(nguoiDung.HoTen);
        $("#MatKhau").val(nguoiDung.MatKhau);
        $("#Email").val(nguoiDung.Email);
        $("#SoDienThoai").val(nguoiDung.SoDT);
        $("#loaiNguoiDung").val(nguoiDung.MaLoaiNguoiDung);
        // nguoiDungService.layThongTinNguoiDung()
    })

    $("body").delegate("#btnCapNhat","click", function(){
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var loaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, matKhau,hoTen, email, soDT, loaiNguoiDung);
        nguoiDungService.capNhatThongTinNguoiDung(nguoiDung);
    })

    $("body").delegate(".btnXoa", "click", function(){
        var taiKhoan = $(this).data('taikhoan');
        nguoiDungService.xoaNguoiDung(taiKhoan);
    })

    $("body").delegate("#btnThem", "click", function(){
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var loaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, matKhau,hoTen, email, soDT, loaiNguoiDung);

        nguoiDungService.themNguoiDung(nguoiDung);
    })

    function layDanhSachNguoiDung(){
        nguoiDungService.layDanhSachNguoiDung();
    }
})