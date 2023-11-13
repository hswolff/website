import { slugifyStr } from '@utils/slugify';
import Datetime from './Datetime';
import type { BlogFrontmatter } from '@content/_schemas';

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, date, category } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: 'text-lg font-medium decoration-dashed hover:underline',
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime datetime={date} category={category} />
    </li>
  );
}
