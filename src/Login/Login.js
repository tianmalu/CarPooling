import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const userRef = useRef(); 
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() =>{
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async(e) => {
        e.preventDefault();
    }

  return (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                className='username'
                required
                type="text"
                id="username"
                value={user}
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
            />

            <label htmlFor="pwd">Password</label>
            <input 
                className='password'
                required
                type="password"
                id="pwd"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
            />

            <button className="bg-white hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</button>

            <p style={{ fontSize: '18px' }}>
                Do not have an account? <br />
                <span className="line">
                    {/*put router link here*/}
                    <a href="#" style={{color: 'rgb(250,250,60)'}}>Register here!</a>
                </span>
            </p>
        </form>
    </section>
  )
}

export default Login;
