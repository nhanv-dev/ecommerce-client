import {useState, useContext} from 'react';
import {SocketContext} from "../../service/socket";
import Helmet from "../../components/Helmet";
import "./style.scss";

function Register() {
    const socket = useContext(SocketContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function handleRegister() {
        socket.emit("notify_group", {username, password});
    }

    return (
        <Helmet title="Đăng ký">
            <input onChange={(event) => setUsername(event.target.value)}></input>
            <input onChange={(event) => setPassword(event.target.value)}></input>
            <button onClick={handleRegister}>Sign Up</button>
        </Helmet>
    );
}

export default Register;