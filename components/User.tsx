"use client"

interface UserProps {
  name: string
  age: number
  isLoggedIn: boolean
}

const User = ({ name, age, isLoggedIn }: UserProps) => {
  return (
    <>
      <div className="p-4 bg-slate-400 ">
        <p>User Component for name, age, isLoggedIn</p>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-lg font-bold">{age}</p>
        <p className="text-lg font-bold">{String(isLoggedIn)}</p>
      </div>
    </>
  )
}

export default User
