import PropTypes from 'prop-types';
import React from 'react';
import Table from '../Table/Table';

const Zakazivanje = () => {

	const data = [
		{
			// "id"			: 1,
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
			// "id"			: 2,
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
			// "id"			: 3,
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
			// "id"			: 4,
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
			// "id"			: 5,
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
			// "id"			: 6,
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
			// "id"			: 7,
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
			// "id"			: 8,
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
			id		: 1,
		  	title 	: "",
		  	field 	: "vreme",
		},
		{
			id		: 2,
		  	title 	: "PON",
		  	field 	: "ponedeljak",
		},
		{
			id		: 3,
		  	title 	: "UTO",
		  	field 	: "utorak",
		},
		{
			id		: 4,
		  	title 	: "SRE",
		  	field 	: "sreda",
		},
		{
			id		: 5,
		  	title 	: "CET",
		  	field 	: "cetvrtak",
		},
		{
			id		: 6,
		  	title 	: "PET",
		  	field 	: "petak",
		},
		{
			id		: 7,
		  	title 	: "SUB",
		  	field 	: "subota",
		},
		{
			id		: 8,
		  	title 	: "NED",
		  	field 	: "nedelja",
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
			<h2 className="text-center">Tabela za Zakazivanje</h2>
			<Table 
				title={title} 
				data={data} 
				columns={columns} 
				options={options}
			/>
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