import logo from './logo.svg';
import './App.css';
import UserComponent from "./UserComponent";

function App() {
  return (
    <div className="App">
        <UserComponent id={73} name={'Cop Morty'} gender={'Male'} species={'Human'} status={'Dead'} image={'https://rickandmortyapi.com/api/character/avatar/73.jpeg'}/>
        <UserComponent id={165} name={'Investigator Rick'} gender={'Male'} species={'Human'} status={'Dead'} image={'https://rickandmortyapi.com/api/character/avatar/165.jpeg'}/>
        <UserComponent id={378} name={'Wall Crawling Rick'} gender={'Male'} species={'Humanoid'} status={'unknown'} image={'https://rickandmortyapi.com/api/character/avatar/378.jpeg'}/>
        <UserComponent id={446} name={'Jerryboree Receptionist'} gender={'Male'} species={'Alien'} status={'Alive'} image={'https://rickandmortyapi.com/api/character/avatar/446.jpeg'}/>
        <UserComponent id={503} name={'Fascist Shrimp Rick'} gender={'Male'} species={'Animal'} status={'Alive'} image={'https://rickandmortyapi.com/api/character/avatar/503.jpeg'}/>
        <UserComponent id={618} name={'Private Smith'} gender={'Male'} species={'Human'} status={'unknown'} image={'https://rickandmortyapi.com/api/character/avatar/618.jpeg'}/>
    </div>
  );
}

export default App;
