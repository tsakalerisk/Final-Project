import { useEffect, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

let intervalId: number | undefined = undefined

const Transition = () => {
    const navigate = useNavigate()
    const orderId = useLocation().state?.orderId || navigate('/')
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const start = Date.now()
        intervalId = setInterval(() => {
            const elapsed = Date.now() - start
            setProgress(0.02 * elapsed)
        }, 10)
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        if (progress >= 100) {
            clearInterval(intervalId)
            navigate('/')
        }
    }, [progress, navigate])

    return (
        <div className="">
            <div
                className="h-1 bg-green-700"
                style={{ width: `min(${progress}%, 100%)` }}
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
