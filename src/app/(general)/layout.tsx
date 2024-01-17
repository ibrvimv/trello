export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className='flex  w-full h-screen my-0 mx-auto p-4' lang='ru'>
      <div>{children}</div>
    </div>
  );
}
