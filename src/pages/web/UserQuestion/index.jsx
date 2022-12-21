import React, {useEffect, useState} from 'react';
import * as icon from "@iconscout/react-unicons";
import {UserLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import UserSidebar from "../../../components/web/UserSidebar";
import {protectedRequest} from "../../../utils/requestMethods";
import CreateAddress from "../CreatingAddress";
import {toast} from "react-toastify";
import DefaultAvatar from "../../../assets/img/default-avatar.png";
import {formatLongDate} from "../../../utils/format";
import * as Icon from "@iconscout/react-unicons";
import {Answer} from "../ProductDetail/QuestionBlock";
import NotFoundImage from "../../../assets/img/image-not-found.jpg";

function UserQuestion() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        protectedRequest().get(`/questions/user`).then(res => {
            console.log(res)
            setQuestions(res.data.questions)
        }).catch(err => {
            if (err.status === 403) return navigate("/dang-nhap")
            setQuestions([])
        })
    }, [user])


    return (
        <UserLayout>
            <Helmet title={'Thay đổi địa chỉ - Shopio'}>
                <div className="container py-8">
                    <div className="flex items-start gap-5">
                        <UserSidebar/>
                        <div className="flex-1">
                            <div className="bg-white rounded-[5px] shadow-md">
                                <div
                                    className="text-black border-b border-[#f7f7f7] flex items-center justify-between px-5 py-4 rounded-t-[5px]">
                                    <h5 className="flex items-center gap-3">
                                        <span className="text-base font-semibold">Câu hỏi của tôi</span>
                                    </h5>
                                </div>
                                <div className="">
                                    {questions.map((question, index) => (
                                        <div key={question._id}
                                             className={`${index < questions.length - 1 && 'border-b border-[#efefef]'} py-5 px-5`}>
                                            <div className="mb-4">
                                                <Link to={`/cua-hang/${question.shop.slug}`}
                                                      className="flex items-center gap-3 text-black-1 text-md font-semibold mb-3 transition-all hover:text-primary-hover">
                                                    <Icon.UilStore className="w-[20px] h-[20px]"/>
                                                    <p className="line-clamp-1">{question.shop.name}</p>
                                                </Link>
                                                <Link to={`/san-pham/${question.product.slug}`}
                                                      className="text-black-1 text-base font-medium line-clamp-4 transition-all hover:text-primary-hover">
                                                    <Icon.UilQuestionCircle className="inline w-[20px] h-[20px] mr-2"/> Câu hỏi tại: {question.product.name}
                                                </Link>
                                            </div>
                                            <div className="flex justify-between items-start gap-8">
                                                <div className="w-[400px]">
                                                    <div className={`bg-[#F7F7F7] p-3 rounded-[8px]`}>
                                                        <div className="flex flex-wrap items-start">
                                                            <div style={{
                                                                backgroundImage: `url(${question.user.avatar || DefaultAvatar})`
                                                            }}
                                                                 className="bg-cover bg-center rounded-full min-w-[40px] min-h-[40px] border-2 border-border"/>
                                                            <div
                                                                className="ml-3 flex-1 flex items-start justify-between">
                                                                <div>
                                                                    <p className="text-tiny font-medium max-w-[300px] line-clamp-1">
                                                                        {question.user.fullName || 'Bạn'}
                                                                    </p>
                                                                    <p className="text-[11px] text-[#828282] font-medium">
                                                                        {formatLongDate(question.createdAt)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ml-[40px] pl-3">
                                                            <p className="text-md text-black-1">{question?.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <Answer answers={question.answers} shop={question.shop}/>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}

export default UserQuestion;