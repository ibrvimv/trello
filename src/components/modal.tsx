import { useState } from 'react';

export default function Modal({ visible }: { visible: Boolean }): JSX.Element {
  return (
    <>
      {visible && (
        <div>
          <div className='absolute inset-0 bg-black opacity-40 z-10'></div>
          <div
            className={`z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] flex items-center justify-center bg-white shadow-lg rounded-lg`}
          >
            Modal
          </div>
        </div>
      )}
    </>
  );
}
