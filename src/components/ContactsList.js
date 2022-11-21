import { Link, useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function ContactsList({contacts}) {
  const navigate = useNavigate();

  const hadleClick = (id) => {
    fetch(`http://localhost:4000/contacts/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      navigate('/')
    })
  }

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName, id } = contact
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
             
              <p>
                { /** TODO: Make a Link here to view contact */}
                <Link to={`/view/${id}`} state = { { contact } }> View</Link>
                <br />
                <Link to={`/edit/${id}`} state = { { contact } }> Edit </Link>
                <br />
                <button style={{color: "red"}} onClick = {() => hadleClick(id)}> Delete </button>
              </p> 
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList
