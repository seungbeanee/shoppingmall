function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let data = await fetch(`https://my-json-server.typicode.com/seungbeanee/shoppingmall/products${searchQuery}`)
                            .then((res) => res.json());
        dispatch({type: "GET_PRODUCT_SUCCESS",payload:{data}})
    }
}

function getProductDetail(id) {
    return async (dispatch) => {
        let data = await fetch(`https://my-json-server.typicode.com/seungbeanee/shoppingmall/products/${id}`).then((res) => res.json());
        dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data }});
    };
}

export const productAction = { getProducts, getProductDetail }