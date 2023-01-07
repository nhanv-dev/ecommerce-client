import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../redux/actions/userActions";
import {Link, useNavigate} from "react-router-dom";
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo.svg";
import Helmet from "../../../components/web/Helmet";
import {publicRequest} from "../../../utils/requestMethods";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const user = useSelector(state => state.user);
    const [token, setToken] = useState()
    const [id, setId] = useState()

    async function handleRegister(e) {
        e.preventDefault();
        if (password !== repeatPassword) return;
        publicRequest.post("/auth/register", {username, password, email, fullName})
            .then(res => {
                if (res.data.success) {
                    setId(res.data.user.id)
                }
            });
    }

    async function handleValidate(e) {
        e.preventDefault();
        if (password !== repeatPassword) return;
        publicRequest.post("/auth/validate-register", {id, token})
            .then(res => {
                if (res.data.success) navigate("/dang-nhap")
            });
    }

    return (
        <Helmet title="Đăng ký - Shopio.">
            <div style={{backgroundImage: `url(https://auth.services.adobe.com/img/canvas/Fotolia_134829797_XL.jpg)`}}
                 className="min-h-[100vh] bg-cover bg-[#f4f4f4] bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-40">
                <div
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[#F6F7FC] rounded-[8px] shadow w-[1000px] h-[500px]">
                    <div className="relative flex z-30 h-full">
                        <div className="flex-1 p-8 h-full">
                            <h5 className="font-extrabold text-3xl mb-3">Đăng ký</h5>
                            {id ?
                                <form className="w-[400px] mb-3" onSubmit={handleValidate}>
                                    <p className="font-medium text-md mb-3">*Mã xác thực đã được gửi vào địa chỉ
                                        email {email}</p>
                                    <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                         className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                        <Icon.UilUserExclamation className="text-[#6f787e] w-24px h-24px"/>
                                        <input type="number" placeholder="Mã xác thực"
                                               onChange={(e) => setToken(e.target.value)} value={token}
                                               className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                    </div>
                                    <button type="button" onClick={() => setId(null)}
                                            className="relative mr-3 bg-[#6B92A4] font-bold text-md text-white rounded-[5px] px-8 py-2">
                                        Quay lại
                                    </button>
                                    <button type="submit"
                                            className="relative bg-[#6B92A4] font-bold text-md text-white rounded-[5px] px-8 py-2">
                                        Xác thực
                                    </button>
                                </form> :
                                <>
                                    <form className="w-[400px] mb-3" onSubmit={handleRegister}>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilUserExclamation className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="text" placeholder="Họ & Tên"
                                                   onChange={(e) => setFullName(e.target.value)} value={fullName}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilEnvelopeAlt className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="text" placeholder="Email"
                                                   onChange={(e) => setEmail(e.target.value)} value={email}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilUser className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="text" placeholder="Tên đăng nhập"
                                                   onChange={(e) => setUsername(e.target.value)} value={username}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilLock className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="password" placeholder="Mật khẩu"
                                                   onChange={(e) => setPassword(e.target.value)} value={password}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilLock className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="password" placeholder="Nhập lại mật khẩu"
                                                   onChange={(e) => setRepeatPassword(e.target.value)}
                                                   value={repeatPassword}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <button type="submit"
                                                className="relative bg-[#6B92A4] font-bold text-md text-white rounded-[8px] px-8 py-2">
                                            Đăng ký
                                        </button>
                                    </form>
                                    <div className="font-medium text-black text-md">
                                        <span>Bạn đã có tài khoản? </span>
                                        <Link to="/dang-nhap" className="text-[#0073C2]"> Đăng nhập ngay</Link>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="bg-cover w-[400px] min-h-full rounded-r-[8px] relative"
                             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100)'}}>
                            <div className="absolute p-8">
                                <Link to="/"
                                      className="block h-[45px] mb-3">
                                    <img src={Logo} alt="logo" className="h-full"/>
                                </Link>
                                <p className="text-base font-semibold text-white mb-6 min-w-max">
                                    Chào mừng bạn đến với Shopio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}


export default Register;