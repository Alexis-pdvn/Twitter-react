import './App.css';
import Feed from './components/feed/feed';
import Menu from './components/menu/menu';
import Trend from './components/trend/trend';

const App = () => {
  return (
    <>
    <div className='container main'>
       <Menu />
       <Feed />
       <Trend />
    </div>
    </>
  );
}

export default App;
