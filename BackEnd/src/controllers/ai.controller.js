const aiService = require("../services/ai.Service");


module.exports.getReview = async (req, res) => {
    
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await aiService(code);


    res.send(response);

}