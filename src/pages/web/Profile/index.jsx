import {useState, useEffect, useContext} from 'react';
import Helmet from "../../../components/web/Helmet";
import {UserLayout} from "../../../components/common/Layouts";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import UserSidebar from "../../../components/web/UserSidebar";
import Info from "./Info";


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
                <div className="container py-8">
                    <div className="flex items-start gap-5">
                        <UserSidebar/>
                        <div className="flex-1">
                            <Info/>
                        </div>
                    </div>
                </div>
            </Helmet>
        </UserLayout>
    );
}


export default Profile;