import './App.css';
import './components/PersonCard';
import PersonCard from './components/PersonCard';

const dataBase = [
  { firstName: 'Jane', lastName: 'Doe', age: 45, hairColor: 'Black' },
  { firstName: 'John', lastName: 'Smith', age: 88, hairColor: 'Brown' },
  { firstName: 'Millard', lastName: 'Fillmore', age: 50, hairColor: 'Brown' },
  { firstName: 'Maria', lastName: 'Smith', age: 62, hairColor: 'Brown' },
];


const App= () => { 
  const db = dataBase.map((items,index) => {
    const {firstName,lastName,age,hairColor} = items; //extraigo las propiedades de cada posicion que recorre items
    return(
      <PersonCard 
        firstName={firstName}
        lastName = {lastName}
        age = {age}
        hairColor = {hairColor}
        key = {index}
      />
    );
  });

  return (
    <div className="App">
      {db}
      {/* <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}/>
      <PersonCard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}/>
      <PersonCard firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"}/>
      <PersonCard firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"}/>  */}
    </div>
  );
};

export default App;
