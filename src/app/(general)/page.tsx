import Menu from '@/components/menu';

export default function Home(): JSX.Element {
  return (
    <main className='h-full'>
      <div className='_main-container flex gap-4 h-full'>
        <Menu />
        <div className='_content-container h-full'>
          <div className='flex gap-4  h-full'>
            <div className='_column p-4 rounded-lg flex flex-col gap-4 bg-white shadow-md max-w-80'>
              <div className='_card bg-red-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
              <div className='_card bg-cyan-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
              <div className='_card bg-green-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
            </div>
            <div className='_column p-4 rounded-lg flex flex-col gap-4 bg-white shadow-md max-w-80'>
              <div className='_card bg-red-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
              <div className='_card bg-cyan-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
              <div className='_card bg-green-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
            </div>
            <div className='_column p-4 rounded-lg flex flex-col gap-4 bg-white shadow-md max-w-80'>
              <div className='_card bg-red-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
              <div className='_card bg-cyan-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
              <div className='_card bg-green-200 p-4 rounded-lg'>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  adipisci odio quaerat at iure harum minima cumque est autem,
                  officiis sint possimus quasi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
