import React, {useState} from 'react'
import axios from 'axios'
import { toast} from 'react-toastify';
/* import Header from '../component/Header'
import Footer from '../component/Footer' */
 

const SignUp = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password:'',
        roles:''
    });

    const {username, email, password,roles } = values;

    const handleChange = username => (e) =>{
        // console.log(e.target.value);
        setValues({...values, [username]: e.target.value});
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/signup', {
                username,
                email,
                password ,
                roles
            });

            console.log(data);

            if  (data.success === true){
                setValues({username: '', email: '', password:'',roles:''});
                toast.success("Sign up successfully, please Login!");
              
            }
            

        } catch(err){
            console.log(err.response.data.error);
            toast.error(err.response.data.error);
         
        }
    }
    
    return (
        <div>
          
            <div className="container custom_className pt-5">
                <h2 className="signup_title text-center">SIGN UP</h2>
                <form className=" col-sm-6 offset-3 pt-5 signup_form">
                    
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("username")}  type="text" id="form4Example1" className="form-control"  value={username} />
                        <label className="form-label" htmlFor="form4Example1">Name</label>
                    </div>

                    
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("email")}   type="email" id="form4Example2" className="form-control"  value={email} />
                        <label className="form-label" htmlFor="form4Example2">Email </label>
                    </div>

                
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("password")}   type="password" id="form4Example3" className="form-control" value={password}  />
                        <label className="form-label" htmlFor="form4Example3">Password</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("roles")}   type="text" id="form4Example3" className="form-control" value={roles}  />
                        <label className="form-label" htmlFor="form4Example3">Role</label>
                    </div>
                
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Register</button>
                </form>
            </div>
          
        </div>
    )
}

export default SignUp
