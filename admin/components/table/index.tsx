import { ReactNode } from "react"
import Loading from "../loading";

export interface TableProps {
	name: string;
	headers: string[];
	rows: (ReactNode | String)[][];
	loading?: boolean;
	pagination?: ReactNode;
}

const headersLoading = [null, null, null, null]
const rowsLoading = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]]

const Table = (props: TableProps) => {
	const { name, headers, rows, loading, pagination } = props;

	return (
		<div className="border border-indigo-200 bg-gray-50 rounded-2xl pb-5">
			<div className="text-xl font-semibold p-5">
				{loading ? <Loading /> : name}
			</div>
			<table className="text-left font-thin w-full">
				<thead className="border-b">
					<tr >
						{loading && headersLoading.map((_, i) => (
							<th key={i} className="px-5 font-bold text-xs text-gray-400 pb-3">
								<div className="animate-pulse flex">
									<div className="h-2 bg-blue-400 rounded w-3/6"></div>
								</div>
							</th>
						))}

						{!loading && headers.map((header) => (
							<th key={header} className="px-5 font-bold text-xs text-gray-400 pb-3">
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{loading && rowsLoading.map((row, index) => (
						<tr className="border-b text-sm" key={index}>
							{row.map((_, index) => (
								<td key={index} className="px-5 py-3 font-normal">
									<div className="animate-pulse flex">
										<div className="flex-1 space-y-4 py-1">
											<div className="h-2 bg-blue-400 rounded w-5/6"></div>
											<div className="h-2 bg-blue-400 rounded"></div>
										</div>
									</div>
								</td>
							))}
						</tr>
					))}

					{!loading && rows.map((row, index) => (
						<tr className="border-b text-sm" key={index}>
							{row.map((cell, index) => (
								<td key={index} className="px-5 py-3 font-normal">
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{loading && <div className="animate-pulse flex mt-3">
				<div className="flex-1"></div>
				<div className="h-2 bg-blue-400 rounded w-3/6"></div></div>}
			{!loading && pagination}
		</div>
	)
}

export default Table
