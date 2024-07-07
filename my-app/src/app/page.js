
import Link from 'next/link';

export default function LogIn(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center mb-8">
        <img src="/placeholder.svg" alt="Logo" className="mb-2" />
        <h1 className="text-2xl font-bold text-green-700">JIMINI</h1>
      </div>
      <form className="space-y-4">
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-black rounded-lg px-4 py-2 w-64 text-green-700"
          />
        </div>
        <div className="flex items-center justify-center">
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black rounded-lg px-4 py-2 w-64 text-green-700"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-green-700 text-white font-bold px-6 py-2 rounded-lg">
            <Link href="/teams" >ENTER </Link>
            </button>
        </div>
      </form>
    </div>
  )
}
