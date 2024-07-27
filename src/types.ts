interface CommunityToolCreatorInterface {
  name: string;
  url?: string;
}

interface CommunityToolContributorInterface {
  name: string;
  url?: string;
}

interface CommunityToolLinkInterface {
  label: string;
  url: string;
}

export interface NavEntry {
  label?: string;
  href?: string;
  isExternal?: boolean;
  submenu?: NavEntry[] | undefined;
}

export interface CommunityToolInterface {
  title: string;
  subtitle: string | undefined;
  description: string;
  tags?: string[];
  license: string;
  creators: CommunityToolCreatorInterface[];
  contributors: CommunityToolContributorInterface[];
  links: CommunityToolLinkInterface[];
}

export type CommunityToolCollection = CommunityToolInterface[];

