import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/actions/userActions";
import {Link, useNavigate} from "react-router-dom";
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo-white.svg";
import Helmet from "../../../components/web/Helmet";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("nhanvapp");
    const [password, setPassword] = useState("111");
    const user = useSelector((state) => state.user)

    async function handleLogin(e) {
        e.preventDefault();
        dispatch(await login({username, password}))
    }

    useEffect(() => {
        if (user.accessToken && user.info) navigate("/")
    }, [user, dispatch])

    return (
        <Helmet title="Đăng nhập">
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
                            <div className="w-full flex items-center justify-center">
                                <button type="submit"
                                        className="relative bg-[#6B92A4] font-bold text-md text-white rounded-lg px-8 py-2">
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="absolute left-0 w-full bottom-[20px] z-40">
                        <div className="text-center font-medium text-white text-md">
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