import { StrictMode } from 'react'
import './styles/index.scss'
import App from './App.tsx'

import { hydrateRoot, createRoot } from 'react-dom/client'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (typeof window !== 'undefined') {
  const root = document.getElementById('root')
  if (!root) throw new Error('#root not found')

  if (root.hasChildNodes()) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}

export async function prerender() {
  const { renderToString } = await import('react-dom/server')
  return { html: renderToString(app) }
}