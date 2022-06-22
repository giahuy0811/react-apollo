


const CreateUserForm = () => {
  return (
		<>
			<label htmlFor='email' />
			<input name='email' />
			<label htmlFor='phone' />
			<input name='phone' />
			<select>
				<option value='teacher'>Teacher</option>
				<option value='admin'>Admin</option>
			</select>
			<label htmlFor='password' />
			<input name='password' />
		</>
	);
}

export {CreateUserForm}