checkUserLogin = () => {
	if (sessionStorage.getItem("user")) {
		const loginButton = document.getElementById("login");
		if (loginButton) {
			loginButton.innerHTML = "Logout";
			loginButton.id = "logout";
		}

		const logoutButton = document.getElementById("logout");
		if (logoutButton) {
			logoutButton.addEventListener("click", async (event) => {
				sessionStorage.clear();
				logoutButton.innerHTML = "Login";
				logoutButton.id = "login";
				window.location.href = "login.html";
			});
		}
	}
	if (sessionStorage.getItem("role") === "USER") {
		var navigationList = document.getElementById("navigation_list");
		if (navigationList) {
			var newListItem = document.createElement("li");
			var newLink = document.createElement("a");
			newLink.href = "user.html";
			newLink.textContent = "Profiel";

			newListItem.appendChild(newLink);
			navigationList.appendChild(newListItem);
		}
	}
	if (sessionStorage.getItem("role") === "ADMIN") {
		var navigationList = document.getElementById("navigation_list");
		if (navigationList) {
			var newListItem = document.createElement("li");
			var newLink = document.createElement("a");
			newLink.href = "admin.html";
			newLink.textContent = "Admin";

			newListItem.appendChild(newLink);
			navigationList.appendChild(newListItem);
		}
	}

	if (sessionStorage.getItem("role") === "REPAIR") {
		var navigationList = document.getElementById("navigation_list");
		if (navigationList) {
			var newListItem = document.createElement("li");
			var newLink = document.createElement("a");
			newLink.href = "user.html";
			newLink.textContent = "Herstellingen";

			newListItem.appendChild(newLink);
			navigationList.appendChild(newListItem);
			const divCalenderOverview = document.createElement("div");
			divCalenderOverview.innerHTML = createCalenderOverview();
			document.querySelector('main').appendChild(divCalenderOverview);
		}
	}
};

const createCalenderOverview = () => {
	return `<iframe class='leafletMap' height="450" src="https://outlook.office.com/calendar/view/month" title="Calender" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

window.addEventListener("load", checkUserLogin);
