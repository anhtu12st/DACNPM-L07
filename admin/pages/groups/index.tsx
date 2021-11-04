import { NextPage } from "next";
import { useState, useEffect } from "react";
import Pagination from "../../components/pagination";
import Table from "../../components/table";

const headers = ["Name", "Description", "Members", "Actions"]
const rows = [['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit'], ['Group 2', 'This is a group', '2', 'Edit']]

const Groups: NextPage = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<div>
			<div className="text-3xl font-bold mb-6">Groups</div>
			<Table
				name="All Groups"
				headers={headers}
				rows={rows}
				loading={loading}
				pagination={<Pagination
					totalItems={100}
					itemsPerPage={10}
					currentPage={5}
					onPageChange={(page) => console.log(page)}
				/>}
			/>
		</div>
	);
};

export default Groups;