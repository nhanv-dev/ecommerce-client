import {useState, useEffect, useContext} from 'react';
import Helmet from "../../../components/web/Helmet";
import {BuyerLayout} from "../../../components/common/Layouts";


function ChangingPassword() {

    return (
        <BuyerLayout>
            <Helmet title="Đổi mật khẩu">
                đổi mật khẩu
            </Helmet>
        </BuyerLayout>
    );
}


export default ChangingPassword;