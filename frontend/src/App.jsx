import { useEffect, useState } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from './store/Slices/AuthSlice';
import { login, verify } from './controller/Auth';
import Login from './pages/Login';


function App() {

   const [headerDataVisible,setHeaderDataVisible]=useState(true);
   const userdetails=useSelector((state)=>state.UserDetails);
   const dispatch=useDispatch()
   const navigate=useNavigate()

useEffect(()=>{
  const datafetch=async()=>{
    const data= await verify()
    console.log(data);
    if(!data.success) return setHeaderDataVisible(false)
    if(data.success){
      dispatch(UserLogin(data));
    }
  }
  datafetch()
},[])




  return (
 <>
<div className=''>
  <Header/>

  <div className='w-full flex  flex-row h-full fixed'>

<div className="left mb-1 mt-1 font-bold  ">
 {/* Burger Menu Button */}
 {!headerDataVisible&&
          <div className="absolute flex left-2 z-50">
            <button
              className="burger-menu w-8 h-8 bg-gray-400 rounded"
              onClick={() => setHeaderDataVisible((prev) => !prev)}
            >
              {/* You can put an icon here */}
            </button>
          </div>
        }

        {/* Sidebar */}
 {<div >
   {headerDataVisible&& <Sidebar setHeaderDataVisible={setHeaderDataVisible} headerDataVisible={headerDataVisible}/>}
    </div>   }
</div>
<div className="right flex-1 overflow-auto ">
<Outlet  />
</div>
  </div>
 
</div>

 </>
  )
}

export default App
