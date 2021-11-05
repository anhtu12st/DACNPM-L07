import { getPagesList } from "../../utils/pagination";

export interface PaginationProps {
	/**
	 * The total number of items in the table.
	 */
	totalItems: number;
	/**
	 * The number of items to display per page.
	 */
	itemsPerPage: number;
	/**
	 * The current page number.
	 */
	currentPage: number;
	/**
	 * The function to call when the page number is changed.
	 */
	onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
	const {
		itemsPerPage,
		totalItems,
		currentPage,
		onPageChange
	} = props;

	const pagesList = getPagesList(totalItems, itemsPerPage, currentPage);

	const handleOnChange = (page: number | null): void => {
		if (!page || page === currentPage || page < 1 || page > pagesList.length) {
			return;
		}

		onPageChange(page);
	};

	return (
		<div className='flex flex-row pt-2'>
			<div className="flex-1"></div>

			<div
				className="w-7 h-7 text-center mx-2 cursor-pointer rounded-full border-transparent border hover:border-gray-300"
				onClick={() => handleOnChange(currentPage - 1)}
			> &#60; </div>

			{pagesList.map((page, index) => {
				return (
					<div
						key={index}
						className={`w-7 h-7 text-center mx-2
							${page === currentPage ? "bg-blue-400 text-white" : ""}
							${page && "cursor-pointer border-transparent border hover:border-gray-300 rounded-full"}
						`}
						onClick={() => handleOnChange(page)}
					>
						{page || "..."}
					</div>
				);
			})}

			<div
				className="w-7 h-7 text-center mx-2 cursor-pointer rounded-full border-transparent border hover:border-gray-300"
				onClick={() => handleOnChange(currentPage + 1)}
			> &#62; </div>
		</div>
	);
}

export default Pagination;