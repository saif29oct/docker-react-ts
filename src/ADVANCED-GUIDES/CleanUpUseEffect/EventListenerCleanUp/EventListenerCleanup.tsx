import {useRef, useEffect, HtmlHTMLAttributes} from 'react';

const EventListenerCleanUP = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = () => {
      console.log('Button clicked');
    };

    const element = ref.current;
    element?.removeEventListener('click', handleClick);

    // remove the event listener when component unmounts
    return () => {
        element?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <button ref={ref}>Click</button>
    </div>
  );
};

export default EventListenerCleanUP;


