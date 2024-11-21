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
