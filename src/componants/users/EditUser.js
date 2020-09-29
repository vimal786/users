import React, { useState, useEffect } from "react";
import Axios from "axios";
import  { useHistory, useParams } from "react-router-dom";

        const EditUser = () => {

             const history = useHistory();
                const {id} = useParams();
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

              useEffect(() => { loadUser() }, []);

                const onSubmit = async e => {
                    e.preventDefault();
                    await Axios.put(`http://localhost:3003/users/${id}`, user);
                    history.push("/");
                };


                const loadUser = async () => {

                const result = await Axios.get(`http://localhost:3003/users/${id}`);

                 setUser(result.data)
                }
            return(
            <div className="container">

                <div className ="w-75 mx-auto shadow p-5">

                    <h2 className="text-center mb-4">Edit User</h2>

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
                                 <button className = "btn btn-warning">Update User</button>
                        
                        </form>
               </div>
                
            </div>
        
      )

}

export default EditUser;