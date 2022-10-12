import * as Icon from '@iconscout/react-unicons'
import {Fragment, useState} from "react";
import Table from "../../Admin/Table";

function Chat() {
    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <button onClick={() => setVisible(true)}
                    className={`fixed bottom-0 right-0 m-5 bg-primary-hover w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all ${!visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Icon.UilCommentDots className="fill-white"/>
            </button>
            <div
                className={`transition-all fixed bottom-0 right-0 m-5 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-[500px] h-[500px] p-5 bg-white rounded-[8px] shadow-2xl">
                    <div>Chat
                        <button onClick={() => setVisible(false)}
                                className=" bg-primary-hover w-[24px] h-[24px] rounded-full flex items-center justify-center">
                            <Icon.UilTimes className="fill-white"/>
                        </button>
                    </div>
                    <div className="flex">
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Chat;