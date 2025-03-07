import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Register = () => {
  return (
    <div className="w-[35rem] min-h-[20rem] text-[#F9FAFC] rounded-3xl p-8">
      <h1 className="text-4xl font-[500]">Create an account</h1>
      <p className="text-[.8rem] mt-8 text-slate-300">
        Already have an account? <Link className="text-[#7678ED]">Log in</Link>
      </p>

      <div className="mt-12">
        <div className="flex gap-2">
          <input
            name="username"
            type="email"
            className="w-[50%] h-[3.5rem] outline-none bg-[#41415e] placeholder:text-[#f9fafc] px-4 rounded-xl"
            placeholder="username"
          />
          <input
            name="phone_number"
            type="text"
            className="w-[50%] h-[3.5rem] outline-none bg-[#41415e] placeholder:text-[#f9fafc] px-4 rounded-xl"
            placeholder="phone number"
          />
        </div>
        <div className="mt-5">
          <input
            name="email"
            type="text"
            className="w-full h-[3.5rem] outline-none bg-[#41415e] placeholder:text-[#f9fafc] px-4 rounded-xl"
            placeholder="email"
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
          <input
            name="confirm_password"
            type="text"
            className="w-full h-[3.5rem] outline-none bg-[#41415e] placeholder:text-[#f9fafc] px-4 rounded-xl"
            placeholder="confirm password"
          />
        </div>
        <div className="mt-5">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="hidden peer" id="myCheckbox" />
            <div className="relative w-6 h-6 border border-gray-300 rounded bg-transparent mr-2 peer-checked:bg-[#f9fafc] peer-checked:border-[#f9fafc] transition-all duration-300">
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#202022] fill-current opacity-1 peer-checked:opacity-[1] transition-opacity duration-300"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
            <span className="text-[#f9fafc] text-sm">
              i aggree to terms & conditions
            </span>
          </label>
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
    </div>
  );
};
export default Register;
