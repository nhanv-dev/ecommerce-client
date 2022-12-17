import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Logo from "../../../assets/img/logo-white.svg";
import * as Icon from "@iconscout/react-unicons";
import Helmet from "../../../components/web/Helmet";
import FillAccount from "./FillAccount";
import Verification from "./ Verification";
import FillNewPass from "./FillNewPass";

function PasswordRetrieval() {
    const [num, setNum] = useState()
    const {slug} = useParams()
    useEffect(()=> {
        setNum(slug)
    },[slug])

    return (
        <Helmet title="Quên mật khẩu - Shopio.">
            <FillAccount  num={num}/>
            <Verification  num={num}/>
            <FillNewPass  num={num}/>
        </Helmet>
    );
}

export default PasswordRetrieval;