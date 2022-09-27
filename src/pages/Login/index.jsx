import {useState, useContext} from 'react';
import {SocketContext} from "../../service/socket";
import Helmet from "../../components/Helmet";
import * as Icon from '@iconscout/react-unicons';
import "./style.scss";

function Login() {
    const socket = useContext(SocketContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function handleLogin() {
        socket.emit("login", {username, password});
    }

    return (
        <Helmet title="Đăng nhập">
            <div className="container-login">
                <div className="container-login__background">
                    <div className="container-form">
                        <form>
                            <div className="container-form__ rounded-[4px]">
                                <label htmlFor="account">Account:</label>
                                <input onChange={(event) => setUsername(event.target.value)} id="account"></input>
                                <Icon.UilSearch className=""/>
                            </div>
                            <input onChange={(event) => setPassword(event.target.value)}></input>
                            <button onClick={handleLogin}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}


export default Login;