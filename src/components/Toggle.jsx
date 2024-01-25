import { motion } from "framer-motion"

export const Toggle = ({ propOnClick }) => {

    const handleButtonClick = () => {
        propOnClick((prevOpen) => !prevOpen)
    }

    return (
        <motion.button
            initial={{
                scale: 1,
            }}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            onClick={handleButtonClick}
            className="bg-gray-700 p-2 px-3 rounded text-white">
            Toggle
        </motion.button>
    )
}
