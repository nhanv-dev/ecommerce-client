import React from 'react';
import {useSelector} from "react-redux";

function UserSidebar() {
    const user = useSelector(state => state.user)
    const shop = useSelector(state => state.shop)
    return (
        <div>
            <div>
                <div></div>
                <p>
                    {user.info?.fullName}
                </p>
            </div>
        </div>
    );
}

export default UserSidebar;