import './App.css';

// ------------------------- This bike and car are used for understanding functional and class components-------
// import {Bike} from './bike';
// import {Car} from './car';

// -------------------------- This two files are used for learning several topics such as event handlers and binding
// import FNevent from './FNevent';
// import ClsEvent from './ClsEvent';

// -------------------------- Child and conditional files are used for learning conditional rendering listing etc
// import Conditional from './conditional';


// ----------------------------- ADDING STYLE AND CSS ---------------------------------
import Styles from './Styles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FNevent />
        <ClsEvent /> */}
        {/* <h1>Hello World</h1> */}
        {/* <Car name="Audi" dataValue="Our first car"/> */}
        {/* <Bike name="Yamaha" /> */}

        {/* <Conditional/> */}
        <Styles />

      </header>

    </div>
  );
}

export default App;
