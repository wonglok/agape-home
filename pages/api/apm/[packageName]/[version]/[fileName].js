const spawn = require('child_process').spawn
const path = require('path')
const fs = require('fs')
const tmpDir = path.join(require('os').tmpdir(), 'my-app')

export default async function Slug(req, res) {
  // let run = spawn('npm', ['install', 'three@0.150.0', '--save'], { cwd: tmpDir, stdio: 'inherit' })
  // run.on('close', () => {
  //   //
  //   console.log(fs.readdirSync(tmpDir))
  //   res.json({ yoyo: '123' })
  // })
  //req
  //
  // await npmInstall.npmInstallAsync(['three@0.150.0'], tmpDir).then((r) => {
  //   //
  //   console.log(r)
  //   res.json({ yoyo: r })
  // })
}
