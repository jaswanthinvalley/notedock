import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex h-screen justify-center items-center sm:px-2">
      <div>
        <h1 className=" text-center font-bold text-2xl">your study companion</h1>
        <p className=" text-center">
          orgnize your notes, collabrate with peers, with out intutive
          note-taking app.
        </p>
        <div className="flex justify-center">
            <div>
            <Link to='/login' ><button className="bg-black text-white p-1.5 px-2.5 rounded mx-2 my-2">Login</button></Link>
            <Link to='/signup'><button className="bg-black text-white p-1.5 px-2.5 rounded mx-2 my-2">signup</button></Link>
        </div>
        </div>
      </div>
    </div>
  );
}
