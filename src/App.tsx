import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {

  const onSearch = (query: string) => {
    alert("You searched " + query + "!");
  }

  return (
    <>
      <div className='search-bar-container'>
        <Header text='Enter your anilist username to get a list of recommendations for your next anime!' size={2}></Header>
        <SearchBar text='Enter Anilist Username...' onSearch={onSearch}></SearchBar>
      </div>
    </>
  );
}

export default App;
