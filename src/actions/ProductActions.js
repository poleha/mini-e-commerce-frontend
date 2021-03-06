import { LOAD_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL } from '../constants/Product'
import { API_KEY } from '../middleware/api'
import { serializeParams, apiHost} from '../helpers/helper'
import { product } from '../schemas'
const endpoint = apiHost + '/user_products/';


export function loadProducts(params, id) {
    return function (dispatch, getState) {
        let loading = getState().product.loading;
        if (!loading) {
        let urlParams = '';


            if (params) {

                urlParams = serializeParams(params);
            }

        let currentEndpoint = endpoint;
        if (id) currentEndpoint += `${id}/`

        let action = {
            [API_KEY]: {
                method: 'get',
                endpoint: currentEndpoint + '?' + urlParams,
                schema: product,
                actions: [LOAD_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL]
            }
            //query: params.body
        }
        return dispatch(action);
    }
    }
}


