
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {setSelectedPage: (value: SelectedPage) => void,
    selectedPage:SelectedPage
}

const ContactMe = ({selectedPage, setSelectedPage}: Props) => {

    const inputStyles = `w-full rounded-lg bg-dark-400 px-5 py-3 placeholder-white text-sm mt-2`
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();


    const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }


  return (
    <section id="contactme" className="flex justify-center items-center w-lvw bg-dark-primary min-h-lvh overflow-hidden">
        <motion.div
            onViewportEnter={()=> {setSelectedPage(SelectedPage.CONTACTME);
                console.log(selectedPage)
            }}
            className="flex flex-col justify-center items-center mx-auto w-5/6 py-32"     
        >
            {/* Header */}
            <motion.div
                className="w-11/12 mb-16 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
            }}
            >
                <p className="font-mono mb-2 relative">
                    0.4{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 inline-block text-transparent bg-clip-text z-10">
                    Contact Me
                    </span>
                </p>
                <hr className="absolute left-40 top-2.5 w-lvw h-0.5 bg-gray-200 border-0 rounded-sm" />
                <motion.h2
                    className="font-semibold text-5xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                    },
                    }}
                >
                    Let's Connect
                </motion.h2>
            </motion.div>

            {/* paragraph and form */}
            <div className="flex flex-wrap gap-12 justify-center items-center w-11/12">
                {/* paragraph */}
                <motion.div
                    className="max-w-[700px] w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="whitespace-pre-line">Need a skilled developer or a professional photographer? I am a full-stack developer providing full software solutions, and high-quality real estate and portrait photography. Whether you're looking for a custom software solution or stunning visuals, I'd love to collaborate!<br/><br/>

                    <span className="bg-gradient-to-r from-textColor-gradStart1 via-textColor-gradMid1 to-textColor-gradEnd1 inline-block text-transparent bg-clip-text font-bold">Let's create something great together!</span> 🚀
                    </p>
                </motion.div>

                {/* Form */}
                <div className=" max-w-[700px] w-full justify-between text-sm">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once:true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/43d360414ab6363a04264cb4a61b246d"
                            method="POST"
                        >
                            {/* Name */}
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required:true,
                                    maxLength:100,
                                })}
                            />
                            {errors.name && (
                                <p className="text-red-600">
                                    {/* {"required and maxLength is from within the input tag attribute"} */}
                                    {errors.name.type == "required" && "This field is required."}
                                    {errors.name.type == "maxLength" && "Max length is 100 characters."}
                                </p>
                            )}

                            {/* Email */}
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required:true,
                                    pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            
                                })}
                            />
                            {errors.email && (
                                <p className="my-1 text-red-600">
                                    {/* {"required and maxLength is from within the input tag attribute"} */}
                                    {errors.email.type == "required" && "This field is required."}
                                    {errors.email.type == "pattern" && "Invalid email address."}
                                </p>
                            )}             

                            {/* Message */}
                            <textarea
                                className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required:true,
                                    maxLength:2000,
                                })}
                            />
                            {errors.message && (
                                <p className="my-1 text-red-600">
                                    {/* {"required and maxLength is from within the input tag attribute"} */}
                                    {errors.message.type == "required" && "This field is required."}
                                    {errors.message.type == "maxLength" && "Max length is 2000 characters."}
                                </p>
                            )}

                            {/* Submit button */}
                            <div className="relative inline-block text-sm font-medium text-white group mt-4">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-300 rounded-md blur-sm"></div>
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-300 rounded-md"></div>
                                <button
                                    type="submit"
                                    className="relative block px-8 py-2 bg-dark-primary border border-transparent rounded-md group-hover:bg-opacity-0 transition duration-500 cursor-pointer"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactMe