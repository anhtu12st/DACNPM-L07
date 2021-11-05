export const getPagesList = (totalItems: number, pageSize: number, currentPage: number): (number | null)[] => {
	const listPage = [];
	const totalPages = Math.ceil(totalItems / pageSize);

	currentPage = currentPage > totalPages ? totalPages : currentPage;
	currentPage = currentPage < 1 ? 1 : currentPage;

	for (let i = currentPage - 2; i <= currentPage + 2; i++) {
		if (i > 0 && i <= totalPages) {
			listPage.push(i);
		}
	}

	if (currentPage - 2 > 2) {
		listPage.unshift(null);
		listPage.unshift(1);
	}

	if (currentPage + 2 < totalPages - 1) {
		listPage.push(null);
		listPage.push(totalPages);
	}

	if (currentPage - 2 === 2) {
		listPage.unshift(1);
	}

	if (currentPage + 2 === totalPages - 1) {
		listPage.push(totalPages);
	}

	return listPage;
}