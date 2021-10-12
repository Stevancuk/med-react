import PropTypes from 'prop-types';
import React from 'react';
import Table from '../Table/Table';

const Zakazivanje = () => {

	const data = [
		{
			"vreme" : "8:00",
		},
		{
			"vreme" : "9:00",
		},
		{
			"vreme" : "10:00",
		},
		{
			"vreme" : "11:00",
		},
		{
			"vreme" : "12:00",
		},
		{
			"vreme" : "13:00",
		},
		{
			"vreme" : "14:00",
		},
		{
			"vreme" : "15:00",
		}
	];

	const columns = [
		{
		  	title: "",
		  	field: "vreme",
		},
		{
		  	title: "PON",
		  	field: "ponedeljan",
		},
		{
		  	title: "UTO",
		  	field: "utorak",
		},
		{
		  	title: "SRE",
		  	field: "sreda",
		},
		{
		  	title: "CET",
		  	field: "cetvrtak",
		},
		{
		  	title: "PET",
		  	field: "petak",
		},
		{
		  	title: "SUB",
		  	field: "subota",
		},
		{
		  	title: "NED",
		  	field: "nedelja",
		},
	];

	const options = { 
		search 			: true, 
		paging 			: false,
		// filtering 		: true, 
		// exportButton 	: true
	};

	const title = "Nedelja 23.08 - 29.08.2021";

	return (
		<div className="w-60">
			<h2>Tabel goes here</h2>
			<Table title={title} data={data} columns={columns} options={options}/>
		</div>
	)
}

Zakazivanje.defaultProps = {
	// title: 'MED Estetik',
}

Zakazivanje.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default Zakazivanje;