import {useState, useEffect, useContext} from 'react';
import Helmet from "../../../components/web/Helmet";
import {BuyerLayout} from "../../../components/common/Layouts";


function Profile() {
    const [profile, setProfile] = useState({});

    return (
        <BuyerLayout>
            <Helmet title="Thông tin cá nhân">
                thông tin
            </Helmet>
        </BuyerLayout>
    );
}


export default Profile;