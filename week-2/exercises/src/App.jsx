import Card from "./components/Card"
import Counter from "./components/Counter"
import ItemList from "./components/ItemList"
import LoginForm from "./components/LoginForm"
import TextInput from "./components/TextInput"
import UncontrolledInput from "./components/UncontrolledInput"

const fruits = ["Apple", "Banana", "Watermelon", "Strawberry", "Avocado"];

const App = () => {
  
  return (
    <>
      <Card>
        <h2>Card Title</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur!</p>
      </Card>
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <ItemList array={fruits}/>
    </>
  )
}

export default App
