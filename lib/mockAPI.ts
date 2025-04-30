import mockJson from './data.json'

export const mockGetApiCall = async (): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockJson);
        }, 6000);
    });
};