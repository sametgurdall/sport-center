//Header Scrool

const navbar = document.querySelector("#header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#355592";
    } else {
        navbar.style.backgroundColor = "transparent"; 
    }
   
})

// Our Classes 

const buttons = document.querySelectorAll('.our-button');

// Her bir buton için event listener ekleyin
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Önce tüm butonlardan 'active' sınıfını kaldır
        buttons.forEach(btn => btn.classList.remove('active'));

        // Tıklanan butona 'active' sınıfını ekle
        this.classList.add('active');
    });
});


const sportsImg = document.querySelector("#sports-img");
const sportsH2 = document.querySelector("#sportsH3");
const sportsP = document.querySelector("#sportsHP");

const sportsBtns = document.querySelector("#sports-classes");

function changeToYoga() {
    sportsImg.src = './images/yoga.jpg';
    sportsH2.textContent = "Why are you Yoga?";
}

function changeToGroup() {
    sportsImg.src = "./images/group.webp";
    sportsH2.textContent = "Group";
}

function changeToSolo() {
    sportsImg.src = './images/solo.jpg';
    sportsH2.textContent = "Solo";
}

function changeToStretching() {
    sportsImg.src = './images/stret.webp';
    sportsH2.textContent = "Stretching";
}

sportsBtns.addEventListener("click", function (event){
    const id = event.target.id;
    switch (id) {
        case "yoga":
            changeToYoga();
            break;
        case "group":
            changeToGroup();
            break;
        case "solo":
            changeToSolo();
            break;
        case "stretching":
            changeToStretching();
            break;
            default:
                return;
    }
});


//bmi 

const heightInput = document.getElementById("bmiHeight");
const weightInput = document.getElementById("bmiWeight");
const bmiLabel = document.getElementById("yourBmi");
const progressIcon = document.getElementById("progressIcon");

// BMI Hesaplama Fonksiyonu
function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // Boyu metreye çevir
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        bmiLabel.textContent = "Please enter valid height and weight!";
        progressIcon.style.left = "0%";
        progressIcon.style.color = "#e0e0e0";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2); // BMI Hesapla
    bmiLabel.textContent = `Your BMI: ${bmi}`;

    // BMI'ye göre ikonun konumunu güncelle
    updateProgressIcon(bmi);
}

// İkon Konumunu Güncelleme Fonksiyonu

function updateProgressIcon(bmi) {
    let position = 0;
    let color = "orange";
 

    if (bmi < 18.5) {
        position = (bmi / 18.5) * 20; // Düşük kilolu: %0 - %20
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        position = ((bmi - 18.5) / (24.9 - 18.5)) * 20 + 20; // Normal: %21 - %40
    } else if (bmi >= 25 && bmi <= 29.9) {
        position = ((bmi - 25) / (29.9 - 25)) * 20 + 40; // Fazla kilolu: %41 - %60
    } else if (bmi >= 30 && bmi <= 34.9) {
        position = ((bmi - 30) / (34.9 - 30)) * 20 + 60; // Obez: %61 - %80
    } else if (bmi >= 35) {
        position = 100; // Aşırı obez: %100
    }
    // İkonun konumu ve rengi ayarla
    progressIcon.style.left = `${position}%`;
    progressIcon.style.color = "orange";
    
}

// Input alanlarına her değişiklikte sonucu güncelle
heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);