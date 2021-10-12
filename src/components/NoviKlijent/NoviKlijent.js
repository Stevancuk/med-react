import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const NoviKlijent = () => {
	const [name, setName] = useState('');
	const [lastName, setlastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('123');

		// if(!text) {
		// 	setName('');
		// 	setlastName('');
		// 	setPhone('');
		// 	setEmail('');
		// 	setBirthday('');
		// }
	}

	return (
		<div>
			<h2> Novi Klijent </h2>

			<Form className="mb-3 mx-auto col-10 col-sm-8 col-lg-4" onSubmit={handleSubmit}>
				<Form.Group className="mb-4" controlId="new-client-name">
					<Form.Label>Ime</Form.Label>
					<Form.Control type="text" placeholder="Enter First Name" required value={name} onChange={(e) => setName(e.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-4" controlId="new-client-last-name">
					<Form.Label>Prezime</Form.Label>
					<Form.Control type="text" placeholder="Enter Last Name" required value={lastName} onChange={(e) => setlastName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-4" controlId="new-client-phone">
					<Form.Label>Broj Telefona</Form.Label>
					<Form.Control type="text" placeholder="Enter Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-4" controlId="new-client-email">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-4" controlId="new-client-birthday">
					<Form.Label>Datum Rodjenja</Form.Label>
					<Form.Control type="date" placeholder="Enter Date of Birth" required value={birthday} onChange={(e) => setBirthday(e.target.value)} />
				</Form.Group>

				{/*<Form.Group className="mb-4" controlId="new-client-heckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>*/}
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}

NoviKlijent.defaultProps = {
	// title: 'MED Estetik',
}

NoviKlijent.propTypes = {
	// title:  PropTypes.string.isRequried,
}

export default NoviKlijent;