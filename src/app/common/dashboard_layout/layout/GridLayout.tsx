const GridLayout = () => {
	return (
		<div>
			<div className="grid grid-cols-12 gap-4">
				{Array.from({ length: 12 }).map((_, i) => (
					<div
						key={i}
						className="col-span-12 md:col-span-6 lg:col-span-1 bg-gray-200 h-20"
					>
						Child {i + 1}
					</div>
				))}
			</div>

			<div className="grid grid-cols-12 gap-4 animate-pulse p-4">
				{/* Full width skeleton */}
				<div className="col-span-12 h-10 bg-gray-300 dark:bg-gray-700 rounded" />

				{/* 3 items */}
				<div className="col-span-4 h-8 bg-gray-300 dark:bg-gray-700 rounded" />
				<div className="col-span-4 h-8 bg-gray-300 dark:bg-gray-700 rounded" />
				<div className="col-span-4 h-8 bg-gray-300 dark:bg-gray-700 rounded" />

				{/* 2 items */}
				<div className="col-span-6 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
				<div className="col-span-6 h-10 bg-gray-300 dark:bg-gray-700 rounded" />

				{/* Mixed layout */}
				<div className="col-span-3 h-12 bg-gray-300 dark:bg-gray-700 rounded" />
				<div className="col-span-9 h-12 bg-gray-300 dark:bg-gray-700 rounded" />
			</div>
		</div>
	);
};

export default GridLayout;
