import Card from './Card'

const Deck = (props) => {
	return (
		<div className='flex flex-wrap'>
			{props.cards.map((card, key) => (
				<Card image={card} key={key} />
			))}
		</div>
	)
}

export default Deck
