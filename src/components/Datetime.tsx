import { LOCALE } from '@config';

export interface Props {
  datetime: string | Date;
  size?: 'sm' | 'lg';
  className?: string;
  minutesRead?: string;
}

export default function Datetime({
  datetime,
  size = 'sm',
  className,
  minutesRead,
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
        <FormattedDatetime datetime={datetime} minutesRead={minutesRead} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({
  datetime,
  minutesRead,
}: {
  datetime: string | Date;
  minutesRead?: string;
}) => {
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
      {minutesRead && (
        <>
          <span aria-hidden="true"> | </span>
          <span className="sr-only">&nbsp;at&nbsp;</span>
          {minutesRead}
        </>
      )}
      {/* <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      {time} */}
    </>
  );
};
