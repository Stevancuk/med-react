import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs = () => {
	return (
		<div id="top-menu">
			<h2> Osnovni Ekran </h2>

			<ButtonGroup vertical>
				<Button variant="outline-dark" size="lg">
					<Link to="/noviKlijent">
	                    Novi Klijent
	                </Link>
				</Button>
				<Button variant="outline-dark" size="lg">
					<Link to="/listaKlijenata">
	                    Lista Klijenta
	                </Link>
				</Button>
				<Button variant="outline-dark" size="lg">
					<Link to="/zakazivanje">
	                    Zakazivanje
	                </Link>
				</Button>
				<Button variant="outline-dark" size="lg">
					<Link to="/dnevniPromet">
	                    Dnevni Promet
	                </Link>
				</Button>
				<Button variant="outline-dark" size="lg">
					<Link to="/usluge">
	                    Usluge
	                </Link>
				</Button>
			</ButtonGroup>
		</div>
	)
}

ContactUs.defaultProps = {
	// title: 'MED Estetik',
}

ContactUs.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default ContactUs;