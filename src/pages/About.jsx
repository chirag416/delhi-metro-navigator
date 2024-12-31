import React from 'react';
import ProfilePic from '../assets/profile.jpg';
import { Github, Linkedin, Globe, Heart, Mail, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="h-full w-full p-4">
            {/* Developer Section */}
            <motion.div
                className="h-full w-full bg-gray-100 flex flex-col items-center rounded-xl mb-8 py-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="flex text-2xl font-bold text-center mb-6 text-black">Developed By ❤️</h1>

                <motion.img
                    src={ProfilePic}
                    alt="Kshitij"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                />
                <h1 className="text-3xl font-bold mb-2">Kshitij Khowal</h1>
                <p className="text-gray-600 mb-4">
                    Passionate about building intuitive and efficient web applications.
                </p>
            </motion.div>

            {/* Suggestions & Bug Reporting */}
            <motion.div
                className="h-full w-full bg-gray-100 flex flex-col items-center rounded-xl mb-8 py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="text-gray-700 text-sm mb-6 flex flex-col items-center">
                    <a
                        href="https://github.com/kshitijkhowal/delhi-metro-navigator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                        >
                            <Star className="mr-2" />
                        </motion.div>
                        Star This Repo
                    </a>
                    <p>
                        If you encounter any bugs, edge cases, or have suggestions to improve this
                        application, please feel free to contact me at:
                    </p>
                    <div className="flex items-center justify-center mt-2">
                        <Mail className="mr-2 text-blue-500" />
                        <a
                            href="mailto:kshitij.durgesh@gmail.com"
                            className="text-blue-500 underline"
                        >
                            kshitij.durgesh@gmail.com
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* About the Application */}
            <motion.div
                className="h-full w-full bg-gray-100 flex flex-col items-center rounded-xl mb-10 py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="text-gray-700 text-sm mb-6">
                    <p>
                        This web application, <strong>Delhi Metro Navigator</strong>, is designed to
                        simplify your metro travel experience. All maps have been sourced from the
                        official website of{' '}
                        <a
                            href="https://www.delhimetrorail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Delhi Metro Rail Corporation (DMRC)
                        </a>
                        .
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 text-2xl text-blue-600">
                    <motion.a
                        href="https://github.com/kshitijkhowal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Github />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/kshitijkhowal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Linkedin />
                    </motion.a>
                    <motion.a
                        href="https://kshitij-portfolio-git-main-kshitij-khowals-projects.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Globe />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
