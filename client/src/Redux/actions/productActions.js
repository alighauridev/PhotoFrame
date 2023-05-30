import {
    ARTWORK_FILTERS_FAIL,
    ARTWORK_FILTERS_REQUEST,
    ARTWORK_FILTERS_SUCCESS,
    ARTWORK_LIST_FAIL,
    ARTWORK_LIST_REQUEST,
    ARTWORK_LIST_SUCCESS,
    FRAME_FILTERS_FAIL,
    FRAME_FILTERS_REQUEST,
    FRAME_FILTERS_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    ARTWORK_DETAILS_FAIL,
    ARTWORK_DETAILS_SUCCESS,
    ARTWORK_DETAILS_REQUEST
} from "../constants/productConstants";
import axios from "../../api/axios";
import { toast } from "react-toastify";

export const getProducts =
    ({ keyword = "", pageNumber = "", material = "" }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: PRODUCT_LIST_REQUEST,
                });

                const url = `/api/frame?keyword=${keyword}&pageNumber=${pageNumber}&category=${material}`;

                const { data } = await axios.get(url);

                dispatch({
                    type: PRODUCT_LIST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: PRODUCT_LIST_FAIL,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        };
export const getArtworks =
    ({ keyword = "", pageNumber = "", material = "" }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: ARTWORK_LIST_REQUEST,
                });

                const url = `/api/artwork?keyword=${keyword}&pageNumber=${pageNumber}&category=${material}`;

                const { data } = await axios.get(url);

                dispatch({
                    type: ARTWORK_LIST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: ARTWORK_LIST_FAIL,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        };

export const getFilters = () => async (dispatch) => {
    try {
        dispatch({
            type: FRAME_FILTERS_REQUEST,
        });

        const url = `/api/categories/frame`;

        const { data } = await axios.get(url);

        dispatch({
            type: FRAME_FILTERS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FRAME_FILTERS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const getArtworkFilters = () => async (dispatch) => {
    try {
        dispatch({
            type: ARTWORK_FILTERS_REQUEST,
        });

        const url = `/api/categories/art`;

        const { data } = await axios.get(url);

        dispatch({
            type: ARTWORK_FILTERS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ARTWORK_FILTERS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// export const getProducts =
//     (keyword = "", pageNumber = "") =>
//         async (dispatch, getState) => {
//             try {
//                 dispatch({
//                     type: PRODUCT_LIST_REQUEST,
//                 });

//                 const { data } = await axios.get(
//                     `/api/frame?keyword=${keyword}&pageNumber=${pageNumber}`
//                 );

//                 dispatch({
//                     type: PRODUCT_LIST_SUCCESS,
//                     payload: data,
//                 });
//             } catch (error) {
//                 dispatch({
//                     type: PRODUCT_LIST_FAIL,
//                     payload:
//                         error.response && error.response.data.message
//                             ? error.response.data.message
//                             : error.message,
//                 });
//             }
//         };

export const getSingleProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        });
        const { data } = await axios.get(`/api/frame/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
// export const getProducts =
//     (keyword = "", pageNumber = "") =>
//         async (dispatch, getState) => {
//             try {
//                 dispatch({
//                     type: PRODUCT_LIST_REQUEST,
//                 });

//                 const { data } = await axios.get(
//                     `/api/frame?keyword=${keyword}&pageNumber=${pageNumber}`
//                 );

//                 dispatch({
//                     type: PRODUCT_LIST_SUCCESS,
//                     payload: data,
//                 });
//             } catch (error) {
//                 dispatch({
//                     type: PRODUCT_LIST_FAIL,
//                     payload:
//                         error.response && error.response.data.message
//                             ? error.response.data.message
//                             : error.message,
//                 });
//             }
//         };

export const getSingleArtwork = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ARTWORK_DETAILS_REQUEST,
        });
        const { data } = await axios.get(`/api/artwork/${id}`);
        dispatch({
            type: ARTWORK_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ARTWORK_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createNoteAction =
    (title, content, category) => async (dispatch, getState) => {
        try {
            dispatch({
                type: PRODUCT_CREATE_REQUEST,
            });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.post(
                `/api/notes/create`,
                { title, content, category },
                config
            );

            dispatch({
                type: PRODUCT_CREATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            dispatch({
                type: PRODUCT_CREATE_FAIL,
                payload: message,
            });
        }
    };

export const deleteNoteAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.delete(`/api/notes/${id}`, config);

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message,
        });
    }
};

export const updateNoteAction =
    (id, title, content, category) => async (dispatch, getState) => {
        try {
            dispatch({
                type: PRODUCT_UPDATE_REQUEST,
            });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.put(
                `/api/notes/${id}`,
                { title, content, category },
                config
            );

            dispatch({
                type: PRODUCT_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            dispatch({
                type: PRODUCT_UPDATE_FAIL,
                payload: message,
            });
        }
    };

export const createReviewAction =
    (productId, review) => async (dispatch, getState) => {
        try {
            dispatch({
                type: PRODUCT_CREATE_REVIEW_REQUEST,
            });

            const {
                UserLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            axios.post(`/api/products/${productId}/review`, review, config);

            dispatch({
                type: PRODUCT_CREATE_REVIEW_SUCCESS,
            });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            dispatch({
                type: PRODUCT_CREATE_REVIEW_FAIL,
                payload: message,
            });
            toast.error("already reviewd Submited!");
        }
    };
