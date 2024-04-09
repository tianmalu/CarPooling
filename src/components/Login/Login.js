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
        if (userRef.current) {
            userRef.current.focus();
        }
    },[])
    

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async(e) => {
        e.preventDefault();
    }

    return (
        <section className="flex justify-center items-center min-h-screen bg-dodgerblue">
            <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="w-full max-w-sm bg-opacity-40 bg-gray-500 rounded-md p-8">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Login</h1>
                <form onSubmit={handleSubmit}>
                    <label
                        className="text-white" 
                        htmlFor="username"
                    >Username</label>
                    <input 
                        className="w-full border rounded-md p-2 mb-4"
                        required
                        type="text"
                        id="username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />

                    <label 
                        htmlFor="pwd"
                        className="text-white" 
                    >Password</label>
                    <input 
                        className="w-full border rounded-md p-2 mb-4"
                        required
                        type="password"
                        id="pwd"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                    />

                    <button className="w-full bg-white hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</button>

                    <p style={{ fontSize: '18px' }} className="mt-4 text-white">
                        Do not have an account? <br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/register" className="text-yellow-400 hover:text-yellow-300">Register here!</a>
                        </span>
                    </p>
                </form>
            </div>
        </section>
    );
}


export default Login;
