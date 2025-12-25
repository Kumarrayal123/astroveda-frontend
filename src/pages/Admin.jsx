import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users, LogOut, Search, Loader, Calendar, MapPin, Mail, Phone,
  BookOpen, MessageSquare, LayoutDashboard, Plus, Trash2, CheckCircle, XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../utils/api';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Data States
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [queries, setQueries] = useState([]);

  // Form States
  const [blogForm, setBlogForm] = useState({ title: '', content: '', author: 'Admin', image: '', tags: '' });
  const [showBlogForm, setShowBlogForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'users') {
        const res = await api.get('/auth/users');
        setUsers(res.data);
      } else if (activeTab === 'bookings') {
        const res = await api.get('/bookings');
        setBookings(res.data);
      } else if (activeTab === 'blogs') {
        const res = await api.get('/blogs');
        setBlogs(res.data);
      } else if (activeTab === 'queries') {
        const res = await api.get('/queries');
        setQueries(res.data);
      }
    } catch (error) {
      console.error(`Error fetching ${activeTab}:`, error);
      if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // --- Handlers ---

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', blogForm.title);
      formData.append('content', blogForm.content);
      formData.append('tags', blogForm.tags); // Helper splits this later or backend handles it
      formData.append('author', 'Admin');
      if (blogForm.image) {
        formData.append('image', blogForm.image);
      }

      await api.post('/blogs', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setShowBlogForm(false);
      setBlogForm({ title: '', content: '', author: 'Admin', image: null, tags: '' });
      fetchData(); // Refresh list
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to post blog');
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await api.delete(`/blogs/${id}`);
      setBlogs(blogs.filter(b => b._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const updateBookingStatus = async (id, status) => {
    try {
      await api.patch(`/bookings/${id}/status`, { status });
      fetchData();
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  // --- Render Helpers ---

  const renderUsers = () => {
    const filteredUsers = users.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-astro-pink/10 flex items-center justify-center text-astro-pink font-bold">
                      {user.fullName.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                      <div className="text-xs text-gray-500">{user.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{user.email}</div>
                  <div className="text-xs text-gray-500">{user.phone}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderBookings = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {bookings.map(booking => (
            <tr key={booking._id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{booking.userName}</div>
                <div className="text-xs text-gray-500">{booking.userEmail}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{booking.serviceType}</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{new Date(booking.bookingDate).toLocaleDateString()}</div>
                <div className="text-xs text-gray-500">{booking.bookingTime}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                  ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                  {booking.status}
                </span>
              </td>
              <td className="px-6 py-4 flex gap-2">
                <button onClick={() => updateBookingStatus(booking._id, 'confirmed')} className="text-green-600 hover:text-green-800" title="Confirm">
                  <CheckCircle size={18} />
                </button>
                <button onClick={() => updateBookingStatus(booking._id, 'cancelled')} className="text-red-600 hover:text-red-800" title="Cancel">
                  <XCircle size={18} />
                </button>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr><td colSpan="5" className="px-6 py-4 text-center text-gray-500">No bookings found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );

  const renderBlogs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">Recent Posts</h3>
        <button
          onClick={() => setShowBlogForm(!showBlogForm)}
          className="flex items-center gap-2 px-4 py-2 bg-astro-pink text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          <Plus size={18} /> New Post
        </button>
      </div>

      <AnimatePresence>
        {showBlogForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleCreateBlog}
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text" placeholder="Post Title" required
                className="p-3 border rounded-lg w-full"
                value={blogForm.title} onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
              />
              <input
                type="file" accept="image/*"
                className="p-3 border rounded-lg w-full bg-white"
                onChange={e => setBlogForm({ ...blogForm, image: e.target.files[0] })}
              />
            </div>
            <textarea
              placeholder="Content..." required rows="4"
              className="p-3 border rounded-lg w-full"
              value={blogForm.content} onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
            ></textarea>
            <input
              type="text" placeholder="Tags (comma separated)"
              className="p-3 border rounded-lg w-full"
              value={blogForm.tags} onChange={e => setBlogForm({ ...blogForm, tags: e.target.value })}
            />
            <button type="submit" className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Publish Post
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative group">
            <button
              onClick={() => handleDeleteBlog(blog._id)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={18} />
            </button>
            {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg mb-4" />}
            <h4 className="font-bold text-gray-900 mb-2 line-clamp-1">{blog.title}</h4>
            <p className="text-sm text-gray-500 line-clamp-3 mb-3">{blog.content}</p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
        {blogs.length === 0 && <p className="text-gray-500">No blog posts yet.</p>}
      </div>
    </div>
  );

  const renderQueries = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">From</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {queries.map(q => (
            <tr key={q._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 w-1/4">
                <div className="text-sm font-medium text-gray-900">{q.name}</div>
                <div className="text-xs text-gray-500">{q.email}</div>
                <div className="text-xs text-gray-500">{q.phone}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-gray-800 mb-1">{q.subject}</div>
                <div className="text-sm text-gray-600">{q.message}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {new Date(q.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
          {queries.length === 0 && (
            <tr><td colSpan="3" className="px-6 py-4 text-center text-gray-500">No queries received.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <h1 className="text-2xl font-serif font-bold text-astro-pink">Admin</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'users', label: 'Users', icon: Users },
            { id: 'bookings', label: 'Bookings', icon: Calendar },
            { id: 'blogs', label: 'Blog Posts', icon: BookOpen },
            { id: 'queries', label: 'Queries', icon: MessageSquare },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                        ${activeTab === item.id ? 'bg-astro-pink/10 text-astro-pink' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 md:hidden flex items-center justify-between px-4 h-16 shrink-0">
          <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          <button onClick={handleLogout} className="text-red-600"><LogOut size={20} /></button>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h2>
                <p className="text-gray-500">Manage your {activeTab} here</p>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center p-12">
                <Loader className="animate-spin text-astro-pink" size={40} />
              </div>
            ) : (
              <>
                {activeTab === 'users' && renderUsers()}
                {activeTab === 'bookings' && renderBookings()}
                {activeTab === 'blogs' && renderBlogs()}
                {activeTab === 'queries' && renderQueries()}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;