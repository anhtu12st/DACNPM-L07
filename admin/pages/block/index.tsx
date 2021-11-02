import { NextPage } from "next";
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination";
import Table from "../../components/table";

const headers = ["Name", "Email", "Blocked By", "Notes", "Actions"]
const rows = [['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"], ['John Doe', 'john@mail.mail', 'God', "Stupid", "Edit"]]

const BlockedAccount: NextPage = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<div>
			<div className="text-3xl font-bold mb-6">Blocked Accounts</div>
			<Table
				name="All Blocked Accounts"
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
}

export default BlockedAccount;