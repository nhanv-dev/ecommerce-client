import {useState, useEffect, useContext} from 'react';
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function Profile() {
    const [profile, setProfile] = useState({});
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.accessToken) console.log(user)
    }, [user])
    return (
        <UserLayout>
            <Helmet title="Thông tin cá nhân">
                thông tin
            </Helmet>
        </UserLayout>
    );
}


export default Profile;