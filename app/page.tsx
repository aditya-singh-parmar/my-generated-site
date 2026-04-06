import { Render } from '@measured/puck'
import { puckConfig } from '../lib/puck.config'
import data from '../puck-data.json'

export default function Page() {
  return <Render config={puckConfig} data={data as any} />
}
