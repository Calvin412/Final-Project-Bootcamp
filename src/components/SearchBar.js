export default function SearchBar() {
    return (
        <div className="relative flex items-center w-full max-w-4xl">
            <input type="text" placeholder="Search for Gadgets, Categories, or Brands" className="w-full text-lg pl-15 py-3 border border-gray-400 rounded-full focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>
                </svg>
            </div>
        </div>
    );
}