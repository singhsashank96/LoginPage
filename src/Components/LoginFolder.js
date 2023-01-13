import React from 'react'



function LoginFolder() {

  

  return (
    <>
   
    <div className='container'>
      <img className='imgreact' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
      <p className='text'>   SOME RANDOM TEXT,SOME RANDOM <br /> TEXT , SOME RANDOM TEXT,SOME RANDOM TEXT </p>
      <div className='login'>
  
        <div className='loginbtns'>
       
        <div  className='active' >
        <button className='btn'  >Login</button> 
          </div>
          <div className='active1'>
          <button className='btn2' > Signup</button>
          </div>
          </div>
         
       <div >
       <input  placeholder='Email Address' type='email' id='email' className='inputs'></input>
       <br />
       <input  placeholder='Password' type='password' id='pass' className='inputs'></input>
       <br />
       <button className='inputs1'>LOGIN</button>
        <br />
          <span  className="fpass" >Forget password?</span>
         
          <div className='orLogin'> <span  className='textsize'>or login with</span> 
          <br/>
          <div style={{ display: 'flex' , justifyContent: 'center'  }} className="LoginIcons">
            <div style={{padding : 6 , margin : 6 , height : 25 , width : 25}} className='iconB' >
            <a href='' ><i className="fa-brands fa-google is"></i></a>
            </div>
            <div style={{padding : 6 ,  margin : 6 , height : 25 , width : 25 }} className='iconB' >
            <a href=''><i  className="fa-brands fa-facebook-f is" ></i></a>
            </div>
            <div style={{padding : 6 ,  margin : 6 , height : 25 , width : 25 }} className='iconB' >
            <a href=''><i className="fa-brands fa-twitter is isb" ></i></a>
            </div>
          </div>

         
       
        
          
          <p   className='LowerText'>Don't have an account?<span className='LowerTextCol'>Create new one!</span></p>
          <br />
          <p className='LowerText'>by singning up, you agree with our <span  className='LowerTextCol1'> Terms & Conditions</span></p>
         </div>
        
      </div>
       </div>
      
    </div>
     
     </>
  )
}

export default LoginFolder
