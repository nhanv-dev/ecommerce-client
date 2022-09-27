export default {
    API_CATEGORIES: 'http://localhost:8080/api/v1/categories/',
    OPTIONS: (method, body) => {
        return {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }
    }
}