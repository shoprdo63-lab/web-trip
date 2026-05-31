import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('App error:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, direction: 'rtl', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#ef4444' }}>שגיאה בטעינת האתר</h1>
          <pre style={{ background: '#f3f4f6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
            {this.state.error?.toString?.() || 'Unknown error'}
          </pre>
          <p>בדוק את קונסולת הדפדפן (F12 → Console) לפרטים נוספים.</p>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
