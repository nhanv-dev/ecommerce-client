import "./App.scss"
import Router from "./router/Router";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {SocketContext, socket} from "./service/socket";

function App() {
    return (
        <SocketContext.Provider value={socket}>
            <Router></Router>
        </SocketContext.Provider>
    );
}

export default App;
