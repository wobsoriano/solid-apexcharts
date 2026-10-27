import { render } from '@solidjs/web'

import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Missing #root')

render(() => <App />, root)
