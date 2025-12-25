import { motion } from 'framer-motion';

const Section = ({ children, className = "", id = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
