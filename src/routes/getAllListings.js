import { db } from "../database";

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        console.log("GET request to /api/listings");
        
        const { results } = await db.query(
            'SELECT * FROM listings'
        );
        return results;
    }
}