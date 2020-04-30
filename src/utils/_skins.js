/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	ets2-dashboard-skin
 * file: 	_config.js
 * Date: 	08/04/2020
 * Time: 	17:50
 */

import axios    from 'axios';
import utilsApp from './_app';

const skinsData = () => {
	const path = utilsApp.basePathHost + 'skins.json';
	//console.log( path );
	return axios.get( path )
				.then( response => {
					//console.log( 'Config', response.data );
					return response.data;
				} );
};

export default {
	skinsData
};