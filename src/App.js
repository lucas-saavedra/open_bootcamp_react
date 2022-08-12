
import TaskList from './components/containers/TaskList';
import './App.css'
import Entregable from './components/Entregable';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'

}
function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      {/*   <TaskList /> */}
      <Entregable />
    </div>
  );
}

export default App;
