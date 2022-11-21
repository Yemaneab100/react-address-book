import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContactsAdd() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [linkdIn, setLinkdIn] = useState('');
  const [twitter, setTwitter] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {firstName, lastName, street, city, email, linkdIn, twitter}
    
    fetch('http://localhost:4000/contacts', {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    })
    .then(() => {
      setNewContact(`${firstName} ${lastName} is added to the store` )
      navigate('/')  
    })
  }

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input 
        id="firstName" 
        name="firstName" 
        type="text" 
        required 
        value={firstName}
        onChange = {(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input 
        id="lastName" 
        name="lastName" 
        type="text" 
        value={lastName}
        onChange = {(e) => setLastName(e.target.value)}
        required
      />

      <label htmlFor="street">Street:</label>
      <input 
        id="street" 
        name="street" 
        type="text" 
        required
        value={street}
        onChange = {(e) => setStreet(e.target.value)}
      />

      <label htmlFor="city">City:</label>
      <input 
        id="city" 
        name="city" 
        type="text" 
        required
        value={city}
        onChange = {(e) => setCity(e.target.value)}
        />
      
      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        name="email" 
        type="email" 
        required
        value={email}
        onChange = {(e) => setEmail(e.target.value)}
        />

      <label htmlFor="linkdIn">LinkdIn:</label>
      <input 
        id="linkdIn" 
        name="linkdIn" 
        type="text" 
        required
        value={linkdIn}
        onChange = {(e) => setLinkdIn(e.target.value)}
        />

      <label htmlFor="twitter">Twitter:</label>
      <input 
        id="twitter" 
        name="twitter" 
        type="text" 
        required
        value={twitter}
        onChange = {(e) => setTwitter(e.target.value)}
        /> 

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
        
      </div>   
    </form>
   
  )
}

export default ContactsAdd
