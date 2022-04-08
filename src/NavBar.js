export default function NavBar(){
    return(
        <div className="max-w-full text-gray-200 bg-gradient-to-r from-blue-700 to-blue-300  p-5 flex " >
            <div className=" w-1/2 m-2 " >
                <h2 className="text-2xl " >Jobs Board</h2>
            </div>
            <div className=" w-1/2 m-2 " >
                {/* style the navbar with grid cols so that it's responsive */}
                <a href="http://localhost:3000/#" className="text-underline px-10 hover:underline underline-offset-2"> Link 1 </a>
                <a href="http://localhost:3000/#" className="text-underline px-10 hover:underline underline-offset-2"> Link 2 </a>
                <a href="http://localhost:3000/#" className="text-underline px-10 hover:underline underline-offset-2"> Link 3 </a>
                <a href="http://localhost:3000/#" className="text-underline px-10 hover:underline underline-offset-2"> Link 4 </a>

            </div>
        </div>
    )
}