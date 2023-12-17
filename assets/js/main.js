let loginAccount_btn = document.getElementById("loginAccount_btn");

loginAccount_btn.addEventListener("click", (e) => {
    e.preventDefault(); // Səhifəni refresh etməni dayandırır
    let form = document.getElementById("loginForm");
    var formData = new FormData(form);
    let loginInfo = {};

    // Formdakı məlumatları əldə et və loginInfo obyektinə mənimsət
    formData.forEach(function (value, key) {
        loginInfo[key] = value;
    });

    // Əgər məlumatlar boşdursa, xəbərdarlıq ver və funksiyadan çıx
    if (Object.values(loginInfo).every(value => value.trim() === "")) {
        alert("Zəhmət olmasa, formu doldurun!");
        return;
    }

    // Local storage-dan user məlumatlarını oxu
    let users = getLocalStorageArray('users');

    // Verilmiş ad və şifrə ilə uyğun hesabı axtar
    let matchedUser = users.find(user => user.name === loginInfo.name && user.password === loginInfo.password);

    if (matchedUser) {
        // Giriş müvəffəqiyyətlidirsə, başqa əmrləri əlavə edin
        alert("Giriş müvəffəqiyyətlidir!");
        // window.location.href = "/home.html"; // Əlavə etmək istədiyiniz səhifəyə yönləndirmək üçün istifadə edin
    } else {
        // Hesab tapılmadıqda xəbərdarlıq verin
        alert("Belə hesab yoxdur!");
    }
});

// Əgər local storage-dan məlumatı oxumaq üçün funksiya yoxdursa, təyin et
function getLocalStorageArray(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
}