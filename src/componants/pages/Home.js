import React, {useState, useEffect }from "react";
import { Link } from "react-router-dom"
import axios from "axios"

const Home = () => {

    const [users , setUser] = useState([]);
    useEffect(() =>{
      loadUsers();

    }, []); 

const loadUsers = async () =>{

     const result = await axios.get("http://localhost:3000/users");
     setUser(result.data.reverse());

}
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container" >
            <div className="py-5">
            <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User name</th>
      <th scope="col">Email</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>

    { 
        users.map((user, index) =>(

            <tr>
                <th scop="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td> 

                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                </td>
     
            </tr>
        ))
    }
  
  </tbody>
</table>


</div>          
 </div>
      
      
)}
export default Home;