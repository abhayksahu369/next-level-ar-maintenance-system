import { Github, Linkedin, Twitter } from 'lucide-react';
export const Footer = () => (
<footer className="bg-valorant-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">About Us</h4>
              <p className="text-gray-400">Leading the future of industrial maintenance with cutting-edge AR technology</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Equipment Scanning</li>
                <li>Predictive Maintenance</li>
                <li>AR Training</li>
                <li>Technical Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Case Studies</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="text-gray-400 space-y-2">
                <li>support@arindustrial.com</li>
                <li>+91 3439074650</li>
                <li>Langol Rd</li>
                <li>Manipur India, Langol 795004</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">© 2025 AR Industrial Maintenance. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-valorant-red transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-valorant-red transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-valorant-red transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
);