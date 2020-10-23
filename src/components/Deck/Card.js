import { useState } from 'react'

const card = (props) => {
	const [select, setSelect] = useState(false)
	return <img className='w-1/6' src={props.image} alt={props.image} />
}

export default card
