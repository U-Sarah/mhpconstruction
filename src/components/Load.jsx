import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';

const Load = ({children}) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    if(loading) {
        return (
            <div className='fixed inset-0 z-50 flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 '>
                        <ClipLoader color="#B4A734" size={50} />
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div className='fade-in'>
        {children}
    </div>
  )
}

export default Load
