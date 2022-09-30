import {useState, useContext} from 'react';
import {SocketContext} from "../../service/socket";
import Helmet from "../../components/Helmet";
import * as Icon from '@iconscout/react-unicons';
import "./style.scss";
import {Link} from "react-router-dom";

function Login() {
    const socket = useContext(SocketContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function handleLogin() {
        socket.emit("login", {username, password});
    }

    return (
        <Helmet title="Đăng nhập">
            <div
                className="bg-login-page bg-cover bg-[#f4f4f4] bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-40">
                <div className="container max-w-[1040px] min-h-[100vh]">
                    <div className="flex items-center justify-between min-h-[100vh]">
                        <div className="flex items-center justify-start flex-1 z-50">
                            <Link to="/" className="text-4xl text-white font-extrabold">Behance</Link>
                        </div>
                        <div
                            className="z-50 bg-white rounded-[4px] shadow px-[56px] py-[40px] h-full min-w-[500px] min-h-[500px]">
                            <h5 className="font-bold text-2xl mb-5">Đăng nhập</h5>
                            <div className="flex gap-3 items-center justify-start">
                                <div
                                    className="cursor-pointer flex items-center justify-center w-[50px] h-[50px] border-[2px] border-[#eaeaea] rounded-full">
                                    <img className="w-[30px] h-auto"
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                                         alt="logo google"/>
                                </div>
                                <div
                                    className="cursor-pointer flex items-center justify-center w-[50px] h-[50px] border-[2px] border-[#eaeaea] rounded-full">
                                    <img className="w-[30px] h-auto"
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                                         alt="logo facebook"/>
                                </div>
                                <div
                                    className="cursor-pointer flex items-center justify-center w-[50px] h-[50px] border-[2px] border-[#eaeaea] rounded-full">
                                    <img className="w-[30px] h-auto"
                                         src="https://alchemyimmersive.com/wp-content/uploads/sites/4/2020/04/apple-logo-transparent.png"
                                         alt="logo apple"/>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full justify-center items-center py-6">
                                <p className="flex-1 h-[1px] bg-black"></p>
                                <p className="text-black text-base font-bold relative top-[-2px] capitalize">or</p>
                                <p className="flex-1 h-[1px] bg-black"></p>
                            </div>
                            <div className="flex gap-1 items-center justify-start mb-3">
                                <p>Bạn mới biết đến Shopee?</p>
                                <Link to="/dang-ky">Đăng ký</Link>
                            </div>
                            <div className="mb-3">
                                <div className="relative ">
                                    <span className="text-sm font-medium">Tên đăng nhập</span>
                                    <input type="text" className="peer focus-visible:outline-none w-full h-[28px]"/>
                                    <span
                                        className="peer-focus-visible:h-[2px] peer-focus-visible:bg-primary absolute left-0 right-0 top-full h-[1px] bg-black transition-all block"></span>
                                </div>
                            </div>
                            <button className="float-right">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}


export default Login;