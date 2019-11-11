export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SET_GENRE = 'SET_GENRE';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function setGenre(genre) {
    return {
        type: SET_GENRE,
        genre
    }
}

export function searchProducts(searchText) {
    return {
        type: SEARCH_PRODUCTS,
        searchText
    }
}