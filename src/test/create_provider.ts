import path from 'path'
import Pact from 'pact'

const provider = (): Pact.PactProvider =>
  Pact({
    port: 8989,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    consumer: 'React',
    provider: 'Backend',
    cors: true,
  })
export default provider
