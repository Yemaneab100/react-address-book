import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function ContactsView() {
  const [contact, setContact] = useState(null)
  
  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  const location = useLocation();

  useEffect(() => { 
    if(location.state){
      setContact(location.state.contact)
    }
  }, [location])

  if (!contact) {
    return <p>Loading </p>
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street} {contact.city}</p>
      <p><b>Email:</b> {contact.email}</p>
      <p><b>LinkdIn:</b> {contact.linkdIn}</p>
      <p><b>Twitter:</b> {contact.twitter}</p>
    </div>
  )
}

export default ContactsView