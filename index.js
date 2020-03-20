const express = require('express')
const app = express()
const port = 3000

function minecraftServer(req, res) {
    const { exec } = require('child_process');
    exec('cd ~/ && minecraft.sh', (err, stdout, stderr) => {
        if (err) {
            //some err occurred
            console.error(err)
            return res.send('fail');
        } else {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            return res.send('ok');
            // the *entire* stdout and stderr (buffered)
        
        }
    });
}

app.get('/minecraft', (req, res) => minecraftServer(req, res))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))