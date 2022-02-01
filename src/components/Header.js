import Button from './Button'

const Header = ({ title, onAdd,showAdd }) => {



	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> 
		</header>
		)
}

const styles ={
	color: "red",
	fontSize: 18
}

Header.defaultProps = {
	title: 'Task Tracker'
}


export default Header;