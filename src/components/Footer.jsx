import { Link } from "react-router-dom";

const ImportantLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/menu" },
  { name: "Menu", link: "/about" },
  { name: "Reservations", link: "/contact" },
  { name: "Order Online", link: "/contact" },
  { name: "Login", link: "/contact" },
];

const ContactLinks = [
  { name: "Address", content: "1234 Town Street, Chicago" },
  { name: "Phone", content: "+00 123 456 789" },
  { name: "Email", content: "little@lemon.com" },
];

const socialLinks = [
  { name: "Facebook", link: "/" },
  { name: "Instagram", link: "/" },
  { name: "Twitter", link: "/" },
];

function Footer() {
  return (
    <footer className="bg-[#EDEFEE] px-8 py-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <img src="/assets/Logo.svg" alt="Logo" className="w-32" />
          <p className="text-sm leading-relaxed">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-black">Important Links</h3>
          <ul className="flex flex-col gap-2">
            {ImportantLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="hover:text-yellow-400 text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-black">Contact</h3>
          <ul className="flex flex-col gap-2">
            {ContactLinks.map((item, index) => (
              <li key={index}>
                <h4 className="text-sm">{item.name}</h4>
                <p className="text-sm">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-black">Social Media</h3>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="hover:text-yellow-400 text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
