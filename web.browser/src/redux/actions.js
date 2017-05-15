export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_UPVOTE = 'SORT_BY_UPVOTE';
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const GET_WEEKS = 'GET_WEEKS';
export const GET_POSTS = 'GET_POSTS';

export const sortByDate = () => ({ type: SORT_BY_DATE });
export const sortByUpvotes = () => ({ type: SORT_BY_UPVOTE });
export const updateVote = id => ({ type: UPDATE_VOTE, id });

export const getWeeks = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/weeks')
            .then((response) => {
                console.log(response)
                if (!response.ok) Promise.reject('canny get da weeks');
                return response.json();
            })
            .then((json) => {
                dispatch({
                    type: GET_WEEKS,
                    payload: {
                        weeks: json
                    }
                });
            });
    };
};

export const getPosts = (postId) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/lessons/${postId}/posts`)
            .then((response) => {
                if (!response.ok) Promise.reject('canny get da posts');
                return response.json();
            })
        .then((json) => {
            dispatch({
                type: GET_POSTS,
                payload: {
                    posts: json
                }
            });
        });
    }
}


export const userLogin = (data) => {
    return (dispatch) => {
        console.log(data)
        const headers = new Headers({
            "Content-Type": "application/json"
        })

        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: headers,
            body: data,
            mode: 'cors',
            cache: 'default'
        }).then((response) => {
            console.log(response);
            getWeeks();
            if (!response.ok) Promise.reject('Invalid Login');
            return response.json();
        })
    }
}