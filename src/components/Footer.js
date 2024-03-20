import React from 'react';

const Footer = () => {
    const today = new Date();

    return (
        <footer className="text-center text-white bg-blue-900">
            <div className="container p-6 mx-auto">
                <div className="flex items-center justify-center">
                    <span className="mr-2 text-lg font-sans px-2">Register for free:</span>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full border-2 border-neutral-50 px-4 py-1 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:text-yellow-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                            Sign up!
                        </button>
                </div>
            </div>

            {/* Copyright section */}
            <div className="p-0 text-center bg-black bg-opacity-20">
                <p className="text-xs font-sans">Copyright &copy; {today.getFullYear()}</p>
                <a className="text-white text-xs font-sans" href='#'>
                    CGI Innovation Technology Campus
                </a>
            </div>

        </footer>
    );
}

export default Footer;
