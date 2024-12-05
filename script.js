// script.js

// Об'єкт з калоріями для продуктів
const caloriesData = {
    "яблуко": 52,
    "банан": 89,
    "хліб пшеничний": 265,
    "яйце": 68,
    "куряче філе": 165,
    "молоко": 62,
    "творог": 98,
    "печиво": 460,
    "картопля": 87,
    "рис": 130,
    "паста": 131,
    "сир": 402,
    "олія": 884,
    "чорний шоколад": 546,
    "помідор": 18,
    "огірок": 16,
    "морква": 41,
    "салат": 15,
    "помаранч": 43,
    "грушка": 57
};

// Функція для розрахунку калорій
document.getElementById("calculate-btn").addEventListener("click", function() {
    const productName = document.getElementById("product-name").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    if (caloriesData[productName]) {
        const calories = caloriesData[productName];
        resultDiv.innerHTML = `<p>У продукті "${productName}" є ${calories} калорій на 100 г.</p>`;
    } else {
        resultDiv.innerHTML = "<p>Цей продукт не знайдений в базі. Спробуйте ще раз або введіть інший продукт.</p>";
    }
});


function calculateCalories() {
    const product = document.getElementById("product").value.toLowerCase();
    const result = document.getElementById("result");

    if (calorieData[product]) {
        result.textContent = `Калорійність ${product}: ${calorieData[product]} ккал на 100 г.`;
    } else {
        result.textContent = "Продукт не знайдено в базі. Спробуйте інший.";
    }
}

// script.js

// Ініціалізація щоденника
let journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

// Відобразити записи при завантаженні сторінки
function renderJournal() {
    const journalTable = document.getElementById("journal-table").querySelector("tbody");
    journalTable.innerHTML = ""; // Очищуємо таблицю

    journalEntries.forEach((entry, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.meal}</td>
            <td>${entry.calories}</td>
            <td><button onclick="deleteEntry(${index})">Видалити</button></td>
        `;

        journalTable.appendChild(row);
    });
}

// Додавання нового запису
document.getElementById("journal-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const meal = document.getElementById("meal").value;
    const calories = document.getElementById("calories").value;

    if (date && meal && calories) {
        journalEntries.push({ date, meal, calories });
        localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
        renderJournal();

        // Очищення форми
        document.getElementById("journal-form").reset();
    } else {
        alert("Заповніть усі поля!");
    }
});

// Видалення запису
function deleteEntry(index) {
    journalEntries.splice(index, 1);
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
    renderJournal();
}

// Завантаження записів під час старту
renderJournal();


// script.js

// Ініціалізація масиву для збереження записів на гуртки
let groupRegistrations = JSON.parse(localStorage.getItem("groupRegistrations")) || [];

// Відображення записів
function renderGroups() {
    const groupsList = document.getElementById("groups-list");
    groupsList.innerHTML = ""; // Очищаємо список

    groupRegistrations.forEach((registration, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <strong>${registration.name}</strong> зареєстрований на гурток: <em>${registration.group}</em> (Email: ${registration.email})
            <button onclick="deleteRegistration(${index})">Видалити</button>
        `;

        groupsList.appendChild(listItem);
    });
}

// Додавання нового запису
document.getElementById("groups-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const group = document.getElementById("group").value;

    if (name && email && group) {
        groupRegistrations.push({ name, email, group });
        localStorage.setItem("groupRegistrations", JSON.stringify(groupRegistrations));
        renderGroups();

        // Очищення форми
        document.getElementById("groups-form").reset();
    } else {
        alert("Заповніть усі поля!");
    }
});

// Видалення запису
function deleteRegistration(index) {
    groupRegistrations.splice(index, 1);
    localStorage.setItem("groupRegistrations", JSON.stringify(groupRegistrations));
    renderGroups();
}

// Завантаження записів при старті
renderGroups();
