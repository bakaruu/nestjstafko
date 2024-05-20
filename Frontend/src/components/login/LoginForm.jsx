import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../components/staff/UserContext";

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { setUser: setUserContext } = useContext(UserContext);
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/auth/login", {
                email: username,
                password,
            });
            setUserContext(response.data.user);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.user.id); // Guarda el ID del usuario en localStorage
            localStorage.setItem("userRole", response.data.user.role); // Guarda el rol del usuario en localStorage

            // Navegar según el rol del usuario
            if (response.data.user.role === "Admin") {
                navigate("/home");
            } else if (response.data.user.role === "User") {
                navigate("/userhome");
            } else {
                console.error("Role not recognized", response.data.user.role);
                setErrorMessage("An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Login failed", error);
            setErrorMessage("Email or password is incorrect");
        }
    };

    return (
        <div className="md:max-w-md w-full sm:px-6 py-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-12">
                    <h3 className="text-3xl font-extrabold">Stafko.</h3>
                    <p className="text-sm mt-4 ">
                        {" "}
                        Dont have an account{" "}
                        <Link
                            to="/register"
                            className="text-orange-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                        >
                            Register here
                        </Link>
                    </p>
                </div>
                <div>
                    <label className="text-xs block mb-2">Email</label>
                    <div className="relative flex items-center">
                        <input
                            name="email"
                            type="text"
                            required
                            className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none shadow-md"
                            placeholder="Enter email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-[18px] h-[18px] absolute right-2"
                            viewBox="0 0 682.667 682.667"
                        ></svg>
                    </div>
                </div>
                <div className="mt-8">
                    <label className="text-xs block mb-2">Password</label>
                    <div className="relative flex items-center">
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none shadow-md"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                            viewBox="0 0 128 128"
                        ></svg>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 mt-5">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm">
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="text-orange-600 font-semibold text-sm hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <div className="mt-12">
                    <button
                        type="submit"
                        className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-orange-700 hover:bg-orange-500 focus:outline-none"
                    >
                        Sign in
                    </button>
                    {errorMessage && (
                        <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
                    )}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
