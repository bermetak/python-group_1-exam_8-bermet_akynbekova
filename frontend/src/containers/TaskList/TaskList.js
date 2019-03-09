import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {TASKS_URL} from '../../urls';
import TaskCard from '../../components/TaskCard/TaskCard';

class TaskList extends Component {

    state = {
        tasks: [],
    };

    componentDidMount() {
        axios.get(TASKS_URL)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(tasks => this.setState({tasks}))
            .catch(error => console.log(error));
    }

    render() {
        const todo = this.state.tasks.filter(function (task) {
            return task.status === 'todo';
        });
        const doing = this.state.tasks.filter(function (task) {
            return task.status === 'doing';
        });
        const done = this.state.tasks.filter(function (task) {
            return task.status === 'done';
        });

        return <Fragment>
            <div className='row'>
                <div className='col-4 mt-3'>
                    <h3 className='text-center'>Очередь</h3>
                    {todo.map(task => {
                        return <TaskCard task={task}/>
                    })}
                </div>

                <div className='col-4 mt-3'>
                    <h3 className='text-center'>В работе</h3>
                    {doing.map(task => {
                        return <TaskCard task={task}/>
                    })}
                </div>

                <div className='col-4 mt-3'>
                    <h3 className='text-center'>Сделано</h3>
                    {done.map(task => {
                        return <TaskCard task={task}/>
                    })}
                </div>
            </div>
        </Fragment>


            ;
    }
}

export default TaskList;
