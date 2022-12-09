import React, {useEffect, useState} from 'react';
import * as Icon from "@iconscout/react-unicons";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {formatDate} from "../../../utils/format";
import {protectedRequest, publicRequest} from "../../../utils/requestMethods";

const data = [
    {
        user: {
            _id: 1,
            name: 'Trần Thanh Nhân',
            avatar: 'https://media3.scdn.vn/img4/2021/08_11/uM41MFm2oMETHLbjqGv4.jpg',
        },
        message: "Tốt",
        replied: false,
        createdDate: "07:15 25/09/2022",
    }
]

function QuestionBlock({product}) {
    const user = useSelector(state => state.user);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (product) {
            console.log(product)
            publicRequest.get(`/questions?productId=${product?._id}&page=1`).then(res => {
                console.log(res)
                setQuestions(data)
            })
        }
    }, [product])

    return (
        <div>
            <div className="rounded-[5px] bg-white p-6 mb-5">
                <p className="font-bold text-base pb-2">Hỏi về sản phẩm</p>
                <UserInput product={product} user={user}/>
                <div className="w-full mt-8">
                    {questions.map((question, index) => (
                        <Question key={index} question={question}/>
                    ))}
                </div>
            </div>
            <div className="rounded-[5px] bg-white p-6">
                <p className="font-bold text-base pb-2">Hỗ trợ</p>
                <p className="text-[#3f4b53] font-medium pb-4">Bạn có thắc mắc cần giải đáp ?</p>
                <button
                    className="flex gap-3 rounded-[5px] items-center justify-center px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                    <Icon.UilCommentAltLines className="w-[20px] h-[20px] text-[#3f4b53]"/>
                    <span className="font-semibold text-md">Hỏi Shop ngay</span>
                </button>
            </div>
        </div>
    );
}

const Question = ({question}) => {
    return (
        <div className="mt-5 pt-5 border-t-[1px] border-[#f2f2f2]">
            <div className="flex flex-wrap items-start mb-3">
                <div style={{backgroundImage: `url(${question.user.avatar})`}}
                     className="bg-cover bg-center rounded-full min-w-[40px] min-h-[40px]"/>
                <div className="ml-3">
                    <p className="text-tiny font-medium max-w-[300px] line-clamp-1">
                        {question.user.name}
                    </p>
                    <p className="text-[11px] text-[#828282] font-medium">
                        {question.createdDate}
                    </p>
                </div>
            </div>
            <p className="ml-[40px] pl-3 text-tiny font-normal text-black-1">{question.message}</p>
        </div>
    )
}

const UserInput = ({product, user}) => {
    const [question, setQuestion] = useState("");

    const submitQuestion = async () => {

        if (question && user.logged) {
            await protectedRequest.post("/questions", {
                productId: product._id,
                content: question,
            }).then(res => {
                console.log(res)
            })
        }
    }

    return (
        <div className="pt-3">
            {user.logged ?
                <div className="flex gap-4 items-center justify-center">
                    <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}
                           className="text-gray bg-[#F7F7F7] text-tiny font-medium bg-white px-5 flex-1 h-[36px] rounded-[50px] focus-visible:outline-none"
                           placeholder="Nhập nội dung câu hỏi"/>
                    <button onClick={submitQuestion}
                            className="font-medium text-tiny bg-primary-hover w-[36px] h-[36px] rounded-full flex items-center justify-center">
                        <Icon.UilMessage className="w-[18px] h-[18px] text-white relative left-[.5px] top-[.5px]"/>
                    </button>
                </div> :
                <div className="font-medium text-tiny text-[#757575]">
                    <Link to="/dang-nhap" className="text-primary hover:text-primary-hover transition-all">Đăng
                        nhập</Link>
                    <span> hoặc </span>
                    <Link to="/dang-ky" className="text-primary hover:text-primary-hover transition-all">Đăng ký</Link>
                    <span> để đặt câu hỏi cho nhà bán hàng ngay và câu trả lời sẽ được hiển thị tại đây.</span>
                </div>
            }
        </div>
    )
}
export default QuestionBlock;