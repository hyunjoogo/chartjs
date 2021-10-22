import './App.css';
import ComboChart from "./Combo-Chart/ComboChart";
import VerticalBar from "./BarChart/VerticalBar";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEB_UCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId :process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)


function App() {

  return (
    <div className="container">
      <div className={"row"}>
        <div className="col-6">
          <ComboChart/>
        </div>
        <div className="col-6">
          <VerticalBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
