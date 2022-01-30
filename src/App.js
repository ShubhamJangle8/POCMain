import './App.scss';
import LoginPage from '../src/component/LoginPage/LoginPage';
import RequestListPage from '../src/component/RequestListPage/RequestListPage';
import PmoListPage from '../src/component/PmoListPage/PmoListPage';
import ViewRequest from '../src/component/PmoListPage/ViewRequest';
import CreateRequest from './component/CreateRequest/CreateRequest';
import EditRequest from './component/EditComponent/EditRequest';
import { Route, Switch } from 'react-router-dom';
import FirebaseAuth from './component/firebase/FirebaseAuth'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage}></Route>
        <Route exact path='/reqlist' component={RequestListPage}></Route>
        <Route exact path='/editRequest' component={EditRequest}></Route>
        <Route path="/createRequest" component={CreateRequest}></Route>
        {/* <Route path="/editRequest/:id" component={EditRequest}></Route> */}
        <Route exact path='/pmolist' component={PmoListPage}></Route>
        <Route exact path='/pmo/view' component={ViewRequest}></Route>
      </Switch>
      {/* <FirebaseAuth /> */}
    </div>
  );
}

export default App;
