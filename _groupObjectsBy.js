let _ = require('lodash');

let securedValues = [
  { contract_id: "123", id_counterparty: "11" } , 
  { contract_id: "124", id_counterparty: "12" } , 
  { contract_id: "127", id_counterparty: "11" } , 
  { contract_id: "129", id_counterparty: "14" } , 
];

let res = _groupObjectsBy( 'id_counterparty', securedValues, 'groupName', 'values' );

console.log( res );


function _groupObjectsBy( propName, objectsArray, outputGroupName, outputValuesName ) {
	let result = _( objectsArray )
		.groupBy( obj => obj[ propName ] )
		.map( (values, key) => {
			let obj = {};
			obj[ outputGroupName ] = key;
			obj[ outputValuesName ] = values;
			return obj;
		})
		.value();
    return result;
}