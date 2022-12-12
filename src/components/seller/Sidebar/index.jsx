import {Link, NavLink} from "react-router-dom";
import * as Icon from '@iconscout/react-unicons';

function Sidebar() {
    return (
        <div className="z-50 fixed left-0 bottom-0 top-[75px] bg-white w-[66px] border-r-[1px] border-[#EBEDF5]">
            <div className="w-full h-full flex flex-col items-center py-5 justify-between">
                <div className="flex flex-col items-center gap-6">
                    <NavigationLink to="/kenh-ban-hang" title="Kênh bán hàng" icon={<Icon.UilEstate className={"w-[20px]"}/>}/>
                    <NavigationLink to="/kenh-ban-hang/danh-muc" title="Danh mục" icon={<Icon.UilApps className={"w-[20px]"}/>}/>
                    <NavigationLink to="/kenh-ban-hang/don-dat-hang" title="Đơn đặt hàng" icon={<Icon.UilFileInfoAlt className={"w-[20px]"}/>}/>
                    <NavigationLink to="/kenh-ban-hang/thong-ke" title="Thống kê" icon={<Icon.UilChartGrowth className={"w-[20px]"}/>}/>
                    <NavigationLink to="/kenh-ban-hang/don-dat-hang" title="Báo cáo" icon={<Icon.UilFileGraph className={"w-[20px]"}/>}/>
                    <NavigationLink to="/kenh-ban-hang/phan-hoi" title="Đánh giá & Phản hồi" icon={<Icon.UilFeedback className={"w-[20px]"}/>}/>
                </div>
                <div className="flex flex-col items-center gap-6 justify-end mb-3">
                    <NavigationLink to="" title="Hỗ trợ" icon={<Icon.UilInfoCircle className={"w-[20px]"}/>}/>
                    <NavigationLink to="/cua-hang/123" title="Cửa hàng" icon={<Icon.UilAirplay className={"w-[20px]"}/>}/>
                    <NavigationLink to="/trang-chu" title="Trang chủ" icon={<Icon.UilEstate className={"w-[20px]"}/>}/>
                </div>
            </div>
        </div>
    );
}

const NavigationLink = ({to, title, icon}) => {
    return (
        <NavLink to={to} className={(value) => {
            return `group relative`
        }}>
            {icon}
            <p className="min-w-max absolute left-full top-[50%] translate-x-[12px] translate-y-[-50%] bg-white z-50 text-sm px-3 py-1.5 rounded-[6px] font-semibold capitalize opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow">
                {title}
            </p>
        </NavLink>
    )
}

export default Sidebar;