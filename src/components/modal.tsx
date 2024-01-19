import { closeModal } from '@/redux/modal-slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Modal({ visible }: { visible: Boolean }): JSX.Element {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <div
        className={`${
          visible === true ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-150 pointer-events-none`}
      >
        <div className='absolute inset-0 bg-black opacity-40 z-10'></div>
        <div
          className={`z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] flex flex-col items-center p-4 bg-white shadow-lg rounded-lg`}
        >
          <div
            onClick={handleClose}
            className='p-4 rounded-md cursor-pointer pointer-events-auto'
          >
            X
          </div>
          Modal
        </div>
      </div>
    </>
  );
}
