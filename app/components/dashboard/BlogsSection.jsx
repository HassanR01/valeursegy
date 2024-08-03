'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'


export default function BlogsSection({ blogs }) {
    const [addBlogForm, setAddBlogForm] = useState(false)

    return (
        <>
            {addBlogForm ? (
                <>
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        onChange={() => setAlert('')}
                        onSubmit={handleAddUser}
                    >
                        
                    </motion.form>
                </>
            ) : (
                    <>
                        </>
            )}
        </>
    )
}
