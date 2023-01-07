import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/actions/userActions";
import {Link, useNavigate} from "react-router-dom";
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo-white.svg";
import Helmet from "../../../components/web/Helmet";
import Header from "./Header";
import Footer from "../../../components/web/Footer";
import facebook from "../../../assets/img/facebook.png"
import google from "../../../assets/img/google.png"


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const [username, setUsername] = useState("pigeon");
    const [password, setPassword] = useState("123");
    const [error, setError] = useState(false);


    async function handleLogin(e) {
        e.preventDefault();
        const payload = await login({username, password})
        dispatch(payload);
    }

    useEffect(() => {
        if (user.accessToken && user.info) navigate("/")
        else setError(true)
    }, [user])

    useEffect(() => {
        setError(false);
    }, [username, password])

    return (
        <Helmet title="Đăng nhập - Shopio.">
            <div className="h-[100vh] bg-cover"
                 style={{backgroundImage: `url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-038.jpg)`}}>
                <div className="flex items-center justify-center rounded-2xl shadow bg-cover bg-left-bottom p-8">
                    <div className="basis-2/3 my-8 flex items-center">
                        <div className="basis-1/2">
                            <Link to="/" className="block w-[200px] text-center mx-auto mb-6">
                                <img src={Logo} alt="logo" className="w-full"/>
                            </Link>
                            <p className="font-semibold text-white text-xl">
                                Chợ trực tuyến uy tín nhất thị trường Việt Nam.
                            </p>
                        </div>
                        <div className="basis-1/2">
                            <div className="bg-white h-[500px] mt-10 p-10 rounded-md shadow-md">
                                <h1 className="text-black text-2xl pb-5 font-semibold">Đăng nhập</h1>
                                <div id="toast-danger"
                                     className={`${error ? '' : 'hidden'} flex items-center gap-3 p-4 mb-4 w-full max-w-xs bg-[#FDE8E8] text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
                                     role="alert">
                                    <div
                                        className="inline-flex flex-shrink-0 justify-center items-center rounded-full w-5 h-5 text-white bg-primary dark:bg-red-800 dark:text-red-200">
                                        <svg aria-hidden="true" className="w-3 h-3" fill="white" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Error icon</span>
                                    </div>

                                    <div className="text-tiny text-black-1 font-medium">Sai tên đăng nhập hoặc mật khẩu
                                    </div>
                                </div>
                                <form className="" onSubmit={handleLogin}>
                                    <div
                                        className="flex items-center justify-start shadow-md gap-3 bg-white w-full mb-5 rounded-xl p-3">
                                        <Icon.UilUser className="text-[#6f787e] w-24px h-24px"/>
                                        <input onChange={(e) => {
                                            setUsername(e.target.value)
                                        }} value={username}
                                               className="text-[#6f787e] font-medium text-md w-full outline-none"
                                               type="text" placeholder="Tài khoản"/>
                                    </div>
                                    <div
                                        className="flex items-center justify-start shadow-md gap-3 bg-white w-full mb-5 rounded-xl p-3">
                                        <Icon.UilLock className="text-[#6f787e] w-24px h-24px"/>
                                        <input onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} value={password}
                                               className="text-[#6f787e] font-medium text-md w-full outline-none"
                                               type="password" placeholder="Mật khẩu"/>
                                    </div>
                                    <div className="flex items-center justify-center mb-3">
                                        <Link to="/quen-mat-khau/1"
                                              className="text-md font-semibold text-[#6f787e]">
                                            Quên mật khẩu ?
                                        </Link>
                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        <button type="submit"
                                                className="relative bg-[#6B92A4] font-bold text-md text-white rounded-lg px-8 py-2">
                                            Đăng nhập
                                        </button>

                                    </div>
                                </form>
                                <div className="mt-5">
                                    <div className="text-center font-semibold text-[#6f787e]e text-md">
                                        Bạn chưa có tài khoản?
                                        <Link to="/dang-ky" className="text-[#0073C2]"> Đăng ký ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}


export default Login;