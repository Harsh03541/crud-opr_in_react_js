import React, { useState } from 'react'
import './Create.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const header = { "Access-Control-Allow-Origin":"*" };
    const history = useNavigate();

    const handleSubmit = (e)=> {
        console.log("clicked submit button")
        e.preventDefault();
        axios.post("https://669480ad4bd61d8314c79d6e.mockapi.io/CRUD_Project", {
            name: name,
            email: email,
            header
        })
        .then(()=> {
          history("/read")
        })
    };

  return (
    <div>
      <div className="d-flex justify-content-between m-3">
      <h1>Create</h1> <br />
      <Link to="/read">
      <button className='btn btn-primary showdata'> Show Data </button>
      </Link>
      </div>

      <form>
     {/* Name */}
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputName" required
    onChange={(e) => setName(e.target.value)} />
  </div>

     {/* Email */}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" className="form-label">E Mail</label>
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail" required
    onChange={(e) => setEmail(e.target.value)}  />
  </div>

     {/* button */}
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
    Submit
    </button>

</form>

    </div>
  )
}

export default Create