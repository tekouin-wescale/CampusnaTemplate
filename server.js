const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

const jsonData = {
    "send": {
        "init": "SxEgFrN0ZQAGnU5Au",
        "service": "service_4sthcdo",
        "template": "template_tohc4zw",
        "formData": "formData"
    }
};

delete jsonData.init;

app.get('/data', (req, res) => {
    res.json(jsonData);
});

app.get('/data', (req, res) => {
    res.send({jsonData});
});

app.use(express.static(__dirname));

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

app.listen(port, async () => {
    const open = await import('open');
    await open.default(`/index.html`);
});