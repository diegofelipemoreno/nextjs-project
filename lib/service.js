import {requestUtil} from './utils';

export async function getEpisodePaths() {
    const response = await requestUtil(`${process.env.PRIVATE_API_URL}/episode`);
    const {info} = await response.body;
    const params = [];

    for (let index = 0; index < info.pages; index++) {
        params.push({params: {'id': (index + 1).toString()}});
    }

    return params;
};
  
export async function getEpisodesByPage(pageNumber) {
    const response = await requestUtil(`${process.env.PRIVATE_API_URL}/episode?page=${pageNumber}`);

    return response;
};
  