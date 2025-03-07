import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-[35rem] min-h-[20rem] text-[#F9FAFC] rounded-3xl p-8">
      <h1 className="text-4xl font-[500]">Login</h1>
      <p className="text-[.8rem] mt-8 text-slate-300">
        Not have an account? <Link className="text-[#7678ED]">Register</Link>
      </p>

      <div className="mt-8">
        <input
          name="password"
          type="text"
          className="w-full h-[3.5rem] outline-none bg-[#41415e] placeholder:text-[#f9fafc] px-4 rounded-xl"
          placeholder="username"
        />
      </div>
      <div className="mt-5">
        <input
          name="password"
          type="text"
          className="w-full h-[3.5rem] outline-none bg-[#41415e] placeholder:text-[#f9fafc] px-4 rounded-xl"
          placeholder="password"
        />
      </div>
      <div className="mt-5">
        <button className="w-full h-[3rem] bg-[#7678ED] rounded-xl hover:bg-[#6264c5] transition-all">
          create account
        </button>
      </div>
      <div className="relative mt-8 flex items-center justify-center">
          <span className="w-full border-[1px] border-[#41415e]"></span>
          <span className="absolute text-[.8rem] inline-block px-2 py-1 bg-[#202022] text-[#41415e]">
            Or register with
          </span>
        </div>
        <div className="mt-5 flex gap-3">
          <button className="flex justify-center items-center gap-1 w-[50%] py-3 rounded-xl border-[1px] border-[#f9fafc]">
            <span className="text-2xl">
              <FcGoogle />
            </span>
            <p>Google</p>
          </button>

          <button className="flex justify-center items-center gap-1 w-[50%] py-3 rounded-xl border-[1px] border-[#f9fafc]">
            <span className="text-2xl text-white">
              <FaApple />
            </span>
            <p>Apple</p>
          </button>
        </div>
    </div>
  );
};
export default Login;
