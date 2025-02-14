import React from 'react'

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <aside className={`bg-gray-900 text-white h-screen p-4 transition-all ${collapsed ? 'w-16' : 'w-60'}`}>
      <button onClick={onToggle} className="mb-4 p-2 bg-gray-700 rounded">
        {collapsed ? '→' : '←'}
      </button>
      <nav>
        <ul>
          <li className="py-2">Dashboard</li>
          <li className="py-2">Settings</li>
          <li className="py-2">Help</li>
        </ul>
      </nav>
    </aside>
  )
}
