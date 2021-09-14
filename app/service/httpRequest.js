

class HttpRequest {

    constructor() {

    }

    get = (url, params) => {
        const HTTP = new XMLHttpRequest();
        let link = 'http://127.0.0.1:8000' + url + "?";
        for (var item in params) {
            link += item + '=' + params[item];
        }
        HTTP.open('GET', link, false)
        HTTP.setRequestHeader('Content-type', 'application/json');
        HTTP.send();
        return {
            data: JSON.parse(HTTP.response),
            status: HTTP.status
        }

    }


    post = (url, params) => {
        const HTTP = new XMLHttpRequest();
        HTTP.open('POST', 'http://127.0.0.1:8000' + url, false)
        HTTP.setRequestHeader('Content-type', 'application/json');
        HTTP.send(JSON.stringify(params));
        return {
            data: JSON.parse(HTTP.response),
            status: HTTP.status
        }
    }

}

export default new HttpRequest();