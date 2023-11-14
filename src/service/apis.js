import * as Api from './api_service'


const _prepareApiObj = (method, endpoint, body, state) => {
    const apiObject = {}
    apiObject.method = method;
    apiObject.endPoint = endpoint;
    apiObject.body = body;
    apiObject.state = state;
    return apiObject;
}

export async function searchFilms(name) {

    let url = `/search/shows?q=${name}`;
    return await Api.callApi(
        _prepareApiObj('get', url, null, 'auth')
    )
}


