import React from 'react'

export default function SubscribeMail() {
  return (
    <div>
      <div class="w-full px-4 py-12 text-center bg-[#EFF2F4]">
        <h2 class="text-gray-900 text-2xl font-medium mb-3">
          Subscribe on our newsletter
        </h2>
        <p class="text-gray-600 mb-8">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            class="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
