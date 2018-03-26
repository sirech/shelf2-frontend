import Pact from 'pact'
import path from 'path'

const provider = () =>
  Pact({
    port: 8989,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    consumer: 'React',
    provider: 'Backend',
  })
export default provider
