import { addItem, closeModal, updateItem } from '@/redux/data-slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnType, ItemType, ModalType } from './main-content';

type CloseChildFunction = () => void;

export default function ModalEditItem({
  closeEditModal,
  visible,
  props,
}: {
  closeEditModal: CloseChildFunction;
  props: ItemType;
  visible: boolean;
}): JSX.Element {
  const [formData, setFormData] = useState<ItemType>({
    ...props,
  });

  const dispatch = useDispatch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleUpdateItem = () => {
    const newItem = {
      id: props.id,
      title: formData.title,
      subtitle: formData.subtitle,
      text: formData.text,
      bgColor: 'bg-blue-200',
    };

    dispatch(updateItem({ newItem }));
    closeEditModal();
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
            <div className='text-lg font-bold text-main'>Update item</div>
            <div
              onClick={closeEditModal}
              className='px-4 py-2 rounded-md cursor-pointer w-fit bg-red-200 hover:bg-red-400 transition-colors duration-150'
            >
              X
            </div>
          </div>
          <div className=' flex flex-col gap-4  mb-4'>
            <input
              type='text'
              placeholder='Title'
              name='title'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-main transition-all duration-300'
              value={formData.title}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              type='text'
              placeholder='Subtitle'
              name='subtitle'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-main transition-all duration-300'
              value={formData.subtitle}
              onChange={(e) => handleInputChange(e)}
            />
            <textarea
              rows={5}
              placeholder='Text'
              name='text'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-main transition-all duration-300 resize-none'
              value={formData.text}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div
            onClick={handleUpdateItem}
            className='bg-green-200 flex items-center px-4 py-2 justify-center hover:bg-green-400 transition-colors duration-150 rounded-lg'
          >
            Update Item
          </div>
        </div>
      </div>
    </>
  );
}
