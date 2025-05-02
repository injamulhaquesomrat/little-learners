export type FooterLink = {
  id: string;
  label: string;
  url: string;
};

export type FooterNavItem = {
  id: string;
  heading: string;
  links: FooterLink[];
};
