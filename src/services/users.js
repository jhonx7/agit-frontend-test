import api from "./api";

export function getUsers(page = null) {
    if (page === null) {
        return api.get(`/users`);
    }
    return api.get(`/users?page=` + page);
}