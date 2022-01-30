import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import login1 from '../../img/login1.svg'
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequestListPage from '../RequestListPage/RequestListPage';
import './LoginPage.css'
import Capgemini from '../../img/Capgemini.png'
import {auth} from '../../fireBase'

function LoginPage() {
  const history = useHistory();

  const routeChange = () => {
    let path
    if (pmo) {
      path = `/pmolist`;
    }
    else {
      path = `/reqlist`;
    }
    history.push(path);
    // location.pathname = path
    // console.log(location.pathname)
  }
  const [rerr, setrErr] = useState({
    email: false,
    password: false
  });
  const [perr, setpErr] = useState({
    email: false,
    password: false
  });

  const [rform, setRform] = useState({
    email: '',
    password: ''
  });
  const [pform, setPform] = useState({
    email: '',
    password: ''
  });
  const [pmo, setPmo] = useState(false)

  const handleClassName = () => {
    console.log('click')
    setPmo(pmo ? false : true)
  }
  const obj = []

  const handleRChange = (e) => {
    let name = e.target.name;
    setrErr({ ...rerr, [name]: false });
    setRform({ ...rform, [e.target.name]: e.target.value });
    obj.push(e.target.value)
  }


  const handlePChange = (e) => {
    let name = e.target.name;
    setpErr({ ...perr, [name]: false });
    setPform({ ...pform, [e.target.name]: e.target.value });
  }

  const diffToast = () => {
    toast("Login successful!!!!")
  }

  let createRequestorUser = async() => {
    let res = await auth.createUserWithEmailAndPassword(rform.email, rform.password)
    console.log(res)
  }
  let createPMOUser = async() => {
    let res = await auth.createUserWithEmailAndPassword(pform.email, pform.password)
    console.log(res)
  }

  const handlerLogin = (e) => {
    // console.log(form);
    e.preventDefault();
    let errEmail = false, errPassword = false;
    if (rform.email == '' && rform.password == '') {
      errEmail = true;
      errPassword = true
    }
    else if (rform.email == '') {
      errEmail = true;
    }
    else if (rform.password == '') {
      errPassword = true;
    }
    else {
      alert('Login successful')
      // diffToast()
      createRequestorUser()
      routeChange()

    }
    setrErr({ email: errEmail, password: errPassword });
  }


  const handlepLogin = (e) => {
    // console.log(form);
    e.preventDefault();
    let errEmail = false, errPassword = false;
    if (pform.email == '' && pform.password == '') {
      errEmail = true;
      errPassword = true
    }
    else if (pform.email == '') {
      errEmail = true;
    }
    else if (pform.password == '') {
      errPassword = true;
    }
    else {
      alert('Login successful')
      // diffToast()
      createPMOUser()
      routeChange()
    }
    setpErr({ email: errEmail, password: errPassword });
  }

  const fillRDetails = (e) => {
    // console.log('fill details');
    setRform({ ...rform, email: 'req', password: 'req' });
  }
  const fillPDetails = (e) => {
    console.log('fill details');
    setPform({ ...pform, email: 'pmo', password: 'pmo' });
  }

  return (
    <div className={pmo ? 'container pmo-mode' : 'container'}>
      <div className='forms-container'>
        {/* <div className='fill'>
          <button className='' onClick={()=>console.log('fill details')}>Fill Details</button>
        </div> */}

        <div className="req-pmo">
          {/* {
            !pmo ?  */}

          <form action="#" className="req-form" autoComplete='off'>
            {/* <div className="btn solid text-center d-flex justify-content-center align-items-center w-md-50 w-75" onClick={fillRDetails}>System User(Requestor)</div> */}
            <div className='capgeminiLogo mb-5'>
              <img className='capgeminiLogo' src={Capgemini} alt='Capgemini' />
            </div>

            <h2 className="title mb-5 text-center">Log in as Requestor</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Email id" name="email" value={rform.email} onChange={handleRChange} id='input1' required />
            </div>
            <div className='cust-row'>
              {
                rerr.email ?
                  <div className='invalid'>Email is required</div>
                  :
                  <div className='valid'>No error</div>
              }
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={rform.password} onChange={handleRChange} required />
            </div>
            <div className='cust-row'>
              {
                rerr.password ?
                  <div className='invalid'>Password is required</div>
                  :
                  <div className='valid'>No error</div>
              }
            </div>
            <NavLink activeClassName='login' className="nav-link btn solid" onClick={handlerLogin} to='/req'>Login</NavLink>
            <ToastContainer />
          </form>
          {/* : */}
          <form action="#" className="pmo-form" autoComplete='off'>
            <div className='capgeminiLogo mb-5'>
              <img className='capgeminiLogo' src={Capgemini} alt='Capgemini' />
            </div>
            <h2 className="title mb-5 text-center">Log in as PMO</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Username" name="email" value={pform.email} onChange={handlePChange} id='input2' required />
            </div>
            <div className='cust-row'>
              {
                perr.email ?
                  <div className='invalid'>Email id is required</div>
                  :
                  <div className='valid'>No error</div>
              }
            </div>


            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={pform.password} onChange={handlePChange} required />
            </div>
            <div className='cust-row'>
              {
                perr.password ?
                  <div className='invalid'>Password is required</div>
                  :
                  <div className='valid'>No error</div>
              }
            </div>



            <NavLink activeClassName='login' className="nav-link btn solid" to='/pmo' onClick={handlepLogin}>Login</NavLink>
            <ToastContainer />
          </form>
          {/* } */}

        </div>
        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content'>
              <h1 className='panelh1'>Requestor</h1>
              <button className='btn pmobtn transparent' id='pmo-btn' onClick={handleClassName}>Login as PMO Team</button>
            </div>

            <img src={login1} className='imageClass' alt='' />

          </div>
          <div className='panel right-panel'>
            <div className='content'>
              <h1 className='panelh1'>PMO Team</h1>
              <button className='btn reqbtn transparent' id='req-btn' onClick={handleClassName}>Login as Requestor</button>
            </div>

            <img src={login1} className='imageClass' alt='' />


          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
