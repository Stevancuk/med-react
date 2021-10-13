import PropTypes from 'prop-types';
import React from 'react';
import Table from '../Table/Table';

const Zakazivanje = () => {

	const data = [
		{
			"vreme" 		: "8:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "-",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		},
		{
			"vreme" 		: "9:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "Ilija",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		},
		{
			"vreme" 		: "10:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "-",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		},
		{
			"vreme" 		: "11:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "-",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		},
		{
			"vreme" 		: "12:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "-",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		},
		{
			"vreme" 		: "13:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "-",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		},
		{
			"vreme" 		: "14:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "-",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		},
		{
			"vreme" 		: "15:00",
			"ponedeljak" 	: "-",
			"utorak" 		: "-",
			"sreda" 		: "-",
			"cetvrtak" 		: "-",
			"petak" 		: "-",
			"subota" 		: "-",
			"nedelja" 		: "-",
		}
	];

	const columns = [
		{
		  	title: "",
		  	field: "vreme",
			editable: "never"
		},
		{
		  	title: "PON",
		  	field: "ponedeljak",
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
		<div className="w-80">
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