import React, { Component } from 'react'
import { Route, Switch , Redirect} from 'react-router-dom';
import Login from './routes/login';
import Signup from './routes/signup';
import ForgetPassword from './routes/forgetPassword';
import ResetPassword from './routes/resetPassword';
import Home from './routes/home';
import Profile from './routes/profile';
import PostJob from './routes/postJob';
import AppliedJobs from './components/appliedJobs';
import Applicants from './routes/applicants';

export default class App extends Component {
  render() {
    return (
      <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgetpassword" component={ForgetPassword} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/postjob" component={PostJob} />
        <Route exact path="/applied" component={AppliedJobs} />
        <Route exact path="/applicants/:id" component={Applicants} />
      </Switch>
      </>
    )
  }
}
