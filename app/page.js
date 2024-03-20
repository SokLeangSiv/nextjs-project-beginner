import Link from "next/link"


const HomePage = () => {
  return (
    <div>
       <h1 className='text-6xl font-bold mb-8'>Next.js</h1>
        <Link className='btn btn-accent' href='/client'>Get Started</Link>
    </div>
  )
}

export default HomePage