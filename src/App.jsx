import "./App.scss"
import Router from "./router/Router";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Initialization from "./Initialization";

function App() {
    return (
        <Initialization>
            <Router></Router>
        </Initialization>
    );
}

export default App;
