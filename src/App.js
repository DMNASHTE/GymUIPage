import './App.css';
import Hero from './Componenets/Hero'
import Program from './Componenets/Programs/Program.jsx';
import Reasons from './Componenets/Reasons/Reasons.jsx';
import Plans from './Componenets/Plans/Plans.jsx';
import Testimonial from './Componenets/Testimonials/Testimonial.jsx';
import Joins from './Componenets/Joins/Joins.jsx';
import Footer from './Componenets/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Program></Program>
          <Reasons></Reasons>
          <Plans></Plans>
          <Testimonial></Testimonial>
          <Joins></Joins>
          <Footer></Footer>
    </div>
  );
}

export default App;
