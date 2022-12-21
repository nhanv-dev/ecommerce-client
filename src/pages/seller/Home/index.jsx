import React from 'react';
import {SellerLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";

function Home(props) {
    return (
        <SellerLayout>
            <Helmet title="Kênh bán hàng - Shopio">
                <div className="container">
                    Home
                </div>
            </Helmet>
        </SellerLayout>
    );
}

export default Home;