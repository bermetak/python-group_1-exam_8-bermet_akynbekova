import React, {Component} from 'react'
import {TASKS_URL} from "../../urls";
import {NavLink} from "react-router-dom";
import axios from 'axios';


class TaskDetail extends Component {
    state = {
        task: []
    };

    componentDidMount() {
        const match = this.props.match;
        console.log(TASKS_URL + '/' + match.params.id)
        axios.get(TASKS_URL + '/' + match.params.id)
            .then(response => {console.log(response.data); return response.data;})
            .then(task => this.setState({task}))
            .catch(error => console.log(error));
    }

    render() {
        const {summary, description, due_date, status_display, time_planned, id} = this.state.task;

        return <div>
            <NavLink to='' className="mt-3 btn btn-primary">Tasks</NavLink>
            <h3 className='mt-3 text-center'>{summary}</h3>
            <h3>{status_display}</h3>
            <p>{description}</p>
            <div className="text-muted row">
            <p className='col text-center '>До: {due_date}</p>
            <p className='col text-center'>Время: {time_planned} ч.</p>
            </div>



        </div>;
    }
}


export default TaskDetail;