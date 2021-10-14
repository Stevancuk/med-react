import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';

import { Form, Button } from 'react-bootstrap';

const Forma = ({ elements, parentState, parentStateSetter }) => {

    const [singleViewVisibility, setSingleViewVisibility] = useState(parentState);

	useEffect(() => {
		parentStateSetter(singleViewVisibility);
	}, [parentStateSetter, singleViewVisibility]);

    const onUsersButtonClick = () => {
		//pass slider's event value to child's state
		setSingleViewVisibility(0);
	};

    return (

        <Form className="mt-5">
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
                <Button className="mt-3" variant="primary" type="submit" onClick={onUsersButtonClick}>
                    Submit
                </Button>
            </Form.Group>
        </Form>
	)
}

Forma.defaultProps = {
	// title: 'MED Estetik',
}

Forma.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default Forma;
