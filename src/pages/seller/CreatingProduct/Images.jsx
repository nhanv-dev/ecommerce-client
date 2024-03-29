import {useRef, useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "../../../service/firebase";
import * as Icon from "@iconscout/react-unicons";

function Images({images, setImages}) {
    const imageRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [active, setActive] = useState(0);

    const scroll = (scrollOffset) => {
        imageRef.current.scrollLeft += scrollOffset;
    }

    const uploadImage = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on("state_changed", (snapshot) => {
            const pg = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        }, (err) => {
            console.log(err)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                console.log(url);
                setImages(prev => [...prev, {url: url}])
            })
        })
    }

    const deleteImage = () => {
        const payload = [...images].filter((image, index) => index !== active);
        setImages(payload);
        setActive((prev) => prev - 1 < 0 ? 0 : prev - 1)
    }

    const handleUploadImage = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0]
        uploadImage(file);
    }

    const handleUploadImageByURL = (e) => {
        e.preventDefault();
        if (e.target.image?.value) {
            fetch(e.target.image.value).then(res => {
                if (res.status === 200) {
                    setImages(prev => [...prev, {url: res.url}]);
                    e.target.image.value = "";
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const handleReadImage = (e) => {
        const objectUrl = URL.createObjectURL(e.target.files[0]);
        setImages(prev => [...prev, {url: objectUrl, isPreview: true}]);
        setFiles(prev => [...prev, {url: {...e.target.files[0]}, isPreview: true}]);
    }

    return (
        <div className="w-full h-full">
            <div className="mb-5">
                <h5 className="font-bold text-base mb-3">
                    Hình ảnh sản phẩm ({images?.length || 0}+)
                </h5>
                <div className="flex items-center justify-center gap-2">
                    <form onSubmit={handleUploadImageByURL}
                          className="flex-1 flex items-center justify-start gap-2 border-2 border-[#1CAC93] rounded-[5px] px-2 py-1.5 text-[#1CAC93] text-sm font-medium cursor-pointer">
                        <input type="text" id="image" name="image" placeholder="Dán đường dẫn tại đây"
                               className="outline-none text-sm flex-1"/>
                        <button type="submit">
                            <Icon.UilMessage className="w-[18px] h-[18px]"/>
                        </button>
                        {/*https://cf.shopee.vn/file/sg-11134201-22100-7z9bycq4w3iv8c*/}
                    </form>
                    <form onSubmit={handleUploadImage}>
                        <div className="flex items-center justify-start gap-2">
                            <input type="file" id="upload-image" name="upload-image" accept="image/png, image/jpeg"
                                   onChange={handleReadImage} className="hidden"/>
                            <label htmlFor="upload-image"
                                   className="flex items-center justify-center gap-1 border-2 border-[#1CAC93] rounded-[5px] min-w-[70px] p-1.5 text-[#1CAC93] text-sm font-medium cursor-pointer">
                                {/*<Icon.UilLink className="w-[18px] h-[18px]"/>*/}
                                Tải ảnh
                            </label>
                            <button type="submit"
                                    className="flex items-center justify-center gap-1 border-2 border-[#1CAC93] rounded-[5px] min-w-[70px] p-1.5 text-[#1CAC93] text-sm font-medium cursor-pointer">
                                {/*<Icon.UilLink className="w-[18px] h-[18px]"/>*/}
                                Lưu ảnh
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mb-5">
                <div
                    className="group relative w-full h-[400px] overflow-hidden border border-border rounded-[8px] flex items-center justify-center">
                    <div
                        style={{backgroundImage: `url(${(images && images[active]) ? images[active].url : defaultImage})`}}
                        className="h-full bg-cover bg-center w-full rounded-[8px] relative "/>
                    <div className="absolute right-[10px] top-[10px] z-10">
                        <button onClick={deleteImage}
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
            {images.length > 0 ? (
                <div className="relative flex justify-center">
                    {images.length > 4 &&
                        <button onClick={() => scroll(-100)}
                                className="absolute left-[-16px] top-[50%] translate-y-[-50%] z-10 w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                            <Icon.UilAngleLeftB className="text-[#1CAC93] w-[18px] h-[18px]"/>
                        </button>
                    }
                    <div ref={imageRef}
                         className="scroll-smooth w-full flex gap-[10px] items-center justify-start w-full overflow-hidden">
                        {images?.map((image, index) => (
                            <div key={index} className="relative">
                                <button
                                    onClick={() => setActive(index)}
                                    style={{backgroundImage: `url(${image.url || defaultImage})`}}
                                    className={`bg-cover bg-center overflow-hidden transition-all outline-none min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] bg-cover bg-center rounded-[5px] border-2  
                                 ${index === active ? 'border-2 border-primary' : 'border-border'}`}>
                                </button>
                            </div>
                        ))}
                    </div>
                    {images.length > 4 &&
                        <button onClick={() => scroll(100)}
                                className="absolute right-[-16px] top-[50%] translate-y-[-50%] z-10 w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#D8EAFF]">
                            <Icon.UilAngleRightB className="text-[#1CAC93] w-[18px] h-[18px]"/>
                        </button>
                    }
                </div>
            ) : (
                <div className="relative flex justify-center">
                    <div ref={imageRef}
                         className="scroll-smooth w-full flex gap-[10px] items-center justify-start w-full overflow-hidden">
                        <div className="relative">
                            <button
                                style={{backgroundImage: `url(${defaultImage})`}}
                                className={`bg-cover bg-center overflow-hidden transition-all outline-none min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] bg-cover bg-center rounded-[5px] border-2 border-2 border-primary`}>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const defaultImage = 'https://media.istockphoto.com/id/924949200/vector/404-error-page-or-file-not-found-icon.jpg?s=170667a&w=0&k=20&c=gsR5TEhp1tfg-qj1DAYdghj9NfM0ldfNEMJUfAzHGtU='
export default Images;