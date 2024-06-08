import { createAdminClient } from '../db/appwrite.js'
import { Query } from 'node-appwrite'

const {
    APPWRITE_DATABASE_ID: DB_ID,
    APPWRITE_HADITH_COLLECTION_ID: COLL_ID
} = process.env

export const getHadith = async (req, res) => {
    try {
        const { database } = await createAdminClient()
        const total = 11699

        const randomNum = Math.floor(
            Math.random() * (total - 1)
        );

        const hadith = await database.listDocuments(
            DB_ID,
            COLL_ID,
            [Query.limit(1), Query.offset(randomNum)]
        )

        res.status(200).json(hadith.documents[0]);
    } catch (error) {
        res.status(400).send(e);
    }

}