import { NextPage } from "next";
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination";
import Table from "../../components/table";

const headers = ["Name", "Description", "Suggested By", "Actions"]
const rows = [["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"], ["Super Sentai", "Denshin", "Oruku", "Approve"]]

const Suggestion: NextPage = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<div>
			<div className="text-3xl font-bold mb-6">Suggestions</div>
			<Table
				name="All Suggestions"
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


export default Suggestion;