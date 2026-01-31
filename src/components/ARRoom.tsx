import { useGameStore } from '../store/gameStore'
import { shopItems } from '../data/shopItems'
import { ModelViewer } from './ModelViewer'

export function ARRoom() {
  const ownedItems = useGameStore((state) => state.ownedItems)

  // Get the actual item data for owned items
  const ownedItemsWithData = ownedItems.map((owned) => ({
    ...owned,
    item: shopItems.find((s) => s.id === owned.itemId),
  })).filter((o) => o.item)

  if (ownedItemsWithData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="text-6xl mb-4">🏠</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your AR Room</h2>
        <p className="text-gray-500 mb-4">
          Buy items from the shop to place them in AR!
        </p>
        <p className="text-sm text-gray-400">
          Items you buy will appear here, ready to place in your real room.
        </p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🏠 Your AR Room</h2>
      <p className="text-gray-500 mb-6">
        Tap an item, then tap the AR button (cube icon) to place it in your room!
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ownedItemsWithData.map(({ id, item }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-200"
          >
            <div className="h-64 bg-gradient-to-b from-blue-50 to-blue-100">
              <ModelViewer
                src={item!.modelPath}
                alt={item!.name}
                ar={true}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{item!.name}</h3>
              <p className="text-sm text-gray-500">Tap the AR icon ↗ to place in your room</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
