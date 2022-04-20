import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-w-0 break-words my-0 mx-0 sm:mx-4 shadow-lg rounded'>
      <div className='p-4 flex-auto'>{children}</div>
    </div>
  );
};

export default Card;
