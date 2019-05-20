import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()
export const browseTo = path => history.push(path)