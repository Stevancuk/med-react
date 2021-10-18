// import PropTypes from 'prop-types';
import React from 'react';
import Table from '../Table/Table';
import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const ListaKlijenata = ({ logo, naslov, parentStateSetter}) => {

	const [singleViewVisibility, setSingleViewVisibility] = useState(0);

	useEffect(() => {
		parentStateSetter(singleViewVisibility);
	}, [parentStateSetter, singleViewVisibility]);

	const onUsersButtonClick = e => {
		//pass slider's event value to child's state
		setSingleViewVisibility(e.target.value);
	};

	const data = [
		{
			"id" 		: "1",
			"punoIme" 	: <Link className="klijentLink" userId="1" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Pedja Pavlovic</Link>,
			"tel" 		: "066/412-683",
			"tretman" 	: <Button variant="outline-primary" value="1" onClick={onUsersButtonClick}>Dodaj Tretman</Button>
		},
		{
			"id" 		: "2",
			"punoIme" 	: <Link className="klijentLink" userId="2" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Ilija Panajotovic</Link>,
			"tel" 		: "063/22-33-444",
			"tretman" 	: <Button variant="outline-primary" value="2" onClick={onUsersButtonClick}>Dodaj Tretman</Button>
		},
		{
			"id" 		: "3",
			"punoIme" 	: <Link className="klijentLink" userId="3" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Bojan Slavulj</Link>,
			"tel" 		: "064/12-34-567",
			"tretman" 	: <Button variant="outline-primary" value="3" onClick={onUsersButtonClick} >Dodaj Tretman</Button>
		},
		{
			"id" 		: "4",
			"punoIme" 	: <Link className="klijentLink" userId="4" onClick={((e) => goToUsersProfile(e, data))} to="/KlijentProfile">Stevan Cuk</Link>,
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

		let userID = data.target.attributes.userId.value;

		console.log(userID);

		localStorage.setItem('userID', userID);
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