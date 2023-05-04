import Active from './assets/lock.svg';
import Lock from './assets/trash-2.svg';

function App() {
	return (
		<>
			<div className="bg-white flex justify-center">
				<div className="w-full lg:w-6/12">
					<div className="overflow-x-auto">
						<table className="table-auto w-full">
							<thead className="">
								<tr className="">
									<th className="text-left text-lg p-4 font-bold">Name</th>
									<th className="text-left text-lg p-4 font-bold">Status</th>
									<th className="text-left text-lg p-4 font-bold">Access</th>
									<th className="text-left text-lg p-4 font-bold"></th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
										<div className="flex items-center gap-x-2">
											<img
												className="object-cover w-8 h-8 rounded-full"
												src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
												alt=""
											/>
											<div>
												<h2 className="text-sm font-medium text-gray-800 dark:text-white ">
													Arthur Melo
												</h2>
												<p className="text-xs font-normal text-gray-600 dark:text-gray-400">
													authurmelo@example.com
												</p>
											</div>
										</div>
									</td>
									<td className="p-4 text-green-700 text-lg font-bold">
										Active
									</td>
									<td className="p-4 font-medium">Owner</td>
									<td className="">
										<img src={Active} alt="" />
									</td>
								</tr>
								<tr className="">
									<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
										<div className="flex items-center gap-x-2">
											<img
												className="object-cover w-8 h-8 rounded-full"
												src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
												alt=""
											/>
											<div>
												<h2 className="text-sm font-medium text-gray-800 dark:text-white ">
													Andi Lane
												</h2>
												<p className="text-xs font-normal text-gray-600 dark:text-gray-400">
													andi@example.com
												</p>
											</div>
										</div>
									</td>
									<td className="p-4">
										<div className="relative w-full lg:max-w-sm">
											<select className="group w-[130px] p-2.5 inline-flex items-center bg-gray-50 text-base font-normal hover:text-gray-600 border rounded-md shadow-sm outline-none">
												<option>Inactive</option>
												<option>Active</option>
											</select>
										</div>
									</td>
									<td className="p-4">
										<div className="relative w-full lg:max-w-sm">
											<select className="group w-[130px] p-2.5 inline-flex items-center bg-gray-50 text-base font-normal hover:text-gray-600 border rounded-md shadow-sm outline-none">
												<option>Manager</option>
												<option>Read</option>
											</select>
										</div>
									</td>
									<td>
										<img src={Lock} alt="" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="w-2/12">
					<div className="max-w-[400px] h-[500px] border-solid border-2 border-indigo-100 mt-20 hidden lg:block"></div>
				</div>
			</div>
		</>
	);
}

export default App;
