import './App.css';
import ComboChart from "./Combo-Chart/ComboChart";
import VerticalBar from "./BarChart/VerticalBar";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

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

const messaging = getMessaging();
getToken({vapidKey: process.env.REACT_APP_VAPID_KEY});
getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log(currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

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
