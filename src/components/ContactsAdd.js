import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContactsAdd({ setContacts, contacts }) {

  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state


  //TODO: Implement controlled form
  //send POST to json server on form submit
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {firstName, lastName, street, city}
    
    fetch('http://localhost:4000/contacts', {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    })
    .then(() => {
      console.log('New contact added');
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

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{street}</p>
        <p>{city}</p>
      </div>
    </form>
  )
}

export default ContactsAdd
