import React from 'react';

export default function MyForm() {
  return (
    <form action="/newmessage" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
        <input name="message" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
