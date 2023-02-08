import { Router } from "express";
import { getUnits } from "../controllers/unit";

const router = Router();

router.get('/', getUnits);

export default router;