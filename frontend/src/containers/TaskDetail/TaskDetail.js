import React, {Component} from 'react'
import {TASKS_URL} from "../../urls";
import {NavLink} from "react-router-dom";
import axios from 'axios';
import DatePicker from "react-datepicker/es";


class TaskDetail extends Component {
    state = {
        task: [],
        status: [
            {id: 1, name: 'todo', label: 'Очередь'},
            {id: 2, name: 'doing', label: 'В работе'},
            {id: 3, name: 'done', label: 'Сделано'}],
        submitDisabled: false
    };

    componentDidMount() {
        const match = this.props.match;
        console.log(TASKS_URL + match.params.id)
        axios.get(TASKS_URL + match.params.id)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(task => this.setState({task}))
            .catch(error => console.log(error));
    }


    updateTaskState = (fieldName, value) => {
        this.setState(prevState => {
            let newState = {...prevState};
            let task = {...prevState.task};
            task[fieldName] = value;
            newState.task = task;
            return newState;
        });
    };

    inputChanged = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        this.updateTaskState(fieldName, value);
    };


    dateChanged = (field, date) => {
        this.updateTaskState(field, date.toISOString().slice(0, 10));
    };



    formSubmitted = (event) => {
        event.preventDefault();

        this.setState(prevState => {
            let newState = {...prevState};
            newState.submitDisabled = true;
            return newState;
        });

        console.log(TASKS_URL, this.state.task);
        console.log(TASKS_URL + this.state.task.id,)
        axios.put(TASKS_URL + this.state.task.id + '/', this.state.task)
            .then(response => {
                console.log(response.data);
                if (response.status === 201) return response.data;
                throw new Error('Task was not updated');
            })
            .then(this.props.history.push(''))
            .catch(error => {
                console.log(error);
                this.setState(prevState => {
                    let newState = {...prevState};
                    newState.submitDisabled = false;
                    return newState;
                });
            });
    };


    render() {
        const {summary, description, due_date, status_display, time_planned, id} = this.state.task;
        const due_date_selected = due_date ? new Date(due_date) : null;

        return <div>
            <NavLink to='' className="mt-3 btn btn-primary">Tasks</NavLink>
            <form onSubmit={this.formSubmitted}>
                <div className="form-group">
                    <label className="font-weight-bold">Название</label>
                    <input type="text" className="form-control" name="summary" value={summary}
                           onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    <label>Описание</label>
                    <input type="text" className="form-control" name="description" value={description}
                           onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Дедлайн</label>
                    <div>
                        <DatePicker dateFormat="yyyy-MM-dd" selected={due_date_selected} className="form-control"
                                    name="due_date" onChange={(date) => this.dateChanged('due_date', date)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Статус</label>

                    <select name="status" onChange={this.inputChanged}
                    >
                        {this.state.status.map(status => <option value={status.name}>{status.label}</option>)}
                    </select>

                </div>
                <div className="form-group">
                    <label>Время</label>
                    <input type="number" className="form-control" name="time_planned" value={time_planned}
                           onChange={this.inputChanged}/>
                </div>
                <button disabled={this.state.submitDisabled} type="submit"
                        className="btn btn-primary">Добавить задачу
                </button>
            </form>
        </div>;
    }
}


export default TaskDetail;