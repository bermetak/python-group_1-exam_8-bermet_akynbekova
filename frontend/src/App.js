import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import TaskList from "./containers/TaskList/TaskList";
import TaskDetail from "./containers/TaskDetail/TaskDetail";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>

                        <Route path="/tasks/:id" component={TaskDetail}/>
                        <Route path="/" component={TaskList}/>
                    </Switch>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
