import Active from '../assets/lock-1.svg';
import Lock from '../assets/trash-1.svg';
import HoveredUserDetails from './HoveredUserDetails';
import { User } from '../interface/User';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/HoverUserSlice/HoverUserSlice';
import { UserState } from '../redux/UserSlice/userSlice';

const UserList = (): JSX.Element => {
	const users = useSelector((state: { data: UserState }) => state.data.users);
	const dispatch = useDispatch();
	return (
		<>
			<div className="bg-white flex justify-center">
				<div className="w-full lg:w-5/12">
					<table className="table-auto w-full">
						<thead>
							<tr>
								<th className="text-left text-lg p-4 font-bold">Name</th>
								<th className="text-left text-lg p-4 font-bold">Status</th>
								<th className="text-left text-lg p-4 font-bold">Access</th>
								<th className="text-left text-lg p-4 font-bold"></th>
							</tr>
						</thead>
						{users.map((user: User) => (
							<tbody key={user.id}>
								<tr>
									<td
										className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap cursor-pointer"
										key={user.id}
										onMouseEnter={() => dispatch(addUser(user))}
										onMouseLeave={() => {
											dispatch(removeUser());
										}}
									>
										<div className="flex items-center gap-x-2">
											<img
												className="object-cover w-10 h-10 rounded-full"
												src={user.avatar}
												alt={user.first_name}
											/>
											<div>
												<h2 className="text-[15px] font-medium text-gray-800 dark:text-white ">
													{user.first_name} {user.last_name}
												</h2>
												<p className="text-[13px] font-normal text-gray-600 dark:text-gray-400">
													{user.email}
												</p>
											</div>
										</div>
									</td>
									{user.active ? (
										<td className="p-4 text-green-700 text-lg font-bold">
											Active
										</td>
									) : (
										<td className="p-4">
											<div className="relative w-full lg:max-w-sm">
												<select className="group w-[130px] p-2.5 inline-flex items-center bg-gray-50 text-base font-normal hover:text-gray-600 border rounded-md shadow-sm outline-none">
													<option>Inactive</option>
													<option>Active</option>
												</select>
											</div>
										</td>
									)}
									{user.owner ? (
										<td className="p-4 font-medium">Owner</td>
									) : (
										<td className="p-4">
											<div className="relative w-full lg:max-w-sm">
												<select className="group w-[130px] p-2.5 inline-flex items-center bg-gray-50 text-base font-normal hover:text-gray-600 border rounded-md shadow-sm outline-none">
													<option>{user.role}</option>
												</select>
											</div>
										</td>
									)}
									<td>
										{user.active ? (
											<img
												className="cursor-pointer"
												src={Active}
												alt="Active"
											/>
										) : (
											<img className="cursor-pointer" src={Lock} alt="Lock" />
										)}
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
				<div className="w-4/12 ">
					<HoveredUserDetails />
				</div>
			</div>
		</>
	);
};

export default UserList;
