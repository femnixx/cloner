import { Link } from "react-router-dom"

const Frontpage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex p-5 items-center justify-center">
        <nav className="flex gap-x-3">
          <Link to="/authpage" className="border px-2" state={{ mode: "login"}}>sign in</Link>
          <Link to="/authpage" className="border px-2" state={{ mode: "signup"}}>sign up</Link>
        </nav>
      </div>
    </div>
  )
}

export default Frontpage