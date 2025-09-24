
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-background/80 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <Link 
            to="/privacy-policy" 
            className="text-muted-foreground hover:text-primary text-sm transition-colors"
          >
            Privacy Policy
          </Link>
          <p className="text-center text-muted-foreground text-sm">
            Copyright © {currentYear} Percian Borja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
