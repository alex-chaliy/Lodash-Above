
const _list = [
   {source: "Yahoo", time: 1558628950001, name:"All Web Leads", rpl: 7, cpl: 56, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Google", time: 1558600000002, name:"Rough Web Leads", rpl: 2, cpl: 85, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "FB", time: 1558600000002, name:"All Web Leads", rpl: 1, cpl: 11, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Yahoo", time: 1558611000003, name:"Precise Leads", rpl: 7, cpl: 22, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22}, 
   {source: "Google", time: 1558628950001, name:"All Web Leads", rpl: 12, cpl: 45, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "FB", time: 1558628950001, name:"All Web Leads", rpl: 1, cpl: 11, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Yahoo", time: 1558600000002, name:"All Web Leads", rpl: 7, cpl: 93, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Yahoo", time: 1550395953057, name:"Precise Leads", rpl: 10, cpl: 22, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "FB", time: 1558600000002, name:"Rough Web Leads", rpl: 1, cpl: 90, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Yahoo", time: 1558611000003, name:"All Web Leads", rpl: 71, cpl: 53, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Google", time: 1550595953059, name:"Precise Leads", rpl: 3, cpl: 36, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "FB", time: 1558600000002, name:"Precise Leads", rpl: 1, cpl: 73, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Google", time: 1558611000003, name:"Rough Web Leads", rpl: 2, cpl: 34, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "FB", time: 1558611000003, name:"All Web Leads", rpl: 3, cpl: 11, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Yahoo", time: 1558600000002, name:"Precise Leads", rpl: 7, cpl: 42, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Google", time: 1558611000003, name:"Precise Leads", rpl: 2, cpl: 45, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "FB", time: 1550335953056, name:"Precise Leads", rpl: 1, cpl: 11, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Yahoo", time: 1558611000003, name:"Rough Web Leads", rpl: 1, cpl: 34, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Google", time: 1558628950001, name:"Precise Leads", rpl: 2, cpl: 45, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Yahoo", time: 1558611000003, name:"All Web Leads", rpl: 7, cpl: 56, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "Google", time: 1558628950001, name:"Rough Web Leads", rpl: 2, cpl: 45, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22},
   {source: "FB", time: 1558628950001, name:"Precise Leads", rpl: 1, cpl: 33, roi: 183, p_l: 3453, cost: 15000, revenueFull: 375, revenueCalls: 133, revenueLeads: 122, perOfLeads: 33, leads: 22}
];


const dateToFilter = 1558611000003;
const list = _.filter(_list, {time: dateToFilter});


const res3 = _groupObjectsBy( 'source', list, 'groupName', 'items' )
	.map(group => {
		group['items'] = _groupObjectsBy( 'time', group['items'], 'groupName', 'items' );
		return group;
	});


const res2 = _groupObjectsBy( 'time', list, 'groupName', 'items' );


const nameToFilter = 'Precise Leads';
const res1 = _.filter(list, {name: nameToFilter});


console.log( '\n\n\n res 3 : \n', res3 );
console.log( '\n\n\n res 2 : \n', res2 );
console.log( '\n\n\n res 1 : \n', res1 );



function _groupObjectsBy( propName, objectsArray, outputGroupName, outputValuesName ) {
	const result = _( objectsArray )
		.groupBy( obj => obj[ propName ] )
		.map( (values, key) => {
			const obj = {};
			obj[ 'groupedBy' ] = propName;
			obj[ outputGroupName ] = key;
			obj[ outputValuesName ] = values;
			return obj;
		})
		.value();
    return result;
}


