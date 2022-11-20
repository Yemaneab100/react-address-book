import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

function ContactsList({contacts}) {


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
              {/* <Link to={`/view/${person.id.value}`} state={{ person }}>
                View Profile
                </Link> */}
              <p>
                { /** TODO: Make a Link here to view contact */}
                <Link to={`/view/${id}`} state={{contacts}}> View</Link>
 
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList
