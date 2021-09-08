import './App.css';
import Chat from './components2/Chat';
import SignIn from './components2/SignIn';
import { auth } from "./firbase.js"
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? <Chat /> : <SignIn />}

    </>
  );
}

export default App;
