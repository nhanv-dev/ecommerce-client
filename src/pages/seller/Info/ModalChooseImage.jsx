import {useEffect, useState} from 'react';
import {publicRequest} from "../../../utils/requestMethods";
import * as Icon from "@iconscout/react-unicons";

function ModalChooseImage({show, handle}) {
    const defaultImage = 'https://media.istockphoto.com/id/924949200/vector/404-error-page-or-file-not-found-icon.jpg?s=170667a&w=0&k=20&c=gsR5TEhp1tfg-qj1DAYdghj9NfM0ldfNEMJUfAzHGtU='

    const handleClose = () => {
        console.log(show)
        handle(false)
    }
    return (
        <div onClick={handleClose}
             className={`fixed top-0 left-0 right-0 bottom-0 z-[50] after:absolute after:bg-[#000] after:opacity-40 after:top-0 after:left-0 after:right-0 after:bottom-0 transition-all ${show  ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div
                className="shadow-md rounded-[5px] z-[50] p-3 bg-white shadow-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[400px]">

                <div className="pb-3">
                    <h5 className="font-bold text-black text-left mb-3">
                        Hình ảnh Shop
                    </h5>
                    <div className="flex items-center justify-center gap-2">

                        <form
                              className="flex-1 flex items-center justify-start gap-2 border-2 border-[#1CAC93] rounded-[5px] px-2 py-1.5 text-[#1CAC93] text-sm font-medium cursor-pointer">
                            <input type="text" id="image" name="image" placeholder="Dán đường dẫn tại đây"
                                   className="outline-none text-sm flex-1"/>
                            <button type="submit">
                                <Icon.UilMessage className="w-[18px] h-[18px]"/>
                            </button>
                        </form>
                        <form>
                            <div className="flex items-center justify-start gap-2">
                                <input type="file" id="upload-image" name="upload-image" accept="image/png, image/jpeg"
                                        className="hidden"/>
                                <label htmlFor="upload-image"
                                       className="flex items-center justify-center gap-1 border-2 border-[#1CAC93] rounded-[5px] min-w-[70px] p-1.5 text-[#1CAC93] text-sm font-medium cursor-pointer">
                                    Tải ảnh
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mb-3">
                    <div
                        className="group relative w-full h-[400px] overflow-hidden border border-border rounded-[8px] flex items-center justify-center">
                        <div
                            style={{backgroundImage: `url(${defaultImage})`}}
                            className="h-full bg-cover bg-center w-full rounded-[8px] relative "/>
                        <div className="absolute right-[10px] top-[10px] z-10">
                            <button
                                    className="mb-2 w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                                <Icon.UilImageTimes className="text-[#1CAC93] w-[18px] h-[18px]"/>
                            </button>
                            <button
                                className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                                <Icon.UilExpandRight className="text-[#1CAC93] w-[18px] h-[18px]"/>
                            </button>
                        </div>
                    </div>
                </div>

                <button
                        className="absolute z-[60] right-[-10px] top-[-10px] w-[26px] h-[26px] flex items-center justify-center bg-primary-hover text-white rounded-full" onClick={handleClose}>
                    <Icon.UilTimes className="w-[18px] h-[18px]"/>
                </button>
            </div>
        </div>

    );
}

export default ModalChooseImage;