import { fakeListing } from "./fake-data";

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => {
        return fakeListing;
    }
}