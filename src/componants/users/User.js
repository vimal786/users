import React,{useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const User = () =>{

                const [user , setUser] = useState({

                        name: "",
                        username: "",
                        email: "",
                        phone: "",
                        website: ""

                })

                useEffect(() => { loadUser() }, []);
                const {id} = useParams();
                const loadUser = async () => { 
                    const rest = await axios.get(`http://localhost:3003/users/${id}`);
                    console.log(rest.data);
                    setUser(rest.data);

                  }

    return (

        <div className="container py-4">
        <Link className="btn btn-primary" to="/">Back</Link>

        <h2 className="display-4"> user Id: {id}</h2>
          <hr />
            <ul className="list-group w-50">
                <li className="list-group-item"> name: {user.name} </li>
                <li className="list-group-item"> User Name:{user.username}</li>
                <li className="list-group-item">Email:{user.email}</li>
                <li className="list-group-item">Phone:{user.phone}</li>
                <li className="list-group-item">Website:{user.website} </li>
            </ul>
        </div>
    )
}

  export default User;