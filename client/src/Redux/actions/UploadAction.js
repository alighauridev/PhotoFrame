
import axios from "axios";
import { toast } from "react-toastify";
export const UploadAction =
    ({ keyword = '', pageNumber = '', type = '', material = '', color = '' }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: createArtwork,
                });

                const url = `/api/art/artwork`;

                const { data } = await axios.set(url);

                dispatch({
                    type: createArtwork,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: createArtwork,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        };