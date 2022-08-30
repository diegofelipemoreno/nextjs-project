import {requestUtil} from '../../lib/utils';

export default async function handler(req, res) {
    const {name} = req.query;
    const response = await requestUtil(`${process.env.PRIVATE_API_URL}/character/?name=${name}`);
    const {statusCode, body} = await response;
    const {results} = await body;

    return res.status(statusCode).json(results);
};