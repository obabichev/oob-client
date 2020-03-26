const get = async <R>(path: string): Promise<R> => {
    const response = await fetch(path);

    if (response.status !== 200) {
        throw Error(await response.text());
    }

    return response.json();
};

export const service = {
    get
};
