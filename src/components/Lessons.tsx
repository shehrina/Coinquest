import { useState } from 'react'
import { lessons } from '../data/lessons'
import { useGameStore } from '../store/gameStore'
import { LessonCard } from './LessonCard'

export function Lessons() {
  const completedLessons = useGameStore((state) => state.completedLessons)
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number | null>(null)

  const availableLessons = lessons.filter(
    (l) => !completedLessons.includes(l.id)
  )

  const handleLessonComplete = () => {
    setCurrentLessonIndex(null)
  }

  // Show lesson card if one is selected
  if (currentLessonIndex !== null && availableLessons[currentLessonIndex]) {
    return (
      <div className="p-4 pb-24">
        <button
          onClick={() => setCurrentLessonIndex(null)}
          className="mb-4 text-gray-500 hover:text-gray-700"
        >
          ← Back to lessons
        </button>
        <LessonCard
          lesson={availableLessons[currentLessonIndex]}
          onComplete={handleLessonComplete}
        />
      </div>
    )
  }

  return (
    <div className="p-4 pb-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">📚 Learn & Earn</h2>
      <p className="text-gray-500 mb-6">Complete lessons to earn coins!</p>

      {availableLessons.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            All lessons completed!
          </h3>
          <p className="text-gray-500">
            You've learned all the money basics. Great job!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {availableLessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => setCurrentLessonIndex(index)}
              className="w-full bg-white rounded-2xl p-4 shadow-lg text-left hover:shadow-xl transition-all active:scale-98 border-2 border-transparent hover:border-blue-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">📖</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">
                    Lesson {completedLessons.length + index + 1}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {lesson.story.substring(0, 60)}...
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-yellow-600 font-bold">
                    +{lesson.coinReward} 🪙
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Completed lessons */}
      {completedLessons.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-600 mb-3">✅ Completed</h3>
          <div className="space-y-2">
            {lessons
              .filter((l) => completedLessons.includes(l.id))
              .map((lesson) => (
                <div
                  key={lesson.id}
                  className="bg-gray-100 rounded-xl p-3 flex items-center gap-3 opacity-60"
                >
                  <span className="text-2xl">✅</span>
                  <span className="text-gray-600">{lesson.principle}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
