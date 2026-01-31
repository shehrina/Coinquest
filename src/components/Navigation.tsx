interface NavigationProps {
  currentTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'lessons', label: 'Learn', icon: '📚' },
  { id: 'shop', label: 'Shop', icon: '🛍️' },
  { id: 'piggy', label: 'Save', icon: '🐷' },
  { id: 'ar', label: 'AR Room', icon: '✨' },
]

export function Navigation({ currentTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-2 pb-safe z-[100]">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center w-16 h-full transition-all ${currentTab === tab.id
              ? 'text-blue-600 scale-110'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <span className="text-xl mb-0.5">{tab.icon}</span>
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
