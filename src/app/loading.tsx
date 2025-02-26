'use client'
import {motion} from "framer-motion"

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#cee4e2",
    borderRadius: 5,
}
export default function Rotate() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 m-64">
            {/* <motion.div
                style={box}
                animate={{ rotate: 360 }}
                transition={{ repeat:Infinity, duration: 2, repeatDelay: 1 }}
            /> */}
        </main>
    )
}




