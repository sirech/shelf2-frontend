import path from 'path'
import { Pact, SpecificationVersion } from '@pact-foundation/pact'

const provider = (): Pact =>
  new Pact({
    port: 8989,
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: SpecificationVersion.SPECIFICATION_VERSION_V2,
    consumer: 'React',
    provider: 'Backend',
  })
export default provider
