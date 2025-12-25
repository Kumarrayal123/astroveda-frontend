import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const BlogPost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlog();
    }, [id]);

    const fetchBlog = async () => {
        try {
            const response = await fetch(`https://astroveda-backend.onrender.com/api/blogs/${id}`);
            if (!response.ok) throw new Error('Blog not found');
            const data = await response.json();
            setBlog(data);
        } catch (error) {
            console.error('Error fetching blog:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-astro-pink"></div>
        </div>
    );

    if (!blog) return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
            <Link to="/blog" className="text-astro-pink hover:underline flex items-center gap-2">
                <ArrowLeft size={20} /> Back to Blogs
            </Link>
        </div>
    );

    return (
        <PageTransition>
            <article className="min-h-screen bg-gray-50 pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Back Link */}
                    <Link to="/blog" className="inline-flex items-center gap-2 text-secondary-text hover:text-astro-pink transition-colors mb-8">
                        <ArrowLeft size={20} /> Back to All Articles
                    </Link>

                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {blog.tags && blog.tags.map((tag, idx) => (
                                <span key={idx} className="text-astro-orange font-bold text-sm tracking-wide bg-orange-50 px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-text mb-6 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center justify-center gap-8 text-secondary-text">
                            <span className="flex items-center gap-2"><Calendar size={18} /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                            <span className="flex items-center gap-2"><User size={18} /> {blog.author}</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {blog.image && (
                        <div className="rounded-[40px] overflow-hidden shadow-xl mb-12 aspect-video">
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
                        <div className="prose prose-lg max-w-none text-secondary-text leading-relaxed whitespace-pre-wrap font-sans">
                            {blog.content}
                        </div>
                    </div>
                </div>
            </article>
        </PageTransition>
    );
};

export default BlogPost;
