import React, { useReducer } from "react";
const initialization ={
    Username:"",
    emailId:"",
    MobileNo:null,
    password:"",
    Users:[]
}
const Reducer = (state , action) => {
    switch(action.type){
        case 'UPDATE_FEILD':
            return{
                Id:Math.floor(Math.random()*10000000000),
                ...state,
                [action.feild]:action.value,
            }
        case 'SET_USER':
            return {
                ...state,
                Users:[...state.users , action.value]
            }
        default : 
        return "no items"
    }
}

const UserRegister = () => {
    const [state , dispatch] = useReducer(Reducer , initialization);

    const Handlechange = (e) => {
        const {name , value} = e.target
        dispatch({type:"UPDATE_FEILD" , feild:name,value:value})
    }
    const SubmitBtn = (e) => {
        e.preventDefault()
        const Newobj = {
            Username:state.Username,
            emailId:state.emailId,
            MobileNo:state.MobileNo.Math.floor(Math.random()*10000000000),
            password:state.password,
        }
        dispatch({type:'SET_USER' , value:console.log(Newobj)})

        
    }  
  return (
    <div className="max-w-4xl max-sm:max-w-lg mx-auto font-[sans-serif] p-6">
        {JSON.stringify(state)}
      <div className="text-center mb-12 sm:mb-16">
        <a href="javascript:void(0)">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-48 inline-block"
          />
        </a>
        <h4 className="text-gray-600 text-base mt-6">Sign up into your account</h4>
      </div>

      <form>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Username</label>
            <input
              name="Username"
              type="text"
              value={state.Username}
              onChange={Handlechange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Email Id</label>
            <input
              name="emailId"
              type="text"
              value={state.emailId}
              onChange={Handlechange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Mobile No.</label>
            <input
              name="MobileNo"
              type="number"
              value={state.MobileNo}
              onChange={Handlechange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter mobile number"
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              value={state.password}
              onChange={Handlechange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="mx-auto block py-3 px-6 text-sm tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onClick={(e) => SubmitBtn(e)}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
