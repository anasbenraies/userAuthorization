import {BrowserRouter,Routes,Route} from "react-router-dom"
import Feed from "./Scenes/Feed";
import SignUp from './Scenes/SignUp';
import Profile from './Scenes/Profile';

function App() {

  const GlobalState={
    user:{}
  }
  
  const updateUser=(u)=>{
      GlobalState.user.name=u.name
      GlobalState.user.email=u.email
      GlobalState.user.DateOfBirth=u.DateOfBirth
  }


  return (
    <BrowserRouter>
      <Routes>
          <Route path="signup" element={<SignUp setProfile={updateUser} />} />       
          <Route path="feed" element={<Feed />} /> 
          <Route path="profile" element={<Profile user={GlobalState.user} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
