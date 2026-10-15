import { useState ,useEffect} from 'react'
function App()
{
  const [name,setName] = useState("");
  const [email,setEmail] =useState("");
  const [msg,setMsg] = useState("");
  const [contact,setContact] = useState([]);
  const [error,setError] = useState("");

  function handleSubmit(e)
  {
    e.preventDefault();
    const contact ={
      name : name,
      email : email,
      msg : msg,
    }
    if(!name && !email && !msg)
    {
      setError("All the fields are required");
    }
    else
    {
      setContact(contact);
    }
    setName("");
    setEmail("");
    setMsg("");

  }


  function clearfrom()
  {
    setName("");
    setEmail("");
    setMsg("");
    
  }

  return(
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
      <lable>Name:</lable>
      <input type="text" onChange={(e)=>setName(e.target.value)} required />
      <br></br>
      <lable>Email:</lable>
      <input type="email" onChange={(e)=>setEmail(e.target.value)} required />
      <br></br>
      <lable>Message:</lable>
      <input type="paragraph" min="10" onChange={(e)=>setMsg(e.target.value)} required />
      <br></br>

      <button onClick={clearfrom}>Submit</button>

      </form>

    </div>
  );
}
export default App;