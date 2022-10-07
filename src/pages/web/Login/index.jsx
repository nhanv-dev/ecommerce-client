import {useState, useContext} from 'react';
import {SocketContext} from "../../../service/socket";
import Helmet from "../../../components/web/Helmet";
import * as Icon from '@iconscout/react-unicons';
import "./style.scss";
import {Link} from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";

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
                            <Link to="/" className="h-[40px]">
                                <img src={Logo} alt="logo" className="h-full"/>
                            </Link>
                        </div>
                        <div
                            className="z-50 bg-white rounded-[4px] shadow px-[56px] py-[40px] h-full min-w-[500px] min-h-[600px]">
                            <h5 className="font-bold text-3xl mb-5">Đăng nhập</h5>
                            <div className="flex gap-3 flex-col items-center justify-start">
                                <div
                                    className="cursor-pointer flex items-center gap-3 justify-center w-full h-[54px] border-[2px] border-[#eaeaea] rounded-full">
                                    <img className="w-[20px] h-auto"
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                                         alt="logo google"/>
                                    <p className="text-md text-black-1 font-bold">Continue with Google</p>
                                </div>
                                <div
                                    className="cursor-pointer flex items-center gap-3 justify-center w-full h-[54px] border-[2px] border-[#eaeaea] bg-[#1877F2] rounded-full">
                                    <img className="w-[20px] h-auto"
                                         src="https://auth.services.adobe.com/img/social/sml_round_facebook_logo.svg"
                                         alt="logo facebook"/>
                                    <p className="text-md text-white font-bold">Continue with Facebook</p>

                                </div>
                                <div
                                    className="cursor-pointer flex items-center gap-3 justify-center w-full h-[54px] border-[2px] border-[#eaeaea] bg-[#000000] rounded-full">
                                    <Icon.UilApple className="fill-white"/>
                                    <p className="text-md text-white font-bold">Continue with Apple</p>

                                </div>
                            </div>
                            <div className="flex gap-2 w-full justify-center items-center py-6">
                                <p className="flex-1 h-[1px] bg-gray opacity-30 rounded-full"></p>
                                <p className="text-black text-base font-semibold relative top-[-2px] capitalize">or</p>
                                <p className="flex-1 h-[1px] bg-gray opacity-30 rounded-full"></p>
                            </div>
                            <div className="flex gap-1 items-center justify-start mb-3">
                                <p className="font-semibold text-md">Bạn mới biết đến Shopio?</p>
                                <Link to="/dang-ky" className="font-semibold text-md text-[#1473e6]">Tạo tài
                                    khoản</Link>
                            </div>
                            <div className="relative mb-4">
                                <span className="text-md font-medium text-black-1">Tài khoản</span>
                                <input type="text" className="peer text-md font-medium text-black-1 focus-visible:outline-none w-full h-[20px]"/>
                                <span
                                    className="peer-focus-visible:h-[2px] peer-focus-visible:bg-[#1473e6] absolute left-0 right-0 top-full h-[1px] bg-black-1 transition-all block"></span>
                            </div>
                            <div className="relative mb-10">
                                <span className="text-md font-medium text-black-1">Mật khẩu</span>
                                <input type="password" className="peer text-md font-medium text-black-1 focus-visible:outline-none w-full h-[20px]"/>
                                <span
                                    className="peer-focus-visible:h-[2px] peer-focus-visible:bg-[#1473e6] absolute left-0 right-0 top-full h-[1px] bg-black-1 transition-all block"></span>
                            </div>
                            <button
                                className="float-right bg-[#1473e6] font-bold text-tiny text-white rounded-full px-3 py-1.5">
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}


export default Login;