import React from 'react';

function AdminPanel() {
  return (
    <div className="flex h-screen">
      <div className="flex-none w-64 bg-primary text-white">
        <ul className="pt-4">
          <li className="px-4 py-2 hover:bg-emerald-500 cursor-pointer text-2xl">Artikli</li>
          <li className="px-4 py-2 hover:bg-emerald-500 cursor-pointer text-2xl">Narudžbe</li>
        </ul>
        <div className="px-4 py-2 cursor-pointer hover:bg-red-500">Log Out</div>
      </div>
      <div className="flex-grow bg-gray-200">
      </div>
    </div>
  );
}

export default AdminPanel;
