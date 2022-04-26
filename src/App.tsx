import './App.css';
import React, { useState} from 'react';
import { Typography, TextField, Button, Divider,  Grid } from '@mui/material';
import TodosList from './TodosList'

const styles = {
  backgroundColor: 'skyblue'
}

const initialTodos = [
    { id: 1, task: 'Go shopping' },
    { id: 2, task: 'Go Pay the electricity bill' },
    { id: 3, task: 'Send a letter to E-ZExpress' },
    { id: 4, task: 'Check for new jobs' },
    { id: 5, task: 'Vacuum living room' },
    { id: 6, task: 'Call maintenance'},
]

const App = () => {
    const [term, setTerm] = useState('')
    const [todoList, setTodoList] = useState(initialTodos)
    const [newTask, setNewTask] = useState('')

    /**
     * useCallback memoizes function definition.
     */

    const handleSearch = () => {
        const newList = todoList.filter((el) => {
            const res = el.task.toLowerCase().startsWith(term.toLowerCase())
            return res
        })
        setTodoList(newList)
    }

    const handleDelete = (id: number) => {
        console.log('handleDelete')
        const newList = todoList.filter((el) => {
            return el.id !== id
        })
        setTodoList(newList)
    }

    const handleAdd = () => {
        const todo = {
            id: Date.now(),
            task: newTask
        }
        setTodoList([...todoList, todo])
    }

    const resetAddField = () => {
        setNewTask('')
    }

    const resetSearchField = () => {
        setTerm('')
        setTodoList(initialTodos)
    }

    return (

        <div className="App">
            <Typography variant="h5" gutterBottom component="div">
                ReactTS Search-List Mui template
            </Typography> <p>&nbsp;</p>

            <Grid container={true}>
                <TextField variant='standard' margin="dense"  label="Search"
                    id='search'
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />

                <Button  size='small'
                    onClick={handleSearch}>
                        Search
                </Button>
                <Button size='small'
                    onClick={resetSearchField}>
                     Clear
                </Button>
            </Grid>

            <Grid container={true}>
                <TextField variant='standard'  margin="dense" label="Add"
                    id='add'
                    type='text'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button size='small'
                    onClick={handleAdd}>
                        Add
                </Button>
                <Button size='small'
                    onClick={resetAddField}>
                    Clear
                </Button>
            </Grid>

            <p>&nbsp;</p>
            <Divider />

            <TodosList todoList={todoList} onDelete={handleDelete}
            />
        </div>
    );
}

export default App;
