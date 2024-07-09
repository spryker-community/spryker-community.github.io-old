interface CommunityToolCreatorInterface {
  name: string;
  url: string | undefined;
}

interface CommunityToolContributorInterface {
  name: string;
  url: string | undefined;
}

interface CommunityToolLinkInterface {
  label: string;
  url: string;
}

interface CommunityToolInterface {
  title: string;
  subtitle: string | undefined;
  description: string;
  tags: string[] | undefined;
  license: string | undefined;
  creators: CommunityToolCreatorInterface[];
  contributors: CommunityToolContributorInterface[];
  links: CommunityToolLinkInterface[];
}

export type CommunityToolCollection = CommunityToolInterface[];
