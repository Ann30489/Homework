function openNav() {
	document.getElementsByClassName("c-navbar")[0].style.width = "250px";
	document.getElementsByClassName("c-main--collapse")[0].style.marginLeft = "250px";
	document.body.classList.add("lock");
	// document.body.style.overflow = "hidden";

}

function closeNav() {
	document.getElementsByClassName("c-navbar")[0].style.width = "0";
	document.getElementsByClassName("c-main--collapse")[0].style.marginLeft = "0";
	document.body.classList.remove("lock");
	// document.body.style.overflow = "visible";
}