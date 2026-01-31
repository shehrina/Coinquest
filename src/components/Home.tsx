import { useGameStore } from '../store/gameStore'
import { lessons } from '../data/lessons'

interface HomeProps {
  onNavigate: (tab: string) => void
}

export function Home({ onNavigate }: HomeProps) {
  const coins = useGameStore((state) => state.coins)
  const savedCoins = useGameStore((state) => state.savedCoins)
  const completedLessons = useGameStore((state) => state.completedLessons)
  const ownedItems = useGameStore((state) => state.ownedItems)

  const availableLessons = lessons.filter(
    (l) => !completedLessons.includes(l.id)
  ).length

  return (
    <div className="p-4 pb-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🪙 CoinQuest
        </h1>
        <p className="text-gray-500">Save it. Spend it. See it.</p>
      </div>

      {/* Coin Summary */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-yellow-700 mb-1">Your Wallet</p>
            <p className="text-4xl font-bold text-yellow-800">{coins} 🪙</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-pink-700 mb-1">Piggy Bank</p>
            <p className="text-4xl font-bold text-pink-800">{savedCoins} 🐷</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => onNavigate('lessons')}
          className="bg-blue-500 text-white rounded-2xl p-4 text-left hover:bg-blue-600 transition-all active:scale-95"
        >
          <div className="text-3xl mb-2">📚</div>
          <p className="font-semibold">Play a Lesson</p>
          <p className="text-sm text-blue-200">
            {availableLessons > 0
              ? `${availableLessons} available`
              : 'All done!'}
          </p>
        </button>

        <button
          onClick={() => onNavigate('ar')}
          className="bg-purple-500 text-white rounded-2xl p-4 text-left hover:bg-purple-600 transition-all active:scale-95"
        >
          <div className="text-3xl mb-2">✨</div>
          <p className="font-semibold">Open AR Room</p>
          <p className="text-sm text-purple-200">
            {ownedItems.length} items owned
          </p>
        </button>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-2xl p-4 shadow-lg">
        <h2 className="font-bold text-gray-800 mb-4">📊 Your Progress</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Lessons Completed</span>
            <span className="font-bold text-blue-600">
              {completedLessons.length} / {lessons.length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Items Collected</span>
            <span className="font-bold text-purple-600">{ownedItems.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Wealth</span>
            <span className="font-bold text-green-600">{coins + savedCoins} 🪙</span>
          </div>
        </div>
      </div>
    </div>
  )
}
