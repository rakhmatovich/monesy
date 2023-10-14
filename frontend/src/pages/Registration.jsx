import React, {useRef} from 'react';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Registration() {
    const phone = useRef(null)

    const navigate = useNavigate()


    const submitForm = async (event) => {
        event.preventDefault()

        let data = JSON.stringify({
            "phone": phone.current.value
        });

        let config = {
            method: 'post',
            url: 'http://localhost:8000/sign-in/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.user)
                navigate('/')
            })
            .catch((error) => {
                if (error.response.data.non_field_errors[0]) toast.error(error.response.data.non_field_errors[0])
                if (error.response.data.phone[0]) toast.error(error.response.data.phone[0])
                console.log(error);
            });
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[60%] max-w-[400px]" src="/logo-white.png" alt="logo"/>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
                            <div>
                                <label htmlFor="phone"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone Number
                                </label>
                                <input
                                    ref={phone}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="your phone number"
                                    required=""/>
                            </div>

                            <button className="btn btn-info w-full">
                                Sing up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registration;