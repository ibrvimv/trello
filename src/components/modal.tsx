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
        className={`fixed inset-0 z-10 ${
          visible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
      >
        <div className='absolute inset-0 bg-black opacity-40'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] flex flex-col p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform'>
          <div className='flex justify-between items-center mb-4'>
            <div className='text-lg font-bold text-main'>Add new item</div>
            <div
              onClick={handleClose}
              className='px-4 py-2 rounded-md cursor-pointer w-fit bg-red-200 hover:bg-red-400 transition-colors duration-150'
            >
              X
            </div>
          </div>
          <div className=' flex flex-col gap-4  mb-4'>
            <input
              type='text'
              placeholder='Title'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-main transition-all duration-300'
            />
            <input
              type='text'
              placeholder='Subtitle'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-main transition-all duration-300'
            />
            <textarea
              rows={5}
              placeholder='Text'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-main transition-all duration-300 resize-none'
            />
          </div>
          <div className='bg-green-200 flex items-center px-4 py-2 justify-center hover:bg-green-400 transition-colors duration-150 rounded-lg'>
            Add Item
          </div>
        </div>
      </div>
    </>
  );
}
