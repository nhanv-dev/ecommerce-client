import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../redux/actions/userActions";
import {Link, useNavigate} from "react-router-dom";
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo.svg";
import Helmet from "../../../components/web/Helmet";

function RegisterShop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");
    const user = useSelector(state => state.user);

    async function handleRegisterShop(e) {
        e.preventDefault();
        const payload = {name, email, phone, address}
        dispatch(await register(payload))
    }

    useEffect(() => {
        // console.log(user)
        // if (user.accessToken && user.info) navigate("/")
    }, [user])

    return (
        <Helmet title="Đăng ký bán hàng - Shopio.">
            <div style={{backgroundImage: `url(https://auth.services.adobe.com/img/canvas/Fotolia_134829797_XL.jpg)`}}
                 className="min-h-[100vh] bg-cover bg-[#f4f4f4] bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-40">
                <div
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[#F6F7FC] rounded-[8px] shadow w-[1000px] h-[500px]">
                    <div className="relative z-30">
                        <div className="p-8">
                            <h5 className="font-extrabold text-2xl mb-6">
                                Đăng ký bán hàng tại Shopio.
                            </h5>
                            <form className="mb-3" onSubmit={handleRegisterShop}>
                                <div className="flex gap-10">
                                    <div className="w-[400px]">
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilStore className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="text" placeholder="Tên thương hiệu"
                                                   onChange={(e) => setName(e.target.value)} value={name}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilPhone className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="tel" placeholder="Số điện thoại liên hệ"
                                                   onChange={(e) => setPhone(e.target.value)} value={phone}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilEnvelopeAlt className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="email" placeholder="Email"
                                                   onChange={(e) => setEmail(e.target.value)} value={email}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                    </div>
                                    <div className="w-[400px]">
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilLocationArrowAlt className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="text" placeholder="Khu vực"
                                                   onChange={(e) => setArea(e.target.value)} value={area}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                        <div style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 10%)'}}
                                             className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                            <Icon.UilLocationPoint className="text-[#6f787e] w-24px h-24px"/>
                                            <input type="text" placeholder="Địa chỉ nhận hàng"
                                                   onChange={(e) => setAddress(e.target.value)} value={address}
                                                   className="text-[#6f787e] font-medium text-md w-full outline-none"/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit"
                                        className="relative bg-[#6B92A4] font-bold text-md text-white rounded-[8px] px-8 py-2">
                                    Đăng ký
                                </button>
                            </form>
                            <div className="font-medium text-black text-md">
                                <span>Bạn chưa có tài khoản? </span>
                                <Link to="/dang-ky" className="text-[#0073C2]"> Đăng ký ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}


export default RegisterShop;