'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import SocialLinks from './social-links';

const Footer = () => {
  return (
    <footer
      style={{
        background: `linear-gradient(rgba(82, 66, 61, 0.95) 100%, rgba(82,66,61,0.95)) , url(/footer-bg.jpg) no-repeat center center/cover`,
      }}
      className="mt-32 bg-center bg-cover bg-opacity-20">
      <div className="container flex flex-col gap-10 py-10">
        <div className="flex flex-col items-center gap-7">
          <Logo className="text-white" />

          <nav className="flex flex-col items-center gap-6 text-sm xs:flex-row">
            <Link
              href="/"
              className={
                'font-heading text-muted tracking-wider border-b-2 border-b-transparent transition-colors hover:text-accent'
              }>
              INÍCIO
            </Link>

            <Link
              href="/#about"
              scroll={true}
              className={
                'font-heading text-muted tracking-wider border-b-2 border-b-transparent transition-colors hover:text-accent'
              }>
              SOBRE
            </Link>

            <Link
              href="/projetos"
              className={
                'font-heading text-muted tracking-wider border-b-2 border-b-transparent transition-colors hover:text-accent'
              }>
              PROJETOS
            </Link>

            <Link
              href="/#imprensa"
              scroll={true}
              className={
                'font-heading text-muted tracking-wider border-b-2 border-b-transparent transition-colors hover:text-accent'
              }>
              IMPRENSA
            </Link>

            <Link
              href="/#contact"
              scroll={true}
              className={
                'font-heading text-muted tracking-wider border-b-2 border-b-transparent transition-colors hover:text-accent'
              }>
              CONTATO
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 py-6 border-t sm:flex-row border-muted/40">
          <p className="text-sm text-center sm:text-left text-muted">
            © 2024 M2 Arquitetura. Todos os direitos reservados.
          </p>

          <SocialLinks id="contact" className={'flex-row'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
