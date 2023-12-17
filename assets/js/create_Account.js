const createNewAccount_btn = document.getElementById("createNewAccount_btn")
// console.log(createNewAccount_btn);
createNewAccount_btn.addEventListener("click", (e) => {
    e.preventDefault()
    let form = document.getElementById("createNewAccountForm");
    var formData = new FormData(form);

    let formDataObject = {};

    // Əgər bütün parametrlər dolu deyilsə, əlavə etmə
    let allParamsFilled = true;

    formData.forEach(function (value, key) {
        if (value.trim() === "") {
            allParamsFilled = false;
            return; // Dövrdən çıx, çünki bir parametr boşdur
        }

        formDataObject[key] = value;
    });

    // Əgər bütün parametrlər dolu deyilsə, əlavə etmə
    if (allParamsFilled) {
        // Əgər local storage-dan məlumatı oxumaq üçün funksiya yoxdursa, təyin et
        function getLocalStorageArray(key) {
            const storedData = localStorage.getItem(key);
            return storedData ? JSON.parse(storedData) : [];
        }

        // Əgər local storage-a məlumatı yazmaq üçün funksiya yoxdursa, təyin et
        function setLocalStorageArray(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
            window.location.href="/login.html"
        }

        // Local storage-dan array-i oxu
        let users = getLocalStorageArray('users');

        // Array-ə yeni obyekt əlavə et
        const newObject = formDataObject;
        users.push(newObject);

        // Dəyişmiş array-i local storage-a yenidən yaz
        setLocalStorageArray('users', users);
    } else {
        alert("Bütün parametrlər dolu olmalıdır!");
    }
})