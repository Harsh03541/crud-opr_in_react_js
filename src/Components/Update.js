import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Update = () => {

  const [id,setId] = useState(0)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

  },[])

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...",id);
    axios.put(`https://669480ad4bd61d8314c79d6e.mockapi.io/CRUD_Project/${id}`, {
        name: name,
        email: email,
      }).then (() => {
        navigate("/read")
      })
  }

  return (
    <>
       <h1>Update</h1> <br />

<form>
{/* Name */}
<div className="mb-3">
<label htmlFor="exampleInputName" className="form-label">Name</label>
<input type="text" 
className="form-control" 
id="exampleInputName"
value={name} 
required
onChange={(e) => setName(e.target.value)} 
/>
</div>

{/* Email */}
<div className="mb-3">
<label htmlFor="exampleInputEmail" className="form-label">E Mail</label>
<input type="email" 
className="form-control" 
id="exampleInputEmail"
value={email} 
required
onChange={(e) => setEmail(e.target.value)}  
/>
</div>

{/* button */}
<button type="submit" className="btn btn-primary mx-2" 
onClick={handleUpdate}
>
Update
</button>

  <Link to="/read">
<button className='btn btn-secondary mx-2'>
  Back
</button>
</Link>

</form>
    </>
  )
}
export default Update