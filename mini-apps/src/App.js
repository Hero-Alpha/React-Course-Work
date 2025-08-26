import './App.css';
import './components/Accordion.css';
import './components/ColorGenerator.css';
import menu from './components/Tree View Navbar/data';
import Accordion from './components/Accordion';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/Image_Slider/ImageSlider';
import LoadMore from './components/LoadMoreButton/LoadMore';
import TreeView from './components/Tree View Navbar/TreeView';
import QrCode from './components/QR-Code generator/QrCode';
import LightDark from './components/Theme Toggler/LightDark';
import TabsParent from './components/Custom Tabs/tabsParent';
import Model_tester from './components/Custom Model/Model_tester';

function App() {
  return (
    <div className="App">
      <h1>Accordion</h1>
      <Accordion />
      <h1>Random Color Generator</h1>
      <ColorGenerator />
      <h1>Star Rating Console</h1>
      <StarRating noOfStar={7}/>
      <h1>Image Slider</h1>
      <ImageSlider url={"https://picsum.photos/v2/list"} page = {1} limit={10}/>
      <h1>Load More Page</h1>
      <LoadMore />
      <h1>Tree View Navbar</h1>
      <TreeView menu={menu}/> 
      <h1>QR Code Generator</h1>
      <QrCode />
      <h1>Theme Change Function</h1>
      <LightDark />
      <h1>Custom Tabs Console</h1>
      <TabsParent />
      <h1>Custom Model Console</h1>
      <Model_tester />
    </div>
  );
}

export default App;
