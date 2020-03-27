const domain = '/api';

const get = async <R>(path: string): Promise<R> => {
    const response = await fetch(domain + path);

    if (response.status !== 200) {
        throw Error(await response.text());
    }

    return response.json();
};

export const service = {
    get
};
