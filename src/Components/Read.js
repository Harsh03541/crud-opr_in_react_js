import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import './Read.css';

const Read = () => {
  const  [data, setData] = useState([]);
  const [tabledark, settableDark] = useState('')

  function getData() {
    axios
    .get("https://669480ad4bd61d8314c79d6e.mockapi.io/CRUD_Project")
    .then((res)=> {
      console.log(res);
      setData(res.data)
    });
  };

  function handleDelete(id) {
    axios.delete(`https://669480ad4bd61d8314c79d6e.mockapi.io/CRUD_Project/${id}`)
    .then(()=>{
      getData();
    })
  }

  useEffect(()=> {
    getData();
  },[])
  

  const setToLocalStorage = (id,name,email) => {
    localStorage.setItem("id" , id)
    localStorage.setItem("name" , name)
    localStorage.setItem("email" , email)
  }

  return (
    <>
    <div className="form-check form-switch dmode">
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
  <input className="form-check-input" type="checkbox" id='flexSwitchCheckDefault'
  onClick={() => {
    // if(tabledark === "table-dark") settableDark("");
    // else settableDark("table-dark");
    tabledark==="table-dark" ? (settableDark("")) : (settableDark("table-dark"))
  }}
  />
   Dark mode </label>
</div>
    <div className="d-flex justify-content-between m-3">
      <h1> Read Operation  </h1> 
      <Link to="/">
      <button className='btn btn-secondary'> Create </button>
      </Link>
    </div>

      <table className={`table ${tabledark}`} style={{border: '1px solid black', borderCollapse: 'collapse'}} >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">E-Mail</th>
      <th scope="col"></th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  
    {
      data.map((eachData)=>{
        return(
          <>
          <tbody>
    <tr>
      <th scope="row"> {eachData.id} </th>
      <td> {eachData.name} </td>
      <td> {eachData.email} </td>
      <td> 
        <Link to="/update">
          <button className='btn-success' onClick={()=> setToLocalStorage (
            eachData.id, 
            eachData.name, 
            eachData.email
            )}> Edit </button>
        </Link>
       </td>
      <td> 
        <button className='btn-danger' onClick={()=>handleDelete(eachData.id)}> Delete  </button>
       </td>
      
    </tr>
    
  </tbody>

          </>
        )
      })
    }
    
</table>


    </>
  )
}


export default Read