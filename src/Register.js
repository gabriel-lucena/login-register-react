import React, {Component} from 'react'
import axios from 'axios'
import CreateUser from './component/CreateUser'
import './style/Register.css'

export default class Register extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			email: '',
			password: '',
			day: '',
			mounth: '',
			year: '',
			city: ''
		}

	}

	handleInputChange = ({ target }) => {
		this.setState({ [target.name]: target.value })
	}

	handleSubmit = () => {
		const { name, email, password, day, mounth, year, city } = this.state

		const date = `${day}/${mounth}/${year}`

		if(name === '' || email === '' || password === '' 
		|| date === '' || city === '') return

		axios.post('http://localhost:5555/register', 
		{ name, email, password, date, city })
		.then(
			res => document.getElementById('success').style.display = 'block',
			document.getElementById('message').style.display = 'none',
			document.getElementById('warning').style.display = 'none'
		)
		.catch(
			err => document.getElementById('warning').style.display = 'block',
			document.getElementById('message').style.display = 'none'
		)
	}

	render() {
		const { name, email, password, city, day, mounth, year } = this.state
		document.title = 'Criar um conta!'
		return (
			<div>
				<CreateUser 
					name={name} email={email} password={password}
					day={day} mounth={mounth} 
					year={year} city={city} 
					handleInputChange={this.handleInputChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}
