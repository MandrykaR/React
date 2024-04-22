import React from 'react'
import Task from './Task.jsx'
import CreateTaskInput from './CreateTaskInput.jsx'

const baseUrl = 'https://658d94da7c48dce9473970f5.mockapi.io/api/v1/tasks'

class TasksList extends React.Component {
	state = {
		tasks: [],
	}

	componentDidMount() {
		this.hetchTasksList()
	}

	hetchTasksList = () => {
		fetch(baseUrl)
			.then(res => {
				if (res.ok) {
					return res.json()
				}
			})
			.then(tasksList => {
				const tasks = tasksList.map(({ _id, ...task }) => ({
					id: _id,
					...task,
				}))
				this.setState({
					tasks,
				})
			})
	}

	onCreate = text => {
		const newTask = {
			text,
			done: false,
		}

		fetch(baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; utc-8',
			},
			body: JSON.stringify(newTask),
		}).then(response => {
			if (response.ok) {
				this.hetchTasksList()
			} else {
				throw new Error('Failed to create task')
			}
		})
	}

	handleTaskStatusChange = id => {
		const taskToUpdate = this.state.tasks.find(task => task.id === id)
		const updatedTask = {
			...taskToUpdate,
			done: !taskToUpdate.done,
		}

		fetch(`${baseUrl}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; utc-8',
			},
			body: JSON.stringify(updatedTask),
		}).then(response => {
			if (response.ok) {
				this.hetchTasksList()
			} else {
				throw new Error('Failed to update task')
			}
		})
	}

	handleTaskDelete = id => {
		fetch(`${baseUrl}/${id}`, {
			method: 'DELETE',
		}).then(response => {
			if (response.ok) {
				this.hetchTasksList()
			} else {
				throw new Error('Failed to delete task')
			}
		})
	}

	render() {
		const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done)
		return (
			<main class='todo-list'>
				<CreateTaskInput onCreate={this.onCreate} />
				<ul className='list'>
					{sortedList.map(task => (
						<Task
							key={task.id}
							{...task}
							onChange={this.handleTaskStatusChange}
							onDelete={this.handleTaskDelete}
						/>
					))}
				</ul>
			</main>
		)
	}
}

export default TasksList
