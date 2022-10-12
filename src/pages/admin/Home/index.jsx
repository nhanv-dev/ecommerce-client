import React from 'react';
import {AdminLayout} from "../../../components/common/Layouts";
import Helmet from "../../../components/web/Helmet";
import {ProductTable} from "../../../components/admin/Table";

function Home() {
    return (
        <AdminLayout>
            <Helmet title="Trang Quản Trị">
                <div className="container">
                    <ProductTable/>
                </div>
            </Helmet>
        </AdminLayout>
    );
}

export default Home;