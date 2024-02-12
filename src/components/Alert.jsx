import React from 'react'

const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div class={`flex items-center p-4 mb-4 text-sm border rounded-lg ${type === "danger" ? "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" : "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"} `} role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div>
                <span class="font-medium">{ type === "danger" ? "Danger alert!" : "Success alert!"}</span> {text}
            </div>
        </div>
    </div>
  )
}

export default Alert