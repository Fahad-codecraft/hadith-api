import 'dotenv/config'

import app from './src/app.js'

const run = async () => {
    try {
        const port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log(`Server is up on port ${port}`);
        })
    } catch (error) {
        console.error(error)
    }
}
run()