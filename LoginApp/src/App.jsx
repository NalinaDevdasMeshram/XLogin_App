import { useState } from "react";

 function App() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
 
  const handleSubmit =(e)=>{
        e.preventDefault();
        if(Username === 'user' || Password === 'password'){
             setMessage('Welcome, User!')
        }else{
          setMessage('Invalid Username or Password')
        }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login App</h1>
        <div>
         <label>
          Username:
          <input 
          type="text" 
          placeholder="username" 
          id="username" 
          value={Username} 
          onChange={(e)=>setUsername(e.target.value)}
          required/>
         </label>
         </div>
         <div>
         <label>
          Password:
          <input 
          type="password" 
          placeholder="password"  
          id="password" 
          value={Password} 
          onChange={(e)=>setPassword(e.target.value)} 
          required/>
         </label>
         </div>
         <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
export default App


