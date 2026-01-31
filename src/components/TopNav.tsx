import { useGameStore } from '../store/gameStore'
import userBadge from '../assets/user_badge.png'

interface TopNavProps {
    onNavigate: (tab: string) => void
}

export function TopNav({ onNavigate }: TopNavProps) {
    const coins = useGameStore((state) => state.coins)

    return (
        <header className="sticky top-0 bg-white border-b border-gray-200 px-4 py-2 z-10 relative">
            <div className="flex justify-between items-center w-full max-w-2xl mx-auto">
                {/* Left: User Profile */}
                <div className="flex items-center hover:opacity-90 transition-opacity cursor-pointer z-20">
                    <img src={userBadge} alt="Kai User Profile" className="h-20 w-auto object-contain -my-4 drop-shadow-md" />
                </div>

                {/* Center: Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <span className="font-bold text-3xl text-gray-900 tracking-tight" style={{ fontFamily: 'Fredoka, sans-serif' }}>CoinQuest</span>
                </div>

                {/* Right: Coins & Action */}
                <div className="flex items-center bg-[#d3eaf5] rounded-full p-1.5 pr-4 gap-4 shadow-lg border-4 border-blue-50">
                    {/* Coin Icon */}
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-sm">
                        <span className="font-bold text-yellow-700 text-base tracking-tight leading-none">$</span>
                    </div>

                    {/* Count */}
                    <span className="font-black text-blue-900 text-lg tracking-wide drop-shadow-sm">{coins}</span>

                    {/* Plus Button */}
                    <button
                        onClick={() => onNavigate('lessons')}
                        className="w-7 h-7 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-blue-500 transition-all hover:scale-105 shadow-sm ml-1"
                        aria-label="Add Lesson"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
