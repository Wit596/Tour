const newParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (target, props) => target.get(props)
});
const d = new Date();

$("#date").text(d.toLocaleString());
$("#name").text(newParams.name);
$("#address").text(newParams.address);

const tour = [
    "Hà Nội - Hạ Long - Tuần Châu",
    "Hà Nội - Sapa",
    "Đà Nẵng - Hội An",        
    "Buôn Mê Thuộc - Kon Tum",
    "TP.HCM - Nha Trang",
    "TP.HCM - Cần Thơ - Cà Mau"
];

$("#tour").text(tour[newParams.tour - 1]);
$("#note").text(newParams.note)

