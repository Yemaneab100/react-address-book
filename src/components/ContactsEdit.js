import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactsEdit = () => {
    const [contact, setContact] = useState(null)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [linkdIn, setLinkdIn] = useState('');
    const [twitter, setTwitter] = useState('');
    const navigate = useNavigate();
  
  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  const location = useLocation();

  useEffect(() => { 
    if(location.state){
     console.log('location State is:', location.state)
      setContact(location.state.contact)
    }
  }, [location])

  if (!contact) {
    return <p>Loading </p>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {firstName, lastName, street, city, email, linkdIn, twitter}

    fetch(`http://localhost:4000/contacts/${contact.id}`, {
        method: 'PATCH',
        body: JSON.stringify(contact),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  }

    return ( 

    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Edit for <a style={{color:"red"}}>{contact.firstName} {contact.lastName}</a> details</h2>

      <label htmlFor="firstName">First Name</label>
      <input 
        id="firstName" 
        name="firstName" 
        type="text" 
        value={firstName}
        onChange = {(e) => setFirstName(e)}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input 
        id="lastName" 
        name="lastName" 
        type="text" 
        value={lastName}
        onChange = {(e) => setLastName(e)}
      />

      <label htmlFor="street">Street:</label>
      <input 
        id="street" 
        name="street" 
        type="text" 
        value={street}
        onChange = {(e) => setStreet(e)}  
      />

      <label htmlFor="city">City:</label>
      <input 
        id="city" 
        name="city" 
        type="text" 
        value={city}
        onChange = {(e) => setCity(e)}
        />
      
      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        name="email" 
        type="email" 
        value = {email}
        onChange = {setEmail}
        />

      <label htmlFor="linkdIn">LinkdIn:</label>
      <input 
        id="linkdIn" 
        name="linkdIn" 
        type="text"
        value={linkdIn} 
        onChange = {(e) => setLinkdIn(e)}
        />

      <label htmlFor="twitter">Twitter:</label>
      <input 
        id="twitter" 
        name="twitter" 
        type="text" 
        value = {twitter}
        onChange = {(e) => setTwitter(e)}
        /> 

      <div className="actions-section">
        <button className="button blue" type="submit">
            Edit
        </button>
        
      </div>   
    </form>
   
     );
}
 
export default ContactsEdit;