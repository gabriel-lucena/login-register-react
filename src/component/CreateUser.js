import React from 'react'

const CreateUser = ({ name, email, password, day, mounth, year, city, 
	handleInputChange, handleSubmit }) => {
	return (
		<div>
			<input type="text" name="name" value={name}
			placeholder="Nome Sobrenome"
			onChange={handleInputChange} />

			<input type="email" name="email" value={email}
			placeholder="E-mail"
			onChange={handleInputChange} />

			<input type="password" name="password"
			placeholder="Senha"
			value={password} onChange={handleInputChange} />

			<div id="date">
				<input type="number" name="day" value={day} 
				placeholder="Dia" min={1} max={31} 
				onChange={handleInputChange} />

				<input type="text" name="mounth" value={mounth} 
				placeholder="Mês" maxLength={3}
				onChange={handleInputChange} />

				<input type="number" name="year" value={year}
				placeholder="Ano" min={1920}
				onChange={handleInputChange} />
			</div>

			<input type="text" name="city" value={city}
			placeholder="Lugar onde mora"
			onChange={handleInputChange} />
			<button onClick={handleSubmit} > Registrar-se </button>
		</div>
	)
}

export default CreateUser
