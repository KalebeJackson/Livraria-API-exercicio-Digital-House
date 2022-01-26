const express = require("express");
const livroController = require('../controllers/livrosController')
const router = express.Router();

router.get("",livroController.index)
router.post("",livroController.store)
router.put("/:id",livroController.update)
router.get("/:id",livroController.show)
router.delete("/:id",livroController.destroy)

module.exports = router;
