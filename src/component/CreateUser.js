import React from 'react'

const CreateUser = ({ name, email, password, day, mounth, year, city, 
	handleInputChange, handleSubmit }) => {

	return (
		
		<div className="row register">
			<div className="col s6 m4 l6">
				<div>
					<div id="warning" className="card-panel  lighten-2 center nav" style={{'background': 'Tomato', color: 'White', display:'none'}}>
						<label style={{color: '#fff'}}>
							<span className="material-icons">warning</span>
						&nbsp;&nbsp;Parece que já existe um E-mail com está conta!
						</label>
					</div>
					<div id="success" className="card-panel  lighten-2 center nav" style={{'background': '#a2e38c', color: 'White', display:'none'}}>
						<label style={{color: '#fff'}}>
							Conta criado com sucesso!
						</label>
					</div>
					<div id="message" className="card-panel teal lighten-2 center nav" >
						<label style={{color: '#fff'}}>Que tal criar uma nova conta?</label>
					</div>

					<div className="card" style={{padding: '10pt', color: '#bebebe'}}>
						<div className="input-field">
							<i className="material-icons prefix">assignment_ind</i>
							<input id="last_name" type="text" name="name" value={name} 
							className="validate" required onChange={handleInputChange} />
							<label htmlFor="last_name">Nome Sobrenome</label>
							<span className="helper-text">Nome Completo</span>
						</div>

						<div className="input-field">
              <i className="material-icons prefix">email</i>
              <input className="validate" required id="email" type="email" name="email" value={email}
							onChange={handleInputChange} />
              <label htmlFor="email">Email</label>  
              <span className="helper-text" data-error="wrong" data-success="right">Insira seu email</span>                   
            </div>
						
						<div className="input-field" id="date">
              <i className="material-icons prefix">cake</i>
              <input type="number" name="day" value={day} 
							placeholder="Dia" min={1} max={31} 
							onChange={handleInputChange} className="validate" required />

							<input type="text" name="mounth" value={mounth} 
							placeholder="Mês" maxLength={3}
							onChange={handleInputChange} className="validate" required />

							<input type="number" name="year" value={year}
							placeholder="Ano" min={1920}
							onChange={handleInputChange} className="validate" required />
            </div>
            <div className="input-field">
              <i className="material-icons prefix">location_on</i>
              <input id="city" type="text" name="city" value={city}
							onChange={handleInputChange} className="validate" required />
              <label htmlFor="city">Lugar onde mora!</label>
            </div>  
                
            <div className="input-field">            
              <i className="material-icons prefix">vpn_key</i>
              <input id="password" type="password" name="password"
							value={password} onChange={handleInputChange} className="validate" required />
              <label htmlFor="password">Senha</label>
            </div>

            <div className="form-field center-align">
							<button onClick={handleSubmit} type="submit"
							className="btn waves-effect waves-light btn-small " name="action">
              	<i className="material-icons right">send</i> Registrar-se
              </button>
						</div>
						<p className="center" style={{color: '#6a6868'}}>
              <label2> Possui uma conta?</label2>
              <a href="/" target="_blank">Clique aqui</a>
          	</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateUser
