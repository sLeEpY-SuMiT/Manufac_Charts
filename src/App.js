import './App.css';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';

function App() {
  return (
    <div className="row Manufac">
      {/* <h1>Charts</h1> */}
      <div className="col-lg-6 col-md-6 col-sm-12 mt">
        <LineChart />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 mt">
        <BarChart />
      </div>
    </div>
  );
}

export default App;
