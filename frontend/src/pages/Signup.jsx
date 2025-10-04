export default function Signup() {
      function handleclick (e) {
        
            
        }
    return(

        
        <div className="flex justify-center align-middle items-center h-screen">
            <div>
                <h1 className="text-2xl font-bold my-2">signup</h1>
                <label htmlFor="name">name</label><br />
                <input type="text" className="border-2 border-black rounded my-2" /><br />
                <label htmlFor="email">email</label><br />
                <input  className="border-2 border-black rounded my-2" type="email" /><br />
                <label htmlFor="pasword">password</label><br />
                <input  className="border-2 border-black rounded my-2" type="password" name="" id="" /><br />
                <label htmlFor="re-password">Reenter password</label><br />
                <input  className="border-2 border-black rounded my-2" type="password" /><br />
                <button onClick={handleclick} className="my-2 font-bold text-white bg-black p-1.5  rounded">submit</button>

    
            </div>
        </div>
    )
}