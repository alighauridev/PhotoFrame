import { getProductconstants } from "../constants/actionTypes";
import {
    FRAME_FILTERS_FAIL,
    FRAME_FILTERS_REQUEST,
    FRAME_FILTERS_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    ARTWORK_LIST_REQUEST,
    ARTWORK_LIST_SUCCESS,
    ARTWORK_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    ARTWORK_FILTERS_REQUEST,
    ARTWORK_FILTERS_FAIL,
    ARTWORK_FILTERS_SUCCESS,
    ARTWORK_DETAILS_FAIL,
    ARTWORK_DETAILS_SUCCESS,
    ARTWORK_DETAILS_REQUEST
} from "../constants/productConstants";

const initialstate = {
    products: [],
};
// GET all products 

export const allProductsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                pages: action.payload.pages,
                page: action.payload.page,
                frames: action.payload.frames,
            };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const allArtworkReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ARTWORK_LIST_REQUEST:
            return { loading: true, products: [] };
        case ARTWORK_LIST_SUCCESS:
            return {
                loading: false,
                pages: action.payload.pages,
                page: action.payload.page,
                artworks: action.payload.artworks,
            };
        case ARTWORK_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const frameFilterReducer = (state = {

}, action) => {
    switch (action.type) {
        case FRAME_FILTERS_REQUEST:
            return { loading: true, state };
        case FRAME_FILTERS_SUCCESS:
            return {

                categories: action.payload,
            };
        case FRAME_FILTERS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const artworkFilterReducer = (state = {

}, action) => {
    switch (action.type) {
        case ARTWORK_FILTERS_REQUEST:
            return { loading: true, state };
        case ARTWORK_FILTERS_SUCCESS:
            return {

                categories: action.payload,
            };
        case ARTWORK_FILTERS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// get single products 

export const productCreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true, };
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_REVIEW_RESET:
            return {};
        default:
            return state;
    }
};



// get single products 

export const singleProductReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true, products: [] };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const singleArtworkReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case ARTWORK_DETAILS_REQUEST:
            return { ...state, loading: true, products: [] };
        case ARTWORK_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case ARTWORK_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
