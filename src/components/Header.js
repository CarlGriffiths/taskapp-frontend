import PropTypes from 'prop-types'
import Button from './button'


const Header = ({title}) => {
    const onClickFunction = () => {
        console.log('test button')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='add task' onClick={onClickFunction}/>
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
