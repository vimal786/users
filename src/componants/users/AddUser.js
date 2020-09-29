import React, { useState } from "react";
import Axios from "axios";
import  { useHistory } from "react-router-dom";

        const AddUser = () => {

             const history = useHistory();
                
                const [user, setUser] =  useState({
                        name: "",
                        username: "",
                        email: "",
                        phone: "",
                        website: ""

                });

                const  { name, username, email, phone, website } = user;  

                const onInputChange = e => {

                    setUser({ ...user, [e.target.name]: e.target.value });

                };

                const onSubmit = async e => {
                    e.preventDefault();
                    await Axios.post("http://localhost:3003/users/", user);
                    history.push("/");
                };

            return(
            <div className="container">

                <div className ="w-75 mx-auto shadow p-5">

                    <h2 className="text-center mb-4">Add User</h2>

                        <form onSubmit = { e => onSubmit(e) } >

                                <div className="form-group py-2">

                                    <input type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="enter name"
                                    name="name"
                                     value ={name}
                                     onChange ={e => onInputChange(e)} />

                                </div>

                                <div className="form py-2">

                                    <input type="text" 
                                    className="form-control form-control-lg"
                                     placeholder="enter Username" 
                                     name="username"
                                     value={username}
                                     onChange ={e => onInputChange(e)}/>

                                </div>

                                <div className="form py-2">
                                    <input type="text" 
                                    className="form-control form-control-lg"
                                     placeholder="enter email"
                                      name="email"
                                      value ={email}
                                      onChange ={e => onInputChange(e)}/>
                                </div>
                                <div className="form py-2">
                                    <input type="text" 
                                    className="form-control form-control-lg"
                                     placeholder="enter phone"
                                      name="phone"
                                      value={phone}
                                      onChange ={e => onInputChange(e)} />
                                </div>
                                <div className="form py-2 ">
                                    <input type="text" 
                                    className="form-control form-control-lg"
                                     placeholder="enter website"
                                      name="website" value={website}
                                      onChange ={e => onInputChange(e)}/>
                                </div>
                                 <button className = "btn btn-primary">Add User</button>
                        
                        </form>
               </div>
                
            </div>
        
      )

}

export default AddUser;