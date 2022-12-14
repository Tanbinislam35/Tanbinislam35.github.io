window.onload = async () => {
	await sleep(500);
	await tw_print(100, "tanbin", document.getElementById("title"), true);
	await sleep(500);
	await tw_print(100, "hello, idea", document.getElementById("greating_text"));
	await sleep(500);
	await tw_print(50, "I am Tanbin. I love turning great ideas into reality.", document.getElementById("about_me"));
	
	await sleep(500);
	document.getElementById("account_links").className += " active";
	await sleep(500);
	document.getElementById("nav_large").classList.add("active");
	document.getElementById("nav_small").classList.add("active");

	document.getElementById("main").classList.remove("wide");
	await sleep(600);
	let main_content = document.getElementById("main_content");
	fit_height(main_content);
	document.getElementById("self_image").classList.add("active");

	await sleep(600);
	main_content.style.height = null;
	main_content.classList.add("active");
}
document.onmouseup = change_selected_text_color;
document.onkeyup = change_selected_text_color;
const root = document.querySelector(':root');
const selected_text_colors = [
	"#4dff4d",	// green
	"#ffeb3b",	// yellow
	"#1e90ff",	// dodger blue
	"#f44336",	// red
	"#00ffff",	// azure
	"#7fffd4",	// aquamarine
]
const selected_text_colors_len = selected_text_colors.length;
var current_selected_text_color_index;
function change_selected_text_color() {
	let i = Math.floor(Math.random() * (selected_text_colors_len));
	while (i == current_selected_text_color_index) {
		i = Math.floor(Math.random() * (selected_text_colors_len));
	}
	root.style.setProperty("--selected_text_color", selected_text_colors[i]);
}
function goat(tag) {
	window.scroll({
		top: tag.offsetTop,
		left: tag.offsetLeft,
		behavior: 'smooth'
	});
}
function goat_id(id) {
	let tag = document.getElementById(id);
	goat(tag);
}
function col_exp(tag, rtt_tag) {
	taggle_state(tag);
	rtt_tag.classList.toggle("_rotation_active");
	}
	
	function fit_height(tag) {
	var current_h = getComputedStyle(tag).height;
	tag.style.height = "fit-content";
	var actual_h = getComputedStyle(tag).height;
	tag.style.height = current_h;
	tag.offsetHeight;
	tag.style.height = actual_h;
}
	
function small_goat(id, tag) {
	let gtag = document.getElementById(id);
	let navh = document.getElementById("nav_small").offsetHeight;
	window.scroll({
		top: (gtag.offsetTop - navh),
		left: gtag.offsetLeft,
		behavior: 'smooth'
	});
	taggle_state(tag);
}
	
function taggle_state(tag) {
	if (tag.classList.contains("active")) {
		tag.style.height = 0;
		tag.classList.remove("active");
	} else {
		fit_height(tag);
		tag.classList.add("active");
	}
}
async function tw_print(ms, s, tag, keep_cursor=false) {
	const s_len = s.length;
	tag.innerHTML = "";

	var text = document.createElement("span");
	var cursor = document.createElement("span");
	cursor.innerHTML = "|";
	cursor.setAttribute("class", "typed-cursor typed-cursor--blink");
	
	tag.appendChild(text);
	tag.appendChild(cursor);

	for (let i = 0; i < s_len; i++) {
		await sleep(ms);
		text.innerText += s[i];
	}
	if (!keep_cursor) {
		cursor.remove();
	}
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}