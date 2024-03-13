
import './App.css'
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';




function App() {
  const [showPopOut, setShowPopOut] = useState(false)

  return (
    <div className="beranda">
    {showPopOut && (
    <div className="pop_out">
    <div className="pop_out_login">
    <IoMdClose className='close' onClick={() => setShowPopOut(false)}/>
    <FaXTwitter className='logo_login' />
      <h2 className='sign_in_title'>Sign in to X</h2>
      <div className="login_button_1">
      <button className='goggle_pop_login'><FcGoogle className='logo_google'/>Sign in with Google</button>
      <button className='apple_pop_login'><FaApple className='logo_apple' /> Sign in with Apple</button>
      <p className='or'>or</p>
      <input type='text' placeholder='Phone,email,or username' className='input_login'></input>
      <button className='next_login'>Next</button>
      <button className='forgot_password_login'>Forgot password?</button>
      </div>
      <p className='register_pop_login'>Don't have an account? <a href='#' className='link_login'>Sign up</a></p>
      </div>
    </div>
    )}
    <div className="homepage">
      <div className="homepage_left">
      <FaXTwitter className='logo' />
      </div>
      <div className="homepage_right">
        <h1 className='title'>Happening now</h1>
        <h2 className='subtitle'>Join today.</h2>
        <div className="register">
        <button className='goggle'><FcGoogle className='logo_google'/>Sign up with Google</button>
        <button className='apple'><FaApple className='logo_apple' /> Sign up with Apple</button>
        <p className='or'>or</p>
        <table >
          <tr className='garis'></tr>
        </table>
        <button className='create'>Create Account</button>
        <p className='policies'>By signing up, you agree to 
        the <a href='#' className='link'>Terms of Service</a> and <a href='#' className='link'>Privacy Policy</a>, 
        including <a href='#' className='link'>Cookie Use.</a></p>
        <div className="login">
          <h3 className='account'>Already have an account?</h3>
          <button className='signin' onClick={() => setShowPopOut(true)} id='login'>Sign in</button>
        </div>
        </div>
      </div>
      </div>
      <footer className='footer'>
      <table className='footer_table'>
        <tr>
          <td>
          <a href='#' className='link_footer'>About</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Download the X app</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Help Center</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Term of Service</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Privacy Policy</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Cookie Policy</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Accessibility</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Ads info</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Blog</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Status</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Careers</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Brand Resources</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Advertising</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Marketing</a>
          </td>
          <td>
          <a href='#' className='link_footer'>X for Business</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Developers</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Directory</a>
          </td>
          <td>
          <a href='#' className='link_footer'>Settings</a>
          </td>
          <td>
          <a href='#' className='link_footer'>© 2024 X Corp.</a>
          </td>
        </tr>
      </table>
      </footer>
     
    </div>
    
    
  )
}
export default App
