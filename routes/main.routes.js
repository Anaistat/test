import { Router} from "express";

const router = Router()
router.get('/', (req, res) => {
    res.status(200).send('<div>123</div>')
})

export default router