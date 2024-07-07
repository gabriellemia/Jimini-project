export default function Teams() {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Your teams</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-4 border-2 border-green-700 rounded-md">
            <h3 className="text-center">Marketing</h3>
          </div>
          <div className="p-4 border-2 border-green-700 rounded-md">
            <h3 className="text-center">Design</h3>
          </div>
          <div className="p-4 border-2 border-green-700 rounded-md">
            <h3 className="text-center">Sales</h3>
          </div>
        </div>
      </div>
    )
  }