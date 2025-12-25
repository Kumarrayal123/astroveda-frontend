import { useState, useEffect } from 'react';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import { Search, ChevronRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'Horoscope', 'Vastu', 'Lifestyle', 'Spirituality'];

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await api.get('/blogs');
            console.log('API Response:', response.data);
            setBlogs(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    const filteredBlogs = blogs.filter(blog => {
        if (!blog || !blog.title) return false;

        const title = blog.title.toLowerCase();
        const search = searchTerm.toLowerCase();
        const matchesSearch = title.includes(search);

        // Handle tags safely
        const blogTags = Array.isArray(blog.tags) ? blog.tags : [];
        const matchesCategory = activeCategory === 'All' || blogTags.includes(activeCategory);

        return matchesSearch && matchesCategory;
    });

    console.log('Filtered Blogs:', filteredBlogs);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-astro-pink"></div>
            </div>
        );
    }

    return (
        <PageTransition>
            {/* Header */}
            <section className="py-20 bg-gray-50/50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-text mb-4">Astro Veda Insights</h1>
                    <p className="text-xl text-secondary-text max-w-2xl mx-auto mb-12">
                        Explore articles on Vedic sciences, cosmic alignments, and spiritual living.
                    </p>

                    {/* Search & Categories */}
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-astro-pink/20 transition-all text-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === cat ? 'astro-gradient text-white shadow-lg' : 'bg-white text-secondary-text hover:bg-gray-100'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog List - Zig Zag Layout */}
            <Section className="!pb-10 !pt-10">
                {filteredBlogs.length > 0 ? (
                    <div className="flex flex-col gap-20">
                        {filteredBlogs.map((blog, i) => {
                            // Determine Direction: Even index = Image Left (flex-row), Odd index = Image Right (flex-row-reverse)
                            // User request: "alignment would be right side blog" -> First blog (index 0) 
                            // If user means "Blog Image on Right", then index 0 should be reverse.
                            // Let's stick to standard ZigZag: Even = Standard, Odd = Reverse.
                            // If user meant "text 3rd blog in the right side", 3rd blog is index 2. Even.
                            // So Even index = Text Right, Image Left.
                            const isEven = i % 2 === 0;

                            return (
                                <div
                                    key={blog._id || i}
                                    className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''} group`}
                                >
                                    {/* Image Side */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="aspect-[4/3] md:aspect-[16/9] rounded-[40px] overflow-hidden shadow-lg border border-gray-100 relative">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Category Badge on Image */}
                                            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                                {blog.tags && blog.tags.map((tag, idx) => (
                                                    <span key={idx} className="bg-white/90 backdrop-blur-sm text-astro-pink font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-2"><Calendar size={16} /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                                            <span className="flex items-center gap-2"><User size={16} /> {blog.author}</span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-text leading-tight group-hover:text-astro-pink transition-colors">
                                            {blog.title}
                                        </h2>

                                        <p className="text-lg text-secondary-text leading-relaxed line-clamp-3">
                                            {blog.content}
                                        </p>

                                        <Link
                                            to={`/blog/${blog._id}`}
                                            className="inline-flex items-center gap-2 text-astro-pink font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all"
                                        >
                                            Read Entire Article <ChevronRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl text-secondary-text">No articles found matching your criteria.</h3>
                    </div>
                )}
            </Section>
        </PageTransition>
    );
};

export default Blog;
