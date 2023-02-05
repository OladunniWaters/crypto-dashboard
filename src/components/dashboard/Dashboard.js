import BarChart from '../charts/BarChart';
import ColumnChart from '../charts/ColumnChart';
import StackedColumn from '../charts/StackedColumn';
import PieChart from '../charts/PieChart';
import SprinkLine from '../charts/SprinkLine';
import CandleStickChart from '../charts/CandleStickChart';
import Table from '../charts/Table';
import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="dashboard">
       <div className="row-1">
          <div className="col-1-1"> 
             <div>
                <SprinkLine /> 
             </div>
             <div>
                <SprinkLine /> 
             </div>
             <div>
                <SprinkLine /> 
             </div>
              <div>
                <SprinkLine /> 
             </div>
          </div>
          
          <div className="col-1-2"> 
             <CandleStickChart/> 
          </div>
    
          <div className="col-1-3"> 
             <Table /> 
          </div>
        </div>
      
      <div className="row-2">
         <div className="col-2-1"> 
                <StackedColumn  />
                 <PieChart /> 
                 <ColumnChart  />
          </div>
      </div>

    </div>
  );
}

export default Dashboard;

