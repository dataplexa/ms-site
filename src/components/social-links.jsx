import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const SocialLinks = ({ className, ...props }) => {
  return (
    <ul className={cn("flex flex-col gap-5 ", className)} {...props}>
      <li className="transition-colors text-muted hover:text-accent">
        <a target="_blank" href="https://www.facebook.com/share/4HqMQJGnkxHbwLG1/?mibextid=qi2Omg">
          <Icons.facebook className="size-8" />
          <span className="sr-only">Facebook</span>
        </a>
      </li>

      <li className="transition-colors text-muted hover:text-accent animate-">
        <a href="https://www.instagram.com/mao2.arquitetura" target="_blank">
          <Icons.instagram className="size-8" />
          <span className="sr-only">Instagram</span>
        </a>
      </li>

      <li className="transition-colors text-muted hover:text-accent">
        <a target="_blank" href="https://br.pinterest.com/mao2arquitetura/">
          <Icons.pinterest className="size-8" />
          <span className="sr-only">Pinterest</span>
        </a>
      </li>

      <li className="transition-colors text-muted hover:text-accent">
        <a target="_blank" href="https://www.linkedin.com/company/m2q-arquitetura/">
          <Icons.linkedin className="size-8" />
          <span className="sr-only">Linkedin</span>
        </a>
      </li>


      <li className="transition-colors text-muted hover:text-accent">
        <a target="_blank" href="https://wa.link/f7r5hg">
          <Icons.whatsapp className="size-8" />
          <span className="sr-only">Whatsapp</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
