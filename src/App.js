
import './App.css';

function App() {
  return (
    <div className="App">
     <switch>
       <Route path="/users" component={UsersList}/>
     </switch>
    </div>
  );
}

export default App;
