import React from 'react';

const Pagination = ({ gotoNextPage, gotoPreviousPage }) => {
	return (
		<div className='btn-container'>
			{gotoPreviousPage ? (
				<button onClick={gotoPreviousPage}>Previous</button>
			) : (
				<button disabled>Previous</button>
			)}
			{gotoNextPage ? (
				<button onClick={gotoNextPage}>Next</button>
			) : (
				<button disabled>Next</button>
			)}
		</div>
	);
};

export default Pagination;
