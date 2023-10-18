import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {

  const onSearch = (query: string) => {
    
    const searchData = { username:query};

    fetch('http://localhost:5000/check_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Search result:', data);
    })
    .catch(error => {
      console.log("Error: ", error)
    });
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
