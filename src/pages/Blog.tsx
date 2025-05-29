import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: 'The Role of Control Valves and Actuation Mechanisms in Fire Suppression Systems',
    date: 'May 27, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/05/The-Role-of-Control-Valves-and-Actuation.jpg',
    excerpt: 'A deep dive into how control valves and actuation mechanisms are crucial for modern fire suppression systems, ensuring safety in critical environments.',
    url: '#',
  },
  {
    title: 'The Hidden Fire Risk in Aging Renewables And How to Fight It',
    date: 'May 26, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/05/the-hidden-fire-risk-in-aging-renewables-and-how-to-fight-it.jpg',
    excerpt: 'Explore the overlooked fire risks in aging renewable energy infrastructure and learn how to mitigate them with the right fire safety equipment.',
    url: '#',
  },
  {
    title: 'What is a Kanex Fire Class D Fire?',
    date: 'May 6, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/05/What-Is-a-Kanex-Fire-Class-D.jpg',
    excerpt: 'Understand what Class D fires are, why they are dangerous, and how Kanex Fire\'s solutions are designed to tackle them safely.',
    url: '#',
  },
  {
    title: 'Fire Service Week 2025: Unite to Ignite for a Secure Nation!',
    date: 'May 4, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-15.10.24-1.jpeg',
    excerpt: 'Fire Service Week 2025: Why every organization should participate and how to make the most of it.',
    url: '#',
  },
  {
    title: 'The Role of Pressure and Propellants in Fire Extinguishers Performance',
    date: 'Feb 12, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-12-at-14.49.59.jpeg',
    excerpt: 'Understand how pressure and propellants impact the effectiveness of fire extinguishers.',
    url: '#',
  },
  {
    title: 'How to Decide the Type and Capacity of Fire Extinguisher?',
    date: 'Feb 12, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-12-at-15.32.02.jpeg',
    excerpt: 'A guide to choosing the right fire extinguisher for your needs.',
    url: '#',
  },
  {
    title: 'The Key to Effective Fire Suppression',
    date: 'Feb 18, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-18-at-17.03.49.jpeg',
    excerpt: 'Why quality matters in fire extinguishers and suppression systems.',
    url: '#',
  },
  {
    title: 'What\'s Inside Fire Extinguishers: Exploring the Extinguishing Agents',
    date: 'Mar 19, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-19-at-16.27.10.jpeg',
    excerpt: 'A look inside the chemicals and agents that put out fires.',
    url: '#',
  },
  {
    title: 'Why Kanex\'s Double-Layer Fire Detection Tube Raises Code in the Ultimate Fire Ready Solution',
    date: 'Mar 27, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-27-at-17.53.26.jpeg',
    excerpt: 'Discover the innovation behind Kanex\'s double-layer fire detection tube.',
    url: '#',
  },
  {
    title: 'The Dangers of Lithium-Ion Battery Fires and How to Extinguish Them',
    date: 'Apr 8, 2025',
    image: 'https://kanexfire.com/blog/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-08-at-13.08.54.jpeg',
    excerpt: 'Learn about the risks of lithium-ion battery fires and the best extinguishing methods.',
    url: '#',
  },
];

const popularPosts = [
  {
    title: 'The Role of Control Valves and Actuation Mechanisms in Fire Suppression Systems',
    image: 'https://kanexfire.com/blog/wp-content/uploads/wordpress-popular-posts/121-featured-75x75.jpg',
    url: '#',
  },
  {
    title: 'The Hidden Fire Risk in Aging Renewables And How to Fight It',
    image: 'https://kanexfire.com/blog/wp-content/uploads/wordpress-popular-posts/129-featured-75x75.jpg',
    url: '#',
  },
  {
    title: 'What is a Kanex Fire Class D Fire?',
    image: 'https://kanexfire.com/blog/wp-content/uploads/wordpress-popular-posts/164-featured-75x75@1.5x.jpg',
    url: '#',
  },
  {
    title: 'Fire Service Week 2025: Unite to Ignite for a Secure Nation!',
    image: 'https://kanexfire.com/blog/wp-content/uploads/wordpress-popular-posts/22-featured-75x75.jpg',
    url: '#',
  },
  {
    title: 'The Role of Pressure and Propellants in Fire Extinguishers Performance',
    image: 'https://kanexfire.com/blog/wp-content/uploads/wordpress-popular-posts/27-featured-75x75.jpg',
    url: '#',
  },
];

const categories = [
  'Fire Extinguisher',
  'Suppression Systems',
  'Fire Safety',
  'Industry News',
  'Product Updates',
  'Events',
];

const archives = [
  'May 2025',
  'April 2025',
  'March 2025',
  'February 2025',
  'January 2025',
];

const Blog = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row gap-8 py-8 flex-1">
        {/* Main Blog List */}
        <main className="flex-1 max-w-3xl mx-auto md:mx-0">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="bg-white rounded shadow mb-8 overflow-hidden border border-gray-100">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-red-700 mb-2 leading-tight hover:underline cursor-pointer">{post.title}</h2>
                <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                  <img src="https://kanexfire.com/blog/wp-content/themes/ailsa/assets/images/marge-img.png" alt="author" className="h-5 w-5 rounded-full" />
                  <span>Kanex Fire</span>
                  <span className="mx-1">|</span>
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>
                <a href={post.url} className="text-red-600 text-xs font-semibold underline">Read More</a>
              </div>
            </article>
          ))}
        </main>
        {/* Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0">
          {/* Search */}
          <div className="bg-white rounded shadow p-4 mb-6 border border-gray-100">
            <form className="flex">
              <input type="text" placeholder="Search..." className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none" />
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r text-sm font-semibold">Search</button>
            </form>
          </div>
          {/* Popular Posts */}
          <div className="bg-white rounded shadow p-4 mb-6 border border-gray-100">
            <h3 className="font-bold text-base text-gray-800 mb-4 border-b pb-2">Popular Posts</h3>
            <ul className="space-y-3">
              {popularPosts.map((post, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <img src={post.image} alt={post.title} className="w-12 h-12 object-cover rounded" />
                  <a href={post.url} className="text-sm text-gray-700 hover:text-red-600 font-medium leading-tight line-clamp-2">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Categories */}
          <div className="bg-white rounded shadow p-4 mb-6 border border-gray-100">
            <h3 className="font-bold text-base text-gray-800 mb-4 border-b pb-2">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm text-gray-700 hover:text-red-600">{cat}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Archives */}
          <div className="bg-white rounded shadow p-4 mb-6 border border-gray-100">
            <h3 className="font-bold text-base text-gray-800 mb-4 border-b pb-2">Archives</h3>
            <ul className="space-y-2">
              {archives.map((arch, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm text-gray-700 hover:text-red-600">{arch}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Icons */}
          <div className="bg-white rounded shadow p-4 border border-gray-100">
            <h3 className="font-bold text-base text-gray-800 mb-4 border-b pb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#"><img src="https://kanexfire.com/blog/wp-content/themes/ailsa/assets/images/twitter.png" alt="Twitter" className="h-8 w-8" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/fb-icon.png" alt="Facebook" className="h-8 w-8" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/in-icon.png" alt="LinkedIn" className="h-8 w-8" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/insta-icon.png" alt="Instagram" className="h-8 w-8" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/youtube-icon.png" alt="YouTube" className="h-8 w-8" /></a>
            </div>
          </div>
        </aside>
      </div>
      <footer className="bg-[#222] text-white pt-10 pb-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <img src="https://www.kanexfire.com/images/home/Footer_Logo.png" alt="Footer Logo" className="h-12 mb-4" />
            <div className="text-xs mb-2">Office No.502, 5th Floor, A wing, Damji Shamji Corporate Square, Ghatkopar - Andheri Link Road, Laxmi Nagar, Ghatkopar (E), Mumbai - 400075</div>
            <div className="text-xs mb-2">+91 22 2500 1288</div>
            <div className="text-xs mb-2">marketing@kanexfire.com</div>
            <div className="flex gap-2 mt-4">
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/fb-icon.png" alt="Facebook" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/in-icon.png" alt="LinkedIn" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/insta-icon.png" alt="Instagram" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/twitter-icon.png" alt="Twitter" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/youtube-icon.png" alt="YouTube" className="h-6" /></a>
            </div>
          </div>
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <div className="font-bold mb-2">PAYMENT METHODS ACCEPTED</div>
            <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/ccavenue_pay_options_1_.jpg" alt="Payment Methods" className="h-8" />
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="font-bold mb-2">QUICK LINKS</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#">Home</a>
              <a href="#">Career</a>
              <a href="#">Contact</a>
              <a href="#">Resources</a>
              <a href="#">Blog</a>
              <a href="#">About</a>
              <a href="#">Infrastructure</a>
              <a href="#">Clients</a>
              <a href="#">Testimonials</a>
              <a href="#">Return and Refund Policy</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">© {new Date().getFullYear()} Kanex Fire Solutions Limited. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Blog; 