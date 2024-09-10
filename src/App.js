import logo from './logo.svg';
import './App.css';
import { MantineProvider } from '@mantine/core';

import Homepage from './components/sample/Homepage';
import Search from './components/sample/Search';
import RecentSearches from './components/sample/RecentSearches';
import FlightDeals from './components/sample/FlightDeals';
import FlightBox from './components/sample/FlightBox';
import Destination from './components/sample/Destination';
import Faq from './components/sample/Faq';
import Download from './components/sample/Download';
import Footer from './components/sample/Footer';

function App() {
  return (
    <div className="App">
      <MantineProvider>
       
       <Homepage/>
       <RecentSearches/>
       <FlightDeals/>
       <FlightBox/>
       <Destination/>
       <Faq/>
       <Download/>
       <Footer/>
      </MantineProvider>
      
    </div>
  );
}

export default App;
