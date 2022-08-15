
import TaskList from './components/containers/TaskList';
import './App.css'
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';
function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <TaskList />
      {/*    <LoginFormik /> */}

      {/* <RegisterFormik /> */}
    </div>
  );
}

export default App;
