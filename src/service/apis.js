import * as Api from './api_service'

const size = 10;

const _prepareApiObj = (method, endpoint, body, state) => {
    const apiObject = {}
    apiObject.method = method;
    apiObject.endPoint = endpoint;
    apiObject.body = body;
    apiObject.state = state;
    return apiObject;
}

/////////////////////////////////////////////////////////////
export async function searchFilms(name) {

    let url = `/search/shows?q=${name}`;
    console.log(url)
    return await Api.callApi(
        _prepareApiObj('get', url, null, 'auth')
    )
}


