export default function Login(){
    return(
        <div className="flex justify-center align-middle  h-screen items-center">
            <div className="">
                <h1 className="text-2xl font-bold my-4">Login</h1>
                <label htmlFor="email" className="my-1">email</label><br />
                <input type="email" id="email" className="border-black border-2 rounded my-1"/><br />
                <label htmlFor="password" className="my-1">password</label><br />
                <input type="password" id="password" className="border-black border-2 rounded my-1" /><br />
                <button className=" bg-black text-white p-1.5 px-2.5 rounded my-2">submit</button>
            </div>
        </div>
    )
}