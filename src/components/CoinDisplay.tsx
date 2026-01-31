import { useGameStore } from '../store/gameStore'

export function CoinDisplay() {
  const coins = useGameStore((state) => state.coins)
  const savedCoins = useGameStore((state) => state.savedCoins)

  return (
    <div className="flex items-center gap-4">
      {/* Wallet coins */}
      <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
        <span className="text-2xl">🪙</span>
        <span className="font-bold text-yellow-700 text-lg">{coins}</span>
      </div>
      
      {/* Saved coins */}
      <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
        <span className="text-2xl">🐷</span>
        <span className="font-bold text-pink-700 text-lg">{savedCoins}</span>
      </div>
    </div>
  )
}
