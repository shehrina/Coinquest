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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center w-16 h-full transition-all ${
              currentTab === tab.id
                ? 'text-blue-600 scale-110'
                : 'text-gray-400 hover:text-gray-600'
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
