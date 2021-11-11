import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopMenu = () => {
	return (
		<div id="top-menu" className="col-9 mx-auto">
			<h2 className="text-center"> Osnovni Ekran </h2>

			<div className="d-flex justify-content-center">
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
		</div>
	)
}

TopMenu.defaultProps = {
	// title: 'MED Estetik',
}

TopMenu.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default TopMenu;