import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_USERS } from '../libs/queries/user.query'



const CMS = () => {

  const {loading,error,data} = useQuery(GET_USERS)

  console.log("users",data)
  return (
		<div className='container mt-4'>
			<h1>Users</h1>
			{loading && <p>loading...</p>}
			{error && <p>error...</p>}
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>Order</th>
						<th scope='col'>Id</th>
						<th scope='col'>Email</th>
						<th scope='col'>Phone</th>
						<th scope='col'>Role</th>
            <th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.users.map((user: any, i: number) => {
							return (
								<tr key={user.id}>
									<td>{i}</td>
									<td>{user.id}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.role}</td>
									<td>
										<button className='btn btn-danger'>Delete</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}

export default CMS