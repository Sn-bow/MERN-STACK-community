import { Link } from 'react-router-dom'

const Heading = () => {
    return (
        <>
            <h1>
                Hello, React!
            </h1>
            <Link to='/'> home </Link>
            <Link to='/list'> list </Link>
            <Link to='/upload'> upload </Link>
        </>
    )
}

export default Heading;