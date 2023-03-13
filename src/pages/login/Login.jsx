import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>

      {/* <div className="formInput">
                <label htmlFor="file">
                  
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  // style={{ display: "none" }}
                />
              </div> */}
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
