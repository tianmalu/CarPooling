
const Footer = ({darkMode}) => {
    const today = new Date();

    return (
        <footer className={`text-center text-white ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
            {/* <div className="container p-6 mx-auto">
                <div className="flex items-center justify-center">
                    <span className={`mr-2 text-lg font-sans px-2 ${darkMode ? '': 'text-gray-700'}`}>Register for free:</span>
                        <button
                            type="button"
                            className={`inline-flex items-center justify-center rounded-full border-2 ${darkMode ? 'border-gray-600' : 'border-gray-500'} px-4 py-1 text-xs font-medium uppercase leading-normal ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition duration-150 ease-in-out hover:border-gray-400 hover:text-yellow-500 ${darkMode ? 'hover:text-gray-100' : 'hover:text-blue-500'}  focus:border-gray-400 focus:text-gray-100 focus:outline-none focus:ring-0 active:border-gray-500 active:text-gray-100 dark:hover:bg-gray-400 dark:hover:bg-opacity-10`}
                            >
                            Sign up!
                        </button>
                </div>
            </div> */}

            {/* Copyright section */}
            <div className={`p-0 text-center ${darkMode ? 'bg-black bg-opacity-20' : 'bg-white bg-opacity-50'}`}>
                <p className={`text-xs font-sans ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Copyright &copy; {today.getFullYear()}</p>
                <a className={`text-xs font-sans ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} href='#'>
                    CGI Innovation Technology Campus
                </a>
            </div>

        </footer>
    );
}

export default Footer;
