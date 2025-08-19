import React from 'react';
import { useSelector } from 'react-redux';
import ProfileCard from '../components/dashboard/ProfileCard.jsx';
import QuickActions from '../components/dashboard/QuickActions.jsx';
import BusinessDashboard from '../components/dashboard/role-specific/BusinessDashboard.jsx';
import InvestorDashboard from '../components/dashboard/role-specific/InvestorDashboard.jsx';
import AdvisorDashboard from '../components/dashboard/role-specific/AdvisorDashboard.jsx';
import BankerDashboard from '../components/dashboard/role-specific/BankerDashboard.jsx';
import { motion } from 'framer-motion';

const DashboardPage = () => {
    const { user } = useSelector((state) => state.auth);

    if (!user) return null;

    const renderRoleSpecificContent = () => {
        switch (user.role) {
            case 'business': return <BusinessDashboard />;
            case 'investor': return <InvestorDashboard />;
            case 'advisor': return <AdvisorDashboard />;
            case 'banker': return <BankerDashboard />;
            default:
                return (
                    <motion.div 
                        className="p-6 border shadow-lg bg-white/60 backdrop-blur-xl rounded-2xl border-gray-200/50"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-xl font-bold text-slate-800">Welcome to StartupHatch</h2>
                        <p className="mt-2 text-slate-600">Your journey starts here. Explore the platform to find what you're looking for.</p>
                    </motion.div>
                );
        }
    };
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <div className="min-h-full bg-slate-100">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                    className="pb-8 border-b border-gray-200"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                    <p className="mt-1 text-sm text-slate-500">Welcome back, {user.profile.firstName}. Here's your overview.</p>
                </motion.div>

                {/* Main Content Grid */}
                <motion.div 
                    className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Column */}
                    <motion.div className="space-y-8 lg:col-span-2" variants={itemVariants}>
                        {renderRoleSpecificContent()}
                    </motion.div>

                    {/* Right Column (Sidebar) */}
                    <motion.div className="space-y-8" variants={itemVariants}>
                        <ProfileCard user={user} />
                        <QuickActions userRole={user.role} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default DashboardPage;