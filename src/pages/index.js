import Deck from '../components/Deck/Deck'
import cards from '../data/cards'

const Home = () => {
	return (
		<div>
			<Deck cards={cards} />
		</div>
	)
}

export default Home
