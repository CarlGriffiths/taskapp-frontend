import PropTypes from 'prop-types'
import Button from './button'
import { useLocation } from 'react-router'


const Header = ({ title, onAdd, displayAddButton }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button
                color={displayAddButton ? 'red' : 'blue'}
                text={displayAddButton ? 'close' : 'add a task'}
                onClick={onAdd}
            />
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'test title',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

export default Header
