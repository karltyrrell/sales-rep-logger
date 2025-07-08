import React, { useState, useEffect } from 'react';

const InteractionForm = ({ token }) => {
  const [agencies, setAgencies] = useState([]);
  const [agencyId, setAgencyId] = useState('');
  const [type, setType] = useState('call');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetch('/api/agencies')
      .then(res => res.json())
      .then(data => setAgencies(data.agencies || []));
  }, []);

  const submit = async () => {
    await fetch('/api/interactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ agency_id: agencyId, type, notes })
    });
    alert('Interaction logged');
  };

  return (
    <div>
      <h2>Log Interaction</h2>
      <select value={agencyId} onChange={e => setAgencyId(e.target.value)}>
        <option value="">Select Agency</option>
        {agencies.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
      </select><br/>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="call">Call</option>
        <option value="visit">Visit</option>
        <option value="email">Email</option>
      </select><br/>
      <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Notes" /><br/>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default InteractionForm;