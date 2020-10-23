import { useState, useCallback } from 'react'

const card = (props) => {
	const [select, setSelect] = useState(false)
	const handler = () => {
		setSelect(!select)
	}

	return (
		<img
			className='w-1/13'
			src={props.image}
			alt={props.image}
			onClick={handler}
			style={{
				filter: `${select ? 'invert(100%)' : 'none'}`,
			}}
		/>
	)
}

export default card
