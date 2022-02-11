const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)


let skills = document.getElementsByClassName("skills__list-item");
let title = document.getElementById("skills-title");
let skillsLogo = document.getElementById("skills-logo");
let animateDiv = document.getElementById('animate-div');

let skillsDesc1 = document.getElementById('skills-desc-1');
let skillsDesc2 = document.getElementById('skills-desc-2');

// Python
skills[0].addEventListener("click", () => {

	if(!skills[0].classList.contains("is-clicked")) {
		removeClicked();
		skills[0].classList.add("is-clicked");
		animateDiv.classList.add("animate__backOutDown");
	
		animateDiv.addEventListener('animationend', () => {
			title.innerHTML = "Python";
			skillsLogo.src="assets/python.png";

			skillsDesc1.innerHTML = "I have significant experience working in Python both from university classes and personal projects.";
			skillsDesc2.innerHTML = "CS 61A - Structure and Interpretation of Computer Programs in Python (A)";

			animateDiv.classList.remove("animate__backOutDown");
			animateDiv.classList.add("animate__backInUp");
		});
	}
});

// Java
skills[1].addEventListener("click", () => {

	if(!skills[1].classList.contains("is-clicked")) {
		removeClicked();
		skills[1].classList.add("is-clicked");
		animateDiv.classList.add("animate__backOutDown");
	
		animateDiv.addEventListener('animationend', () => {
			title.innerHTML = "Java";
			skillsLogo.src="assets/java.png";

			skillsDesc1.innerText = "I have significant experience working in Java both from university classes and personal projects."
			skillsDesc2.innerHTML = "CS 61B - Data Structures & Algorithms in Java (In Progress)";

			animateDiv.classList.remove("animate__backOutDown");
			animateDiv.classList.add("animate__backInUp");
		});
	}
});

// iOS
skills[2].addEventListener("click", () => {
	if(!skills[2].classList.contains("is-clicked")) {
		removeClicked();
		skills[2].classList.add("is-clicked");
		animateDiv.classList.add("animate__backOutDown");
	
		animateDiv.addEventListener('animationend', () => {
			title.innerHTML = "Mobile Development";
			skillsLogo.src="assets/iOS.png";

			skillsDesc1.innerText = "I have significant experience working with iOS Development both from university classes and personal projects."
			skillsDesc2.innerHTML = "CIS 55 - iOS Development (A) [Foothill College]";

			animateDiv.classList.remove("animate__backOutDown");
			animateDiv.classList.add("animate__backInUp");
		});
	}
});

// PyTorch
skills[3].addEventListener("click", () => {
	if(!skills[3].classList.contains("is-clicked")) {
		removeClicked();
		skills[3].classList.add("is-clicked");
		animateDiv.classList.add("animate__backOutDown");
	
		animateDiv.addEventListener('animationend', () => {
			title.innerHTML = "PyTorch";
			skillsLogo.src="assets/pytorch.png";

			skillsDesc1.innerText = "I have significant experience working in PyTorch both from university classes and personal projects."
			skillsDesc2.innerHTML = "MaskOn<br>RecycleHub";

			animateDiv.classList.remove("animate__backOutDown");
			animateDiv.classList.add("animate__backInUp");
		});
	}
});

// Web
skills[4].addEventListener("click", () => {
	if(!skills[4].classList.contains("is-clicked")) {
		removeClicked();
		skills[4].classList.add("is-clicked");
		animateDiv.classList.add("animate__backOutDown");
	
		animateDiv.addEventListener('animationend', () => {
			title.innerHTML = "Web Development";
			skillsLogo.src="assets/web.png";

			skillsDesc1.innerText = "I have significant experience working with Web Development both from university classes and personal projects."
			skillsDesc2.innerHTML = "Google CSSI<br>Health Pal";

			animateDiv.classList.remove("animate__backOutDown");
			animateDiv.classList.add("animate__backInUp");
		});
	}
});

function removeClicked() {
	skills[0].classList.remove("is-clicked");
	skills[1].classList.remove("is-clicked");
	skills[2].classList.remove("is-clicked");
	skills[3].classList.remove("is-clicked");
	skills[4].classList.remove("is-clicked");
}