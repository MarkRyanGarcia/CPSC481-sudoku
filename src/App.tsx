import './App.css'
import Grid from './components/Grid'

function App() {

    return (
        <>
            <h1 className='text-center text-5xl py-5'>
                Sudoku Solver
            </h1>
            <div className='flex justify-center'>
                <Grid />
            </div>
        </>
    )
}

export default App
