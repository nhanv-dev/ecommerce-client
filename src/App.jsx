import "./App.scss"
import Router from "./router/Router";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {SocketContext, socket} from "./service/socket";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

function App() {
    return (
        <SocketContext.Provider value={socket}>

            <Router></Router>
        </SocketContext.Provider>
    );
}

export default App;
