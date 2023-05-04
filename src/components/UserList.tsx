import { useState } from 'react';
import usersData from './API/users.json';

interface User {
	id: number;
	name: string;
	age: number;
	email: string;
}

function UserList() {
	const [hoveredUser, setHoveredUser] = useState<User | null>(null);

	const handleUserHover = (userId: number, isHovering: boolean) => {
		if (isHovering) {
			setHoveredUser(usersData.find((user) => user.id === userId) || null);
		} else {
			setHoveredUser(null);
		}
	};

	return (
		<div>
			<ul>
				{usersData.map((user: User) => (
					<li
						key={user.id}
						onMouseEnter={() => handleUserHover(user.id, true)}
						onMouseLeave={() => handleUserHover(user.id, false)}
					>
						{user.name}
					</li>
				))}
			</ul>
			{hoveredUser && (
				<div className="card w-80 h-[100px] bg-indigo-500">
					<h2>Name: {hoveredUser.name}</h2>
					<p>Age: {hoveredUser.age}</p>
					<p>Email: {hoveredUser.email}</p>
				</div>
			)}
		</div>
	);
}

export default UserList;
