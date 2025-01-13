import Boom from "@hapi/boom";
import { db } from "../database";

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        const userId = req.params.userId;
        // Here we have to check if the user trying to get the listings is the one authenticated
        const { results } = await db.query(
            'SELECT * FROM listings WHERE user_id=?',
            [userId]
        );

        return results;
    }
}