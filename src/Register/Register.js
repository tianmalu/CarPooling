import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section className="flex justify-center items-center bg-dodgerblue">
                    <h1 className="text-3xl font-bold text-center text-green-600 mb-4">Success!</h1>
                    <p className="text-center">
                        <a href="/login" className="text-blue-700 hover:underline">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className="flex min-h-screen flex-col max-w-md mx-auto px-8 mt-28  rounded-lg">
                    <p ref={errRef} className={`p-2 mb-4 ${errMsg ? "bg-red-200 text-red-800" : "offscreen"}`} role="alert">{errMsg}</p>
                    <div className="w-full max-w-md bg-opacity-40 bg-gray-400 rounded-md p-8">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Register</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                        <label className="text-white" htmlFor="username" >
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "text-green-500" : "hidden"} />
                            <FontAwesomeIcon icon={faTimes} className={!validName && user ? "text-red-500" : "hidden"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            aria-invalid={!validName}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={`text-xs ${userFocus && user && !validName ? "block" : "hidden"} bg-yellow-100 border border-yellow-500 p-2 rounded`}>
                            <FontAwesomeIcon icon={faInfoCircle} className="text-yellow-500 mr-2" />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

    
                        <label className="text-white" htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "text-green-500" : "hidden"} />
                            <FontAwesomeIcon icon={faTimes} className={!validPwd && pwd ? "text-red-500" : "hidden"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            aria-invalid={!validPwd}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={`text-xs ${pwdFocus && !validPwd ? "block" : "hidden"} bg-yellow-100 border border-yellow-500 p-2 rounded`}>
                            <FontAwesomeIcon icon={faInfoCircle} className="text-yellow-500 mr-2" />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number, and a special character.<br />
                            Allowed special characters: ! @ # $ %
                        </p>

                        <label className="text-white" htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "text-green-500" : "hidden"} />
                            <FontAwesomeIcon icon={faTimes} className={!validMatch && matchPwd ? "text-red-500" : "hidden"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            aria-invalid={!validMatch}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={`text-xs ${matchFocus && !validMatch ? "block" : "hidden"} bg-yellow-100 border border-yellow-500 p-2 rounded`}>
                            <FontAwesomeIcon icon={faInfoCircle} className="text-yellow-500 mr-2" />
                            Must match the first password input field.
                        </p>


    
                        <button className="w-full bg-white hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" disabled={!validName || !validPwd || !validMatch}>Sign Up</button>
                    </form>
                    <p className="text-white text-xs mt-2">
                        Already registered?<br />
                        <span className="line">
                            <a href="/login" className="text-yellow-400 hover:text-yellow-300">Sign In</a>
                        </span>
                    </p>
                    </div>
                </section>
            )}
        </>
    );
    
}

export default Register