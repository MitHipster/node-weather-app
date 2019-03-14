const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input');

searchForm.addEventListener('submit', e => {
	e.preventDefault();

	const location = searchInput.value;
	if (!location) return;

	fetch(`/weather?location=${location}`).then(resp => {
		resp.json().then(data => {
			if (data.error) {
				console.warn(data.error.message);
			} else {
				console.info(data.location);
			}
		});
	});

	searchInput.value = '';
});
