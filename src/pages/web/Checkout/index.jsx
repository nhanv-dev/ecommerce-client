import React, {useEffect, useState} from 'react';
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import * as Icon from '@iconscout/react-unicons';
import {formatCurrency} from "../../../utils/format";
import Modal from "../../../components/web/Modal/index";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import NotFoundImage from "../../../assets/img/image-not-found.jpg";
import {protectedRequest} from "../../../utils/requestMethods";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckOut() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [note, setNote] = useState("");
    const [address, setAddress] = useState();
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [shippingMethod, setShippingMethod] = useState("now");

    useEffect(() => {
        let items = cart.items.filter(item => item.checked);
        if (items?.length <= 0) return navigate("/gio-hang")
        let total = 0, discount = 0;

        items = items.map(item => {
            const price = (item.combination?.price || item.product?.basePrice) * item.quantity
            const discountPrice = (item.combination?.price || item.product?.basePrice) * item.quantity * (100 - item.product?.discountPercent) / 100
            total += price;
            discount += discountPrice;
            return {...item, price, discountPrice}
        })
        setTotal(total)
        setDiscount(discount)
        setItems(items)
    }, [cart, user])

    const handleOrder = () => {
        const payload = {
            note,
            address,
            shippingMethod,
            paymentMethod,
            total: discount,
            items: [...items]
        }
        if (!payload.address) return toast.error("Vui lòng chọn địa chỉ nhận hàng")
        if (!payload.shippingMethod) return toast.error("Vui lòng chọn phương thức giao hàng")
        if (!payload.paymentMethod) return toast.error("Vui lòng chọn phương thức thanh toán")
        protectedRequest().post("/orders", {...payload}).then(res => {
            console.log(res)
            if (res.status === 200) navigate(`/don-hang?id=${res.data.order._id}`)
            else toast.error("Vui lòng thử lại sau.")
        }).catch(err => {
            console.log(err)
            if (err.status === 403) return navigate("/dang-nhap")
            toast.error("Vui lòng thử lại sau.")
        })
    }

    return (
        <UserLayout>
            <Helmet title='Thanh toán - Shopio'>
                <div className="container py-8">
                    <ToastContainer/>
                    <div className="flex flex-row gap-5">
                        <div className="basis-2/3 flex flex-col gap-5">
                            <Information user={user} setAddress={setAddress}
                                         paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}
                                         shippingMethod={shippingMethod} setShippingMethod={setShippingMethod}
                            />
                        </div>
                        <div className="basis-1/3 flex flex-col gap-5">
                            <div className="rounded-[5px] shadow-sm bg-white">
                                <div
                                    className="flex items-center justify-between p-5 rounded-t-[5px] border-b border-[#efefef] ">
                                    <div className="flex items-center gap-3">
                                        <Icon.UilClipboardAlt className="w-[20px] h-[20px] text-black-1"/>
                                        <h5 className="text-base font-semibold text-black-1">Thông tin đơn hàng</h5>
                                    </div>
                                </div>
                                <div className="px-5 border-b border-[#efefef]">
                                    {items.map((item, index) => (
                                        <div key={index}
                                             className={`${index < items.length - 1 && 'border-b'}  border-[#efefef] pt-3 pb-5`}>
                                            <Link to={`/cua-hang/${item.shop.slug}`}
                                                  className="flex items-center gap-2 font-medium text-md mb-2 transition-all hover:text-primary-hover">
                                                <Icon.UilStore className="w-[20px] h-[20px]"/>
                                                <p className="line-clamp-1">{item.shop.name}</p>
                                            </Link>
                                            <div className="flex gap-3">
                                                <Link to={`/san-pham/${item.product.slug}`}
                                                      className="min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] rounded bg-cover bg-center border border-[#f2f2f2]"
                                                      style={{backgroundImage: `url(${item.product?.images?.length > 0 ? item.product.images[0].url : NotFoundImage})`}}>
                                                </Link>
                                                <div className="">
                                                    <div>
                                                        <Link to={`/san-pham/${item.product.slug}`}
                                                              className="text-md font-medium line-clamp-1 mb-1 transition-all hover:text-primary-hover">
                                                            {item.product.name}
                                                        </Link>
                                                        <p className="mb-1 px-3 font-bold text-sm bg-[#f2f0fe] rounded-full text-[#402da1] min-w-max max-w-max">
                                                            {item.combination.combinationString}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-end gap-3">
                                                            <p className="text-base text-primary font-bold">
                                                                {formatCurrency(item.discountPrice)}
                                                            </p>
                                                            <p className="text-sm text-black-1 font-semibold line-through">
                                                                {formatCurrency(item.price)}
                                                            </p>
                                                        </div>
                                                        <p className="text-primary-hover font-bold text-base">x{item.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-5">
                                    <textarea rows="3" placeholder="Ghi chú cho Shop"
                                              value={note} onChange={(e) => setNote(e.target.value)}
                                              style={{resize: 'none'}}
                                              className="block p-2.5 w-full text-md rounded-[5px] border border-[#efefef] focus:outline-none"/>
                                </div>
                            </div>
                            <div className="rounded-[5px] shadow-sm bg-white">
                                <div className="p-5">
                                    <div className="flex justify-between items-center pb-3">
                                        <p className="font-semibold text-base">Tiền hàng</p>
                                        <p className="text-lg font-bold text-[#3F4B53]">
                                            {formatCurrency(total)}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center pb-3">
                                        <p className="font-semibold text-base">Giảm giá</p>
                                        <p className="font-bold text-[#3F4B53]">
                                            -{formatCurrency(total - discount)}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3 border-[#efefef]">
                                        <p className="font-semibold text-base">Vận chuyển</p>
                                        <p className="font-bold text-[#3F4B53]">
                                            +{formatCurrency(0)}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <p className="font-semibold text-base">Tổng thanh toán</p>
                                        <p className="font-bold text-primary text-lg">
                                            {formatCurrency(discount)}
                                        </p>
                                    </div>
                                    <button onClick={handleOrder}
                                            className="bg-primary rounded-[5px] px-10 py-3 text-white font-bold w-full hover:bg-primary-hover active:bg-primary transition duration-300 cursor-pointer">
                                        Đặt mua
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

const Information = ({user, setAddress, paymentMethod, setPaymentMethod, shippingMethod, setShippingMethod}) => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        protectedRequest().get("/users/addresses").then(res => {
            setAddresses(res.data.addresses)
        }).catch(err => {
            if (err.status === 403) navigate("/dang-nhap")
            setAddresses([])
        })
    }, [user])

    return (
        <>
            <div className="rounded-[5px] shadow-sm bg-white">
                {show && <Modal closeModal={setShow}/>}
                <div
                    className="flex items-center justify-between p-5 rounded-t-[5px] border-b border-[#efefef] ">
                    <div className="flex items-center gap-3">
                        <Icon.UilMapMarker className="w-[20px] h-[20px] text-black-1"/>
                        <h5 className="text-base font-semibold text-black-1">Địa chỉ nhận hàng</h5>
                    </div>
                    <div className="flex items-center gap-1 text-[#402da1]">
                        <Link to='/nguoi-dung/dia-chi' className="font-semibold text-md">
                            Thay đổi
                        </Link>
                        <Icon.UilAngleRight className="w-[20px] h-[20px]"/>
                    </div>
                </div>
                <div className="px-5">
                    {addresses.map((item, index) => (
                        <div key={index}
                             className={`${index < addresses.length - 1 && 'border-b border-[#efefef]'} py-5 flex gap-5 items-center`}>
                            <div>
                                <input type="radio" id={`address-${index}`} name="address"
                                       onChange={(e) => {
                                           if (e.target.checked) setAddress(item)
                                       }}
                                       className="w-4 h-4 accent-primary"/>
                            </div>
                            <label className="flex-1" htmlFor={`address-${index}`}>
                                <p className="font-medium text-black-1 flex items-center gap-3">
                                    <span className="text-md font-semibold">
                                        Người nhận: {item.fullName}
                                    </span>
                                    <span className="font-medium text-tiny text-[#A5B4BE]">|</span>
                                    <span className="text-tiny flex items-center gap-2">
                                        <Icon.UilPhoneVolume className="w-[16px] h-[16px]"/>
                                        {item.phone}
                                    </span>
                                    {item.email &&
                                        <>
                                            <span className="font-medium text-md text-[#A5B4BE]">|</span>
                                            <span className="text-tiny flex items-center gap-2">
                                                <Icon.UilEnvelopeCheck className="w-[16px] h-[16px]"/>
                                                {item.email}
                                            </span>
                                        </>
                                    }
                                </p>
                                <p className="flex items-center gap-1 font-medium text-md text-black-1 mt-1.5">
                                    <Icon.UilMapMarker className="w-[20px] h-[20px]"/>
                                    {item.address}, {item.wards}, {item.district}, {item.city}
                                </p>
                                {item.isDefault &&
                                    <p className="text-sm font-bold uppercase text-[#F66E23] mt-2">
                                        Địa chỉ mặc định
                                    </p>
                                }
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rounded-[5px] shadow-sm bg-white">
                <div
                    className="flex items-center justify-between p-5 rounded-t-[5px] border-b border-[#efefef]">
                    <div className="flex items-center gap-3">
                        <Icon.UilTruck className="w-[20px] h-[20px] text-black-1"/>
                        <h5 className="text-base font-semibold text-black-1">Phương thức giao hàng</h5>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex items-center gap-5">
                        <button onClick={() => setShippingMethod("now")}
                                className={`${shippingMethod === "now" ? "border-primary-hover" : "border-[#eeeeee]"} block text-left rounded-[12px] px-3 py-2 border-2 max-w-max min-w-[260px]`}>
                            <div className="mb-0.5 flex items-center justify-start gap-2.5">
                                <img alt="shipping" className="w-[32px]"
                                     src="https://salt.tikicdn.com/ts/upload/85/45/34/2fc25c6a660d84a41a6bf9276ce160ba.png"/>
                                <p className="text-md font-semibold text-[#00ab56]">Trước 16:00 hôm nay</p>
                            </div>
                            <p className="mb-0.5 text-tiny font-medium">Vận chuyển: 25.000đ</p>
                            <div
                                className="flex items-center justify-start gap-2.5 bg-[#f2f0fe] rounded-[5px] text-[#402da1] py-1 px-3 max-w-max">
                                <img alt="shipping" className="w-[15px]"
                                     src="https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png"/>
                                <p className="text-tiny font-medium">Freeship 100% với {formatCurrency(85999)}</p>
                            </div>
                        </button>
                        <button onClick={() => setShippingMethod("fast")}
                                className={`${shippingMethod === "fast" ? "border-primary-hover" : "border-[#eeeeee]"} block text-left rounded-[12px] px-3 py-2 border-2 max-w-max min-w-[260px]`}>
                            <div className="mb-0.5 flex items-center justify-start gap-2.5">
                                <img alt="shipping" className="w-[32px]"
                                     src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"/>
                                <p className="text-md font-semibold text-[#00ab56]">Ngày mai, trước 23:00</p>
                            </div>
                            <p className="mb-0.5 text-tiny font-medium">Vận chuyển: 14.000đ</p>
                            <div
                                className="flex items-center justify-start gap-2.5 bg-[#f2f0fe] rounded-[5px] text-[#402da1] py-1 px-3 max-w-max">
                                <img alt="shipping" className="w-[15px]"
                                     src="https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png"/>
                                <p className="text-tiny font-medium">Freeship 100% với {formatCurrency(48999)}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="rounded-[5px] shadow-sm bg-white">
                <div
                    className="flex items-center justify-between p-5 rounded-t-[5px] border-b border-[#efefef]">
                    <div className="flex items-center gap-3">
                        <Icon.UilWallet className="w-[20px] h-[20px] text-black-1"/>
                        <h5 className="text-base font-semibold text-black-1">Phương thức thanh toán</h5>
                    </div>
                </div>
                <div className="p-5">
                    <fieldset id="paymentMethod">
                        <label htmlFor="radio4"
                               className={`flex p-2 rounded-[5px] transition-all duration-400 ${paymentMethod !== 'cod' ? 'bg-[#F2F3F4]' : 'bg-white shadow-md'}`}>
                            <input type="radio" checked={paymentMethod === 'cod'} value="cod" id="radio4"
                                   className="w-4 h-4 mt-1 accent-primary" name="paymentMethod"
                                   onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <div className="ml-2">
                                <p className="font-medium text-base">Tiền mặt (COD)</p>
                                <p className="text-md font-medium text-black-1">Phí thu hộ: Miễn phí</p>
                            </div>
                        </label>
                        <label htmlFor="radio5"
                               className={`flex mt-6 p-2 rounded-[5px] transition-all ${paymentMethod !== 'shopio' ? 'bg-[#f5f5f5]' : 'bg-white shadow-md'}`}>
                            <input type="radio" checked={paymentMethod === 'shopio'} value="shopio" id="radio5"
                                   name="paymentMethod" className="w-4 h-4 mt-1 accent-primary"
                                   onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <div className="ml-2">
                                <p className="font-medium text-base">Ví ShopioPay</p>
                                <p className="text-md font-medium text-black-1">
                                    Số dư trong ví ShopioPay phải có ít nhất 1.000đ để thanh toán
                                </p>
                            </div>
                        </label>
                    </fieldset>
                    <div className="mt-5 text-center">
                        <button onClick={() => setShow(true)}
                                className="rounded-[5px] w-[40%] px-4 py-3 text-md font-bold bg-[#ECEDEE] text-[#3f4b53] hover:bg-[#F2F3F4] transition duration-400 active:bg-[#e7e8ea]">
                            Thêm phương thức khác
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut;