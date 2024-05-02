import Header from "../components/Startsite/Header";
import SearchBar from "../components/Startsite/rider/SearchBar";
import ResultContent from "../components/SearchResult/ResultContent";

const SearchResult = () => {
    
    return (
      <>
        <Header />
        <SearchBar welcome={false}/>
        <ResultContent />
      </>
    )
  }
  
  export default SearchResult;