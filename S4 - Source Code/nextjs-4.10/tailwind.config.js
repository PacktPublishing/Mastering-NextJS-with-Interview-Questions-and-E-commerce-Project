/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.js',
    './src/component/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// <div className="space-y-8">
// <div className="border-b border-gray-200 pb-8">
//     <h1 className="text-2xl font-semibold leading-7 text-gray-900">Add Product</h1>
// </div>
// <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//     <div className="sm:col-span-3">