import React , {useState }from 'react'
import '../../assets/css/login.css'

function LoginPage() {
    const [login, setLogin] = useState({
        "user": "",
        "password": "",
        "stayLogin": "",
    });
    console.log(login);

    const handleChangeLogin = (e) => {
        setLogin({
            ...login,
            [e.target.id]: e.target.value
        })
    }
    const handleChekeLogin = (e) => {
        setLogin({
            ...login,
            [e.target.id]: e.target.checked
        })
    }


    return (
        <div className='container'>
            <div className='center border-curved'>
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <label className="form-label">Correo Electronico / Usuario</label>
                        </div>
                        <div className="col-md-8 complete-width">
                            <input type="email" className="form-control" id="user"  onChange={handleChangeLogin} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label  className="form-label">Contraseña</label>
                        </div>
                        <div className="col-md-8 complete-width">
                            <input type="password" className="form-control" id="password"  onChange={handleChangeLogin} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="checkbox" className="form-check-input" id="stayLogin" onChange={handleChekeLogin}/>
                            <label className="form-check-label" >Recordarme por 30 dias</label>
                        </div>
                        <div className="col-md-6">
                            <label>Sin cuenta haz <a href='#'>click aqui</a> para crear </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Session</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;