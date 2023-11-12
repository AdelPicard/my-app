import {useState} from 'react'

function Home () {
    return (
    <div>
        Home
        <Contador />
    </div>
    )
}

function Contador () {
    const [count, setCount] = useState(1)

    function contar () {
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={contar}>Adicionar</button>
        </div>
    )
}

export default Home