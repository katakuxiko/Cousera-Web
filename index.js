const menu = document.querySelector(".head-menu");
const items = document.querySelector(".head-items-mob");
console.log(menu);

menu.addEventListener("click", (e) => {
	if (menu.className.includes("active")) {
		menu.className = "head-menu";
		items.className = "head-items-mob";
	} else {
		items.className = "head-items-mob vis";
		menu.className = "head-menu active";
	}
	console.log(menu.className);
});

// STEP 1: Объявляем массив имён
const names = [
	"Yaakov",
	"John",
	"Jen",
	"Jason",
	"Paul",
	"Frank",
	"Larry",
	"Paula",
	"Laura",
	"Jim",
];

// STEP 2: Создаём объект 'helloSpeaker'
const helloSpeaker = {
	speak: function (name) {
		console.log("Hello " + name);
	},
};

// STEP 3: Создаём объект 'byeSpeaker'
const byeSpeaker = {
	speak: function (name) {
		console.log("Goodbye " + name);
	},
};

// STEP 4: Перебираем массив имён и выводим сообщения
for (let i = 0; i < names.length; i++) {
	// Берём первую букву имени
	const firstLetter = names[i][0].toLowerCase();

	// Проверяем, начинается ли имя с 'j'
	if (firstLetter === "j") {
		byeSpeaker.speak(names[i]);
	} else {
		helloSpeaker.speak(names[i]);
	}
}
