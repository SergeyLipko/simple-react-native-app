import { GET, POST, DELETE, PATCH } from './http';

export const loadUsers = url => GET(`/${url}`).then(res => res.data);