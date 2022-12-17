import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../redux/actions/userActions";
import {Link, useNavigate} from "react-router-dom";
import * as Icon from '@iconscout/react-unicons';
import Logo from "../../../assets/img/logo.svg";
import Helmet from "../../../components/web/Helmet";
import * as icon from "@iconscout/react-unicons";
import {publicRequest} from "../../../utils/requestMethods";

function RegisterShop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");
    const [cate, setCate]=useState("")
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState("");
    const user = useSelector(state => state.user);

    async function handleRegisterShop(e) {
        e.preventDefault();
        const payload = {name, email, phone,area, address, cate}
        dispatch(await register(payload))
    }

    useEffect(() => {
        publicRequest.get('/categories').then((res) => {
            setCategories(res.data.categories)
        });
    }, [])

    return (
        <Helmet title="Đăng ký bán hàng - Shopio.">
            <div style={{backgroundImage: `url(https://auth.services.adobe.com/img/canvas/Fotolia_134829797_XL.jpg)`}}
                 className="min-h-[100vh] bg-cover bg-[#f4f4f4] bg-center relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#000] after:z-10 after:opacity-40">
                <div
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[#F6F7FC] rounded-[8px] shadow w-[1000px] h-[474px]">
                    <div className="relative z-30 h-full">
                        <div className="flex gap-x-2">
                            <div className="p-8 basis-1/2">
                                <h5 className="font-extrabold text-2xl mb-4">
                                    Đăng ký bán hàng tại <span className="mt-2"><img src={Logo} alt=""/></span>
                                </h5>
                                <div className="absolute rounded-md z-50 w-[490px] h-[350px]">
                                    <img className="w-full rounded-md" src="https://www.quanlynhanuoc.vn/wp-content/uploads/2022/08/tong-hop-cach-giao-hang-tai-nha-don-gian-tiet-kiem-nhat-hien-nay-7-1623834451.png.jpeg" alt=""/>
                                </div>
                            </div>

                            <div className="p-8 bg-[#EEE0E5] h-[474px] rounded-r-[8px] z-40 basis-1/2 text-center">
                                <form className="mb-3" onSubmit={handleRegisterShop}>
                                    <div className="text-center">
                                        <div className="w-[400px] ml-6">
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
                                        <div className="w-[400px] ml-6">
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
                                            <div className="shadow rounded-[8px] w-full">
                                                <div className="flex items-center justify-start gap-3 bg-white w-full mb-4 rounded-[8px] p-3">
                                                    <Icon.UilApps className="text-[#6f787e] w-24px h-24px"/>
                                                    <input
                                                        className="cursor-pointer text-[#6f787e] font-medium text-md w-full outline-none"
                                                        type="text" value={select} placeholder="Ngành hàng chủ lực"
                                                        onClick={() => {
                                                            setOpen(!open);

                                                        }}/>
                                                    <icon.UilAngleDown
                                                        className={`inline absolute bottom-25 right-12 transition duration-500 ${open && 'rotate-180'}`}
                                                        onClick={() => {
                                                            setOpen(!open);

                                                        }}/>
                                                </div>
                                                <ul className={`bg-white mt-2 absolute text-left shadow w-[40%] overflow-y-auto z-50 cursor-pointer transition duration-500 ${open ? 'max-h-40 -translate-y-3 rounded-md' : 'max-h-0'}`}>
                                                    {categories.map((item) => (
                                                        <li className="hover:bg-[#ECF9F9] py-2 px-3" onClick={() => {
                                                            if (item.name !== select) {
                                                                setSelect(item.name);
                                                                setOpen(false);
                                                            }
                                                        }}>{item.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            className="relative hover:bg-[#1874CD] bg-[#1E90FF] active:bg-[#1E90FF] transition duration-400 font-bold text-md text-white rounded-[8px] px-8 py-2">
                                        Đăng ký
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}


export default RegisterShop;