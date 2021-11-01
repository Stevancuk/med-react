// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';

const Usluge = () => {

    const [contentValue, changeContent] = useState('');

    function getContent() {

        if (contentValue == "dodaj") {
            return (
                <h1>DODAJ NOVU</h1>
            )
        } else if (contentValue == "lista") {
            return (
                <h1>LISTA USLUGA</h1>
            )
        } else if (contentValue == "izmeni") {
            return (
                <h1>IZMENI / OBRISI</h1>
            )
        } else {
            return "";
        }
    }

    function userChangeContent(text) {
        changeContent(text);
    }

    useEffect(() => {
		changeContent(contentValue);
	}, [contentValue]);

	return (
		<div id="usluge_wrapper" className="w-60">
            <div id="usluge_buttons" className="d-flex justify-content-center mx-0">
                <Button
                    className="col-3 mx-3"
                    onClick={(e) => userChangeContent('dodaj')}
                >
                        Dodaj Novu
                    </Button>
                <Button
                    className="col-3 mx-3"
                    onClick={(e) => userChangeContent('lista')}
                >
                        Lista Usluga
                    </Button>
                <Button
                    className="col-3 mx-3"
                    onClick={(e) => userChangeContent('izmeni')}
                >
                        Izmeni / Obrisi
                    </Button>
            </div>
            <div id="usluge_content" className="d-flex justify-content-center mx-0 mt-5">
                <div className="col-4 text-center">
                    {getContent}
                </div>
            </div>
		</div>
	)
}

Usluge.defaultProps = {
	// title: 'MED Estetik',
}

Usluge.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default Usluge;