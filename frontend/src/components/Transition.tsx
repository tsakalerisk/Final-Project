import { useEffect, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

let intervalId: number | undefined = undefined

const Transition = () => {
    const { orderId } = useLocation().state
    const navigate = useNavigate()
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        intervalId = setInterval(() => {
            setProgress(prev => prev + 0.5)
        }, 20)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        console.log(progress)
        if (progress >= 100) {
            clearInterval(intervalId)
            navigate('/')
        }
    }, [progress, navigate])

    return (
        <div className="">
            <div
                className="h-1 bg-green-700"
                style={{ width: `${progress}%` }}
            ></div>
            <div className="flex flex-col gap-4 my-8">
                <BsCheckCircle className="mx-auto text-[5rem]" />
                <h1>Your order with id #{orderId} has been completed</h1>
                <div className="text-2xl">
                    You will soon be redirected to the home page.
                </div>
            </div>
        </div>
    )
}

export default Transition
