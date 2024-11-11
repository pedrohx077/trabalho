const express = require('express');
const router = express.Router();


router.post("/users", async (req, res) => {
    return res.json({
        mensagem: "usuario cadastrado com sucesso!"
    });
});

module.exports = router;
