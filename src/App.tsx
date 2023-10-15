import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
      <div className='search-bar-container'>
        <Header text='Enter your anilist username to get a list of recommendations for your next anime!' size={2}></Header>
        <SearchBar></SearchBar>
      </div>
    </>
  );
}

export default App;
