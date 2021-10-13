import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';

import { Button } from 'react-bootstrap';

const NoviTretman = ({ parentState, parentStateSetter }) => {

    const [singleViewVisibility, setSingleViewVisibility] = useState(parentState);

	useEffect(() => {
		parentStateSetter(singleViewVisibility);
	}, [parentStateSetter, singleViewVisibility]);

    const onUsersButtonClick = () => {
		//pass slider's event value to child's state
		setSingleViewVisibility(0);
	};

	return (
		<div className="fullScreen">
            <div id="popupContainer" onClick={onUsersButtonClick}>
                <h2> Dodaj Tretman </h2>
                <h2> Id usera je: {parentState} </h2>
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