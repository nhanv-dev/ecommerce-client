import Voucher from "./Voucher";

function Home(props) {
    return (
        <>
            <div className="container pb-6">
                <Voucher vouchers={props.vouchers}/>
            </div>
        </>
    );
}

export default Home;