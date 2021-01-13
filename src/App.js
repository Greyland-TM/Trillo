import './scss/main.scss';
import Header from './components/header';
import Navigation from './components/sidebar';
import HotelView from './components/hotel-view/hotel-view';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="content">
        <Navigation></Navigation>
        <HotelView></HotelView>
      </div>
    </div>
  );
}

export default App;
