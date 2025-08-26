import { useState } from "react";

export const usePagination = (initialParams: {
	page: number;
	limit: number;
	total: number;
}) => {
	const [params, setParams] = useState(initialParams);

	const goToNextPage = () => {
		if (params.page < Math.ceil(params.total / params.limit)) {
			setParams({ ...params, page: params.page + 1 });
		}
	};

	const goToPreviousPage = () => {
		if (params.page > 1) {
			setParams({ ...params, page: params.page - 1 });
		}
	};

	const setPageRange = (limit: number) => {
		setParams({ ...params, limit, page: 1 });
	};

	const setPage = (page: number) => {
		setParams({ ...params, page });
	};

	return { params, goToNextPage, goToPreviousPage, setPageRange, setPage };
};
