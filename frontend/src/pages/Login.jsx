import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../controller/Auth.js";
import { UserLogin } from "../store/Slices/AuthSlice.js";
import './commonn.css'



function Login() {
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(false)
    const [formdata, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (formdata.email != '' && formdata.password != '') {
                setisLoading(true)
                console.log(formdata);
                const fetchData = await login(formdata);
                console.log(fetchData);
                if (fetchData.success === true) {
                    const { message, user } = fetchData;
                    console.log(fetchData);
                    
                    dispatch(UserLogin(user))
                    setisLoading(false)
                    navigate('/', {
                        replace: true,
                        state: true
                    })
                    toast.success('🦄 Login SuccessFull!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });

                }
                else {
                    toast.error("Invalid Credentials",{ autoClose: 3000,})
                }
                setisLoading(false)

            } else {
                toast.warning("Forget to 😅😅 Enter Email or Password ",{ autoClose: 3000})
            }

        } catch (error) {
            toast.warn("Invalid Credentials",{ autoClose: 3000,})
            console.log(error);
        }


    }


    const handleinputchange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });

    }

    return (
        <div className="w-full  p-2 h-[99%] mt-1 flex flex-col  items-center justify-center ite backdrop:blur-4xl   bg-black/70  rounded">
            <div class="container"></div>
            <div className="  p-3 lg:w-[30vw] w-[95%] rounded-lg shadow-lg lg:h-[75%]  flex flex-col items-center justify-around">
              
           
<form class="form" onSubmit={handleSubmit}>
    <p id="heading">Login</p>
    <div class="field">
    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
      <input autocomplete="off" placeholder="Username" class="" type="text"  onChange={handleinputchange}
      className="input-field w-full p-2 border-2 rounded-2xl bg-white"  value={formdata.email} name="email"/>
    </div>
    <div class="field">
    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
      <input placeholder="Password" type="password"  onChange={handleinputchange}
       value={formdata.password} className="input-field w-full p-2 border-2 rounded" name="password" />
    </div>
    <div class="btn">
    <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
    <button class="button2">Sign Up</button>
    </div>
   
</form>
      
            </div>
    
        </div>
    );
}

export default Login;