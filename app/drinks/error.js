"use client"

const error = (error) => {
  return (
    <div className="">
        {error.error.message}
    </div>
  )
}

export default error