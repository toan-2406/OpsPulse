import { useEffect, useState } from 'react'

type Health = { status: 'ok'; service: string; time: string }

export default function App() {
  const [health, setHealth] = useState<Health | null>(null)
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3001'

  useEffect(() => {
    fetch(`${api}/health`).then(r => r.json()).then(setHealth).catch(() => setHealth(null))
  }, [api])

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>OpsPulse</h1>
      <p>Solo-founder incident + runbook + audit log system.</p>
      <h2>API Health</h2>
      <pre>{health ? JSON.stringify(health, null, 2) : 'not connected'}</pre>
    </div>
  )
}
