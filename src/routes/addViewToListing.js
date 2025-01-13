import Boom from "@hapi/boom";
import { db } from "../database";

export const addViewToListingRoute = {
    method: 'PATCH',
    path: '/api/listings/{id}/add-view',
    handler: async (req, h) => {
        const id = req.params.id;
        await db.query(
            'UPDATE listings SET views = views + 1 WHERE id=?',
            [id]
        );
        const { results } = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id]
        );
        const updatedListing = results[0];
        if (!updatedListing) throw Boom.notFound(`Listing does not exist with id ${id}`);
        console.log(`Just viewed the listing with id ${id}`);
        return updatedListing;
    }
}