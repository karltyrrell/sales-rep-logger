import React, { useState } from 'react';

const SalesUpload = ({ token }) => {
  const [file, setFile] = useState(null);

  const submit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await fetch('/api/sales/upload', {
      method: 'POST',
      body: formData
    });
    alert('Sales uploaded');
  };

  return (
    <div>
      <h2>Upload Sales CSV</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} /><br/>
      <button onClick={submit}>Upload</button>
    </div>
  );
};

export default SalesUpload;