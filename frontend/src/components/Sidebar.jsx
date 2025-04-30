import React, { useEffect, useState } from 'react'
import './CssFiles/Sidebar.css'
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { logout } from '../controller/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogout } from '../store/Slices/AuthSlice';
import { ClearAllExpense } from '../store/Slices/ExpensesAll';
import { toast } from 'react-toastify';

function Sidebar({setHeaderDataVisible,headerDataVisible}) {
    const [Routes,setRoutes]=useState(['DashBoard','Expense']);

    const location=useLocation()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.UserDetails)
    
console.log(state);

 useEffect(()=>{
  if(!state.isLoggedIn){
    navigate('/login')
        }
 },[])

    const Logout=async()=>{
    const data= await logout()
    console.log(data);
    if(data.success){
     dispatch(UserLogout()),
     dispatch(ClearAllExpense())
     navigate('/login',{
      state:false
     });
    }
   
  }
  return (
   <div className={`w-[140px]  md:w-[270px] lg:w-[17vw] transition-all duration-500 transform
    h-[91vh] bg-black/10 p-1 sm:text-[20px]
   `}>

     <div className='w-full h-15 flex justify-end p-2'>
     <div className="hamburger w-10 h-10 cursor-pointer  "  onClick={()=>setHeaderDataVisible((prev)=>!prev)}></div>
     </div>
      <div className='wrapper h-[70%] w-full p-2 '>
      
{state.isLoggedIn&&<div className='w-full h-[70%] flex flex-col   justify-around items-center mt-5'>
<div className='w-full flex justify-center h-fit'>
<div className="userimg lg:w-30 lg:h-30 w-20 h-20  rounded-[50%] bg-black/50"></div>
</div>

<div className='flex  mt-6 flex-1 lg:h-full  sm:h-50 '>
{state.isLoggedIn&&<div className="routes lg:text-2xl text-[17px]  h-full flex flex-col justify-around p-2 ">
    {Routes.map((c,i)=>(
     <NavLink 
     to={`${i == 0 ? '/' : '/expanses'}`} 
     className={({ isActive }) => 
       `w-full border-2 rounded-2xl p-1 cursor-pointer hover:text-white hover:bg-black transition-all ease-in-out duration-300 border-black/50 text-black flex flex-row 
       ${isActive ? 'bg-black text-white' : ''}`
     }
     key={i}
   >
     <div id={`icon${i}`} className='lg:w-6 h-4 w-4 lg:h-6 mr-1'></div>
     <span>{c}</span>
   </NavLink>
    ))}
     <NavLink 
     
     onClick={Logout}
     className={({  }) => 
       `w-full border-2 rounded-2xl p-1 cursor-pointer hover:text-white hover:bg-black transition-all ease-in-out duration-300 border-black/50 text-black flex flex-row`
     }
    
   >
     <div id={`icon${2}`} className='lg:w-6 h-4 w-4 lg:h-6 mr-1'></div>
     <span >Logout</span>
   </NavLink>
    
  </div>}
</div>

</div>}

{!state.isLoggedIn&&<div className='w-full h-[40%] flex flex-col  justify-around items-center mt-5'>
  <NavLink to='/login' className='border-1 p-2 w-40 text-center hover:bg-black hover:text-white rounded'>Login</NavLink>
  <NavLink to='/signup'  className='border-1 p-2 w-40 text-center hover:bg-black hover:text-white rounded'>Signup</NavLink>
</div>}
      </div>
    </div>
  )
}

export default Sidebar
