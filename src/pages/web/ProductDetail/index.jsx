import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './style.scss';
import Helmet from "../../../components/web/Helmet";
import {BuyerLayout} from "../../../components/common/Layouts";
import axios from "axios";
import product from "../Shop/Product";
import {formatCurrency} from "../../../utils/format";
import * as Icon from '@iconscout/react-unicons-solid';
import * as icon from '@iconscout/react-unicons';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import ProductCard from "../../../components/web/ProductCard";
import Logo from "../../../assets/img/shop.png";

function ProductDetail() {
    const sample = [
        {
            name: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
            description: '<p>- CPU: Intel Core i3-1115G4 - M&agrave;n h&igrave;nh: 15.6&quot; (1366 x 768) - RAM: 1 x 4GB DDR4 3200MHz - &#272;&#7891; h&#7885;a: Intel UHD Graphics - L&#432;u tr&#7919;: 512GB SSD M.2 NVMe / - H&#7879; &#273;i&#7873;u h&agrave;nh: Windows 11 Home - Pin: 3 cell 41 Wh Pin li&#7873;n - Kh&#7889;i l&#432;&#7907;ng: 1.7 kg</p>',
            sell_price: 17690000,
            type: '',
            sold: '32k',
            quantity: '785',
            assess: 15,
            brand: 'HP',
            slug: 'san-pham-1',
            tags: ['Ready to ship', 'Yêu thích', 'Yêu thích', 'Yêu thích', 'Yêu thích'],
            images: [
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                { img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'}
            ],

            color: [
                {name: 'Đỏ', price: '3000', img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                {name: 'Xanh', price: '3000', img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
                {name: 'Vàng', price: '3000', img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
            ],
            size:[
                "S","M","L","XL"
            ],
            info:[
                {name:"Màn hình", value:"15.6inch HD"},
                {name:"Hãng sản xuất", value:"HP"},
                {name:"Hệ điều hành", value:"Windows"},
                {name:"Ổ cứng", value:"512GB SSD"},
                {name:"Ram", value:"4GB"},
                {name:"Vi xử lí", value:"Intel Core i3-1115G4"},
                {name:"Cân nặng", value:"1.7kg"},
            ],
            evaluate:[
                {uId: 1,time: "09:15", date: "25/09/2022", star:5,mess:"Tốt", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 2,time: "09:16", date: "25/09/2022", star:5,mess:"Chưa biết sài chưa biết sao", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 3,time: "09:17", date: "21/09/2022", star:3,mess:"Giao hàng lâu", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 4,time: "09:18", date: "20/09/2022", star:4,mess:"Tạm ổn", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 5,time: "09:19", date: "01/09/2022", star:5,mess:"hàng nét", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 6,time: "08:15", date: "20/08/2022", star:1,mess:"dỏm mọi người né", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
                {uId: 7,time: "07:15", date: "26/09/2021", star:1,mess:"kém chất lượng", images:[{img:'https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},]},
            ]


        },
    ]
    const userEX= [
        {
            uId: 1, name: "Nguyễn Văn To", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
        },
        {
            uId: 2, name: "Trần Văn Lớn", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
        },
        {
            uId: 3, name: "Huỳnh Thị Bé", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
        },
        {
            uId: 4, name: "Quách Thị Nhỏ", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
        },
        {
            uId: 5, name: "Nguyễn Thị Cẩm", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
        },
        {
            uId: 6, name: "Nguyễn Văn Hồng", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
        },
        {
            uId: 7, name: "Nguyễn Văn Thụ", ava:"https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
        }
    ]
    const {slug} = useParams();
    const styleCss ={
        "&::before":{
            content: `'★★★★★'`,
            display: 'block',
            background: 'linear-gradient(90deg, #ffc600 90%, #e7e8ea 0%)',
            backgroundClip: 'text',
            textFillColor: 'rgba(0, 0, 0, 0)'
        }
    }
    const [scrollTop, setScrollTop] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const [h, setH] =useState("[20rem]")
    const [products, setProducts] = useState([...sample])
    const[user, setUser] = useState([...userEX])
    const[listP, setListP] =useState([...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample, ...sample])
    const [noOfProduct, setNoOfProduct] = useState(12)
    const slice = listP.slice(0, noOfProduct)
    const[color, setColor] = useState(undefined)
    const[size, setSize] =useState(undefined)
    const[quantity, setQuantity] = useState(1)
    const [activeThumbs, setActiveThumbs] = useState()
    useEffect(() => {
        setColor(undefined)
        setSize(undefined)
        axios
            .get(`http://localhost:8080/api/v1/product/${slug}`)
            .then((response) => {
                console.log(response)
            })
    }, [slug])
    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop])
    const handleShow= () =>{
        setIsShow(!isShow)
        setH("auto")
    }
    const handleHide= () =>{
        setIsShow(!isShow)
        setH("[20rem]")
    }
const loadMore = () =>{
        setNoOfProduct(noOfProduct + noOfProduct)
}
    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }
    return (
        <BuyerLayout>
            <Helmet title={slug}>
                {products.map((item, index)=>(
                <div className="container ">

                    <div className="flex bg-white mt-5 h-auto rounded-2xl">
                        <div className="sticky basic-1/3 top-[58px] h-full">
                            <div className="rounded-sm max-w-[100%] ">
                                <div className="w-[600px] h-[100%] rounded-md p-3 pt-10">
                                    <Swiper
                                        loop={true}
                                        spaceBetween={0}
                                        thumbs = {{swiper : activeThumbs}}
                                        modules={[Navigation, Thumbs]}
                                        navigation={true}
                                        grabCursor={true}
                                        className='product-images-slider-thumbs'
                                    >
                                        { item.images.map((i,index)=>(
                                            <SwiperSlide className="rounded-md" key={index}>
                                                <img className="rounded-md w-[100%] h-[600px]"  src={i.img} alt=""/>
                                            </SwiperSlide>
                                        ))

                                        }
                                    </Swiper>
                                </div>

                            </div>
                            <div className="w-[600px] h-[100%] p-3">
                                <Swiper
                                    loop={true}
                                    spaceBetween={5}
                                    slidesPerView={4}
                                    onSwiper={setActiveThumbs}
                                    modules={[Navigation, Thumbs]}
                                    navigation={true}
                                    grabCursor={true}
                                    className='product-images-slider-thumbs'
                                >
                                    { item.images.map((i,index)=>(
                                        <SwiperSlide key={index}>
                                            <img className="rounded-md w-[100%] h-[150px]" src={i.img} alt="" />
                                        </SwiperSlide>
                                    ))

                                    }

                                </Swiper>
                            </div>
                        </div>
                        <div className="p-10 basis-2/3">
                            <div className="border-b border-[#b1b1b1]">
                               <h1 className="font-bold">{item.name}</h1>

                                <p className="text-base font-bold text-primary-hover my-2">{formatCurrency(item.sell_price)}</p>
                                <div className="flex mb-10">
                                    <p className="text-base font-bold text-[#efefef] line-through">{formatCurrency(item.sell_price)} </p>
                                    <p className="ml-3 text-[#ff0000] block">Giảm{(item.sell_price-item.sell_price)*100}%</p>
                                </div>
                                <div className="mb-5 flex">

                                    <div className="flex">
                                    <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400] "/>
                                    <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400]"/>
                                    <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400]"/>
                                    <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400]"/>
                                    <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400] "/>
                                    </div>
                                    <p className="ml-2 text-[#007ae4]">{item.assess} <span>đánh giá</span></p>
                                    <div className="flex">

                                        <icon.UilShoppingBag className="w-[20px] h-[20px] ml-3 text-gray"/>
                                        <span className="text-gray">{item.sold} lượt mua</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5 border-b border-[#b1b1b1]">

                                <div className="flex items-center flex-row">


                                    <div className="basis-1/3 ">
                                        <p className="">Chọn màu sắc: </p>
                                        <p className="font-bold">{color}</p>
                                    </div>
                                    <div className="2/3 flex">
                                        {item.color.map((image,index)=>(

                                             <div className={`w-[70px] h-[70px] m-2 rounded-md  ${color === image.name ? 'active:bg-white border-2 border-[#f70000]':'border-[#e7e8ea] border-2'}`}>
                                                <img className="rounded-md" key={index} src={image.img}  onClick={()=> setColor(image.name)} alt=""/>
                                             </div>

                                        ))}
                                    </div>

                                </div>

                                <div className="flex items-center flex-row mb-5">

                                    <div className="basis-1/3 ">
                                        <p className="">Chọn kích thước: </p>
                                        <p className="font-bold">{size}</p>
                                    </div>
                                    <div className="2/3 flex items-center">
                                        {item.size.map((sizes,index)=>(
                                            <div className={`pointer-events-auto w-[70px] h-[30px] m-2 rounded-md   ${size === sizes ? 'active:bg-white border-2 border-[#f70000] ':'bg-[#e7e8ea] border-[#e7e8ea] border-2'}`}>
                                                <p className={`cursor-pointer text-center text-[#3f4b53] font-bold  `} key={index}   onClick={()=> setSize(sizes)}> {sizes} </p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className="flex items-center flex-row">

                                    <div className="basis-1/3 ">
                                        <p className="">Chọn số lượng: </p>
                                    </div>
                                    <div className="2/3 flex items-center">
                                        <button className="active:bg-[#F3F3F3] rounded-md bg-[#e7e8ea] w-[29px] h-[29px]" onClick={()=> updateQuantity('minus')}><icon.UilMinus className="text-center text-[#3f4b53] my-0 mx-auto"/></button>
                                        <input className="text-center mx-2 rounded-md border-2 border-[#e7e8ea] w-[35px]" value={quantity} type="text"/>
                                        <button className="active:bg-[#F3F3F3] rounded-md bg-[#e7e8ea] w-[29px] h-[29px]" onClick={()=> updateQuantity('plus')}><icon.UilPlus className="text-center text-[#3f4b53] my-0 mx-auto"/></button>
                                    </div>

                                </div>
                                <div className="mt-5  flex items-center flex-row">

                                    <div className="basis-1/2 ">
                                        <button className="text-lg text-[#3f4b53] font-bold hover:bg-[#F3F3F3] active:bg-[#e7e8ea] mr-1 rounded-md bg-[#e7e8ea] w-[100%] h-[40px]" onClick={()=> updateQuantity('minus')}>Thêm vào giỏ</button>
                                    </div>
                                    <div className="basis-1/2">
                                        <button className="text-lg text-white font-bold hover:bg-primary-hover active:bg-primary ml-2 rounded-md bg-primary w-[100%] h-[40px]" onClick={()=> updateQuantity('minus')}>Mua ngay</button>

                                    </div>

                                </div>

                            </div>
                            <div className="pb-5 border-b border-[#b1b1b1]">
                                <p className="mt-3 text-lg font-bold">
                                    Mã giảm giá của shop
                                </p>
                                <div className=" flex mt-3 ">
                                    <div className="bg-white shadow-lg items-center justify-between flex basis-1/4 p-2 rounded-md ">
                                        <div className="flex w-full flex-col after:w-[1px] h-[100%] border-dashed border-r-2 border-[#cfd2d4] right-0 top-0 mr-1">
                                            <span className="text-[#da732a] mr-3">Giảm giá 10k</span>
                                            <span className="text-sm text-[#0B6CFF]">Chi tiết</span>
                                        </div>
                                        <div className="basis-1/4">
                                            <button className="hover:bg-[#F3F3F3] active:bg-[#e7e8ea] rounded-md px-2 font-bold text-[#3f4b53]">Lưu</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="pb-5 border-b border-[#b1b1b1]">
                                <p className="mt-3 text-lg font-bold">
                                    Ưu đãi dành cho bạn
                                </p>
                                <div className=" flex mt-3 ">
                                    <div className=" items-center justify-start flex basis-1/2 p-2">
                                        <div className="flex flex-col basis-1/6">
                                            <img className="w-[50px] h-[50px]" src="https://yt3.ggpht.com/radw-0s056UWMotq-3d_3-qkCoiumQUDuhTNoMZ3FZ0Z7qnHT57I8-s2tS-X8La96v5nImM_=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                                        </div>
                                        <div className="">
                                            <span className=" text[#3f4b53]">Trả góp Kvedivo</span>
                                        </div>

                                    </div>
                                    <div className="items-center justify-start flex basis-1/2 p-2">
                                        <div className="flex flex-col basis-1/6">
                                            <icon.UilMobileAndroid className="text-[#FF940B] w-[40px] h-[40px]"/>
                                        </div>
                                        <div className="">
                                            <span className=" text[#3f4b53]">Giảm khi mua qua App</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="pb-5 border-b border-[#b1b1b1]">
                                <p className="mt-3 text-lg font-bold">
                                    Quyền lợi khách hàng
                                </p>
                                <div className=" flex mt-3 ">
                                    <div className=" items-center justify-start flex basis-1/2 p-2">
                                        <div className="flex flex-col basis-1/12">
                                            <icon.UilShieldCheck className="text-[#07B359] w-[30px] h-[30px]"/>
                                        </div>
                                        <div className="">
                                            <span className="pl-1 text[#3f4b53]">Miễn phí hoàn trả</span>
                                        </div>

                                    </div>
                                    <div className="items-center justify-start flex basis-1/2 p-2">
                                        <div className="flex flex-col basis-1/12">
                                            <icon.UilShieldCheck className="text-[#07B359] w-[30px] h-[30px]"/>
                                        </div>
                                        <div className="">
                                            <span className="pl-1 text-[#3f4b53]">48 giờ hoàn trả</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    {/*    phần footer fixed*/}
                        <div className={`bg-white h-[60px] p-1 shadow-2xl ${scrollTop >= 930 ? 'fixed bottom-0 z-50 left-0 right-0 ':'hidden'}`}>
                            <div className="flex container  items-center justify-between">
                                <div className="flex items-center justify-between basis-5/12">

                                    <div className="flex items-center justify-center basis-5/12 ">
                                        <div className="pl-3 text-right basis-1/3">
                                            <img className="w-[50px] h-[50px]" src={item.images[0].img} alt=""/>
                                        </div>
                                        <div className="basis-2/3">
                                            <p className="text-ellipsis font-bold line-clamp-1 overflow-hidden">{item.name}</p>
                                            <p className="mr-1 font-bold inline-block">{color}</p>
                                            <span>x{quantity}</span>
                                        </div>
                                    </div>
                                    <div className="basis-5/12 text-right">
                                        <p>Tạm tính</p>
                                        <p className="text-primary font-bold text-xl">{formatCurrency(item.sell_price*quantity)}</p>
                                    </div>
                                </div>
                                <div className="flex basis-7/12 items-center justify-start px-3">
                                    <button className=" rounded-md mr-2 basis-1/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                        <icon.UilStore className=" w-[25px] h-[25px] text-[#3f4b53]"/>
                                    </button>
                                    <button className=" rounded-md mr-2 basis-1/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                        <icon.UilCommentAltLines className=" w-[25px] h-[25px] text-[#3f4b53]"/>
                                    </button>
                                    <button className=" rounded-md mr-2 basis-3/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                        <span className="font-medium ml-1">Thêm vào giỏ</span>
                                    </button>
                                    <button className="flex rounded-md items-center justify-center basis-7/12 px-4 py-2 w-[100%] bg-primary text-white hover:bg-primary-hover active:bg-primary ">
                                        <span className="font-medium ml-1">Mua ngay</span>
                                    </button>
                                </div>

                            </div>
                        </div>




                    </div>
                    {/*// thong tin shop va product detail*/}
                    <div className="flex  justify-between  mt-8">
                        <div className="bg-white p-4 sticky top-[88px] h-full rounded-2xl basis-1/3 mr-3">
                            <div className="flex">
                                <div className="w-[50px] h-[50px] relative">
                                    <img className="rounded-full w-[50px] h-[50px]" src={Logo} alt="logo"/>
                                    <icon.UilFacebookMessenger className="absolute bottom-0 right-0 border-4 rounded-full border-[#FFFFFF] w-[20px] h-[20px] text-[#00C50A]"/>
                                </div>
                                <div>
                                    <h1 className="pl-2 font-bold">Shop</h1>
                                    <div className="flex items-center text-[#3f4b53] justify-start text">
                                        <p className="pl-2 text-sm">Hà Nội</p>
                                        <p className="ml-1 text-sm">|</p>
                                        <p className="ml-1 text-sm">4.3</p>
                                        <Icon.UisStar className="inline-block ml-1 mt-0.5 w-[16px] h-[16px] text-[#e4a400]"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pl-3 mt-2 justify-between items-center">
                                <div className="flex-col text-center">
                                    <p className="font-bold">3 năm</p>
                                    <p className="text-sm text-[#3f4b53]">Bán ở Sendo</p>
                                </div>
                                <div className="flex-col text-center">
                                    <p className="font-bold">9</p>
                                    <p className="text-sm text-[#3f4b53]">Sản phẩm</p>
                                </div>
                                <div className="flex-col text-center">
                                    <p className="font-bold">3 ngày</p>
                                    <p className="text-sm text-[#3f4b53]">Chuẩn bị hàng</p>
                                </div>
                                <div className="flex-col text-center">
                                    <p className="font-bold">75%</p>
                                    <p className="text-sm text-[#3f4b53]"> Tỉ lệ phẩn hồi</p>
                                </div>
                                <div className="flex-col text-center">
                                    <p className="font-bold">Trong vài giờ</p>
                                    <p className="text-sm text-[#3f4b53]">Shop phản hồi</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex pl-3 mt-3 pb-5 justify-between items-center border-b border-[#b1b1b1]">
                                    <button className="flex rounded-md items-center justify-center basis-5/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                        <icon.UilHeartMedical className=" w-[27px] h-[27px] text-[#3f4b53]"/>
                                        <span className="font-medium ml-1">Theo dõi shop</span>
                                    </button>
                                    <button className="flex rounded-md items-center justify-center basis-5/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                        <icon.UilStore className=" w-[27px] h-[27px] text-[#3f4b53]"/>
                                        <span className="font-medium ml-1">Vào shop</span>
                                    </button>
                                    <button className="flex rounded-md items-center text-center basis-1/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                        <icon.UilPhoneVolume className=" w-[28px] h-[28px] text-[#3f4b53]"/>
                                    </button>
                                </div>

                                <p className="font-bold text-[#3f4b53] mt-5">Gợi ý thêm từ shop</p>
                                    <div className="w-[565px] h-[100%]  bg-gradient-to-t from-[#f9a8d4] to-[#fdf2f8] rounded-md   mt-2">

                                        <Swiper
                                            loop={true}
                                            spaceBetween={20}
                                            slidesPerView={3}
                                            modules={[Navigation, Thumbs]}
                                            navigation={true}

                                            grabCursor={true}
                                            className='product-images-slider-thumbs'
                                        >
                                            {
                                                listP.map((p, index) => (
                                            <SwiperSlide className="rounded-md border-none p-3  " key={index}>
                                               <div className="product-images-slider-thumbs-wrapper rounded-md border-none hover:shadow-xl shadow-[#4b5563]">
                                                   <ProductCard className="absolute top-0 left-0.5 w-[100%]" product={p}/>
                                               </div>
                                            </SwiperSlide>

                                                ) )}
                                        </Swiper>
                                    </div>


                            </div>
                        </div>
                        <div className="basis-2/3 ">
                            <div className="rounded-2xl min-h-[15rem] bg-white p-8 pt-5">
                                <div className={`overflow-hidden mb-3 h-${h}`}>

                                <p className="font-bold text-lg">Mô tả sản phẩm</p>
                                <span>{item.description}</span>
                                <p className="py-3 font-bold">Thông tin chi tiết</p>
                                <table className="table-auto w-[100%] rounded-md ">
                                    <tbody className="">
                                        {
                                            item.info.map((info, index)=>(
                                                <tr key={index} className={`h-[45px] px-2 ${index%2===0 ? "bg-[#F2F3F4]":""}`}>
                                                <td className="pl-2">{info.name}</td>
                                                <td>{info.value}</td>
                                                </tr>
                                                ))
                                        }

                                    </tbody>
                                </table>
                                </div>

                                <div className="relative">
                                    <div  className={`${!isShow ? "absolute border-none bg-gradient-to-b from-[#ECE9E92D] to-[#fff] h-[10rem] w-[100%] top-[-10rem]":""}`}></div>
                                    {
                                        isShow ? (<button className="rounded-md font-bold px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea]" onClick={handleHide}> Thu gọn </button>):(
                                            <button className="rounded-md px-4 py-2 w-[100%] font-bold bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea]" onClick={handleShow}>Xem thêm</button>)
                                    }

                                </div>
                            </div>
                            <div className="rounded-2xl bg-white mt-3 p-8 pt-5">
                                <p className="inline-block font-bold ">Đánh giá và nhận xét về sản phẩm </p>
                                <span className=" pl-2 inline-block italic text-[#3f4b53]">({item.evaluate.length} lượt đánh giá)</span>




                                <div className="flex items-center py-3  min-w-full">

                                    <div className="basic-1/2 p-5 max-w-full border-r border-[#b1b1b1]">
                                        <div className="flex items-baseline">
                                            <span className="inline-block  text-5xl">5/</span>
                                            <span className=" pr-1 inline-block italic text-xl text-[#3f4b53]">5</span>
                                            <div className="flex max-w-[110px] m-0">
                                                <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400] "/>
                                                <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400]"/>
                                                <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400]"/>
                                                <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400]"/>
                                                <Icon.UisStar className="w-[20px] h-[20px] text-[#e4a400] "/>
                                            </div>

                                        </div>
                                        <div>
                                             <p className="italic">Đây là thông tin người mua
                                                 đánh giá shop  bán sản phẩm này có đúng mô tả không.</p>
                                        </div>
                                    </div>
                                    <div className="basic-1/2 w-[100%] ">
                                        <div className="flex items-center justify-center pl-2">
                                            <p className="text-right">5 sao</p>
                                            <span className="relative w-[50%] h-[0.8rem] ml-3.5 rounded-md bg-[#e0e0e0] ">
                                                <span className="absolute rounded-md bottom-0 top-0 left-0 w-[75%] bg-primary"></span>
                                            </span>
                                            <span className="ml-2 font-bold">7</span>
                                        </div>
                                        <div className="flex items-center justify-center pl-2">
                                            <p className="text-right">4 sao</p>
                                            <span className="relative w-[50%] h-[0.8rem] ml-3.5 rounded-md bg-[#e0e0e0] ">
                                                <span className="absolute rounded-md bottom-0 top-0 left-0 w-[50%] bg-primary"></span>
                                            </span>
                                            <span className="ml-2 font-bold">5</span>
                                        </div>
                                        <div className="flex items-center justify-center pl-2">
                                            <p className="text-right">3 sao</p>
                                            <span className="relative w-[50%] h-[0.8rem] ml-3.5 rounded-md bg-[#e0e0e0] ">
                                                <span className="absolute rounded-md bottom-0 top-0 left-0 w-[25%] bg-primary"></span>
                                            </span>
                                            <span className="ml-2 font-bold">3</span>
                                        </div>
                                        <div className="flex items-center justify-center pl-2">
                                            <p className="text-right">2 sao</p>
                                            <span className="relative w-[50%] h-[0.8rem] ml-3.5 rounded-md bg-[#e0e0e0] ">
                                                <span className="absolute rounded-md bottom-0 top-0 left-0 w-0 bg-primary"></span>
                                            </span>
                                            <span className="ml-2 font-bold">0</span>
                                        </div>
                                        <div className="flex items-center justify-center pl-2">
                                            <p className="text-right">1 sao</p>
                                            <span className="relative w-[50%] h-[0.8rem] ml-3.5 rounded-md bg-[#e0e0e0] ">
                                                <span className="absolute rounded-md bottom-0 top-0 left-0 w-[10%] bg-primary"></span>
                                            </span>
                                            <span className="ml-2 font-bold">1</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="my-3">
                                    <p className="font-bold">Ảnh từ khách hàng</p>
                                    <div className="w-[700px] h-[100%]   mt-2">

                                        <Swiper
                                            loop={true}
                                            spaceBetween={5}
                                            slidesPerView={6}
                                            modules={[Navigation, Thumbs]}
                                            navigation={true}

                                            grabCursor={true}
                                            className='product-images-slider-thumbs'
                                        >
                                            {
                                               item.evaluate.map((e, index) => (
                                                    <SwiperSlide className="rounded-md border-none p-3  " key={index}>
                                                        {
                                                            e.images.map((i, index)=>(
                                                                <img className="w-[100%] h-[10%]" src={i.img} alt=""/>
                                                            ))
                                                        }

                                                    </SwiperSlide>

                                                ) )}
                                        </Swiper>
                                    </div>
                                </div>

                                {
                                    item.evaluate.map((e, index)=>(
                                        <div>
                                        {
                                            user.map((users, index)=>(
                                            <div className={`${e.uId===users.uId ? "": "hidden"}`}>
                                                <div className="flex">
                                                    <div className="w-[50px] h-[50px] overflow-hidden">
                                                        <img className="w-[50px] h-[50px] rounded-full"  src={users.ava} alt="logo"/>
                                                    </div>
                                                    <div>
                                                        <h1 className="pl-2 font-bold">{users.name}</h1>
                                                        <div className="flex italic items-center text-[#3f4b53] justify-start text">
                                                            <p className="pl-2 text-sm">{e.time}</p>
                                                            <p className="ml-1 text-sm">|</p>
                                                            <p className="ml-1 text-sm">{e.date}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pl-14">
                                                    <p className="py-3">{e.mess}</p>
                                                    <div >
                                                        {e.images.map((image, index)=>(
                                                            <img className="w-[60px] h-[60px]" src={image.img} alt=""/>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="align-right flex justify-end">
                                                    <button className="flex  text-right rounded-md items-center px-4 py-2  text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                                        <icon.UilThumbsUp  className=" w-[27px] h-[27px] text-[#3f4b53]"/>
                                                        <span className=" ml-1">Hữu ích <span></span></span>
                                                    </button>
                                                </div>
                                            </div>
                                            ))
                                        }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="rounded-2xl bg-white mt-3 p-8 pt-5">
                                <p className="font-bold text-lg">Hỏi về sản phẩm</p>
                                <p className=" text-[#3f4b53] py-5">Bạn có thắc măc cần giải đáp?</p>
                                <button className="flex rounded-md items-center justify-center basis-5/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                                    <icon.UilCommentAltLines className=" w-[27px] h-[27px] text-[#3f4b53]"/>
                                    <span className="font-medium ml-1">Hỏi Shop ngay</span>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/*// danh sach product liên quan*/}
                    <div className="mt-20 pb-5 flex-1">
                        <p className="text-lg font-bold pb-5">Ở đây có sản phẩm bạn thích</p>
                        <div className="grid grid-cols-6 gap-3">
                            {slice.map((product, index) => {
                                return (
                                    <ProductCard key={index} product={product}/>
                                )
                            })}

                        </div>

                    </div>

                    <div className="pb-5 text-center">
                        {
                            noOfProduct >= listP.length ? "" :(<button className="rounded-md w-[40%] px-4 py-2 font-bold bg-[#ffffff] text-[#3f4b53] hover:bg-[#FBFBFB] active:bg-[#e7e8ea]" onClick={loadMore}>Xem thêm</button>)
                        }

                    </div>


                </div>
                ))}
            </Helmet>
        </BuyerLayout>
    );
}

export default ProductDetail;