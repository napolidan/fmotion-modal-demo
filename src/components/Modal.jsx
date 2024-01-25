import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import "./modal.css"

export const Modal = ({ propOnClick }) => {

    const handleButtonClick = () => {
        propOnClick((prevOpen) => !prevOpen)
    }


    return (
        <motion.div>
            <motion.div
                onClick={handleButtonClick}
                className="fixed inset-0 z-10 bg-black flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: .25 }}
                exit={{ opacity: 0 }}
            >
            </motion.div>
            <motion.div
                className="fixed z-20 bg-white rounded modall"
                initial={{
                    opacity: 0,
                    y: '-30%',
                    x: '-50%',
                }}
                animate={{
                    opacity: 1,
                    y: '-50%',
                    x: '-50%',
                }}
                exit={{
                    opacity: 0,
                    y: '-30%',
                    x: '-50%',
                    transition: {
                        opacity: {
                            duration: 0.2
                        }
                    }
                }}
            >
                <div className="flex flex-col gap-5 p-10 pb-12">
                    <div>
                        <FontAwesomeIcon icon={faCircleUser} size="3x" className="text-rose-400"/>
                        <h1 className="text-xl">Sign in</h1>
                    </div>
                    <form action="" className="flex flex-col gap-2">
                        <input className="border-2 border-stone-200 rounded-sm p-1 text-sm" type="text" placeholder="Username" />
                        <input className="border-2 border-stone-200 rounded-sm p-1 text-sm" type="text" placeholder="Password" />
                        <button className="w-full text-white bg-rose-400 text-sm p-2 rounded-sm">Login</button>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                                <input type="checkbox" name="" id="" />
                                <label className="text-xs text-stone-500" htmlFor="">Remember Me</label>
                            </div>
                            <div className="flex items-center">
                                <a href="" className="text-rose-400 text-xs">Forgot Password</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-stone-100 flex justify-center gap-1 p-8 px-10 pt-5">
                    <p className="text-xs">Not a member?</p>
                    <a href="" className="text-rose-400 text-xs">Create an account</a>
                </div>
            </motion.div>
        </motion.div>
    )
}
