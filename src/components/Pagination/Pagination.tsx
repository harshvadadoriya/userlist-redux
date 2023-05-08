// import React from 'react';
// import { useAppSelector, useAppDispatch } from '../../redux/store';
// import { setCurrentPage } from '../../redux/UserSlice/userSlice';

// const Pagination = (): JSX.Element => {
// 	const currentPage = useAppSelector((state) => state.data.currentPage);
// 	const dispatch = useAppDispatch();
// 	return (
// 		<>
// 			<div className="flex justify-between items-center my-3 px-2 border-t-2 border-indigo-100">
// 				<div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
// 					<svg
// 						width="14"
// 						height="8"
// 						viewBox="0 0 14 8"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<path
// 							d="M1.1665 4H12.8332"
// 							stroke="currentColor"
// 							strokeWidth="1.25"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 						/>
// 						<path
// 							d="M1.1665 4L4.49984 7.33333"
// 							stroke="currentColor"
// 							strokeWidth="1.25"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 						/>
// 						<path
// 							d="M1.1665 4.00002L4.49984 0.666687"
// 							stroke="currentColor"
// 							strokeWidth="1.25"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 						/>
// 					</svg>
// 					<button className="text-sm ml-3 font-medium leading-none">
// 						Previous
// 					</button>
// 				</div>
// 				<div className="sm:flex">
// 					<button className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
// 						1
// 					</button>
// 					<button className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
// 						2
// 					</button>
// 					<button
// 						className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
// 						onClick={() => dispatch(setCurrentPage(3))}
// 					>
// 						3
// 					</button>

// 					<button className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">
// 						4
// 					</button>
// 				</div>
// 				<div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
// 					<button className="text-sm font-medium leading-none mr-3">
// 						Next
// 					</button>
// 					<svg
// 						width="14"
// 						height="8"
// 						viewBox="0 0 14 8"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<path
// 							d="M1.1665 4H12.8332"
// 							stroke="currentColor"
// 							strokeWidth="1.25"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 						/>
// 						<path
// 							d="M9.5 7.33333L12.8333 4"
// 							stroke="currentColor"
// 							strokeWidth="1.25"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 						/>
// 						<path
// 							d="M9.5 0.666687L12.8333 4.00002"
// 							stroke="currentColor"
// 							strokeWidth="1.25"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 						/>
// 					</svg>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Pagination;
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { setCurrentPage } from '../../redux/UserSlice/userSlice';

const Pagination = (): JSX.Element => {
	const currentPage = useAppSelector((state) => state.data.currentPage);
	const totalPages = useAppSelector((state) => state.data.totalPage);
	const dispatch = useAppDispatch();

	const handlePreviousClick = () => {
		if (currentPage > 1) {
			dispatch(setCurrentPage(currentPage - 1));
		}
		console.log(currentPage);
	};

	const handleNextClick = () => {
		if (currentPage < totalPages) {
			dispatch(setCurrentPage(currentPage + 1));
		}
		console.log(currentPage);
	};

	const getPageNumbers = () => {
		const pageNumbers = [];

		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}

		return pageNumbers;
	};

	const handlePageClick = (pageNumber: number) => {
		dispatch(setCurrentPage(pageNumber));
	};

	return (
		<>
			<div className="flex justify-between items-center my-3 px-2 border-t-2 border-indigo-100">
				<div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
					<svg
						width="14"
						height="8"
						viewBox="0 0 14 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.1665 4H12.8332"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M1.1665 4L4.49984 7.33333"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M1.1665 4.00002L4.49984 0.666687"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<button
						className="text-sm ml-3 font-medium leading-none"
						onClick={handlePreviousClick}
					>
						Previous
					</button>
				</div>
				<div className="sm:flex">
					{getPageNumbers().map((pageNumber) => (
						<button
							key={pageNumber}
							className={`text-sm font-medium leading-none cursor-pointer border-t border-transparent px-2 ${
								currentPage === pageNumber
									? 'text-indigo-700 border-indigo-400'
									: 'text-gray-600 hover:text-indigo-700 hover:border-indigo-400'
							} pt-3 mr-4`}
							onClick={() => handlePageClick(pageNumber)}
						>
							{pageNumber}
						</button>
					))}
				</div>
				<div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
					<button
						className="text-sm font-medium leading-none mr-3"
						onClick={handleNextClick}
					>
						Next
					</button>
					<svg
						width="14"
						height="8"
						viewBox="0 0 14 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.1665 4H12.8332"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.5 7.33333L12.8333 4"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.5 0.666687L12.8333 4.00002"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		</>
	);
};

export default Pagination;
