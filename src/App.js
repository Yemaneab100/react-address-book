import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import ContactsEdit from "./components/ContactsEdit"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])
  
  //TODO: Load all contacts on useEffect when component first renders
  useEffect(() => {
    fetch("http://localhost:4000/contacts")
      .then(res => res.json())
      .then(data => setContacts(data))
  }, [])

  

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <Link to="/">Contacts List </Link>
          <br />
          <Link to = "/contacts/add">Add New Contact</Link>
        </ul>
      </nav>
      <main>
        <Routes>
          {/* TODO: Add routes here  */}
          <Route
          path="/contacts/add"
          element={<ContactsAdd />}
          />
          <Route
          path="/"
          element={<ContactsList contacts={contacts} />}
          />
          <Route
          path="/view/:id"
          element={<ContactsView />}
          />
          <Route
          path="/edit/:id"
          element={<ContactsEdit />}
          />
        </Routes>
      </main>
    </>
  )
}
