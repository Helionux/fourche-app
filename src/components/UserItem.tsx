'user client'

const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-4">
          <div className="avatar text-white font-[700] flex items-center justify-center rounded-full min-h-12 min-w-12 bg-emerald-500 ">
              <p>Hh</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Heliodore Helionux</p>
        <p className="text-[12px] text-neutral-500">heliodorehelionux.hh@gmail.com</p>
      </div>
    </div>
  )
}

export default UserItem
