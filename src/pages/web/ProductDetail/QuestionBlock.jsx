import React from 'react';
import * as Icon from "@iconscout/react-unicons";

function QuestionBlock(props) {
    return (
        <div className="rounded-[5px] bg-white p-6">
            <p className="font-bold text-lg">Hỏi về sản phẩm</p>
            <p className="text-[#3f4b53] py-5">Bạn có thắc măc cần giải đáp?</p>
            <button
                className="flex rounded-[5px] items-center justify-center basis-5/12 px-4 py-2 w-[100%] bg-[#e7e8ea] text-[#3f4b53] hover:bg-[#F3F3F3] active:bg-[#e7e8ea] ">
                <Icon.UilCommentAltLines className="w-[27px] h-[27px] text-[#3f4b53]"/>
                <span className="font-medium ml-1">Hỏi Shop ngay</span>
            </button>
        </div>
    );
}

export default QuestionBlock;