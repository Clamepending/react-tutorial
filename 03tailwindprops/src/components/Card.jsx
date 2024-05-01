import React from 'react'

function Card({username = "unknown", post = "Cheif entertainent officer", img = "https://imgs.search.brave.com/fCXUxIwKAJ2URDU4zPOGcMG2l8xWVOZhZDzlboqpQAI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucG9rZW1vbi5j/b20vYXNzZXRzL2Nt/czIvaW1nL3Bva2Vk/ZXgvZnVsbC8wMjUu/cG5n"}) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card