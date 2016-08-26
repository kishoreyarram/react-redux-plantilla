import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';
import CandidateRow from './CandidateTableRow';

const CandidateList = ({candidatesList, getYears}) => {
	let candidate = candidatesList.map((element, index) => {
		let propiedades = element.toJSON();
		propiedades.getYears = getYears;
		
		return (
			<CandidateRow key={index} {...propiedades} />
		); 
	}); 
	
	return ( 
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>{'Nombre'}</th>
					<th>{'Ape paterno'}</th>
					<th>{'Ape materno'}</th>
					<th>{'Edad'}</th>
				</tr>
			</thead>
			<tbody>
				{candidate}
			</tbody>	
		</Table>
	);
};

CandidateList.propTypes = {
	candidatesList: PropTypes.array,
	getYears: PropTypes.func 
};

export default CandidateList;
