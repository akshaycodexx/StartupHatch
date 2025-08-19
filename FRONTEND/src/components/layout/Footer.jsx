// FILE: /src/components/layout/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon } from '../../assets/icons';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    {/* Column 1: Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link to="/" className="flex items-center mb-4 space-x-2">
                            <BriefcaseIcon className="text-teal-500 h-7 w-7" />
                            <span className="text-xl font-bold text-white">StartupHatch</span>
                        </Link>
                        <p className="text-sm">
                            Empowering India's next generation of entrepreneurs through technology, mentorship, and capital.
                        </p>
                    </div>

                    {/* Column 2: Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Solutions</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/for-founders" className="text-sm transition-colors hover:text-white">For Founders</Link></li>
                            <li><Link to="/for-investors" className="text-sm transition-colors hover:text-white">For Investors</Link></li>
                            <li><Link to="/for-advisors" className="text-sm transition-colors hover:text-white">For Advisors</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Resources</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/blog" className="text-sm transition-colors hover:text-white">Blog</Link></li>
                            <li><Link to="/guides" className="text-sm transition-colors hover:text-white">Founder Guides</Link></li>
                            <li><Link to="/insights" className="text-sm transition-colors hover:text-white">Market Insights</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/about" className="text-sm transition-colors hover:text-white">About Us</Link></li>
                            <li><Link to="/careers" className="text-sm transition-colors hover:text-white">Careers</Link></li>
                            <li><Link to="/contact" className="text-sm transition-colors hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Legal */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/privacy" className="text-sm transition-colors hover:text-white">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-sm transition-colors hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section with copyright */}
                <div className="pt-8 mt-12 text-sm text-center border-t border-slate-800">
                    <p>&copy; {new Date().getFullYear()} StartupHatch India. A venture from Kolkata, West Bengal.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
