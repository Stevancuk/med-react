import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';

import { Form, Button } from 'react-bootstrap';
import Forma from '../Forma/Forma';

const NoviTretman = ({ parentState, parentStateSetter }) => {

    const [singleViewVisibility, setSingleViewVisibility] = useState(parentState);

	useEffect(() => {
		return () => {
			parentStateSetter(0);
		};
	});

    const onUsersButtonClick = (e) => {
		//pass slider's event value to child's state
		e.preventDefault();
		setSingleViewVisibility(0);
	};

	const elements = [
		[
			{
				"type" : "label",
				"text" : "Dostupne Nedelje"
			},
			{
				"type" 			: "select",
				"placeholder" 	: "Odaberi Nedelje",
				"options" 		: [
					{
						"value" : 0,
						"text" 	: "Odaberi Nedelju"
					},
					{
						"value" : 1,
						"text" 	: "Nedelja 23.08 - 29.08.2021"
					},
					{
						"value" : 2,
						"text" 	: "Nedelja 29.08 - 05.09.2021"
					}
				]
			},
			{
				"type" : "label",
				"text" : "Dostupni Dani"
			},
			{
				"type" 			: "select",
				"placeholder" 	: "Odaberi Dan",
				"options" 		: [
					{
						"value" : 0,
						"text" 	: "Odaberi Dan"
					},
					{
						"value" : 1,
						"text" 	: "Ponedeljak"
					},
					{
						"value" : 2,
						"text" 	: "Utorak"
					}
				]
			},
			{
				"type" : "button",
			}
		]
	]

	return (
		<div className="fullScreen">
            <div id="popupContainer">
                <h2> Dodaj Tretman </h2>
				{/* <Forma elements={elements} /> */}
				<Form className="mt-5" onSubmit={((e) => onUsersButtonClick(e))}>
					<h4> ID{parentState}: Pedja Pavlovic </h4>
					<Form.Group className="mb-3 w-60">
						<Form.Label>Dostupne Nedelje</Form.Label>
						<Form.Select placeholder="Odaberi Nedelju">
							<option value="0">Odaberi Nedelju</option>
							<option value="1">Nedelja 23.08 - 29.08.2021</option>
							<option value="2">Nedelja 29.08 - 05.09.2021</option>
						</Form.Select>
						<Form.Label className="mt-3">Dostupni Dani</Form.Label>
						<Form.Select placeholder="Odaberi Dan">
							<option value="0">Odaberi Dan</option>
							<option value="1">Ponedeljak</option>
							<option value="2">Utorak</option>
							<option value="3">Sreda</option>
							<option value="4">Cetvrtak</option>
							<option value="5">Petak</option>
							<option value="6">Subota</option>
							<option value="7">Nedelja</option>
						</Form.Select>
						<Form.Label className="mt-3">Dostupni Termini</Form.Label>
						<Form.Select placeholder="Odaberi Termin">
							<option value="0">Odaberi Termin</option>
							<option value="1">8:00h</option>
							<option value="2">11:00h</option>
							<option value="3">12:00h</option>
							<option value="4">15:00h</option>
						</Form.Select>
						<Form.Label className="mt-3">Usluge</Form.Label>
						<Form.Select placeholder="Odaberi Uslugu">
							<option value="0">Odaberi Uslugu</option>
							<option value="1">Epilacija</option>
							<option value="2">Masaza</option>
							<option value="4">Filer</option>
						</Form.Select>
						<Button className="mt-3" variant="primary" type="submit">
							Submit
						</Button>
					</Form.Group>
				</Form>
            </div>		
		</div>
	)
}

NoviTretman.defaultProps = {
	// title: 'MED Estetik',
}

NoviTretman.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default NoviTretman;