export interface LessonChoice {
  text: string
  isCorrect: boolean
  feedback: string
}

export interface Lesson {
  id: string
  story: string
  choices: [LessonChoice, LessonChoice]
  principle: string
  coinReward: number
}

export const lessons: Lesson[] = [
  {
    id: 'candy-vs-lamp',
    story: "You have 10 coins saved up. You're walking by a candy store and see your favorite treat for 5 coins. But you've been saving for a cool lamp that costs 15 coins.",
    choices: [
      {
        text: "Buy the candy now!",
        isCorrect: false,
        feedback: "The candy tastes great, but now you're further from your lamp goal. You have to save 10 more coins instead of just 5."
      },
      {
        text: "Keep saving for the lamp",
        isCorrect: true,
        feedback: "Nice! You resisted the temptation. You're only 5 coins away from your lamp now!"
      }
    ],
    principle: "Saving delays fun, but gets you bigger rewards.",
    coinReward: 10
  },
  {
    id: 'need-vs-want',
    story: "Your backpack strap just broke and you need a new one for school. You also really want a new toy that all your friends have. You only have enough for one.",
    choices: [
      {
        text: "Buy the toy",
        isCorrect: false,
        feedback: "The toy is fun, but now you have to carry your books in your arms! Needs should come before wants."
      },
      {
        text: "Buy the backpack",
        isCorrect: true,
        feedback: "Smart choice! You took care of what you needed first. You can save up for the toy later."
      }
    ],
    principle: "Needs come before wants.",
    coinReward: 10
  },
  {
    id: 'patience-pays',
    story: "You put 20 coins in your piggy bank last week. Today you check and see it grew to 22 coins! Your friend wants you to take it all out to buy stickers together.",
    choices: [
      {
        text: "Take it all out for stickers",
        isCorrect: false,
        feedback: "Stickers are fun, but your money stopped growing. If you had waited, it would keep getting bigger!"
      },
      {
        text: "Leave it to keep growing",
        isCorrect: true,
        feedback: "Great patience! Your money will keep growing. This is how saving really pays off over time."
      }
    ],
    principle: "Money grows when you give it time.",
    coinReward: 10
  }
]
