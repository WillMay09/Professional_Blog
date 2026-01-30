
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";



export default function Footer() {
  return (
    <footer className="bg-app-dark border-t border-dark px-6 py-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/*Company info*/}
          <div>
            {/*Logo */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary-dark tracking-wider">William Mayhood</span>
            </div>
            <p className="text-secondary-dark mb-6">
              Day by day progress in coding and development.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-muted-dark" />
              </a>
            </div>
          </div>
          
          {/*Links*/}
          <div>
            <ul className="flex flex-row gap-8">
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  Personal Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/*Newsletter*/}
          <div>
            <p className="text-secondary-dark text-sm mb-3">
              Subscribe to my Newsletter
            </p>
            <div>
              <button
                className="flex-1 bg-background text-foreground px-8 h-12 rounded-lg border border-accent font-medium glow-accent hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
    </footer>
  );
}
