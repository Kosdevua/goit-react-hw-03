import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState } from "react";
import data from "./data/contactData.json";

function App() {
  const [users, setUsers] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const getFilterData = () => {
    return users.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const filteredData = getFilterData();

  // added cards
  // const onSubmit = ({ text }) => {
  //   const toDo = { text, id: nanoid() };
  //   setTodos([...todos, toDo]);
  // };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
        <ContactList users={filteredData} />
      </div>
    </>
  );
}

export default App;
