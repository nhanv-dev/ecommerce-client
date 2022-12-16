import React, {useEffect, useRef} from 'react';
import * as Icon from "@iconscout/react-unicons";
import ProductCombinations from "./ProductCombinations";

function ProductVariants(props) {
    const {options, combinations, setOptions, setCombinations} = props;

    const handleAddOptions = () => {
        setOptions(prev => [...prev, {option: {name: ""}, values: [{name: ""}]}])
    }

    return (
        <div className="w-full max-w-full flex gap-6">
            <div className="w-4/12">
                <div className="rounded-[6px] bg-white p-5 shadow-md">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="text-base font-bold">
                            Các tùy chọn
                        </h5>
                        <button onClick={handleAddOptions}
                                className="text-md font-medium flex items-center gap-1 py-1 pl-1.5 pr-3 bg-[#D8EAFF] text-[#1CAC93] rounded-full">
                            <Icon.UilPlusCircle className="w-[20px] h-[20px]"/>
                            Tạo mới
                        </button>
                    </div>
                    <div className="">
                        {options.length === 0 ?
                            <button className="mb-5 font-medium text-black-1 text-center py-5">
                                Hiện chưa có tùy chọn nào
                            </button> :
                            <OptionsComponent options={options} setOptions={setOptions}/>
                        }
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="w-full max-w-full rounded-[6px] bg-white p-5 shadow-md">
                    <ProductCombinations options={options}
                                         setOptions={setOptions}
                                         combinations={combinations}
                                         setCombinations={setCombinations}/>
                </div>
            </div>
        </div>
    );
}

const OptionsComponent = ({options, setOptions}) => {

    const addOptionValue = (positionOption) => {
        const data = [...options];
        data[positionOption].values.push({name: ""});
        setOptions(data);
    }

    const removeOptionValue = (positionOption, positionValue) => {
        const data = [...options]
        data[positionOption].values = data[positionOption].values.filter((value, index) => index !== positionValue);
        setOptions(data);
    }

    const changeOptionValue = (positionOption, positionValue, value) => {
        const data = [...options];
        data[positionOption].values[positionValue].name = value;
        setOptions(data);
    }

    const changeOptionName = (positionOption, value) => {
        const data = [...options];
        data[positionOption].option.name = value;
        setOptions(data);
    }

    return (
        <div>
            {options.map((item, index) => {
                return (
                    <div key={index} className="rounded-[5px] bg-[#FAFAFA] p-3 mb-5"
                         style={{boxShadow: "0 1px 1px 0 rgb(0 0 0 / 5%)"}}>
                        <div className="flex items-start gap-10">
                            <div className="min-w-[100px] max-w-[100px]">
                                <OptionInput value={item.option?.name || ""}
                                             positionOption={index}
                                             changeOptionName={changeOptionName}
                                />
                            </div>
                            <div className="min-w-[250px] max-w-[250px] flex flex-wrap items-center gap-3">
                                {item.values?.map((value, i) => (
                                    <ValueInput key={i}
                                                value={value.name || ""}
                                                positionOption={index} positionValue={i}
                                                changeOptionValue={changeOptionValue}
                                                removeOptionValue={removeOptionValue}
                                    />
                                ))}
                                <div className="max-w-max flex items-center h-[32px] font-medium text-md">
                                    <button onClick={() => addOptionValue(index)}
                                            className="bg-[#D8EAFF] text-[#1CAC93] rounded-full">
                                        <Icon.UilPlusCircle className="w-[24px] h-[24px]"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const OptionInput = ({value, positionOption, changeOptionName}) => {
    const ref = useRef(null);

    const handleChangeValue = (e) => {
        changeOptionName(positionOption, e.target.value)
        if (!e.target.value) {
            ref.current.style.width = `38px`;
            ref.current.style.height = `20px`;
        }
    }
    useEffect(() => {
        ref.current.style.width = `${((value.length + 1) * 8) + 30}px`;
        ref.current.style.height = `20px`;
    }, [])

    useEffect(() => {
        ref.current.style.width = `${((value.length + 1) * 8) + 30}px`;
        ref.current.style.height = `${ref.current.scrollHeight}px`;
    }, [ref, value])

    return (
        <div className="bg-white rounded-[5px] px-2 py-0.5 border-2 border-[#1CAC93] max-w-full overflow-hidden">
                <textarea value={value} onChange={handleChangeValue} style={{resize: "none"}}
                          className="relative top-[1px] text-center text-sm font-semibold leading-[20px] outline-none break-all min-w-full max-w-full min-h-[24px] flex items-center justify-center"
                          ref={ref}/>
        </div>
    )
}

const ValueInput = ({value, positionOption, positionValue, changeOptionValue, removeOptionValue}) => {
    const ref = useRef(null);

    const handleChangeValue = (e) => {
        changeOptionValue(positionOption, positionValue, e.target.value)
        if (!e.target.value) {
            ref.current.style.width = `38px`;
            ref.current.style.height = `20px`;
        }
    }

    const handleRemoveOptionValue = () => {
        removeOptionValue(positionOption, positionValue)
    }

    useEffect(() => {
        ref.current.style.width = `${((value.length + 1) * 8) + 30}px`;
        ref.current.style.height = `20px`;
    }, [])

    useEffect(() => {
        ref.current.style.width = `${((value.length + 1) * 8) + 30}px`;
        ref.current.style.height = `${ref.current.scrollHeight}px`;
    }, [ref, value])

    return (
        <div
            className="group relative bg-white rounded-[5px] px-2 py-0.5 border-2 border-[#1CAC93] max-w-[250px]">
                <textarea value={value} onChange={handleChangeValue} style={{resize: "none"}}
                          className="relative top-[1px] text-center text-sm font-medium leading-[20px] outline-none break-all max-w-full min-h-[24px] flex items-center justify-center"
                          ref={ref}/>
            <button onClick={handleRemoveOptionValue}
                    className="group-hover:opacity-100 group-hover:visible transition-all opacity-0 invisible absolute right-[-11px] top-[-11px] z-50 rounded-full w-[22px] h-[22px] text-primary-hover bg-white flex items-center justify-center">
                <Icon.UilMinusCircle className="w-[22px] h-[22px]"/>
            </button>
        </div>
    )
}

export default ProductVariants;