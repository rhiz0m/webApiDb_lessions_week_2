// <></> this is called a fragment
"use client"


interface MyButtonProps {
  name: string,
  someNumber: number,
  onClick: () => void
}

const MyButton = ({ name, someNumber, onClick }: MyButtonProps) => {
  return (
    <>
      <div className="p-4 bg-blue-500 hover:cursor-pointer" onClick={onClick}>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-lg font-bold">{someNumber}</p>
      </div>
    </>
  );
};

export default MyButton;
