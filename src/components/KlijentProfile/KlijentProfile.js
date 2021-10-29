// import PropTypes from 'prop-types';
import React from 'react';
import Table from '../Table/Table';
import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const KlijentProfile = ({parentState, parentStateSetter}) => {

    let userID = localStorage.getItem('userID');

	const data = [
		{
			"datum" 	: "24.08.2021.",
			"usluga" 	: "Epilacija",
			"cena" 		: "8.000 din"
		},
		{
			"datum" 	: "25.08.2021.",
			"usluga" 	: "Filer",
			"cena" 		: "20.400 din"
		},
		{
			"datum" 	: "26.08.2021.",
			"usluga" 	: "Masaza",
			"cena" 		: "1.500 din"
		}
	]

	const columns = [
		{
		  	title		: "Datum",
		  	field		: "datum",
			editable	: "never"
		},
		{
			title		: "Usluga",
			field		: "usluga",
			editable	: "never"
	  	},
		{
			title		: "Cena",
			field		: "cena",
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

	const [singleViewVisibility, setSingleViewVisibility] = useState(0);

	useEffect(() => {
		parentStateSetter(singleViewVisibility);
	}, [parentStateSetter, singleViewVisibility]);

	useEffect(() => {
		setSingleViewVisibility(parentState);
	}, [parentState]);

	const onUsersButtonClick = e => {
		//pass slider's event value to child's state
		setSingleViewVisibility(e.target.value);
	};

	return (
		<div className="">
			<Link className="klijentLink listaKlijenataLink" to="/ListaKlijenata">Lista Klijenata</Link>
			<div className="w-60">
				<h2> ID-{userID} Pedja Pavlovic </h2>
				<Button className="m-3" variant="outline-primary" value="1" onClick={onUsersButtonClick}>Dodaj Tretman</Button>
				<Table title={title} data={data} columns={columns} options={options}/>
			</div>
		</div>
	)
}

KlijentProfile.defaultProps = {
	// title: 'MED Estetik',
}

KlijentProfile.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default KlijentProfile;