// import PropTypes from 'prop-types';
import React from 'react';
import Table from '../Table/Table';
import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const ListaKlijenata = ({ logo, naslov, parentState, parentStateSetter}) => {

	const [singleViewVisibility, setSingleViewVisibility] = useState(0);

	useEffect(() => {
		parentStateSetter(singleViewVisibility);
	}, [singleViewVisibility]);

	//Ovo je falilo: Da se promeni state ove komponente kada se promeni parentov state
	//Tj. kada zatvaranje komponente NoviTretman, promeni App-ov state na 0;
	useEffect(() => {
		setSingleViewVisibility(parentState);
	}, [parentState]);

	const onUsersButtonClick = e => {
		//pass slider's event value to child's state
		setSingleViewVisibility(e.target.value);
	};

	const data = [
		{
			"id" 		: "1",
			//Poshto je <Link> komponenta react-router-dom, ona nema definisan prop 'userid'
			//Pa mislim da bi morali da napravimo nashu komponentu, koja u sebi sadrzi <Link>
			//da bi toj nashoj komponenti mogli da definishemo propove po potrebi
			"punoIme" 	: <Link className="klijentLink" userid="1" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Pedja Pavlovic</Link>,
			"tel" 		: "066/412-683",
			"tretman" 	: <Button variant="outline-primary" value="1" onClick={onUsersButtonClick}>Dodaj Tretman</Button>
		},
		{
			"id" 		: "2",
			"punoIme" 	: <Link className="klijentLink" userid="2" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Ilija Panajotovic</Link>,
			"tel" 		: "063/22-33-444",
			"tretman" 	: <Button variant="outline-primary" value="2" onClick={onUsersButtonClick}>Dodaj Tretman</Button>
		},
		{
			"id" 		: "3",
			"punoIme" 	: <Link className="klijentLink" userid="3" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Bojan Slavulj</Link>,
			"tel" 		: "064/12-34-567",
			"tretman" 	: <Button variant="outline-primary" value="3" onClick={onUsersButtonClick} >Dodaj Tretman</Button>
		},
		{
			"id" 		: "4",
			"punoIme" 	: <Link className="klijentLink" userid="4" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Stevan Cuk</Link>,
			"tel" 		: "065/98-76-543",
			"tretman" 	: <Button variant="outline-primary" value="4" onClick={onUsersButtonClick} >Dodaj Tretman</Button>
		}
	]

	const columns = [
		{
		  	title		: "ID",
		  	field		: "id",
			editable	: "never"
		},
		{
			title		: "Ime i Prezime",
			field		: "punoIme"
	  	},
		{
			title		: "Br. Telefona",
			field		: "tel"
		},
		{
			title		: "Novi Tretman",
			field		: "tretman",
			editable 	: 'never'
		}
	]

	const options = { 
		search 			: true, 
		paging 			: false,
		// filtering 		: true,
		exportButton 	: true
	};

	const title = "";

	function goToUsersProfile(data) {

		let userid = data.target.attributes.userid.value;

		console.log(userid);

		localStorage.setItem('userid', userid);
	  }	

	return (
		<div className="w-60">
			<h2> Lista Klijenata </h2>
			<Table title={title} data={data} columns={columns} options={options}/>
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