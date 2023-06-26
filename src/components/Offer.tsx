
const Offer = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4">
        <h2 className="text-xl font-medium mb-2">Why we matter.</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="border border-slate-200 p-2 rounded ">
                <h3 className="font-semibold text-center text-slate-800">Ease of access.</h3>
                <p className="text-sm text-slate-700">we provide th easiest and fastest way to anonymous messaging.</p>
            </div>
            <div className="border border-slate-200 p-2 rounded ">
                <h3 className="font-semibold text-center text-slate-800">Free forever.</h3>
                <p className="text-sm text-slate-700">we are non-profit first. we provide the best for free 😉.</p>
            </div>
            <div className="border border-slate-200 p-2 rounded">
                <h3 className="font-semibold text-center text-slate-800">All the best features available.</h3>
                <p className="text-sm text-slate-700">you don&apos;t have to worry about features. we got everything covered 😋.</p>
            </div>
        </div>
    </div>
  )
}

export default Offer