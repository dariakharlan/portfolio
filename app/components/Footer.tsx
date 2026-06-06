export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-margin-mobile md:px-margin-desktop mb-20 md:mb-0">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <p className="text-headline-md font-bold tracking-tighter text-primary mb-2">
            DARIA.KHARLAN
          </p>
          <p className="text-body-md text-on-surface-variant opacity-70 mb-4">
            Creative Marketing Manager | Social Media Marketing
          </p>
        </div>

        <div className="flex gap-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Dribbble
          </a>
        </div>

        <p className="text-label-sm text-on-surface-variant opacity-50">
          © 2024 Daria Kharlan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
