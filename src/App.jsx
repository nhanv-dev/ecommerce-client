import "./App.scss"
import Router from "./router/Router";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {SocketContext, socket} from "./service/socket";
import Initialization from "./Initialization";

function App() {
    return (
        <SocketContext.Provider value={socket}>
            <Initialization>

                <Router></Router>
            </Initialization>
        </SocketContext.Provider>
    );
}

export default App;
