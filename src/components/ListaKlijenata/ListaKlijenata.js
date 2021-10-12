import PropTypes from 'prop-types';

const ListaKlijenata = ({ logo, title }) => {
	return (
		<div>
			<h2> Lista Klijent </h2>
		</div>
	)
}

ListaKlijenata.defaultProps = {
	// title: 'MED Estetik',
}

ListaKlijenata.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default ListaKlijenata;