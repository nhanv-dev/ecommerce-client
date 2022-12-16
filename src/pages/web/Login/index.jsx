import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/actions/userActions";
import {Link, useNavigate} from "react-router-dom";
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo-white.svg";
import Helmet from "../../../components/web/Helmet";
import {protectedRequest} from "../../../utils/requestMethods";
import {SHOP_LOGIN_FAILED, SHOP_LOGIN_SUCCESS} from "../../../redux/constants/ActionTypes";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const [username, setUsername] = useState("pigeon");
    const [password, setPassword] = useState("123");
    const data = localStorage.getItem("persist:root")


    async function handleLogin(e) {
        e.preventDefault();
        dispatch(await login({username, password}));
    }
    useEffect(() => {
        if(data)  localStorage.removeItem("persist:root")
        if (user.accessToken && user.info) navigate("/")
    }, [user])
    return (
        <Helmet title="Đăng nhập - Shopio.">
            <div
                className="min-h-[100vh] bg-cover bg-[#f4f4f4] bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-40"
                style={{backgroundImage: `url(https://auth.services.adobe.com/img/canvas/Fotolia_134829797_XL.jpg)`}}
            >
                <div
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-white rounded-2xl shadow bg-cover bg-left-bottom p-8 w-[450px] h-[600px] after:rounded-2xl after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-30"
                    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100)'}}>
                    <div className="absolute left-[50%] top-[42%] translate-x-[-50%] translate-y-[-50%] z-30">
                        <Link to="/" className="block w-[130px] mx-auto mb-6">
                            <img src={Logo} alt="logo" className="w-full"/>
                        </Link>
                        <div id="toast-danger "
                             className={`flex items-center ${data ? '': 'hidden'} p-4 mb-4 w-full max-w-xs bg-[#FDE8E8] text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
                             role="alert">
                            <div
                                className="inline-flex flex-shrink-0 justify-center items-center rounded-full w-5 h-5 text-white bg-primary dark:bg-red-800 dark:text-red-200">
                                <svg aria-hidden="true" className="w-3 h-3" fill="white" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Error icon</span>
                            </div>
                            <div className="ml-3 text-sm font-normal">Sai tên đăng nhập hoặc mật khẩu</div>
                        </div>
                        <form className="w-[300px]" onSubmit={handleLogin}>
                            <div
                                className="flex items-center justify-start gap-3 bg-white w-full mb-5 rounded-xl p-3">
                                <Icon.UilUser className="text-[#6f787e] w-24px h-24px"/>
                                <input onChange={(e) => setUsername(e.target.value)} value={username}
                                       className="text-[#6f787e] font-medium text-md w-full outline-none"
                                       type="text" placeholder="Tài khoản"/>
                            </div>
                            <div
                                className="flex items-center justify-start gap-3 bg-white w-full mb-5 rounded-xl p-3">
                                <Icon.UilLock className="text-[#6f787e] w-24px h-24px"/>
                                <input onChange={(e) => setPassword(e.target.value)} value={password}
                                       className="text-[#6f787e] font-medium text-md w-full outline-none"
                                       type="password" placeholder="Mật khẩu"/>
                            </div>
                            <div className="flex items-center justify-center mb-3">
                                <Link to="/quen-mat-khau"
                                      className="text-md font-semibold text-white">
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
                    </div>
                    <div className="absolute left-0 w-full bottom-[20px] z-40">
                        <div className="text-center font-semibold text-white text-md">
                            Bạn chưa có tài khoản?
                            <Link to="/dang-ky" className="text-[#0073C2]"> Đăng ký ngay</Link>
                        </div>
                    </div>
                </div>



            </div>
        </Helmet>
    );
}


export default Login;