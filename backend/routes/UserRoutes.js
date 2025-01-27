import express from "express";
const router = express.Router();
import { AuthUser,
        registerUser,
        logoutUser,
        getUserProfile,
        updateUserProfile } from "../controllers/UserController.js";
import  {protect} from "../middleware/authMiddleware.js"
router.post('/', registerUser);
router.post('/auth', AuthUser);
router.post('/logout', logoutUser);
// router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/profile').get(protect,getUserProfile);
router.post('/profile',protect,updateUserProfile)



export default router;