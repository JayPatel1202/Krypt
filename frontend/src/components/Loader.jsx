import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center mt-2 py-3">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500" />
    </div>
  );
}

export default Loader;
