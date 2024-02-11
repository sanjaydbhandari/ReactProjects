import {useState} from 'react'
import '../../index.css'
import eye from '../images/eye.svg'
import eyeOff from '../images/eye-off.svg'


const Login = () => {

    const [showPassword,setShowPassword] = useState(false)

    // let status = () => {
    //     return(
    //         setShowPassword((showPassword)=>!showPassword)
    //     );
    // }

    return(
       <div className="h-screen w-full flex justify-center items-center bg-white min-w-80" >
            <div className="custom-shadow flex flex-col justify-center gap-5 items-center p-8  rounded-lg bg-white">
                <h1 className='text-black font-bold text-xl text-shadow-md pb-3' >Login For Access</h1>
                <input type="text" id="username" className='w-full outline-none textbox-shadow rounded-lg p-2' placeholder='   username'/>
                <div className="password-box flex items-center w-full textbox-shadow rounded-lg">
                <input type={(showPassword)?"text":"password"} id="username" className='w-full outline-none p-2 textbox-shadow rounded-lg' placeholder='   password'/>
                {/* <img src={(showPassword)?eyeOff:eye} className="p-2 opacity-50 cursor-pointer" alt="show" onClick={()=>status()}/> */}
                <img src={(showPassword)?eyeOff:eye} className="p-2 opacity-50 cursor-pointer" alt="show" onClick={()=>setShowPassword((showPassword)=>!showPassword)}/>
                </div>
                <div className="remember flex flex-row w-full text-sm">
                <input type="checkbox" id="remember-me" className='mr-1'/> Remember me
                </div>
                <button type="button" className='outline-none custom-shadow rounded-lg px-5 py-2 mt-3 font-bold'>Login</button>
                <div className="flex flex-col items-center register text-sm">
                <a href="" className='text-sm text-blue-600'>forgot password?</a>  
                    <p>
                    Don't have an account?
                    <a href="" className=' text-blue-600'> Register here</a>
                    </p>
                    
                </div>
                             
            </div>
       </div>
    );
}

export default Login;