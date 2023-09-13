import { LOCALE } from '@config';

export interface Props {
  datetime: string | Date;
  size?: 'sm' | 'lg';
  className?: string;
  minutesRead?: string;
  category: string;
}

export default function Datetime({
  datetime,
  size = 'sm',
  className,
  minutesRead,
  category,
}: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          size === 'sm' ? 'scale-90' : 'scale-100'
        } inline-block h-6 w-6 fill-skin-base`}
        aria-hidden="true"
      >
        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
      </svg>
      <span className="sr-only">Posted on:</span>
      <span className={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
      {category && (
        <>
          <span aria-hidden="true"> | </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className={`${
              size === 'sm' ? 'scale-90' : 'scale-100'
            } inline-block h-6 w-6 fill-skin-base`}
            aria-hidden="true"
          >
            <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
          </svg>
          <a
            href={`/blog/category/${category}`}
            className={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}
          >
            {category}
          </a>
        </>
      )}
      {minutesRead && (
        <>
          <span aria-hidden="true"> | </span>
          <span className={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
            {minutesRead}
          </span>
        </>
      )}
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // const time = myDatetime.toLocaleTimeString(LOCALE, {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });

  return (
    <>
      {date}
      {/* <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      {time} */}
    </>
  );
};
