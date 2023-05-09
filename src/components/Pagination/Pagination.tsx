// import React from 'react';
// import { useAppSelector, useAppDispatch } from '../../redux/store';
// import {
// 	fetchUsers,
// 	selectCurrentPage,
// 	selectTotalPage,
// } from '../../redux/UserSlice/userSlice';
// import Test from './Test';

// const Pagination = (): JSX.Element => {
// 	const dispatch = useAppDispatch();
// 	const currentPage = useAppSelector(selectCurrentPage);
// 	const totalPage = useAppSelector(selectTotalPage);

// 	const handlePageChange = (page: number) => {
// 		dispatch(fetchUsers(page));
// 	};

// 	const handlePrevClick = () => {
// 		if (currentPage > 0) {
// 			dispatch(fetchUsers(currentPage - 1));
// 		}
// 	};

// 	const handleNextClick = () => {
// 		if (currentPage < totalPage) {
// 			dispatch(fetchUsers(currentPage + 1));
// 		}
// 	};
// 	return (
// 		<>
// 			<div className="flex px-4 justify-between items-center my-3 mb-10 border-t-2 border-indigo-100">
// 				<div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
// 					<button
// 						className="text-sm flex items-center font-medium leading-none"
// 						onClick={handlePrevClick}
// 					>
// 						<svg
// 							className="mr-3"
// 							width="14"
// 							height="8"
// 							viewBox="0 0 14 8"
// 							fill="none"
// 							xmlns="http://www.w3.org/2000/svg"
// 						>
// 							<path
// 								d="M1.1665 4H12.8332"
// 								stroke="currentColor"
// 								strokeWidth="1.25"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							/>
// 							<path
// 								d="M1.1665 4L4.49984 7.33333"
// 								stroke="currentColor"
// 								strokeWidth="1.25"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							/>
// 							<path
// 								d="M1.1665 4.00002L4.49984 0.666687"
// 								stroke="currentColor"
// 								strokeWidth="1.25"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							/>
// 						</svg>
// 						Previous
// 					</button>
// 				</div>
// 				<div className="sm:flex">
// 					<Test
// 						currentPage={currentPage}
// 						totalPage={totalPage}
// 						onPageChange={handlePageChange}
// 					/>
// 				</div>
// 				<div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
// 					<button
// 						className="text-sm flex items-center font-medium leading-none"
// 						onClick={handleNextClick}
// 					>
// 						Next
// 						<svg
// 							className="ml-3"
// 							width="14"
// 							height="8"
// 							viewBox="0 0 14 8"
// 							fill="none"
// 							xmlns="http://www.w3.org/2000/svg"
// 						>
// 							<path
// 								d="M1.1665 4H12.8332"
// 								stroke="currentColor"
// 								strokeWidth="1.25"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							/>
// 							<path
// 								d="M9.5 7.33333L12.8333 4"
// 								stroke="currentColor"
// 								strokeWidth="1.25"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							/>
// 							<path
// 								d="M9.5 0.666687L12.8333 4.00002"
// 								stroke="currentColor"
// 								strokeWidth="1.25"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							/>
// 						</svg>
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Pagination;

import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
	fetchUsers,
	selectCurrentPage,
	selectTotalPage,
} from '../../redux/UserSlice/userSlice';

const Pagination = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const currentPage = useAppSelector(selectCurrentPage);
	const totalPage = useAppSelector(selectTotalPage);

	const handlePageChange = (selectedItem: { selected: number }) => {
		dispatch(fetchUsers(selectedItem.selected));
	};

	return (
		<>
			<div className="flex justify-center items-center mb-10 border-t-2 border-indigo-100">
				{/* <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
					<button
						className="text-sm flex items-center font-medium leading-none"
						onClick={() => {
							if (currentPage > 1) {
								dispatch(fetchUsers(currentPage - 1));
							}
						}}
					>
						<svg
							className="mr-3"
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
						Previous
					</button>
				</div> */}

				<ReactPaginate
					pageCount={totalPage}
					previousLabel={'Previous'}
					nextLabel={'Next'}
					breakLabel={'...'}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					forcePage={currentPage}
					onPageChange={handlePageChange}
					containerClassName={'flex sm:flex'}
					pageClassName={
						'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-2 mr-3 mx-3 px-1'
					}
					activeClassName={
						'text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-500 pt-2 px-2'
					}
					previousClassName={
						'text-sm flex items-center text-indigo-700 font-medium leading-none pt-2 mr-4 px-2'
					}
					nextClassName={
						'text-sm flex items-center text-indigo-700 font-medium leading-none pt-2 ml-4 px-2'
					}
					disabledClassName={'opacity-50 pointer-events-none'}
				/>

				{/* <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
					<button
						className="text-sm flex items-center font-medium leading-none"
						onClick={() => {
							if (currentPage < totalPage) {
								dispatch(fetchUsers(currentPage + 1));
							}
						}}
					>
						Next
						<svg
							className="ml-3"
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
					</button>
				</div> */}
			</div>
		</>
	);
};
export default Pagination;
