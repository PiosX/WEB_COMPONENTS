const img = document.querySelector("img");

const zoomImg = (e) => {
	//pozycja kursora w przegladarce
	const x = e.clientX;
	const y = e.clientY;

	//pozycja obrazka
	const imgX = img.offsetLeft;
	const imgY = img.offsetTop;

	//pozycja kursora wewnatrz obrazka
	const newX = (imgX - x) * -1;
	const newY = (imgY - y) * -1;

	img.style.transformOrigin = `${newX}px ${newY}px`;

	img.classList.add("zoom-img");
};

const resetImg = () => {
	img.classList.remove("zoom-img");
};

img.addEventListener("mousemove", zoomImg);
img.addEventListener("mouseout", resetImg);
