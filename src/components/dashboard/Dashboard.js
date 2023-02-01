//import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import ColumnChart from '../charts/ColumnChart';
import AreaChart from '../charts/AreaChart';
//import PieChart from '../charts/PieChart';
import SprinkLine from '../charts/SprinkLine';
import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="col-1"> 
         <AreaChart /> 
         <BarChart />
      </div>

    <div className="col-1"> 
         <SprinkLine /> 
         <ColumnChart />
      </div>


    </div>
  );
}

export default Dashboard;

