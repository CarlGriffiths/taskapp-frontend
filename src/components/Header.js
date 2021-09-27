import PropTypes from 'prop-types'
import Button from './button'


const Header = ({ title, onAdd, displayAddButton }) => {
    const onClickFunction = () => {
        console.log('test button')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={displayAddButton ? 'red' : 'blue'} text={displayAddButton ? 'close' : 'add a task'} onClick={onAdd} />
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
